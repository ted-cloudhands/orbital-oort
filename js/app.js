import { gameData } from './chapters.js';
import { ITEMS } from './items.js';

// State
let currentRound = null;
let totalScore = 0;
let currentRoundScore = 0; // Track score just for this round
let currentLevel = 0; // The difficulty level (0-10)
let revealedAnswers = []; // IDs of answers "completed"
let isListening = false;
let recognition = null;
let synthesis = window.speechSynthesis;
let voices = [];

// DOM Elements
const chapterNav = document.getElementById('chapter-nav');
const scoreDisplays = document.querySelectorAll('.total-score-display');
const gameBoard = document.getElementById('game-board');
const questionText = document.getElementById('question-text');
const questionSub = document.getElementById('question-sub');
const micBtn = document.getElementById('mic-btn');
const statusText = document.getElementById('status-text');
const liveSubtitle = document.getElementById('live-subtitle');
const avatarMouth = document.getElementById('mouth');
const avatarBubble = document.getElementById('avatar-bubble');
const avatarContainer = document.querySelector('.avatar-container');
const langSwitch = document.getElementById('lang-switch');
const langLabel = document.getElementById('lang-label');
const manualInput = document.getElementById('manual-input');

// Difficulty DOM
const diffBtns = document.querySelectorAll('.diff-btn');
const diffDesc = document.getElementById('difficulty-desc');
const levelDisplay = document.getElementById('current-level-display');

const DIFFICULTY_DESCS = {
    0: "Total Novice - Simple greetings",
    1: "Novice - Basic Dim Sum & Weather",
    2: "Beginner - Shopping & Prices",
    3: "Intermediate - Taxi & Directions",
    4: "Conversational - Romance & Feelings",
    5: "Fluent - Internet Slang",
    6: "Advanced - Complaints & Life",
    7: "Professional - Office & Work",
    8: "Expert - Emergency Situations",
    9: "Master - Proverbs & Idioms",
    10: "Grandmaster - Deep Philosophy"
};

// Initialize
// Initialize (moved to bottom)
// ... logic continues ...

function loadVoices() {
    voices = synthesis.getVoices();
}

// Sidebar
function renderSidebar() {
    chapterNav.innerHTML = '';
    gameData.forEach((round, index) => {
        const btn = document.createElement('button');
        btn.className = 'topic-btn';
        btn.textContent = `${index + 1}. ${round.title}`;
        btn.onclick = () => startRound(round.id);
        chapterNav.appendChild(btn);
    });
}

// Game Control
let playedRounds = [];

function startRound(id, isGameStart = false) {
    currentRound = gameData.find(r => r.id === id);
    if (!playedRounds.includes(id)) playedRounds.push(id);

    revealedAnswers = [];
    currentRoundScore = 0; // Reset for new round

    // UI Updates
    questionText.textContent = currentRound.question.canto;
    questionText.style.cursor = 'pointer';
    questionText.onclick = () => speak(currentRound.question.canto);
    questionSub.textContent = `${currentRound.question.pinyin} - ${currentRound.question.english}`;

    // Speak the question, then start the first answer!
    // Intro Phrase first (Custom if first round of session)
    const intro = isGameStart ?
        "Welcome back to Dim Sum Mom! Let's see your skills." :
        getIntroPhrase();

    speak(intro, false, () => {
        // Then speak the actual question (Canto)
        speak(currentRound.question.canto, true, () => {
            // Then activate the board (Faster: 500 -> 200)
            setTimeout(activateNextAnswer, 300);
        });
    });

    renderBoard();
    updateNextButton();
}

const INTRO_PHRASES = [
    "Alright, pay attention!", "Next question, don't mess it up.",
    "This one is easy... for me.", "Can you handle this?",
    "Let's see what you've got.", "Focus! No sleeping.",
    "Try not to embarrass your family.", "Listen carefully.",
    "Ready for the next challenge?", "Don't disappoint me.",
    "Here comes a tricky one.", "Moving on!",
    "Lets go! Baa-da-bop-bop-bop!", "Next round!"
];

function getIntroPhrase() {
    return INTRO_PHRASES[Math.floor(Math.random() * INTRO_PHRASES.length)];
}

function nextRandomRound() {
    // Filter rounds by CURRENT DIFFICULTY LEVEL
    // Also include rounds from lower levels that haven't been played? 
    // Or just strictly current level for better progression.
    // Let's go with Current Level first, if empty, look lower.

    let available = gameData.filter(r =>
        r.difficulty === currentLevel &&
        !playedRounds.includes(r.id)
    );

    if (available.length === 0) {
        // Look at lower levels if current level is cleared
        available = gameData.filter(r =>
            r.difficulty < currentLevel &&
            !playedRounds.includes(r.id)
        );
    }

    if (available.length === 0) {
        // Look at ANY unplayed rounds
        available = gameData.filter(r => !playedRounds.includes(r.id));
    }

    if (available.length === 0) {
        // RESET if everything played
        playedRounds = [];
        available = gameData.filter(r => r.difficulty === currentLevel);
    }

    const random = available[Math.floor(Math.random() * available.length)];
    startRound(random.id);
}

// History & Score
function addToHistory(text, score, analysis) {
    totalScore += score;
    scoreDisplays.forEach(el => {
        // Simple count-up animation
        const start = parseInt(el.textContent) || 0;
        animateValue(el, start, totalScore, 1000);
    });

    // SAVE PROGRESS!
    saveProgress();

    // No longer adding list items to history window (removed)
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function updateNextButton() {
    // Button removed per design update
    // Logic kept empty to prevent errors if called elsewhere

    if (totalScore >= 500) {
        showWinScreen();
    }
}

function showWinScreen() {
    // Check if distinct win screen exists
    if (document.getElementById('win-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'win-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.85)';
    overlay.style.zIndex = '999';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.backdropFilter = 'blur(10px)';

    overlay.innerHTML = `
        <h1 style="font-size: 4rem; color: #fbbf24; margin-bottom: 2rem;">YOU ARE FLUENT!</h1>
        <p style="font-size: 1.5rem; color: white; margin-bottom: 3rem;">Score: ${totalScore}</p>
        <button id="restart-btn" style="padding: 1rem 3rem; font-size: 1.5rem; border-radius: 50px; border: none; background: #fbbf24; cursor: pointer; font-weight: bold;">Play Again</button>
    `;

    document.body.appendChild(overlay);

    document.getElementById('restart-btn').onclick = () => {
        totalScore = 0;
        scoreDisplays.forEach(el => el.textContent = 0);
        playedRounds = []; // soft reset
        overlay.remove();
        nextRandomRound();
    };

    speak("Congratulations! You are officially fluent.");
}

function renderBoard() {
    gameBoard.innerHTML = '';

    // SHUFFLE answers for display (Random Layout)
    const shuffledAnswers = [...currentRound.answers].sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach((ans, index) => {
        const slot = document.createElement('div');
        // ... (rest is same)
        slot.className = 'card-slot';

        // Inner Card - NOW VISIBLE by default, but "inactive"
        const card = document.createElement('div');
        card.className = 'answer-card visible-answer';
        card.id = `ans-${ans.id}`;
        card.setAttribute('data-index', index + 1);

        // Click to practice
        card.style.cursor = 'pointer';
        card.onclick = () => activateCard(ans);

        if (revealedAnswers.includes(ans.id)) {
            card.classList.add('completed');
        }

        // Content
        const textGroup = document.createElement('div');
        textGroup.className = 'text-group';
        textGroup.innerHTML = `
            <div class="answer-text">${ans.english}</div>
            <div class="answer-sub">${ans.canto} <span style="font-size:0.8em; opacity:0.7">(${ans.pinyin})</span></div>
        `;

        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'answer-score';
        // Hide score initially (or show placement holder)
        scoreDiv.textContent = "--";
        scoreDiv.id = `score-${ans.id}`; // Add ID for easier update

        card.appendChild(textGroup);
        card.appendChild(scoreDiv);

        slot.appendChild(card);
        gameBoard.appendChild(slot);
    });
}

// Logic
let practiceTarget = null;
let silenceTimer = null;
let transcriptBuffer = "";
let ttsActive = false;

function activateNextAnswer() {
    // Find the NEXT available card in the DOM sequence (visual order)
    const allCards = Array.from(document.querySelectorAll('.answer-card'));
    const nextCardEl = allCards.find(el =>
        !el.classList.contains('completed') &&
        !el.classList.contains('active-practice')
    );

    if (nextCardEl) {
        const id = nextCardEl.id.replace('ans-', '');
        const ans = currentRound.answers.find(a => a.id == id);
        if (ans) activateCard(ans);
    } else {
        // Round Complete
        // Round Complete
        // Auto-advance or wait for sidebar selection?
        // For now, we removed the button, so maybe just say "Great job."
        // For now, we removed the button, so maybe just say "Great job."
        // speak("Round complete! Great job everyone. Check the menu for more.");
        showRoundSummary();
    }
}

function activateCard(ans) {
    if (revealedAnswers.includes(ans.id)) return;
    // ...
    document.querySelectorAll('.answer-card').forEach(el => el.classList.remove('active-practice'));
    const card = document.getElementById(`ans-${ans.id}`);
    card.classList.add('active-practice');

    practiceTarget = ans;

    // Speak it
    speak(ans.canto, false, () => {
        // ONLY start listening when the prompt is done speaking!
        statusText.textContent = "Your turn...";
        setTimeout(startListening, 200);
    });

    statusText.textContent = "Listen...";
}

function showRoundSummary() {
    const modal = document.getElementById('round-summary-modal');
    const scoreDisplay = document.getElementById('round-score-display');
    const nextBtn = document.getElementById('next-round-btn');

    // Update score
    scoreDisplay.textContent = currentRoundScore;

    // Show modal
    modal.classList.remove('hidden');

    // Speak
    speak(`Round complete! You earned ${currentRoundScore} points. Ready for the next course?`);

    // Handle click (ensure one listener)
    nextBtn.onclick = () => {
        modal.classList.add('hidden');
        nextRandomRound();
    };
}

const FEEDBACK_PHRASES = {
    perfect: [
        "Wa! Better than my own son!", "So clear! You sounded local.",
        "Perfect tones! Have an extra dumpling.", "Impressive! You make me proud.",
        "Your Cantonese is delicious!", "100 marks! I'm telling the neighbors.",
        "Finally, someone who listens!", "Top quality! Like fresh Har Gow.",
        "Expert level! You are ready for Yam Cha.", "Aiya, you are too good!",
        "Music to my ears!", "Did you grow up in Hong Kong?"
    ],
    good: [
        "Very good! Keep it up.", "Not bad, distinct and clear.",
        "I understood you perfectly.", "Solid effort! Almost native.",
        "Good energy! Tones are getting there.", "Acceptable! You can order lunch.",
        "Nice work, darling.", "You are learning fast!",
        "Respectable! I like it.", "Pretty smooth!",
        "Passable! Grandmother would smile.", "Strong effort!"
    ],
    okay: [
        "Getting there! Watch your tones.", "Okay, I understand... mostly.",
        "A little bit stiff, but acceptable.", "Try a bit more feeling next time.",
        "Not bad, but practice more.", "Distinct enough.",
        "Careful with the pitch, but good try.", "I give you a B for effort.",
        "You are trying, that is important.", "Almost there!"
    ],
    poor: [
        "Aiya, try again! Don't be shy.", "Open your mouth wider!",
        "Tricky one? Listen to me again.", "Not quite! You can do better.",
        "Don't worry, Cantonese is hard!", "Speak up, darling!",
        "Almost! Try focusing on the tone.", "A little bit off, try again!",
        "Keep practicing! I believe in you.", "Listen carefully and copy me.",
        "Don't give up! Eat a bun and try again."
    ]
};

function getFeedback(score) {
    let category = 'poor';
    if (score >= 90) category = 'perfect';
    else if (score >= 70) category = 'good';
    else if (score >= 40) category = 'okay';

    const phrases = FEEDBACK_PHRASES[category];
    return phrases[Math.floor(Math.random() * phrases.length)];
}

function handleInput(text) {
    if (!practiceTarget) return;

    // Filter noise/short sounds
    if (text.trim().length < 2) return;

    const lowerText = text.toLowerCase();

    // --- GRANULAR SCORING ENGINE ---
    let rawScore = 0;

    const targetPinyin = practiceTarget.pinyin.toLowerCase().replace(/[^\w\s]/g, '').split(' ');
    const targetCanto = practiceTarget.canto;
    const targetEnglish = practiceTarget.english.toLowerCase();

    // 1. English Mode Handling
    if (recognition.lang === 'en-US') {
        // Fuzzy English Match
        if (lowerText.includes(targetEnglish) || targetEnglish.includes(lowerText)) {
            // Base high score + random variance (95-100)
            rawScore = 95 + Math.floor(Math.random() * 6);
        } else {
            // Partial word matches
            const targetWords = targetEnglish.split(' ');
            let wordHits = 0;
            targetWords.forEach(w => {
                if (w.length > 2 && lowerText.includes(w)) wordHits++;
            });
            if (wordHits > 0) {
                rawScore = (wordHits / targetWords.length) * 80;
                // Add jitter
                rawScore += Math.floor(Math.random() * 15);
            }
        }
    }
    // 2. Cantonese Mode Handling
    else {
        // A. Pinyin Substring Analysis
        let pinyinMatches = 0;
        targetPinyin.forEach(p => {
            // Check for exact pinyin syllable match
            if (p.length > 1 && lowerText.includes(p)) pinyinMatches++;
        });

        // B. Character Analysis (if input contains Canto chars)
        let charMatches = 0;
        let hasCantoChars = /[\u4e00-\u9fa5]/.test(text);
        if (hasCantoChars) {
            for (let char of targetCanto) {
                if (text.includes(char)) charMatches++;
            }
        }

        // C. Calculate weighted score
        const totalSegments = targetPinyin.length + (hasCantoChars ? targetCanto.length : 0);
        const actualHits = pinyinMatches + charMatches;

        if (totalSegments > 0) {
            const accuracy = actualHits / totalSegments;
            rawScore = accuracy * 90; // Base up to 90

            // Boost for sequence/length similarity
            const lenDiff = Math.abs(text.length - targetPinyin.join('').length);
            if (lenDiff < 5) rawScore += 5;
        }

        // Fallback: English spoken in Canto mode?
        if (lowerText.includes(targetEnglish)) rawScore += 45;

        // Random jitter (1-9 points) to make it look organic "AI Grading"
        rawScore += Math.floor(Math.random() * 9) + 1;
    }

    // Clamp
    if (rawScore > 100) rawScore = 100;
    if (rawScore < 0) rawScore = 0;

    const score = Math.floor(rawScore);

    // Get Varied Feedback
    const feedback = getFeedback(score);

    // LOG TO HISTORY - REMOVED

    // Speak feedback, then trigger success
    const target = practiceTarget;
    speak(`${score} points. ${feedback}`, false, () => {
        success(target, score, text); // Pass text!
    });

    practiceTarget = null;
}

function success(answer, grade, spokenText = "") {
    revealedAnswers.push(answer.id);
    const card = document.getElementById(`ans-${answer.id}`);
    if (card) {
        card.classList.remove('active-practice');
        card.classList.add('completed');

        // UPDATE THE CARD SCORE TO SHOW THE GRADE
        const scoreEl = document.getElementById(`score-${answer.id}`);
        if (scoreEl) scoreEl.textContent = grade;

        // SHOW SPOKEN TEXT
        if (spokenText) {
            const textGroup = card.querySelector('.text-group');
            if (textGroup) {
                const spokenEl = document.createElement('div');
                spokenEl.className = 'user-spoken-text';
                spokenEl.textContent = `"${spokenText}"`;
                textGroup.appendChild(spokenEl);
            }
        }
    }

    // Use grade directly as points (1-100 score corresponds to quality)
    const earnedPoints = grade; // Direct mapping per user request

    totalScore += earnedPoints;
    currentRoundScore += earnedPoints;

    // Bonus for perfect score
    if (grade >= 95) totalScore += 10;

    // Animate the score update
    // Grab current value safely (from first display)
    const currentVal = parseInt(scoreDisplays[0]?.innerText.replace(/[^0-9]/g, '') || '0');
    animateScore(scoreDisplays, currentVal, totalScore, 1000);

    // CHECK FOR LEVEL UP!
    // Level up every 400 points? (Total 4000 for level 10)
    const newLevel = Math.min(10, Math.floor(totalScore / 400));
    if (newLevel > currentLevel) {
        currentLevel = newLevel;
        updateLevelUI();
        speak(`Level Up! You are now level ${currentLevel}. ${DIFFICULTY_DESCS[currentLevel]}`);
    }

    playDing();

    // Auto Advance after a delay to celebrate
    setTimeout(() => {
        activateNextAnswer();
    }, 2000); // 2 second pause
}

function animateScore(elements, start, end, duration) {
    if (!elements || elements.length === 0) return;
    let startTime = null;
    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // EaseOutCubic
        const ease = 1 - Math.pow(1 - progress, 3);

        const current = Math.floor(start + (end - start) * ease);

        elements.forEach(el => el.textContent = current);

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            elements.forEach(el => el.textContent = end);
        }
    };
    window.requestAnimationFrame(step);
}

// History Logic Removed (was here)

function fail(grade, feedback) {
    statusText.textContent = `${grade}% - ${feedback}`;
    statusText.style.color = 'orange';
    setTimeout(() => {
        statusText.style.color = 'var(--text-muted)';
        statusText.textContent = "Listening...";
    }, 2000);
}

function updateLangUI() {
    // restart recog to apply new lang
    if (recognition) {
        const wasListening = isListening;
        if (isListening) stopListening();

        recognition.lang = langSwitch.checked ? 'zh-HK' : 'en-US';
        langLabel.textContent = langSwitch.checked ? 'Cantonese Mode' : 'English Mode';

        if (wasListening) {
            // slight delay to ensure stop finished
            setTimeout(startListening, 500);
        }
    }
}

// Speech Recon
function setupSpeechRecognition() {
    // Cross-Browser Support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = false; // ONE SHOT ONLY - Key for "Context Aware"
        recognition.interimResults = true;

        // Initialize based on switch
        const isCanto = langSwitch ? langSwitch.checked : false;
        recognition.lang = isCanto ? 'zh-HK' : 'en-US';

        recognition.onstart = () => {
            isListening = true;
            const btn = document.getElementById('mic-btn');
            if (btn) btn.classList.add('listening');

            const langName = recognition.lang === 'en-US' ? 'English' : 'Cantonese';
            statusText.textContent = `Listening (${langName})...`;
            statusText.style.color = '#22d3ee'; // Cyan text
            statusText.style.fontWeight = 'bold';
        };

        recognition.onresult = (event) => {
            // Safety check: Ignore ALL input while Avatar is speaking
            if (ttsActive) return;

            let interim = '';
            let newFinal = '';

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    newFinal += event.results[i][0].transcript;
                } else {
                    interim += event.results[i][0].transcript;
                }
            }

            // Visual feedback
            liveSubtitle.textContent = newFinal + interim;

            // For one-shot, we usually just take the final result directly
            if (newFinal) {
                statusText.textContent = "Processing...";
                handleInput(newFinal);
            }
        };

        recognition.onerror = (e) => {
            console.log("Mic Error", e);
            isListening = false; // Reset state
            const btn = document.getElementById('mic-btn');
            if (btn) btn.classList.remove('listening');

            if (e.error === 'no-speech') {
                statusText.textContent = "Didn't hear anything. Tap to try again.";
                statusText.style.color = 'var(--text-muted)';
            } else {
                statusText.textContent = "Mic Error: " + e.error;
            }
        };

        recognition.onend = () => {
            // Logic: If we are SUPPOSED to be listening (isListening=true) and it stopped 
            // without a result (like silence timeout), we might want to prompt user.
            // But since continuous=false, it WILL stop after one sentence.

            isListening = false;
            const btn = document.getElementById('mic-btn');
            if (btn) btn.classList.remove('listening');

            // If we didn't just process an answer (e.g. timeout), show idle
            if (!ttsActive) {
                // If we finished successfully, handleInput would have called TTS
                // If we are here, it means we stopped listening.
                // We leave the status text as is (likely "Processing" or error state) 
                // OR reset to idle if nothing happened.
                if (statusText.textContent.includes("Listening")) {
                    statusText.textContent = "Tap Mic to Answer";
                    statusText.style.color = 'var(--text-muted)';
                    statusText.style.fontWeight = 'normal';
                }
            }
        };

    } else {
        alert("Browser does not support Speech API.");
        statusText.textContent = "Not Supported";
    }
}

function toggleListening() {
    if (isListening) {
        stopListening();
    } else {
        startListening();
    }
}

// ... (previous code)

function startListening() {
    if (recognition && !isListening) {
        try {
            recognition.start();
            playBong(600, 0.1); // High pitch for ON
        } catch (e) { }
    }
}

function stopListening() {
    if (recognition) {
        recognition.stop();
        isListening = false;
        playBong(400, 0.1); // Low pitch for OFF
    }
}



// Music System
const MusicPlayer = {
    ctx: null,
    isPlaying: false,
    interval: null,
    toggleBtn: null,
    NoteFreqs: {
        'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'G4': 392.00, 'A4': 440.00,
        'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'G5': 783.99, 'A5': 880.00
    },
    melody: ['C4', 'E4', 'G4', 'A4', 'G4', 'E4', 'D4', 'C4', 'D4', 'E4', 'C4', null],

    init() {
        this.toggleBtn = document.getElementById('music-toggle');
        if (this.toggleBtn) {
            this.toggleBtn.onclick = () => this.toggle();
        }
    },

    toggle() {
        if (this.isPlaying) {
            this.stop();
        } else {
            this.start();
        }
    },

    start() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
        if (this.ctx.state === 'suspended') this.ctx.resume();

        this.isPlaying = true;
        if (this.toggleBtn) {
            this.toggleBtn.classList.add('playing');
            this.toggleBtn.innerHTML = '🎵 ON';
        }

        let noteIndex = 0;
        const noteDuration = 0.4; // seconds

        this.interval = setInterval(() => {
            if (!this.isPlaying) return;
            const note = this.melody[noteIndex];
            if (note) this.playNote(this.NoteFreqs[note], noteDuration);
            noteIndex = (noteIndex + 1) % this.melody.length;
        }, noteDuration * 1000);
    },

    stop() {
        this.isPlaying = false;
        clearInterval(this.interval);
        if (this.toggleBtn) {
            this.toggleBtn.classList.remove('playing');
            this.toggleBtn.innerHTML = '🎵 OFF';
        }
    },

    playNote(freq, duration) {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.frequency.value = freq;
        osc.type = 'sine'; // Soft sine wave

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        // Envelope
        gain.gain.setValueAtTime(0, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.05, this.ctx.currentTime + 0.05); // Attack (Soft volume 0.05)
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration); // Release

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }
};

function playBong(freq = 500, duration = 0.5) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.connect(gain);
            gain.connect(ctx.destination);

            // "Bong" sound synthesis
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(freq * 0.5, ctx.currentTime + duration);

            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

            osc.start();
            osc.stop(ctx.currentTime + duration);
        }
    } catch (e) {
        console.error("Audio Context Error", e);
    }
}

// Avatar & TTS
function speak(text, showBubble = false, onComplete = null) {
    if (!synthesis) return;

    // 1. Mark TTS as active and STOP listening immediately if it was on
    ttsActive = true;
    if (isListening) stopListening();

    // VISUAL UPDATE
    statusText.textContent = "Bot Speaking...";
    statusText.style.color = 'var(--text-muted)';

    // Chrome Fix: Ensure engine is ready/resumed
    if (synthesis.paused) synthesis.resume();

    // Only cancel if clearly needed, or if we are interrupting
    if (synthesis.speaking) synthesis.cancel();

    // Reload voices if empty (common Chrome issue on first load)
    if (voices.length === 0) {
        voices = synthesis.getVoices();
    }

    if (showBubble) {
        avatarBubble.textContent = text;
        avatarBubble.classList.add('visible');
        setTimeout(() => avatarBubble.classList.remove('visible'), 4000);
    }

    const utter = new SpeechSynthesisUtterance(text);

    // Improved Voice Selection Logic
    // Prioritize Google Neural voices which are most natural on Chrome
    const preferredVoice = voices.find(v =>
        (v.name.includes("Google") && (v.lang === 'zh-HK' || v.name.includes('Cantonese') || v.name.includes('粵語')))
    );

    // Secondary choice: macOS High Quality voices
    const macVoice = voices.find(v =>
        ['Sin-ji', 'Ting-Ting', 'HiuGaai'].some(name => v.name.includes(name)) &&
        (v.name.includes('Premium') || v.name.includes('Enhanced')) // Try to get non-compact
    );

    // Tertiary: Any named HK voice
    const anyMacVoice = voices.find(v =>
        ['Sin-ji', 'Ting-Ting', 'HiuGaai'].some(name => v.name.includes(name))
    );

    // Fallback
    const fallbackVoice = voices.find(v => v.lang === 'zh-HK') || voices.find(v => v.lang.includes('zh'));

    const finalVoice = preferredVoice || macVoice || anyMacVoice || fallbackVoice;

    if (finalVoice) {
        utter.voice = finalVoice;
        utter.rate = 1.0;
        utter.pitch = 1.0;
        // console.log("Speaking with:", finalVoice.name);
    } else {
        console.warn("No Cantonese voice found. Using default.");
    }

    utter.onstart = () => {
        avatarMouth.classList.add('talking');
        if (avatarContainer) avatarContainer.classList.add('speaking');
    };

    utter.onboundary = (event) => {
        if (event.name === 'word') {
            avatarMouth.classList.add('pop');
            // Remove after animation completes
            setTimeout(() => avatarMouth.classList.remove('pop'), 100);
        }
    };

    utter.onend = () => {
        avatarMouth.classList.remove('talking');
        if (avatarContainer) avatarContainer.classList.remove('speaking');
        ttsActive = false;

        // Callback support (e.g., start mic after question)
        if (onComplete) {
            onComplete();
        } else {
            // If no callback, we usually go back to idle state
            statusText.textContent = "Tap Mic to Answer";
        }
    };

    utter.onerror = (e) => {
        if (e.error === 'interrupted' || e.error === 'canceled') {
            // Normal behavior when cancelling speech
            return;
        }
        console.error("TTS Error:", e);
        if (synthesis.paused) synthesis.resume();
        ttsActive = false; // Reset to be safe
    };

    synthesis.speak(utter);
}

function playDing() {
    // Simple oscillator beep for reliability
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.value = 500 + Math.random() * 200;
            gain.gain.value = 0.1;
            osc.start();
            gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.5);
            osc.stop(ctx.currentTime + 0.5);
        }
    } catch (e) {
        console.log("Audio Error", e);
    }
}


// Economy & Shop Logic
let dumplingDollars = 500;
let placedItems = []; // {id, x, y, type}

function updateShopUI() {
    // Balances
    const balEl = document.getElementById('shop-balance');
    const scoreEl = document.getElementById('shop-score-val');
    const convBtn = document.getElementById('convert-btn');

    if (balEl) balEl.textContent = dumplingDollars;
    if (scoreEl) scoreEl.textContent = totalScore;
    if (convBtn) convBtn.disabled = totalScore < 100;
}

function switchView(viewName) {
    const banquetArea = document.getElementById('banquet-area');
    const shopModal = document.getElementById('shop-modal');

    // Reset buttons
    document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));

    if (viewName === 'game') {
        banquetArea.classList.remove('visible');
        shopModal.classList.remove('visible');
        document.getElementById('nav-home-btn').classList.add('active');
    } else if (viewName === 'banquet') {
        banquetArea.classList.add('visible');
        shopModal.classList.remove('visible');
        document.getElementById('view-banquet-btn').classList.add('active');
        renderBanquet();
    } else if (viewName === 'shop') {
        updateShopUI();
        shopModal.classList.add('visible');
        document.getElementById('nav-shop-btn').classList.add('active');
    }
}

function initShop() {
    // 1. Convert Logic
    const convBtn = document.getElementById('convert-btn');
    if (convBtn) {
        convBtn.onclick = () => {
            if (totalScore >= 100) {
                totalScore -= 100;
                dumplingDollars += 1;
                updateShopUI();
                saveProgress();

                // Updates Scoreboard
                scoreDisplays.forEach(el => el.textContent = totalScore);
                playBong(800, 0.1); // Success sound
            } else {
                speak("Not enough score! Practice more.");
            }
        };
    }

    // 2. Render Shop Grid
    const grid = document.getElementById('shop-grid');
    if (grid) {
        grid.innerHTML = '';
        ITEMS.forEach(item => {
            const el = document.createElement('div');
            el.className = 'shop-item';
            el.innerHTML = `
                ${item.asset}
                <span class="item-name">${item.name}</span>
                <span class="item-price">${item.price} 🥟</span>
            `;
            el.onclick = () => buyItem(item);
            grid.appendChild(el);
        });
    }

    // 3. Navigation
    const navHomeBtn = document.getElementById('nav-home-btn');
    const viewBanquetBtn = document.getElementById('view-banquet-btn');
    const navShopBtn = document.getElementById('nav-shop-btn');

    const closeBanquetBtn = document.getElementById('close-banquet-btn');
    const openShopBtn = document.getElementById('open-shop-btn'); // Button inside banquet
    const closeShopBtn = document.getElementById('close-shop-btn');

    if (navHomeBtn) navHomeBtn.onclick = () => switchView('game');
    if (viewBanquetBtn) viewBanquetBtn.onclick = () => switchView('banquet');
    if (navShopBtn) navShopBtn.onclick = () => switchView('shop');

    if (closeBanquetBtn) closeBanquetBtn.onclick = () => switchView('game');
    if (openShopBtn) openShopBtn.onclick = () => switchView('shop');
    if (closeShopBtn) closeShopBtn.onclick = () => {
        // Return to whoever called us? Or just banquet for now
        switchView('banquet');
    };
}

function buyItem(item) {
    if (dumplingDollars >= item.price) {
        dumplingDollars -= item.price;

        // Add to banquet (Random position initially)
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 180; // Within table radius
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        placedItems.push({
            itemId: item.id,
            x: x,
            y: y,
            rotation: Math.random() * 360
        });

        updateShopUI();
        saveProgress();
        playDing(); // Cha-ching!
        speak(`You bought ${item.name}! Delicious.`);
    } else {
        speak("Too expensive! Save more dumplings.");
    }
}

function renderBanquet() {
    const table = document.querySelector('.banquet-table');
    if (!table) return;

    // Clear old items (keep tablecloth)
    const existing = table.querySelectorAll('.placed-item');
    existing.forEach(e => e.remove());

    placedItems.forEach(pi => {
        const itemDef = ITEMS.find(i => i.id === pi.itemId);
        if (!itemDef) return;

        const el = document.createElement('div');
        el.className = 'placed-item';
        el.innerHTML = itemDef.asset;

        // Center of table is (0,0) conceptually, but HTML is top-left based
        // Table is 600x600, center is 300,300. Item is 80x80 (center 40,40)
        // We set initial position
        const left = 300 + pi.x - 40;
        const top = 300 + pi.y - 40;

        el.style.left = `${left}px`;
        el.style.top = `${top}px`;
        el.style.transform = `rotate(${pi.rotation}deg)`;
        el.style.cursor = 'grab'; // Indicate draggable

        // Make draggable
        enableDrag(el, pi);

        table.appendChild(el);
    });
}

function enableDrag(el, itemData) {
    let isDragging = false;
    let startX, startY;
    let initialLeft, initialTop;

    el.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;

        // Get current computed style positions
        initialLeft = parseFloat(el.style.left);
        initialTop = parseFloat(el.style.top);

        el.style.cursor = 'grabbing';
        el.style.zIndex = 1000; // Bring to front while dragging

        // Disable text selection during drag
        document.body.style.userSelect = 'none';
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        let newLeft = initialLeft + dx;
        let newTop = initialTop + dy;

        // Optional: Bounds checking (Keep within table approx)
        // Table is 600x600 parent relevant to these coords
        // Keep center point (newLeft + 40, newTop + 40) within reasonable circle?
        // Or just rect bounds for simplicity

        // Update DOM
        el.style.left = `${newLeft}px`;
        el.style.top = `${newTop}px`;
    });

    window.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        el.style.cursor = 'grab';
        el.style.zIndex = '';
        document.body.style.userSelect = '';

        // Update State
        // Convert DOM position back to center-relative coordinates
        // left = 300 + x - 40  => x = left + 40 - 300
        const finalLeft = parseFloat(el.style.left);
        const finalTop = parseFloat(el.style.top);

        itemData.x = finalLeft + 40 - 300;
        itemData.y = finalTop + 40 - 300;

        saveProgress();
    });
}

// Persistence
function saveProgress() {
    const data = {
        totalScore,
        playedRounds,
        revealedAnswers,
        dumplingDollars,
        placedItems
    };
    localStorage.setItem('dimSumData', JSON.stringify(data));
}

function loadProgress() {
    const saved = localStorage.getItem('dimSumData');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            totalScore = data.totalScore || 0;
            playedRounds = data.playedRounds || [];
            revealedAnswers = data.revealedAnswers || [];
            dumplingDollars = (data.dumplingDollars !== undefined) ? data.dumplingDollars : 500;
            placedItems = data.placedItems || [];
            return true;
        } catch (e) {
            console.error("Save Load Error", e);
            return false;
        }
    }
    return false;
}

function init() {
    MusicPlayer.init(); // Init Music
    initShop(); // Init Shop
    loadVoices();
    renderSidebar(); // This renders the list but doesn't auto-start

    // Home Button logic
    const homeBtn = document.getElementById('home-btn');
    if (homeBtn) {
        homeBtn.onclick = () => {
            const startScreen = document.getElementById('start-screen');
            if (startScreen) {
                startScreen.style.display = 'flex';
                setTimeout(() => {
                    startScreen.style.opacity = '1';
                }, 10);
            }
        };
    }

    // UI Events
    if (langSwitch) langSwitch.addEventListener('change', updateLangUI);
    if (manualInput) {
        manualInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                handleInput(manualInput.value);
                manualInput.value = '';
            }
        });
    }

    setupSpeechRecognition();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }

    // Sidebar Toggle Logic
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebar = document.querySelector('.sidebar');

    if (sidebarToggle && sidebar) {
        sidebarToggle.onclick = () => {
            sidebar.classList.toggle('open');
            playBong(600, 0.1);
        };
    }

    if (sidebarClose && sidebar) {
        sidebarClose.onclick = () => {
            sidebar.classList.remove('open');
            playBong(400, 0.1);
        };
    }

    // Toggle Mic
    if (micBtn) {
        const newBtn = micBtn.cloneNode(true);
        micBtn.parentNode.replaceChild(newBtn, micBtn);
        newBtn.addEventListener('click', toggleListening);
    }

    // Load Save Data
    const hasSave = loadProgress();

    // Start Screen Logic
    const startBtn = document.getElementById('start-game-btn');
    const startScreen = document.getElementById('start-screen');
    const welcomeBackMsg = document.getElementById('welcome-back-msg');
    const careerScoreVal = document.getElementById('career-score-val');

    // Update Start Screen if Returning User
    if (hasSave && totalScore > 0 && welcomeBackMsg) {
        welcomeBackMsg.classList.remove('hidden');
        if (careerScoreVal) careerScoreVal.textContent = totalScore;
        if (startBtn) startBtn.textContent = "Continue Lunch";
    }

    if (startBtn) {
        startBtn.onclick = () => {
            // 1. Hide Screen (Faster fade)
            startScreen.style.opacity = '0';
            setTimeout(() => {
                startScreen.style.display = 'none';
            }, 300); // 500 -> 300ms

            // 2. Resume Audio Context
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                const ctx = new AudioContext();
                ctx.resume();
            }

            // 3. Play Start Sound (Shorter)
            playBong(600, 0.2);

            // Open Sidebar - REMOVED per user request
            // const sidebar = document.querySelector('.sidebar');
            // if (sidebar) sidebar.classList.add('open');

            // Set Level from UI
            const activeDiff = document.querySelector('.diff-btn.active');
            if (activeDiff) {
                currentLevel = parseInt(activeDiff.getAttribute('data-level'));
                updateLevelUI();
            }

            // 4. Start Game Logic
            nextRandomRound(); // Use nextRandomRound to respect difficulty
        };
    }

    // Difficulty Button Listeners
    if (diffBtns) {
        diffBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                diffBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const level = parseInt(btn.getAttribute('data-level'));
                updateStartScreenDesc(level);
                playBong(500 + (level * 50), 0.1);
            });
        });
    }

    // Avatar Blink Loop
    setInterval(() => {
        const eyes = document.querySelectorAll('.eyes circle');
        eyes.forEach(eye => {
            eye.style.transform = 'scaleY(0.1)';
            eye.style.transition = 'transform 0.1s';
            setTimeout(() => {
                eye.style.transform = 'scaleY(1)';
            }, 100);
        });
    }, 4000 + Math.random() * 2000); // Random blink every 4-6s
}

function updateLevelUI() {
    if (levelDisplay) {
        levelDisplay.textContent = currentLevel;
        levelDisplay.classList.add('pop');
        setTimeout(() => levelDisplay.classList.remove('pop'), 500);
    }
}

function updateStartScreenDesc(level) {
    if (diffDesc) {
        diffDesc.textContent = DIFFICULTY_DESCS[level];
    }
}

// Start
init();
