export const gameData = [
    // --- LEVEL 0: TOTAL NOVICE (Numbers, Basic Pronouns, Yes/No) ---
    {
        id: 't0_1',
        difficulty: 0,
        title: 'Numbers 1-5 (數字)',
        question: {
            canto: '一二三四五，之後係咩？',
            pinyin: 'Yat Yi Saam Sei Ng, Ji Hau Hai Me?',
            english: 'After 1, 2, 3, 4, 5 comes?'
        },
        answers: [
            { id: 1, canto: '數字六', pinyin: 'Sou Zi Luk', english: 'Number Six', score: 30 },
            { id: 2, canto: '數字七', pinyin: 'Sou Zi Chat', english: 'Number Seven', score: 25 },
            { id: 3, canto: '數字八', pinyin: 'Sou Zi Baat', english: 'Number Eight', score: 20 },
            { id: 4, canto: '數字九', pinyin: 'Sou Zi Gau', english: 'Number Nine', score: 15 },
            { id: 5, canto: '數字十', pinyin: 'Sou Zi Sap', english: 'Number Ten', score: 10 }
        ]
    },
    {
        id: 't0_2',
        difficulty: 0,
        title: 'Yes or No (係唔係)',
        question: {
            canto: '人哋問你係唔係，你點答？',
            pinyin: 'Yan Dei Man Nei Hai M Hai, Nei Dim Daap?',
            english: 'How to answer Yes or No?'
        },
        answers: [
            { id: 1, canto: '係呀', pinyin: 'Hai Aa', english: 'Yes it is', score: 40 },
            { id: 2, canto: '唔係呀', pinyin: 'M Hai Aa', english: 'No it is not', score: 35 },
            { id: 3, canto: '有呀', pinyin: 'Yau Aa', english: 'Have it', score: 15 },
            { id: 4, canto: '冇呀', pinyin: 'Mou Aa', english: 'Don\'t have it', score: 10 }
        ]
    },
    {
        id: 't0_3',
        difficulty: 0,
        title: 'Basic Words (基本字)',
        question: {
            canto: '點樣稱呼自己同人哋？',
            pinyin: 'Dim Yeung Ching Fu Ji Gei Tung Yan Dei?',
            english: 'Calling self and others?'
        },
        answers: [
            { id: 1, canto: '係我', pinyin: 'Hai Ngo', english: 'It is me', score: 35 },
            { id: 2, canto: '係你', pinyin: 'Hai Nei', english: 'It is you', score: 35 },
            { id: 3, canto: '係佢', pinyin: 'Hai Keoi', english: 'It is him/her', score: 30 }
        ]
    },
    // --- LEVEL 1: NOVICE (Family, Animals, Time) ---
    {
        id: 't1_1',
        difficulty: 1,
        title: 'Family (屋企人)',
        question: {
            canto: '點樣稱呼屋企人？',
            pinyin: 'Dim Yeung Ching Fu Uk Kei Yan?',
            english: 'How to call family members?'
        },
        answers: [
            { id: 1, canto: '爸爸媽媽', pinyin: 'Ba Ba Ma Ma', english: 'Father Mother', score: 30 },
            { id: 2, canto: '哥哥姐姐', pinyin: 'Go Go Je Je', english: 'Older Brother/Sister', score: 25 },
            { id: 3, canto: '細佬細妹', pinyin: 'Sai Lou Sai Mui', english: 'Younger Brother/Sister', score: 20 },
            { id: 4, canto: '婆婆爺爺', pinyin: 'Po Po Ye Ye', english: 'Grandma Grandpa', score: 15 },
            { id: 5, canto: '老公老婆', pinyin: 'Lou Gung Lou Po', english: 'Husband Wife', score: 10 }
        ]
    },
    {
        id: 't1_2',
        difficulty: 1,
        title: 'Greetings (問候)',
        question: {
            canto: '見到朋友講咩好？',
            pinyin: 'Gin Dou Pang Yau Gong Me Hou?',
            english: 'What to say to friends?'
        },
        answers: [
            { id: 1, canto: '你好嗎？', pinyin: 'Nei Hou Ma?', english: 'How are you?', score: 35 },
            { id: 2, canto: '早晨呀', pinyin: 'Jou San Aa', english: 'Good morning', score: 30 },
            { id: 3, canto: '得閒飲茶啦！', pinyin: 'Dak Haan Yam Cha La!', english: 'Lets grab tea sometime!', score: 20 },
            { id: 4, canto: '拜拜！', pinyin: 'Baai Baai!', english: 'Bye bye!', score: 15 }
        ]
    },
    {
        id: 't1_3',
        difficulty: 1,
        title: 'Colors (顏色)',
        question: {
            canto: '你最鍾意咩顏色？',
            pinyin: 'Nei Zeoi Zung Yi Me Ngaan Sik?',
            english: 'What is your favorite color?'
        },
        answers: [
            { id: 1, canto: '係紅色', pinyin: 'Hai Hung Sik', english: 'It is red', score: 30 },
            { id: 2, canto: '係藍色', pinyin: 'Hai Laam Sik', english: 'It is blue', score: 25 },
            { id: 3, canto: '係白色', pinyin: 'Hai Baak Sik', english: 'It is white', score: 20 },
            { id: 4, canto: '係黑色', pinyin: 'Hai Hak Sik', english: 'It is black', score: 15 },
            { id: 5, canto: '係黃色', pinyin: 'Hai Wong Sik', english: 'It is yellow', score: 10 }
        ]
    },
    {
        id: 't1_4',
        difficulty: 1,
        title: 'Common Objects (常見物品)',
        question: {
            canto: '你書包入面有咩？',
            pinyin: 'Nei Syu Baau Yap Min Yau Me?',
            english: 'What is in your bag?'
        },
        answers: [
            { id: 1, canto: '一部電話', pinyin: 'Yat Bou Din Waa', english: 'A phone', score: 35 },
            { id: 2, canto: '一條鎖匙', pinyin: 'Yat Tiu So Si', english: 'A key', score: 25 },
            { id: 3, canto: '一個銀包', pinyin: 'Yat Go Ngan Baau', english: 'A wallet', score: 25 },
            { id: 4, canto: '一把雨遮', pinyin: 'Yat Baa Yu Ze', english: 'An umbrella', score: 15 }
        ]
    },
    // --- LEVEL 2: BEGINNER (Dim Sum, Directions, Weather) ---
    {
        id: 't2_1',
        difficulty: 2,
        title: 'Dim Sum (點心)',
        question: {
            canto: '去飲茶想食啲咩？',
            pinyin: 'Heoi Yam Cha Seung Sik Di Me?',
            english: 'What do you want to eat at Dim Sum?'
        },
        answers: [
            { id: 1, canto: '蝦餃燒賣', pinyin: 'Hargow Siumai', english: 'Shrimp & Pork Dumplings', score: 40 },
            { id: 2, canto: '叉燒包', pinyin: 'Cha Siu Bao', english: 'BBQ Pork Buns', score: 25 },
            { id: 3, canto: '一份腸粉', pinyin: 'Yat Fan Cheung Fan', english: 'A portion of rice rolls', score: 20 },
            { id: 4, canto: '一碟鳳爪', pinyin: 'Yat Dip Fung Jaau', english: 'A plate of chicken feet', score: 10 },
            { id: 5, canto: '普洱茶', pinyin: 'Po Lei Cha', english: 'Pu\'er Tea', score: 5 }
        ]
    },
    {
        id: 't2_2',
        difficulty: 2,
        title: 'Drinks (飲品)',
        question: {
            canto: '去茶餐廳飲咩好？',
            pinyin: 'Heoi Cha Caan Teng Yam Me Hou?',
            english: 'What to drink at a Cha Chaan Teng?'
        },
        answers: [
            { id: 1, canto: '凍檸茶', pinyin: 'Dung Ning Cha', english: 'Iced Lemon Tea', score: 40 },
            { id: 2, canto: '熱奶茶', pinyin: 'Yit Naai Cha', english: 'Hot Milk Tea', score: 30 },
            { id: 3, canto: '一杯鴛鴦', pinyin: 'Yat Bui Yuen Yeung', english: 'A cup of Coffee with Tea', score: 20 },
            { id: 4, canto: '一枝可樂', pinyin: 'Yat Zi Ho Lok', english: 'A bottle of Coke', score: 10 }
        ]
    },
    {
        id: 't2_3',
        difficulty: 2,
        title: 'Weather (天氣)',
        question: {
            canto: '今日天氣點呀？',
            pinyin: 'Gam Yat Tin Hei Dim A?',
            english: 'How is the weather?'
        },
        answers: [
            { id: 1, canto: '好熱呀', pinyin: 'Hou Yit Aa', english: 'It is very hot', score: 30 },
            { id: 2, canto: '落雨呀', pinyin: 'Lok Yu Aa', english: 'It is raining', score: 30 },
            { id: 3, canto: '好凍呀', pinyin: 'Hou Dung Aa', english: 'It is very cold', score: 20 },
            { id: 4, canto: '多雲呀', pinyin: 'Do Wan Aa', english: 'It is cloudy', score: 20 }
        ]
    },
    {
        id: 't2_4',
        difficulty: 2,
        title: 'Shopping Bargain (講價)',
        question: {
            canto: '買嘢嫌貴會講咩？',
            pinyin: 'Maai Ye Yim Gwai Wui Gong Me?',
            english: 'What to say if it\'s too expensive?'
        },
        answers: [
            { id: 1, canto: '太貴啦', pinyin: 'Tai Gwai La', english: 'Too expensive', score: 40 },
            { id: 2, canto: '平啲啦', pinyin: 'Peng Di La', english: 'Cheaper please', score: 35 },
            { id: 3, canto: '唔買啦', pinyin: 'M Maai La', english: 'Not buying', score: 25 }
        ]
    },
    // --- LEVEL 3: INTERMEDIATE (Transport, Hobbies, Daily Life) ---
    {
        id: 't3_1',
        difficulty: 3,
        title: 'Taxi (的士)',
        question: {
            canto: '搭的士嗰陣講咩？',
            pinyin: 'Dap Dik Si Go Zan Gong Me?',
            english: 'What to say in a taxi?'
        },
        answers: [
            { id: 1, canto: '前面有落', pinyin: 'Cin Min Yau Lok', english: 'Stop in front', score: 40 },
            { id: 2, canto: '向左轉', pinyin: 'Heung Zo Zyun', english: 'Turn left', score: 25 },
            { id: 3, canto: '向右轉', pinyin: 'Heung Yau Zyun', english: 'Turn right', score: 25 },
            { id: 4, canto: '一路直行', pinyin: 'Yat Lou Zik Haang', english: 'Go straight all the way', score: 10 }
        ]
    },
    {
        id: 't3_2',
        difficulty: 3,
        title: 'Public Transport (交通)',
        question: {
            canto: '你在香港搭咩車？',
            pinyin: 'Nei Zoi Heung Gong Daap Me Ce?',
            english: 'What transport do you take?'
        },
        answers: [
            { id: 1, canto: '搭地鐵', pinyin: 'Daap Dei Tit', english: 'Take MTR', score: 30 },
            { id: 2, canto: '搭巴士', pinyin: 'Daap Baa Si', english: 'Take Bus', score: 30 },
            { id: 3, canto: '搭小巴', pinyin: 'Daap Siu Baa', english: 'Take Minibus', score: 25 },
            { id: 4, canto: '搭叮叮', pinyin: 'Daap Ding Ding', english: 'Take Tram', score: 15 }
        ]
    },
    {
        id: 't3_3',
        difficulty: 3,
        title: 'Hobbies (興趣)',
        question: {
            canto: '你放假鍾意做咩？',
            pinyin: 'Nei Fong Gaa Zung Yi Zou Me?',
            english: 'What do you do on holidays?'
        },
        answers: [
            { id: 1, canto: '我去行山', pinyin: 'Ngo Heoi Haang Saan', english: 'I go hiking', score: 30 },
            { id: 2, canto: '去睇戲', pinyin: 'Heoi Tai Hei', english: 'Go watch movies', score: 25 },
            { id: 3, canto: '去打機', pinyin: 'Heoi Daa Gei', english: 'Go play video games', score: 25 },
            { id: 4, canto: '去瞓覺', pinyin: 'Heoi Fan Gaau', english: 'Go sleep', score: 20 }
        ]
    },
    {
        id: 't3_4',
        difficulty: 3,
        title: 'Locations (地點)',
        question: {
            canto: '你想去邊度玩？',
            pinyin: 'Nei Seung Heoi Bin Dou Waan?',
            english: 'Where do you want to go?'
        },
        answers: [
            { id: 1, canto: '去旺角', pinyin: 'Heoi Wong Kok', english: 'Go to Mong Kok', score: 30 },
            { id: 2, canto: '去銅鑼灣', pinyin: 'Heoi Tung Lo Wan', english: 'Go to Causeway Bay', score: 25 },
            { id: 3, canto: '去尖沙咀', pinyin: 'Heoi Zim Sa Zeoi', english: 'Go to Tsim Sha Tsui', score: 25 },
            { id: 4, canto: '去中環', pinyin: 'Heoi Zung Waan', english: 'Go to Central', score: 20 }
        ]
    },
    // --- LEVEL 4: CONVERSATIONAL (Romance, Emotions, Plans) ---
    {
        id: 't4_1',
        difficulty: 4,
        title: 'Romance (愛情)',
        question: {
            canto: '點樣同人講我愛你？',
            pinyin: 'Dim Yeung Tung Yan Gong Ngo Oi Nei?',
            english: 'Romantic phrases?'
        },
        answers: [
            { id: 1, canto: '我好鍾意你', pinyin: 'Ngo Hou Zung Yi Nei', english: 'I really like you', score: 40 },
            { id: 2, canto: '好掛住你', pinyin: 'Hou Gwa Jyu Nei', english: 'Miss you so much', score: 30 },
            { id: 3, canto: '嫁俾我啦', pinyin: 'Gaa Bei Ngo Laa', english: 'Marry me please', score: 20 },
            { id: 4, canto: '一生一世', pinyin: 'Yat Sang Yat Sai', english: 'Forever', score: 10 }
        ]
    },
    {
        id: 't4_2',
        difficulty: 4,
        title: 'Emotions (心情)',
        question: {
            canto: '你今日心情點呀？',
            pinyin: 'Nei Gam Yat Sam Cing Dim A?',
            english: 'How are you feeling today?'
        },
        answers: [
            { id: 1, canto: '好開心呀', pinyin: 'Hou Hoi Sam Aa', english: 'Very happy indeed', score: 30 },
            { id: 2, canto: '好攰呀', pinyin: 'Hou Gui Aa', english: 'Very tired indeed', score: 30 },
            { id: 3, canto: '好悶呀', pinyin: 'Hou Mun Aa', english: 'Very bored indeed', score: 20 },
            { id: 4, canto: '嬲死我', pinyin: 'Nau Sei Ngo', english: 'So angry', score: 20 }
        ]
    },
    {
        id: 't4_3',
        difficulty: 4,
        title: 'Making Plans (約人)',
        question: {
            canto: '約朋友出街點講？',
            pinyin: 'Yeuk Pang Yau Ceot Gaai Dim Gong?',
            english: 'Asking friends out?'
        },
        answers: [
            { id: 1, canto: '今晚有無空？', pinyin: 'Gam Maan Yau Mou Hung?', english: 'Free tonight?', score: 40 },
            { id: 2, canto: '我們幾點見？', pinyin: 'Ngo Dei Gei Dim Gin?', english: 'What time we meet?', score: 30 },
            { id: 3, canto: '邊度等？', pinyin: 'Bin Dou Dang?', english: 'Where to wait?', score: 20 },
            { id: 4, canto: '不見不散', pinyin: 'Bat Gin Bat Saan', english: 'Be there or be square', score: 10 }
        ]
    },
    // --- LEVEL 5: FLUENT (Slang, Internet, Pop Culture) ---
    {
        id: 't5_1',
        difficulty: 5,
        title: 'Internet Slang (潮語)',
        question: {
            canto: '上網常見嘅説話？',
            pinyin: 'Seung Mong Seung Gin Ge Syut Wa?',
            english: 'Internet slang/phrases?'
        },
        answers: [
            { id: 1, canto: '笑死我', pinyin: 'Siu Sei Ngo', english: 'LOL (Laugh Me to Death)', score: 35 },
            { id: 2, canto: '佢係世一', pinyin: 'Keoi Hai Sai Yat', english: 'He is world no. 1', score: 30 },
            { id: 3, canto: '自肥計劃', pinyin: 'Zi Fei Gai Waak', english: 'Self-enrichment plan', score: 20 },
            { id: 4, canto: '潛咗水呀', pinyin: 'Cim Zo Seoi Aa', english: 'Went MIA', score: 15 }
        ]
    },
    {
        id: 't5_2',
        difficulty: 5,
        title: 'Descriptions (形容)',
        question: {
            canto: '見到靚女靚仔點講？',
            pinyin: 'Gin Dou Leng Neoi Leng Zai Dim Gong?',
            english: 'Describing attractive people?'
        },
        answers: [
            { id: 1, canto: '佢好索呀', pinyin: 'Keoi Hou Sok Aa', english: 'She is so hot', score: 35 },
            { id: 2, canto: '係我男神', pinyin: 'Hai Ngo Naam San', english: 'He is my male god', score: 25 },
            { id: 3, canto: '係我女神', pinyin: 'Hai Ngo Neoi San', english: 'She is my goddess', score: 25 },
            { id: 4, canto: '喺度放閃', pinyin: 'Hei Dou Fong Sim', english: 'PDA in progress', score: 15 }
        ]
    },
    {
        id: 't5_3',
        difficulty: 5,
        title: 'Exclamations (助語詞)',
        question: {
            canto: '廣東話有好多助語詞？',
            pinyin: 'Gwong Dung Wa Yau Hou Do Zo Yu Ci?',
            english: 'Cantonese particles?'
        },
        answers: [
            { id: 1, canto: '真係㗎？', pinyin: 'Zan Hai Gaa?', english: 'Is that really true?', score: 30 },
            { id: 2, canto: '唔係掛？', pinyin: 'M Hai Gwaa?', english: 'You kidding right?', score: 30 },
            { id: 3, canto: '係咁囉', pinyin: 'Hai Gam Lo', english: 'That is just how it is (Lo)', score: 20 },
            { id: 4, canto: '係咁啫', pinyin: 'Hai Gam Jek', english: 'Just that (Zek)', score: 20 }
        ]
    },
    // --- LEVEL 6: ADVANCED (Work, Complaints, Negotiations) ---
    {
        id: 't6_1',
        difficulty: 6,
        title: 'Work Complaints (返工)',
        question: {
            canto: '返工好辛苦點講？',
            pinyin: 'Faan Gung Hou San Fu Dim Gong?',
            english: 'Complaining about work?'
        },
        answers: [
            { id: 1, canto: '做到隻積咁', pinyin: 'Zou Dou Zek Zik Gam', english: 'Working like a dog', score: 35 },
            { id: 2, canto: '老細發神經', pinyin: 'Lou Sai Faat San Ging', english: 'Boss going crazy', score: 30 },
            { id: 3, canto: '想辭職唔撈', pinyin: 'Seung Ci Zik M Lou', english: 'Want to quit', score: 20 },
            { id: 4, canto: 'OT到天光', pinyin: 'OT Dou Tin Gwong', english: 'Overtime until dawn', score: 15 }
        ]
    },
    {
        id: 't6_2',
        difficulty: 6,
        title: 'Angry (發脾氣)',
        question: {
            canto: '好嬲嗰陣會講咩？',
            pinyin: 'Hou Nau Go Zan Wui Gong Me?',
            english: 'What to say when angry?'
        },
        answers: [
            { id: 1, canto: '豈有此理', pinyin: 'Hei Yau Ci Lei', english: 'Outrageous', score: 40 },
            { id: 2, canto: '痴晒線呀', pinyin: 'Chi Saai Sin Aa', english: 'Totally crazy', score: 30 },
            { id: 3, canto: '有無搞錯', pinyin: 'Yau Mou Gaau Co', english: 'Are you kidding?', score: 20 },
            { id: 4, canto: '快啲收聲', pinyin: 'Faai Di Sau Seng', english: 'Shut up now', score: 10 }
        ]
    },
    {
        id: 't6_3',
        difficulty: 6,
        title: 'Rent & Housing (租屋)',
        question: {
            canto: '香港租屋好貴點講？',
            pinyin: 'Heung Gong Zou Uk Hou Gwai Dim Gong?',
            english: 'Talking about expensive rent?'
        },
        answers: [
            { id: 1, canto: '租金好貴', pinyin: 'Zou Gam Hou Gwai', english: 'Rent is expensive', score: 30 },
            { id: 2, canto: '間屋好細', pinyin: 'Gaan Uk Hou Sai', english: 'Room is very small', score: 30 },
            { id: 3, canto: '上車好難', pinyin: 'Seung Ce Hou Naan', english: 'Hard to buy a home', score: 25 },
            { id: 4, canto: '無錢交租', pinyin: 'Mou Cin Gaau Zou', english: 'No money for rent', score: 15 }
        ]
    },
    // --- LEVEL 7: PROFESSIONAL (News, Formal, Events) ---
    {
        id: 't7_1',
        difficulty: 7,
        title: 'Formal Greeting (客套)',
        question: {
            canto: '見到長輩要講咩？',
            pinyin: 'Gin Dou Zoeng Bui Yiu Gong Me?',
            english: 'Greeting elders formally?'
        },
        answers: [
            { id: 1, canto: '身體健康', pinyin: 'San Tai Gin Hong', english: 'Good health', score: 35 },
            { id: 2, canto: '恭喜發財', pinyin: 'Gung Hei Faat Coi', english: 'Prosperity (CNY)', score: 35 },
            { id: 3, canto: '好耐無見', pinyin: 'Hou Noi Mou Gin', english: 'Long time no see', score: 20 },
            { id: 4, canto: '食咗飯未', pinyin: 'Sik Zo Faan Mei', english: 'Have you eaten?', score: 10 }
        ]
    },
    {
        id: 't7_2',
        difficulty: 7,
        title: 'Business (生意)',
        question: {
            canto: '做生意想講咩？',
            pinyin: 'Zou Saang Yi Seung Gong Me?',
            english: 'Business phrases?'
        },
        answers: [
            { id: 1, canto: '生意興隆', pinyin: 'Saang Yi Hing Lung', english: 'Business booming', score: 40 },
            { id: 2, canto: '合作愉快', pinyin: 'Hap Zok Jyu Faai', english: 'Happy cooperation', score: 30 },
            { id: 3, canto: '請多指教', pinyin: 'Ceng Do Zi Gaau', english: 'Please guide me', score: 20 },
            { id: 4, canto: '交換卡片', pinyin: 'Gaau Wun Ka Pin', english: 'Exchange cards', score: 10 }
        ]
    },
    {
        id: 't7_3',
        difficulty: 7,
        title: 'Weddings (飲喜酒)',
        question: {
            canto: '去飲喜酒講咩祝福？',
            pinyin: 'Heoi Yam Hei Zau Gong Me Zuk Fuk?',
            english: 'Wedding blessings?'
        },
        answers: [
            { id: 1, canto: '百年好合', pinyin: 'Baak Nin Hou Hap', english: 'Harmonious union', score: 35 },
            { id: 2, canto: '永結同心', pinyin: 'Wing Git Tung Sam', english: 'United hearts', score: 30 },
            { id: 3, canto: '早生貴子', pinyin: 'Zou Saang Gwai Zi', english: 'Have baby soon', score: 20 },
            { id: 4, canto: '白頭到老', pinyin: 'Baak Tau Dou Lou', english: 'Grow old together', score: 15 }
        ]
    },
    // --- LEVEL 8: EXPERT (Medical, Emergency, Tradition) ---
    {
        id: 't8_1',
        difficulty: 8,
        title: 'Emergency (緊急)',
        question: {
            canto: '發生意外要講咩？',
            pinyin: 'Fat Sang Yi Ngoi Yiu Gong Me?',
            english: 'Emergency phrases?'
        },
        answers: [
            { id: 1, canto: '救命呀', pinyin: 'Gau Meng Aa', english: 'Help!', score: 35 },
            { id: 2, canto: '快啲叫白車', pinyin: 'Faai Di Giu Baak Ce', english: 'Call ambulance now', score: 30 },
            { id: 3, canto: '我要報警', pinyin: 'Ngo Jiu Bou Ging', english: 'I want to call police', score: 20 },
            { id: 4, canto: '唔見咗銀包', pinyin: 'M Gin Zo Ngan Baau', english: 'Lost wallet', score: 15 }
        ]
    },
    {
        id: 't8_2',
        difficulty: 8,
        title: 'Illness (睇醫生)',
        question: {
            canto: '唔舒服點同醫生講？',
            pinyin: 'M Syu Fuk Dim Tung Yi Sang Gong?',
            english: 'Describing illness?'
        },
        answers: [
            { id: 1, canto: '頭暈身㷫', pinyin: 'Tau Wan San Hing', english: 'Dizzy and fever', score: 35 },
            { id: 2, canto: '我肚痛呀', pinyin: 'Ngo Tou Tung Aa', english: 'My stomach hurts', score: 25 },
            { id: 3, canto: '我發燒呀', pinyin: 'Ngo Faat Siu Aa', english: 'I have a fever', score: 25 },
            { id: 4, canto: '我喉嚨痛', pinyin: 'Ngo Hau Lung Tung', english: 'My throat is sore', score: 15 }
        ]
    },
    {
        id: 't8_3',
        difficulty: 8,
        title: 'Traditions (傳統)',
        question: {
            canto: '中秋節會做咩？',
            pinyin: 'Zung Cau Zit Wui Zou Me?',
            english: 'Mid-Autumn Festival activities?'
        },
        answers: [
            { id: 1, canto: '食月餅', pinyin: 'Sik Jyut Beng', english: 'Eat mooncake', score: 35 },
            { id: 2, canto: '一齊賞月', pinyin: 'Yat Cai Soeng Jyut', english: 'Admire the moon together', score: 30 },
            { id: 3, canto: '玩燈籠', pinyin: 'Waan Dang Lung', english: 'Play lanterns', score: 25 },
            { id: 4, canto: '一家團圓', pinyin: 'Yat Gaa Tyun Jyun', english: 'Family reunion', score: 10 }
        ]
    },
    // --- LEVEL 9: MASTER (Idioms, History) ---
    {
        id: 't9_1',
        difficulty: 9,
        title: 'Proverbs (金句)',
        question: {
            canto: '廣東話有咩金句？',
            pinyin: 'Gwong Dung Wa Yau Me Gam Geoi?',
            english: 'Cantonese proverbs?'
        },
        answers: [
            { id: 1, canto: '塞翁失馬', pinyin: 'Sak Jung Sat Maa', english: 'Blessing in disguise', score: 40 },
            { id: 2, canto: '馬死落地行', pinyin: 'Maa Sei Lok Dei Haang', english: 'Adapt to situation', score: 35 },
            { id: 3, canto: '各家自掃門前雪', pinyin: 'Gok Gaa Zi Sou Mun Cin Syut', english: 'Mind own business', score: 25 }
        ]
    },
    {
        id: 't9_2',
        difficulty: 9,
        title: 'Four Character Idioms (成語)',
        question: {
            canto: '講幾個成語嚟聽下？',
            pinyin: 'Gong Gei Go Sing Yu Lei Teng Haa?',
            english: 'Naming idioms?'
        },
        answers: [
            { id: 1, canto: '一石二鳥', pinyin: 'Yat Sek Yi Niu', english: 'Kill two birds with one stone', score: 35 },
            { id: 2, canto: '畫蛇添足', pinyin: 'Waak Se Tim Zuk', english: 'Overdoing it', score: 35 },
            { id: 3, canto: '半途而廢', pinyin: 'Bun Tou Ji Fai', english: 'Give up halfway', score: 30 }
        ]
    },
    {
        id: 't9_3',
        difficulty: 9,
        title: 'Life Wisdom (人生道理)',
        question: {
            canto: '做人最緊要係咩？',
            pinyin: 'Zou Jan Zeoi Gan Yiu Hai Me?',
            english: 'Key to life?'
        },
        answers: [
            { id: 1, canto: '問心無愧', pinyin: 'Man Sam Mou Kwai', english: 'Clear conscience', score: 40 },
            { id: 2, canto: '飲水思源', pinyin: 'Yam Seoi Si Jyun', english: 'Be grateful', score: 35 },
            { id: 3, canto: '知足常樂', pinyin: 'Zi Zuk Seong Lok', english: 'Contentment', score: 25 }
        ]
    },
    // --- LEVEL 10: GRANDMASTER (Philosophy) ---
    {
        id: 't10_1',
        difficulty: 10,
        title: 'Deep Philosophy (哲學)',
        question: {
            canto: '人生係咩？',
            pinyin: 'Jan Sang Hai Me?',
            english: 'What is life?'
        },
        answers: [
            { id: 1, canto: '人生如夢', pinyin: 'Jan Sang Jyu Mung', english: 'Life is like a dream', score: 50 },
            { id: 2, canto: '難得糊塗', pinyin: 'Naan Dak Wu Tou', english: 'Ignorance is bliss', score: 30 },
            { id: 3, canto: '順其自然啦', pinyin: 'Seon Kei Zi Jin Laa', english: 'Let it be naturally', score: 20 }
        ]
    },
    {
        id: 't10_2',
        difficulty: 10,
        title: 'Classical Poem (唐詩)',
        question: {
            canto: '背首唐詩嚟聽下？',
            pinyin: 'Bui Sau Tong Si Lei Teng Haa?',
            english: 'Recite a poem?'
        },
        answers: [
            { id: 1, canto: '床前明月光', pinyin: 'Cong Cin Ming Jyut Gwong', english: 'Moonlight before bed', score: 40 },
            { id: 2, canto: '疑是地上霜', pinyin: 'Yi Si Dei Soeng Soeng', english: 'Like frost on ground', score: 30 },
            { id: 3, canto: '舉頭望明月', pinyin: 'Geoi Tau Mong Ming Jyut', english: 'Look up at moon', score: 20 },
            { id: 4, canto: '低頭思故鄉', pinyin: 'Dai Tau Si Gu Hoeng', english: 'Look down miss home', score: 10 }
        ]
    },
    {
        id: 't10_3',
        difficulty: 10,
        title: 'The Way (道)',
        question: {
            canto: '乜嘢係道？',
            pinyin: 'Mat Ye Hai Dou?',
            english: 'What is the Way?'
        },
        answers: [
            { id: 1, canto: '道可道非常道', pinyin: 'Dou Ho Dou Fei Seung Dou', english: 'The Tao that can be told is not the eternal Tao', score: 60 },
            { id: 2, canto: '上善若水', pinyin: 'Soeng Sin Joek Seoi', english: 'Highest good is like water', score: 40 }
        ]
    },
    {
        id: "t0_4",
        difficulty: 0,
        title: "Simple Verbs (動作)",
        question: { canto: "日常會做咩動作？", pinyin: "Yat Seung Wui Zou Me Dung Zok?", english: "Daily actions?" },
        answers: [
            { id: 1, canto: "食嘢", pinyin: "Sik Ye", english: "Eat thing", score: 30 },
            { id: 2, canto: "飲水", pinyin: "Yam Seoi", english: "Drink water", score: 30 },
            { id: 3, canto: "瞓覺", pinyin: "Fan Gaau", english: "Sleep", score: 25 },
            { id: 4, canto: "行路", pinyin: "Haang Lou", english: "Walk", score: 15 }
        ]
    }
];
