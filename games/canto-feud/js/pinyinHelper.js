export const pinyinMap = {
    // Level 0: Numbers
    '六': 'luhk', '七': 'chāt', '八': 'baat', '九': 'gáu', '十': 'sahp',
    '係': 'haih', '唔係': 'm̀haih', '有': 'yáuh', '冇': 'móuh',
    '我': 'ngóh', '你': 'néih', '佢': 'keóih',

    // Level 1: Family, Greetings, Colors
    '爸爸媽媽': 'baàh ba maā ma', '哥哥姐姐': 'gō gō jē jē', '細佬細妹': 'sai lóu sai múi',
    '婆婆爺爺': 'pòh pòh yèh yèh', '老公老婆': 'lóu gūng lóu pòh',
    '你好嗎？': 'néih hóu ma?', '早晨！': 'jóu sàn!', '得閒飲茶啦！': 'dak haàhn yám chàh la!', '拜拜！': 'baāi baāi!',
    '紅色': 'hùhng sīk', '藍色': 'laàhm sīk', '白色': 'baahk sīk', '黑色': 'hāk sīk', '黃色': 'wòhng sīk',
    '電話': 'dihn vá', '鎖匙': 'só sìh', '銀包': 'ngàhn baāu', '雨遮': 'yú jē',

    // Level 2: Dim Sum, Drinks, Weather, Bargain
    '蝦餃燒賣': 'haā gáau sīu maáih', '叉燒包': 'chaā sīu baāu', '腸粉': 'cheúng fán', '鳳爪': 'fuhng jaáu', '普洱茶': 'póu léi chàh',
    '凍檸茶': 'dung nìng chàh', '熱奶茶': 'yiht naáih chàh', '鴛鴦': 'yūn yeūng', '可樂': 'hó lohk',
    '好熱': 'hóu yiht', '落雨': 'lohk yú', '好凍': 'hóu dung', '多雲': 'dō vàhn',
    '太貴啦': 'taai gwai la', '平啲啦': 'pèhng dī la', '唔買啦': 'm̀ maáih la',

    // Level 3: Taxi, Transport, Hobbies, Locations
    '前面有落': 'chìhn mihn yáuh lohk', '轉左': 'jyún jó', '轉右': 'jyún yauh', '直行': 'jihk haàhng',
    '搭地鐵': 'daap deih tit', '搭巴士': 'daap baā sí', '搭小巴': 'daap siu baā', '搭叮叮': 'daap dīng dīng',
    '我去行山': 'ngóh heui haàhng saān', '睇戲': 'tái hei', '打機': 'dá gēi', '瞓覺': 'fan gaau',
    '旺角': 'vohng gok', '銅鑼灣': 'tùng lòh vaān', '尖沙咀': 'jīm shā jeúi', '中環': 'jūng vaàhn',

    // Level 4: Romance, Emotions, Plans
    '我好鍾意你': 'ngóh hóu jūng yi néih', '掛住你': 'gwa juh néih', '嫁俾我': 'ga béi ngóh', '一生一世': 'yāt sāng yāt sai',
    '好開心': 'hóu hōi sām', '好攰': 'hóu guih', '好悶': 'hóu mihn', '嬲死我': 'nāu séi ngóh',
    '今晚有無空？': 'gām maáhn yáuh móuh hūng?', '我們幾點見？': 'ngóh deih géi dím gin?', '邊度等？': 'bīn dou dáng?', '不見不散': 'bāt gin bāt saan',

    // Level 5: Slang, Internet, Pop Culture
    '笑死': 'siu séi', '世一': 'sai yāt', '自肥': 'jih fèih', '潛水': 'chìhm séui',
    '好索': 'hóu sok', '男神': 'naàhm sàhn', '女神': 'neóih sàhn', '放閃': 'fong sím',
    '真係㗎？': 'jān haih ga?', '唔係掛？': 'm̀ haih gwa?', '囉': 'lo', '啫': 'jē',

    // Level 6: Work, Complaints, Angry, Rent
    '做到隻積咁': 'jou dou jek jik gám', '老細又發神經': 'lóu sai yauh faat sàhn gīng', '想辭職唔撈': 'seúng chìh jik m̀ lòu', 'OT到天光': 'OT dou tīn gwōng',
    '豈有此理': 'héi yáuh chí léih', '痴線': 'chī sin', '有無搞錯': 'yáuh móuh gaáu cho', '收聲': 'shāu sēng',
    '租金好貴': 'jōu gām hóu gwai', '間屋好細': 'gaān ūk hóu sai', '上車好難': 'seóhng chē hóu naàhn', '無錢交租': 'mòuh chín gaāu jōu',

    // Level 7: Formal, Business, Weddings
    '身體健康': 'shān tái gihn hōng', '恭喜發財': 'gūng héi faat chōi', '好耐無見': 'hóu noih mòuh gin', '食咗飯未': 'shihk jó faahn mihn',
    '生意興隆': 'shāang yi hing lùng', '合作愉快': 'hahp jók yùh faai', '請多指教': 'chíng dō jí gaau', '交換卡片': 'gaāu vuhn ka pín',
    '百年好合': 'baak nìhn hóu hahp', '永結同心': 'vihng git tùhng sām', '早生貴子': 'jóu shāang gwai jí', '白頭到老': 'baahk tàuh dou lóu',

    // Level 8: Emergency, Illness, Traditions
    '救命呀': 'gau mihng a', '叫白車': 'giu baahk chē', '報警': 'bou gíng', '唔見咗銀包': 'm̀ gin jó ngàhn baāu',
    '頭暈身㷫': 'tàuh vàhn shān hing', '肚痛': 'tóu tung', '發燒': 'faat sīu', '喉嚨痛': 'hàuh lùhng tung',
    '食月餅': 'shihk jyut béng', '賞月': 'sheóng jyut', '玩燈籠': 'vaán dāng lùhng', '團圓': 'tyùhn yùn',

    // Level 9: Proverbs, Idioms, Wisdom
    '塞翁失馬': 'chōi yūng shāt máh', '馬死落地行': 'máh séi lohk deih haàhng', '各家自掃門前雪': 'gok gaā jih sou mùhn chìhn syut',
    '一石二鳥': 'yāt sehk yih niǔ', '畫蛇添足': 'vaahk shé tīm jūk', '半途而廢': 'bun tòuh yìh fai',
    '問心無愧': 'mahn sām mòuh kwai', '飲水思源': 'yám séui sī yùhn', '知足常樂': 'jī jūk sheòng lohk',

    // Level 10: Philosophy, Poem, The Way
    '人生如夢': 'yàhn sāng yùh mihn', '難得糊塗': 'naàhn dāk vùh tòuh', '順其自然': 'seuhn kèih jih yìhn',
    '床前明月光': 'chòhng chìhn mìhng jyut gwōng', '疑是地上霜': 'yìh sih deih sheòng seūng', '舉頭望明月': 'geói tàuh vohng mìhng jyut', '低頭思故鄉': 'dāi tàuh sī gu hēung',
    '道可道非常道': 'dou hó dou fēi sheòng dou', '上善若水': 'seohng sihn yeohk séui'
};

// Helper for character-level lookup
export const charPinyinMap = {};

// Initialize character map from existing phrases
function initCharMap() {
    Object.entries(pinyinMap).forEach(([phrase, pinyin]) => {
        const cleanChars = phrase.replace(/[^\u4e00-\u9fa5]/g, '');
        const syllables = pinyin.split(/\s+/);
        if (cleanChars.length === syllables.length) {
            for (let i = 0; i < cleanChars.length; i++) {
                if (!charPinyinMap[cleanChars[i]]) {
                    charPinyinMap[cleanChars[i]] = syllables[i];
                }
            }
        }
    });
}
initCharMap();

/**
 * Extracts the base syllable (lowercase, no tone markers) and the Yale tone number (1-6).
 * @param {string} yale - The Yale romanized syllable
 * @returns {object} - { base: string, tone: number }
 */
export function getToneAndBase(yale) {
    if (!yale) return { base: '', tone: 3 };

    let tone = 3; // Default Mid Level
    const lower = yale.toLowerCase();

    // Check for 'h' tone marker (follows a vowel)
    const hasH = /([aeiou])h/i.test(yale);

    const hasMacron = /[āēīōūǖ]/.test(yale); // Tone 1
    const hasAcute = /[áéíóúǘ]/.test(yale);  // Tone 2 or 5
    const hasGrave = /[àèìòùǜ]/.test(yale);  // Tone 4

    if (hasH) {
        if (hasGrave) tone = 4;
        else if (hasAcute) tone = 5;
        else tone = 6;
    } else {
        if (hasMacron) tone = 1;
        else if (hasAcute) tone = 2;
        else tone = 3;
    }

    // Clean base: remove diacritics and tone 'h'
    let base = lower.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (tone >= 4) {
        base = base.replace(/([aeiou])h/g, '$1');
    }
    // Remove punctuation
    base = base.replace(/[^a-z]/g, '');

    return { base, tone };
}

/**
 * Compares two characters based on their Cantonese pronunciation.
 * @param {string} targetChar - The target character
 * @param {string} inputChar - The character recognized from speech
 * @returns {object} - { syllableMatch: boolean, toneMatch: boolean }
 */
export function comparePronunciation(targetChar, inputChar) {
    if (targetChar === inputChar) return { syllableMatch: true, toneMatch: true };

    const targetPinyin = charPinyinMap[targetChar];
    const inputPinyin = charPinyinMap[inputChar];

    if (!targetPinyin || !inputPinyin) return { syllableMatch: false, toneMatch: false };

    const target = getToneAndBase(targetPinyin);
    const input = getToneAndBase(inputPinyin);

    return {
        syllableMatch: target.base === input.base,
        toneMatch: target.tone === input.tone
    };
}

/**
 * Converts Cantonese romanization to phonetic English spelling
 * @param {string} pinyin - The romanized Cantonese text
 * @returns {string} - Phonetic English approximation
 */
export function toPhoneticEnglish(pinyin) {
    if (!pinyin) return '';

    // Common syllable mappings for Cantonese romanization to English phonetics
    const phoneticMap = {
        // Vowels and finals
        'aa': 'ah', 'aai': 'eye', 'aau': 'ow', 'aam': 'ahm', 'aan': 'ahn', 'aang': 'ahng', 'aap': 'ahp', 'aat': 'aht', 'aak': 'ahk',
        'ai': 'eye', 'au': 'ow',
        'a': 'uh',
        'e': 'eh', 'ei': 'ay', 'eng': 'ung', 'ek': 'ek',
        'i': 'ee', 'iu': 'ew', 'im': 'eem', 'in': 'een', 'ing': 'ing', 'ip': 'eep', 'it': 'eet', 'ik': 'eek',
        'o': 'aw', 'oi': 'oy', 'ou': 'oh', 'on': 'awn', 'ong': 'ong', 'ot': 'awt', 'ok': 'awk',
        'u': 'oo', 'ui': 'ooey', 'un': 'oon', 'ung': 'oong', 'ut': 'oot', 'uk': 'ook',
        'eoi': 'oy', 'eon': 'un', 'eot': 'ut',
        'yu': 'ew', 'yun': 'ewn', 'yut': 'ewt',

        // Initials
        'ng': 'ng', 'gw': 'gw', 'kw': 'kw',
        'j': 'y', 'z': 'j', 'c': 'ch',

        // Common endings
        'k': 'k', 't': 't', 'p': 'p',
        'm': 'm', 'n': 'n', 'ng': 'ng',

        // Special cases
        'baat': 'bot', 'baai': 'bye', 'baau': 'bow', 'baak': 'bock',
        'chat': 'chut', 'cha': 'chah', 'che': 'cheh', 'chi': 'chee', 'cho': 'chaw', 'chu': 'choo',
        'daap': 'dop', 'daa': 'dah', 'dai': 'die', 'dak': 'duck', 'dang': 'dung', 'dim': 'deem',
        'faan': 'fahn', 'faat': 'faht', 'fan': 'fun', 'fei': 'fay', 'fong': 'fong', 'fung': 'foong',
        'gaa': 'gah', 'gaai': 'guy', 'gaau': 'gow', 'gam': 'gum', 'gan': 'gun', 'gau': 'gow', 'gei': 'gay', 'gin': 'geen', 'ging': 'ging', 'giu': 'gew', 'go': 'gaw', 'gok': 'gawk', 'gong': 'gong', 'gu': 'goo', 'gui': 'gway', 'gung': 'goong', 'gwai': 'gwy', 'gwa': 'gwah', 'gwong': 'gwong',
        'haai': 'high', 'haang': 'hahng', 'haan': 'hahn', 'hai': 'high', 'hak': 'huck', 'hang': 'hung', 'hap': 'hup', 'hau': 'how', 'hei': 'hay', 'heoi': 'hoy', 'heung': 'heung', 'hing': 'hing', 'hoi': 'hoy', 'hong': 'hong', 'hou': 'ho', 'hung': 'hoong',
        'jaa': 'jah', 'jaau': 'jow', 'je': 'jeh', 'ji': 'jee', 'jik': 'jick', 'jim': 'jeem', 'jin': 'jean', 'jip': 'jeep', 'jiu': 'jew', 'jo': 'jaw', 'jok': 'jock', 'jou': 'joe', 'jung': 'joong', 'jyu': 'jew', 'jyun': 'jewen', 'jyut': 'jewt',
        'kaa': 'kah', 'kam': 'come', 'keoi': 'koy', 'kei': 'kay',
        'laa': 'lah', 'laai': 'lie', 'laam': 'lahm', 'lai': 'lie', 'lau': 'low', 'lei': 'lay', 'leng': 'lung', 'leoi': 'loy', 'lo': 'law', 'loi': 'loy', 'lok': 'lock', 'lou': 'low', 'luk': 'look', 'lung': 'loong',
        'maa': 'mah', 'maai': 'my', 'maahn': 'mahn', 'maan': 'mahn', 'man': 'mun', 'mat': 'mut', 'me': 'meh', 'mei': 'may', 'mihn': 'mean', 'min': 'mean', 'ming': 'ming', 'mou': 'mow', 'mui': 'mooey', 'mun': 'moon',
        'naa': 'nah', 'naam': 'nahm', 'naan': 'nahn', 'nau': 'now', 'nei': 'nay', 'neoi': 'noy', 'ngo': 'naw', 'ngan': 'ngun', 'nging': 'nging', 'nin': 'neen', 'ning': 'ning', 'niu': 'new',
        'paa': 'pah', 'paai': 'pie', 'pang': 'pung', 'pei': 'pay', 'peng': 'pung', 'pin': 'peen', 'po': 'paw',
        'saa': 'sah', 'saai': 'sigh', 'saang': 'sahng', 'saan': 'sahn', 'sai': 'sigh', 'sak': 'suck', 'sam': 'sum', 'san': 'sun', 'sang': 'sung', 'sap': 'sup', 'sau': 'sow', 'se': 'seh', 'sei': 'say', 'sek': 'suck', 'seng': 'sung', 'seoi': 'soy', 'seon': 'sun', 'seong': 'seung', 'seung': 'seung', 'si': 'see', 'sik': 'sick', 'sim': 'seem', 'sin': 'seen', 'sing': 'sing', 'siu': 'see-oo', 'so': 'saw', 'soeng': 'seung', 'sok': 'sock', 'sou': 'so', 'suk': 'sook', 'sung': 'soong', 'syut': 'sewt', 'syu': 'sue',
        'taa': 'tah', 'taai': 'tie', 'tai': 'tie', 'tau': 'tow', 'teng': 'tung', 'teen': 'teen', 'tit': 'teet', 'tiu': 'tew', 'to': 'taw', 'toi': 'toy', 'tou': 'toe', 'tung': 'toong', 'tyun': 'tewn',
        'waa': 'wah', 'waak': 'wock', 'waan': 'wahn', 'wai': 'why', 'wan': 'wun', 'wing': 'wing', 'wong': 'wong', 'wu': 'woo', 'wui': 'wooey', 'wun': 'woon',
        'yaa': 'yah', 'yaau': 'yow', 'yam': 'yum', 'yan': 'yun', 'yang': 'yung', 'yat': 'yut', 'yau': 'yow', 'ye': 'yeh', 'yeh': 'yeh', 'yeoi': 'yoy', 'yeuk': 'yeuk', 'yeung': 'yeung', 'yi': 'yee', 'yik': 'yick', 'yim': 'yeem', 'yin': 'yeen', 'ying': 'ying', 'yip': 'yeep', 'yit': 'yeet', 'yiu': 'yew', 'yo': 'yaw', 'yu': 'yew', 'yue': 'yew-eh', 'yuen': 'yewen', 'yun': 'yewen', 'yut': 'yewt',
        'za': 'jah', 'zaap': 'jahp', 'zaa': 'jah', 'zaai': 'jie', 'zai': 'jie', 'zam': 'jum', 'zan': 'jun', 'zang': 'jung', 'ze': 'jeh', 'zek': 'jeck', 'zeoi': 'joy', 'zeung': 'jeung', 'zi': 'see', 'zik': 'jick', 'zim': 'jeem', 'zing': 'jing', 'zit': 'jeet', 'zo': 'jaw', 'zoi': 'joy', 'zok': 'jock', 'zon': 'jawn', 'zou': 'joe', 'zuk': 'jook', 'zung': 'joong', 'zyun': 'jewen'
    };

    // Process the pinyin string
    let result = pinyin.toLowerCase();

    // Remove tone marks and diacritics
    result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Split by spaces and process each syllable
    const syllables = result.split(/\s+/);
    const phonetic = syllables.map(syllable => {
        // Remove punctuation for matching
        const cleanSyllable = syllable.replace(/[^a-z]/g, '');

        // Try exact match first
        if (phoneticMap[cleanSyllable]) {
            return phoneticMap[cleanSyllable];
        }

        // Try to match longest substring first
        for (let len = cleanSyllable.length; len > 0; len--) {
            for (let i = 0; i <= cleanSyllable.length - len; i++) {
                const substr = cleanSyllable.substring(i, i + len);
                if (phoneticMap[substr]) {
                    const before = cleanSyllable.substring(0, i);
                    const after = cleanSyllable.substring(i + len);
                    return before + phoneticMap[substr] + after;
                }
            }
        }

        // Return original if no match
        return syllable;
    });

    return phonetic.join(' ');
}
