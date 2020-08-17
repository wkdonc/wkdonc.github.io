// Calculate conjugated forms using a rule set

// Should add ある and いる.

var words = {

  "走る":       { "group": "godan",        "dictionary": "走[はし]る", },
  "死ぬ":       { "group": "godan",        "dictionary": "死[し]ぬ", },
  "上る":       { "group": "godan",        "dictionary": "上[のぼ]る", },
  "聞く":       { "group": "godan",        "dictionary": "聞[き]く", },
  "書く":       { "group": "godan",        "dictionary": "書[か]く", },
  "消す":       { "group": "godan",        "dictionary": "消[け]す", },
  "遊ぶ":       { "group": "godan",        "dictionary": "遊[あそ]ぶ", },
  "学ぶ":       { "group": "godan",        "dictionary": "学[まな]ぶ", },
  "喜ぶ":       { "group": "godan",        "dictionary": "喜[よろこ]ぶ", },
  "泳ぐ":       { "group": "godan",        "dictionary": "泳[およ]ぐ", },
  "注ぐ":       { "group": "godan",        "dictionary": "注[そそ]ぐ", },
  "急ぐ":       { "group": "godan",        "dictionary": "急[いそ]ぐ", },
  "立つ":       { "group": "godan",        "dictionary": "立[た]つ", },
  "持つ":       { "group": "godan",        "dictionary": "持[も]つ", },
  "打つ":       { "group": "godan",        "dictionary": "打[う]つ", },
  "飲む":       { "group": "godan",        "dictionary": "飲[の]む", },
  "作る":       { "group": "godan",        "dictionary": "作[つく]る", },
  "買い戻す":   { "group": "godan",        "dictionary": "買[か]い戻[もど]す", },
  "読む":       { "group": "godan",        "dictionary": "読[よ]む", },
  "思う":       { "group": "godan",        "dictionary": "思[おも]う", },
  "座る":       { "group": "godan",        "dictionary": "座[すわ]る", },
  "休む":       { "group": "godan",        "dictionary": "休[やす]む", },
  "足す":       { "group": "godan",        "dictionary": "足[た]す", },
  "歌う":       { "group": "godan",        "dictionary": "歌[うた]う", },
  "買う":       { "group": "godan",        "dictionary": "買[か]う", },

  "上げる":     { "group": "ichidan",      "dictionary": "上[あ]げる", },
  "着る":       { "group": "ichidan",      "dictionary": "着[き]る", },
  "育てる":     { "group": "ichidan",      "dictionary": "育[そだ]てる", },
  "褒める":     { "group": "ichidan",      "dictionary": "褒[ほ]める", },
  "出る":       { "group": "ichidan",      "dictionary": "出[で]る", },
  "食べる":     { "group": "ichidan",      "dictionary": "食[た]べる", },
  "起きる":     { "group": "ichidan",      "dictionary": "起[お]きる", },
  "買い換える": { "group": "ichidan",      "dictionary": "買[か]い換[か]える", },
  "買い与える": { "group": "ichidan",      "dictionary": "買[か]い与[あた]える", },

  "行く":       { "group": "iku",          "dictionary": "行[い]く", },

  "する":       { "group": "suru",         "dictionary": "する", },
  "勉強する":   { "group": "suru",         "dictionary": "勉[べん]強[きょう]する", },
  "電話する":   { "group": "suru",         "dictionary": "電[でん]話[わ]する", },
  "開発する":   { "group": "suru",         "dictionary": "開[かい]発[はつ]する", },
  "計算する":   { "group": "suru",         "dictionary": "計[けい]算[さん]する", },

  "来る":       { "group": "kuru",         "dictionary": "来[く]る", },

  "高い":       { "group": "i-adjective",  "dictionary": "高[たか]い", },
  "面白い":     { "group": "i-adjective",  "dictionary": "面[おも]白[しろ]い", },
  "暗い":       { "group": "i-adjective",  "dictionary": "暗[くら]い", },
  "暖かい":     { "group": "i-adjective",  "dictionary": "暖[あたた]かい", },
  "華々しい":   { "group": "i-adjective",  "dictionary": "華[はな]々[ばな]しい", },
  "怖い":       { "group": "i-adjective",  "dictionary": "怖[こわ]い", },
  "硬い":       { "group": "i-adjective",  "dictionary": "硬[かた]い", },

  "いい":       { "group": "ii",           "dictionary": "いい", },

  "有名":       { "group": "na-adjective", "dictionary": "有[ゆう]名[めい]だ", },
  "好き":       { "group": "na-adjective", "dictionary": "好[す]きだ", },
  "元気":       { "group": "na-adjective", "dictionary": "元[げん]気[き]だ", },
  "意地悪":     { "group": "na-adjective", "dictionary": "意[い]地[じ]悪[わる]だ", },
  "静":         { "group": "na-adjective", "dictionary": "静[しず]かだ", },
  "便利":       { "group": "na-adjective", "dictionary": "便[べん]利[り]だ", },
  "上手":       { "group": "na-adjective", "dictionary": "上[じょう]手[ず]だ", },
  "幸い":       { "group": "na-adjective", "dictionary": "幸[さいわ]いだ", },
};

var rules = {

  "godan": {

    "negative": {
    
      forms: [
        { "before": "る", "after": "らない" },
        { "before": "つ", "after": "たない" },
        { "before": "う", "after": "わない" },
        { "before": "く", "after": "かない" },
        { "before": "ぐ", "after": "がない" },
        { "before": "す", "after": "さない" },
        { "before": "ぬ", "after": "なない" },
        { "before": "ぶ", "after": "ばない" },
        { "before": "む", "after": "まない" },
      ],
    },

    "polite": {

      forms: [
        { "before": "る", "after": "ります" },
        { "before": "つ", "after": "ちます" },
        { "before": "う", "after": "います" },
        { "before": "く", "after": "きます" },
        { "before": "ぐ", "after": "ぎます" },
        { "before": "す", "after": "します" },
        { "before": "ぬ", "after": "にます" },
        { "before": "ぶ", "after": "びます" },
        { "before": "む", "after": "みます" },
      ],
    },

    "polite negative": {

      forms: [
        { "before": "る", "after": "りません" },
        { "before": "つ", "after": "ちません" },
        { "before": "う", "after": "いません" },
        { "before": "く", "after": "きません" },
        { "before": "ぐ", "after": "ぎません" },
        { "before": "す", "after": "しません" },
        { "before": "ぬ", "after": "にません" },
        { "before": "ぶ", "after": "びません" },
        { "before": "む", "after": "みません" },
      ],
    },

    "past": {

      forms: [
        { "before": "る", "after": "った" },
        { "before": "つ", "after": "った" },
        { "before": "う", "after": "った" },
        { "before": "く", "after": "いた" },
        { "before": "ぐ", "after": "いだ" },
        { "before": "す", "after": "した" },
        { "before": "ぬ", "after": "んだ" },
        { "before": "ぶ", "after": "んだ" },
        { "before": "む", "after": "んだ" },
      ],

      tetakei: true,
    },

    "past negative": {

      forms: [
        { "before": "る", "after": "らなかった" },
        { "before": "つ", "after": "たなかった" },
        { "before": "う", "after": "わなかった" },
        { "before": "く", "after": "かなかった" },
        { "before": "ぐ", "after": "がなかった" },
        { "before": "す", "after": "さなかった" },
        { "before": "ぬ", "after": "ななかった" },
        { "before": "ぶ", "after": "ばなかった" },
        { "before": "む", "after": "まなかった" },
      ],
    },

    "polite past": {
      
      forms: [
        { "before": "る", "after": "りました" },
        { "before": "つ", "after": "ちました" },
        { "before": "う", "after": "いました" },
        { "before": "く", "after": "きました" },
        { "before": "ぐ", "after": "ぎました" },
        { "before": "す", "after": "しました" },
        { "before": "ぬ", "after": "にました" },
        { "before": "ぶ", "after": "びました" },
        { "before": "む", "after": "みました" },
      ],
    },

    "polite past negative": {
      
      forms: [
        { "before": "る", "after": "りませんでした" },
        { "before": "つ", "after": "ちませんでした" },
        { "before": "う", "after": "いませんでした" },
        { "before": "く", "after": "きませんでした" },
        { "before": "ぐ", "after": "ぎませんでした" },
        { "before": "す", "after": "しませんでした" },
        { "before": "ぬ", "after": "にませんでした" },
        { "before": "ぶ", "after": "びませんでした" },
        { "before": "む", "after": "みませんでした" },
      ],
    },

    "te-form": {
      
      forms: [
        { "before": "る", "after": "って" },
        { "before": "つ", "after": "って" },
        { "before": "う", "after": "って" },
        { "before": "く", "after": "いて" },
        { "before": "ぐ", "after": "いで" },
        { "before": "す", "after": "して" },
        { "before": "ぬ", "after": "んで" },
        { "before": "ぶ", "after": "んで" },
        { "before": "む", "after": "んで" },
      ],

      tetakei: true,
    },

    "te-form negative": {
      
      forms: [
        { "before": "る", "after": "らなくて"}, { "before": "る", "after": "らないで"},
        { "before": "つ", "after": "たなくて"}, { "before": "つ", "after": "たないで"},
        { "before": "う", "after": "わなくて"}, { "before": "う", "after": "わないで"},
        { "before": "く", "after": "かなくて"}, { "before": "く", "after": "かないで"},
        { "before": "ぐ", "after": "がなくて"}, { "before": "ぐ", "after": "がないで"},
        { "before": "す", "after": "さなくて"}, { "before": "す", "after": "さないで"},
        { "before": "ぬ", "after": "ななくて"}, { "before": "ぬ", "after": "なないで"},
        { "before": "ぶ", "after": "ばなくて"}, { "before": "ぶ", "after": "ばないで"},
        { "before": "む", "after": "まなくて"}, { "before": "む", "after": "まないで"},
      ],
    },

    "potential": {
      
      forms: [
        { "before": "る", "after": "れる" },
        { "before": "つ", "after": "てる" },
        { "before": "う", "after": "える" },
        { "before": "く", "after": "ける" },
        { "before": "ぐ", "after": "げる" },
        { "before": "す", "after": "せる" },
        { "before": "ぬ", "after": "ねる" },
        { "before": "ぶ", "after": "べる" },
        { "before": "む", "after": "める" },
      ],
    },

    "potential negative": {
      
      forms: [
        { "before": "る", "after": "れない" },
        { "before": "つ", "after": "てない" },
        { "before": "う", "after": "えない" },
        { "before": "く", "after": "けない" },
        { "before": "ぐ", "after": "げない" },
        { "before": "す", "after": "せない" },
        { "before": "ぬ", "after": "ねない" },
        { "before": "ぶ", "after": "べない" },
        { "before": "む", "after": "めない" },
      ],
    },

    "polite potential": {
      
      forms: [
        { "before": "る", "after": "れます" },
        { "before": "つ", "after": "てます" },
        { "before": "う", "after": "えます" },
        { "before": "く", "after": "けます" },
        { "before": "ぐ", "after": "げます" },
        { "before": "す", "after": "せます" },
        { "before": "ぬ", "after": "ねます" },
        { "before": "ぶ", "after": "べます" },
        { "before": "む", "after": "めます" },
      ],
    },

    "polite potential negative": {
      
      forms: [
        { "before": "る", "after": "れません" },
        { "before": "つ", "after": "てません" },
        { "before": "う", "after": "えません" },
        { "before": "く", "after": "けません" },
        { "before": "ぐ", "after": "げません" },
        { "before": "す", "after": "せません" },
        { "before": "ぬ", "after": "ねません" },
        { "before": "ぶ", "after": "べません" },
        { "before": "む", "after": "めません" },
      ],
    },

    "passive": {
      
      forms: [
        { "before": "る", "after": "られる" },
        { "before": "つ", "after": "たれる" },
        { "before": "う", "after": "われる" },
        { "before": "く", "after": "かれる" },
        { "before": "ぐ", "after": "がれる" },
        { "before": "す", "after": "される" },
        { "before": "ぬ", "after": "なれる" },
        { "before": "ぶ", "after": "ばれる" },
        { "before": "む", "after": "まれる" },
      ],
    },

    "passive negative": {
      
      forms: [
        { "before": "る", "after": "られない" },
        { "before": "つ", "after": "たれない" },
        { "before": "う", "after": "われない" },
        { "before": "く", "after": "かれない" },
        { "before": "ぐ", "after": "がれない" },
        { "before": "す", "after": "されない" },
        { "before": "ぬ", "after": "なれない" },
        { "before": "ぶ", "after": "ばれない" },
        { "before": "む", "after": "まれない" },
      ],
    },

    "passive past": {
      
      forms: [
        { "before": "る", "after": "られた" },
        { "before": "つ", "after": "たれた" },
        { "before": "う", "after": "われた" },
        { "before": "く", "after": "かれた" },
        { "before": "ぐ", "after": "がれた" },
        { "before": "す", "after": "された" },
        { "before": "ぬ", "after": "なれた" },
        { "before": "ぶ", "after": "ばれた" },
        { "before": "む", "after": "まれた" },
      ],
    },

    "passive past negative": {
      
      forms: [
        { "before": "る", "after": "られなかった" },
        { "before": "つ", "after": "たれなかった" },
        { "before": "う", "after": "われなかった" },
        { "before": "く", "after": "かれなかった" },
        { "before": "ぐ", "after": "がれなかった" },
        { "before": "す", "after": "されなかった" },
        { "before": "ぬ", "after": "なれなかった" },
        { "before": "ぶ", "after": "ばれなかった" },
        { "before": "む", "after": "まれなかった" },
      ],
    },

    "passive te-form": {
      
      forms: [
        { "before": "る", "after": "られて" },
        { "before": "つ", "after": "たれて" },
        { "before": "う", "after": "われて" },
        { "before": "く", "after": "かれて" },
        { "before": "ぐ", "after": "がれて" },
        { "before": "す", "after": "されて" },
        { "before": "ぬ", "after": "なれて" },
        { "before": "ぶ", "after": "ばれて" },
        { "before": "む", "after": "まれて" },
      ],
    },

    "polite passive": {
      
      forms: [
        { "before": "る", "after": "られます" },
        { "before": "つ", "after": "たれます" },
        { "before": "う", "after": "われます" },
        { "before": "く", "after": "かれます" },
        { "before": "ぐ", "after": "がれます" },
        { "before": "す", "after": "されます" },
        { "before": "ぬ", "after": "なれます" },
        { "before": "ぶ", "after": "ばれます" },
        { "before": "む", "after": "まれます" },
      ],
    },

    "polite passive negative": {
      
      forms: [
        { "before": "る", "after": "られません" },
        { "before": "つ", "after": "たれません" },
        { "before": "う", "after": "われません" },
        { "before": "く", "after": "かれません" },
        { "before": "ぐ", "after": "がれません" },
        { "before": "す", "after": "されません" },
        { "before": "ぬ", "after": "なれません" },
        { "before": "ぶ", "after": "ばれません" },
        { "before": "む", "after": "まれません" },
      ],
    },

    "polite passive past": {
      
      forms: [
        { "before": "る", "after": "られました" },
        { "before": "つ", "after": "たれました" },
        { "before": "う", "after": "われました" },
        { "before": "く", "after": "かれました" },
        { "before": "ぐ", "after": "がれました" },
        { "before": "す", "after": "されました" },
        { "before": "ぬ", "after": "なれました" },
        { "before": "ぶ", "after": "ばれました" },
        { "before": "む", "after": "まれました" },
      ],
    },

    "polite passive past negative": {
      
      forms: [
        { "before": "る", "after": "られませんでした" },
        { "before": "つ", "after": "たれませんでした" },
        { "before": "う", "after": "われませんでした" },
        { "before": "く", "after": "かれませんでした" },
        { "before": "ぐ", "after": "がれませんでした" },
        { "before": "す", "after": "されませんでした" },
        { "before": "ぬ", "after": "なれませんでした" },
        { "before": "ぶ", "after": "ばれませんでした" },
        { "before": "む", "after": "まれませんでした" },
      ],
    },

    "causative": {
      
      forms: [
        { "before": "る", "after": "らせる" },
        { "before": "つ", "after": "たせる" },
        { "before": "う", "after": "わせる" },
        { "before": "く", "after": "かせる" },
        { "before": "ぐ", "after": "がせる" },
        { "before": "す", "after": "させる" },
        { "before": "ぬ", "after": "なせる" },
        { "before": "ぶ", "after": "ばせる" },
        { "before": "む", "after": "ませる" },
      ],
    },

    "causative negative": {
      
      forms: [
        { "before": "る", "after": "らせない" },
        { "before": "つ", "after": "たせない" },
        { "before": "う", "after": "わせない" },
        { "before": "く", "after": "かせない" },
        { "before": "ぐ", "after": "がせない" },
        { "before": "す", "after": "させない" },
        { "before": "ぬ", "after": "なせない" },
        { "before": "ぶ", "after": "ばせない" },
        { "before": "む", "after": "ませない" },
      ],
    },

    "causative past": {
      
      forms: [
        { "before": "る", "after": "らせた" },
        { "before": "つ", "after": "たせた" },
        { "before": "う", "after": "わせた" },
        { "before": "く", "after": "かせた" },
        { "before": "ぐ", "after": "がせた" },
        { "before": "す", "after": "させた" },
        { "before": "ぬ", "after": "なせた" },
        { "before": "ぶ", "after": "ばせた" },
        { "before": "む", "after": "ませた" },
      ],
    },

    "causative past negative": {
      
      forms: [
        { "before": "る", "after": "らせなかった" },
        { "before": "つ", "after": "たせなかった" },
        { "before": "う", "after": "わせなかった" },
        { "before": "く", "after": "かせなかった" },
        { "before": "ぐ", "after": "がせなかった" },
        { "before": "す", "after": "させなかった" },
        { "before": "ぬ", "after": "なせなかった" },
        { "before": "ぶ", "after": "ばせなかった" },
        { "before": "む", "after": "ませなかった" },
      ],
    },

    "causative passive": {
      
      forms: [
        { "before": "る", "after": "らせられる" },
        { "before": "つ", "after": "たせられる" },
        { "before": "う", "after": "わせられる" },
        { "before": "く", "after": "かせられる" },
        { "before": "ぐ", "after": "がせられる" },
        { "before": "す", "after": "させられる" },
        { "before": "ぬ", "after": "なせられる" },
        { "before": "ぶ", "after": "ばせられる" },
        { "before": "む", "after": "ませられる" },
      ],
    },

    "causative passive negative": {
      
      forms: [
        { "before": "る", "after": "らせられない" },
        { "before": "つ", "after": "たせられない" },
        { "before": "う", "after": "わせられない" },
        { "before": "く", "after": "かせられない" },
        { "before": "ぐ", "after": "がせられない" },
        { "before": "す", "after": "させられない" },
        { "before": "ぬ", "after": "なせられない" },
        { "before": "ぶ", "after": "ばせられない" },
        { "before": "む", "after": "ませられない" },
      ],
    },

    "causative passive past": {
      
      forms: [
        { "before": "る", "after": "らせられた" },
        { "before": "つ", "after": "たせられた" },
        { "before": "う", "after": "わせられた" },
        { "before": "く", "after": "かせられた" },
        { "before": "ぐ", "after": "がせられた" },
        { "before": "す", "after": "させられた" },
        { "before": "ぬ", "after": "なせられた" },
        { "before": "ぶ", "after": "ばせられた" },
        { "before": "む", "after": "ませられた" },
      ],
    },

    "causative passive negative past": {
      
      forms: [
        { "before": "る", "after": "らせられなかった" },
        { "before": "つ", "after": "たせられなかった" },
        { "before": "う", "after": "わせられなかった" },
        { "before": "く", "after": "かせられなかった" },
        { "before": "ぐ", "after": "がせられなかった" },
        { "before": "す", "after": "させられなかった" },
        { "before": "ぬ", "after": "なせられなかった" },
        { "before": "ぶ", "after": "ばせられなかった" },
        { "before": "む", "after": "ませられなかった" },
      ],
    },

    "imperative": {
      
      forms: [
        { "before": "る", "after": "れ" },
        { "before": "つ", "after": "て" },
        { "before": "う", "after": "え" },
        { "before": "く", "after": "け" },
        { "before": "ぐ", "after": "げ" },
        { "before": "す", "after": "せ" },
        { "before": "ぬ", "after": "ね" },
        { "before": "ぶ", "after": "べ" },
        { "before": "む", "after": "め" },
      ],
    },

    "imperative negative": {
      
      forms: [
        { "before": "る", "after": "るな" },
        { "before": "つ", "after": "つな" },
        { "before": "う", "after": "うな" },
        { "before": "く", "after": "くな" },
        { "before": "ぐ", "after": "ぐな" },
        { "before": "す", "after": "すな" },
        { "before": "ぬ", "after": "ぬな" },
        { "before": "ぶ", "after": "ぶな" },
        { "before": "む", "after": "むな" },
      ],
    },

    "progressive": {
      
      forms: [
        { "before": "る", "after": "っている" },
        { "before": "つ", "after": "っている" },
        { "before": "う", "after": "っている" },
        { "before": "く", "after": "いている" },
        { "before": "ぐ", "after": "いでいる" },
        { "before": "す", "after": "している" },
        { "before": "ぬ", "after": "んでいる" },
        { "before": "ぶ", "after": "んでいる" },
        { "before": "む", "after": "んでいる" },
      ],

      tetakei: true,
    },

    "progressive negative": {
      
      forms: [
        { "before": "る", "after": "っていない" },
        { "before": "つ", "after": "っていない" },
        { "before": "う", "after": "っていない" },
        { "before": "く", "after": "いていない" },
        { "before": "ぐ", "after": "いでいない" },
        { "before": "す", "after": "していない" },
        { "before": "ぬ", "after": "んでいない" },
        { "before": "ぶ", "after": "んでいない" },
        { "before": "む", "after": "んでいない" },
      ],

      tetakei: true,
    },

    "polite progressive": {
      
      forms: [
        { "before": "る", "after": "っています" },
        { "before": "つ", "after": "っています" },
        { "before": "う", "after": "っています" },
        { "before": "く", "after": "いています" },
        { "before": "ぐ", "after": "いでいます" },
        { "before": "す", "after": "しています" },
        { "before": "ぬ", "after": "んでいます" },
        { "before": "ぶ", "after": "んでいます" },
        { "before": "む", "after": "んでいます" },
      ],

      tetakei: true,
    },

    "polite progressive negative": {
      
      forms: [
        { "before": "る", "after": "っていません" },
        { "before": "つ", "after": "っていません" },
        { "before": "う", "after": "っていません" },
        { "before": "く", "after": "いていません" },
        { "before": "ぐ", "after": "いでいません" },
        { "before": "す", "after": "していません" },
        { "before": "ぬ", "after": "んでいません" },
        { "before": "ぶ", "after": "んでいません" },
        { "before": "む", "after": "んでいません" },
      ],

      tetakei: true,
    },

    "progressive past": {
      
      forms: [
        { "before": "る", "after": "っていた" },
        { "before": "つ", "after": "っていた" },
        { "before": "う", "after": "っていた" },
        { "before": "く", "after": "いていた" },
        { "before": "ぐ", "after": "いでいた" },
        { "before": "す", "after": "していた" },
        { "before": "ぬ", "after": "んでいた" },
        { "before": "ぶ", "after": "んでいた" },
        { "before": "む", "after": "んでいた" },
      ],

      tetakei: true,
    },

    "progressive past negative": {
      
      forms: [
        { "before": "る", "after": "っていなかった" },
        { "before": "つ", "after": "っていなかった" },
        { "before": "う", "after": "っていなかった" },
        { "before": "く", "after": "いていなかった" },
        { "before": "ぐ", "after": "いでいなかった" },
        { "before": "す", "after": "していなかった" },
        { "before": "ぬ", "after": "んでいなかった" },
        { "before": "ぶ", "after": "んでいなかった" },
        { "before": "む", "after": "んでいなかった" },
      ],

      tetakei: true,
    },

    "polite progressive past": {
      
      forms: [
        { "before": "る", "after": "っていました" },
        { "before": "つ", "after": "っていました" },
        { "before": "う", "after": "っていました" },
        { "before": "く", "after": "いていました" },
        { "before": "ぐ", "after": "いでいました" },
        { "before": "す", "after": "していました" },
        { "before": "ぬ", "after": "んでいました" },
        { "before": "ぶ", "after": "んでいました" },
        { "before": "む", "after": "んでいました" },
      ],

      tetakei: true,
    },

    "polite progressive past negative": {
      
      forms: [
        { "before": "る", "after": "っていませんでした" },
        { "before": "つ", "after": "っていませんでした" },
        { "before": "う", "after": "っていませんでした" },
        { "before": "く", "after": "いていませんでした" },
        { "before": "ぐ", "after": "いでいませんでした" },
        { "before": "す", "after": "していませんでした" },
        { "before": "ぬ", "after": "んでいませんでした" },
        { "before": "ぶ", "after": "んでいませんでした" },
        { "before": "む", "after": "んでいませんでした" },
      ],

      tetakei: true,
    },

    "desire": {
      
      forms: [
        { "before": "る", "after": "りたい" },
        { "before": "つ", "after": "ちたい" },
        { "before": "う", "after": "いたい" },
        { "before": "く", "after": "きたい" },
        { "before": "ぐ", "after": "ぎたい" },
        { "before": "す", "after": "したい" },
        { "before": "ぬ", "after": "にたい" },
        { "before": "ぶ", "after": "びたい" },
        { "before": "む", "after": "みたい" },
      ],
    },

    "desire negative": {
      
      forms: [
        { "before": "る", "after": "りたくない" },
        { "before": "つ", "after": "ちたくない" },
        { "before": "う", "after": "いたくない" },
        { "before": "く", "after": "きたくない" },
        { "before": "ぐ", "after": "ぎたくない" },
        { "before": "す", "after": "したくない" },
        { "before": "ぬ", "after": "にたくない" },
        { "before": "ぶ", "after": "びたくない" },
        { "before": "む", "after": "みたくない" },
      ],
    },

    "desire past": {
      
      forms: [
        { "before": "る", "after": "りたかった" },
        { "before": "つ", "after": "ちたかった" },
        { "before": "う", "after": "いたかった" },
        { "before": "く", "after": "きたかった" },
        { "before": "ぐ", "after": "ぎたかった" },
        { "before": "す", "after": "したかった" },
        { "before": "ぬ", "after": "にたかった" },
        { "before": "ぶ", "after": "びたかった" },
        { "before": "む", "after": "みたかった" },
      ],
    },

    "desire past negative": {
      
      forms: [
        { "before": "る", "after": "りたくなかった" },
        { "before": "つ", "after": "ちたくなかった" },
        { "before": "う", "after": "いたくなかった" },
        { "before": "く", "after": "きたくなかった" },
        { "before": "ぐ", "after": "ぎたくなかった" },
        { "before": "す", "after": "したくなかった" },
        { "before": "ぬ", "after": "にたくなかった" },
        { "before": "ぶ", "after": "びたくなかった" },
        { "before": "む", "after": "みたくなかった" },
      ],
    },
    
    "desire te-form": {
      
      forms: [
        { "before": "る", "after": "りたくて" },
        { "before": "つ", "after": "ちたくて" },
        { "before": "う", "after": "いたくて" },
        { "before": "く", "after": "きたくて" },
        { "before": "ぐ", "after": "ぎたくて" },
        { "before": "す", "after": "したくて" },
        { "before": "ぬ", "after": "にたくて" },
        { "before": "ぶ", "after": "びたくて" },
        { "before": "む", "after": "みたくて" },
      ],
    },
    
    "desire te-form negative": {
      
      forms: [
        { "before": "る", "after": "りたくなくて" },
        { "before": "つ", "after": "ちたくなくて" },
        { "before": "う", "after": "いたくなくて" },
        { "before": "く", "after": "きたくなくて" },
        { "before": "ぐ", "after": "ぎたくなくて" },
        { "before": "す", "after": "したくなくて" },
        { "before": "ぬ", "after": "にたくなくて" },
        { "before": "ぶ", "after": "びたくなくて" },
        { "before": "む", "after": "みたくなくて" },
      ],
    },

    "desire polite": {
      
      forms: [
        { "before": "る", "after": "りたいです" },
        { "before": "つ", "after": "ちたいです" },
        { "before": "う", "after": "いたいです" },
        { "before": "く", "after": "きたいです" },
        { "before": "ぐ", "after": "ぎたいです" },
        { "before": "す", "after": "したいです" },
        { "before": "ぬ", "after": "にたいです" },
        { "before": "ぶ", "after": "びたいです" },
        { "before": "む", "after": "みたいです" },
      ],
    },

    "desire polite negative": {
      
      forms: [
        { "before": "る", "after": "りたくないです" },
        { "before": "つ", "after": "ちたくないです" },
        { "before": "う", "after": "いたくないです" },
        { "before": "く", "after": "きたくないです" },
        { "before": "ぐ", "after": "ぎたくないです" },
        { "before": "す", "after": "したくないです" },
        { "before": "ぬ", "after": "にたくないです" },
        { "before": "ぶ", "after": "びたくないです" },
        { "before": "む", "after": "みたくないです" },
      ],
    },

    "desire polite past": {
      
      forms: [
        { "before": "る", "after": "りたかったです" },
        { "before": "つ", "after": "ちたかったです" },
        { "before": "う", "after": "いたかったです" },
        { "before": "く", "after": "きたかったです" },
        { "before": "ぐ", "after": "ぎたかったです" },
        { "before": "す", "after": "したかったです" },
        { "before": "ぬ", "after": "にたかったです" },
        { "before": "ぶ", "after": "びたかったです" },
        { "before": "む", "after": "みたかったです" },
      ],
    },

    "desire polite past negative": {
      
      forms: [
        { "before": "る", "after": "りたくなかったです" },
        { "before": "つ", "after": "ちたくなかったです" },
        { "before": "う", "after": "いたくなかったです" },
        { "before": "く", "after": "きたくなかったです" },
        { "before": "ぐ", "after": "ぎたくなかったです" },
        { "before": "す", "after": "したくなかったです" },
        { "before": "ぬ", "after": "にたくなかったです" },
        { "before": "ぶ", "after": "びたくなかったです" },
        { "before": "む", "after": "みたくなかったです" },
      ],
    },

    "volitional": {
      
      forms: [
        { "before": "る", "after": "ろう" },
        { "before": "つ", "after": "とう" },
        { "before": "う", "after": "おう" },
        { "before": "く", "after": "こう" },
        { "before": "ぐ", "after": "ごう" },
        { "before": "す", "after": "そう" },
        { "before": "ぬ", "after": "のう" },
        { "before": "ぶ", "after": "ぼう" },
        { "before": "む", "after": "もう" },
      ],
    },

    "polite volitional": {

      forms: [
        { "before": "る", "after": "りましょう" },
        { "before": "つ", "after": "ちましょう" },
        { "before": "う", "after": "いましょう" },
        { "before": "く", "after": "きましょう" },
        { "before": "ぐ", "after": "ぎましょう" },
        { "before": "す", "after": "しましょう" },
        { "before": "ぬ", "after": "にましょう" },
        { "before": "ぶ", "after": "びましょう" },
        { "before": "む", "after": "みましょう" },
      ],
    },
  },

  "ichidan": {

    "negative": { forms: [ { "before": "る", "after": "ない" }, ], },
    "polite": { forms: [ { "before": "る", "after": "ます" }, ], },
    "polite negative": { forms: [ { "before": "る", "after": "ません" }, ], },
    "past": { forms: [ { "before": "る", "after": "た" }, ], },
    "past negative": { forms: [ { "before": "る", "after": "なかった" }, ], },
    "polite past": { forms: [ { "before": "る", "after": "ました" }, ], },
    "polite past negative": { forms: [ { "before": "る", "after": "ませんでした" }, ], },
    "te-form": { forms: [ { "before": "る", "after": "て" }, ], },
    "te-form negative": { forms: [ { "before": "る", "after": "なくて" }, { "before": "る", "after": "ないで" } ], },
    "potential": { forms: [ { "before": "る", "after": "られる" } ], },
    "potential negative": { forms: [ { "before": "る", "after": "られない" } ], },
    "polite potential": { forms: [ { "before": "る", "after": "られます" } ], },
    "polite potential negative": { forms: [ { "before": "る", "after": "られません" } ], },
    "imperative": { forms: [ { "before": "る", "after": "ろ" } ], },
    "imperative negative": { forms: [ { "before": "る", "after": "るな" } ], },
    "passive": { forms: [ { "before": "る", "after": "られる" }, { "before": "る", "after": "れる" } ] },
    "passive negative": { forms: [ { "before": "る", "after": "られない" } ], },
    "passive past": { forms: [ { "before": "る", "after": "られた" } ] },
    "passive past negative": { forms: [ { "before": "る", "after": "られなかった" } ], },
    "passive te-form": { forms: [ { "before": "る", "after": "られて" } ], },
    "polite passive": { forms: [ { "before": "る", "after": "られます" } ], },
    "polite passive negative": { forms: [ { "before": "る", "after": "られません" } ], },
    "polite passive past": { forms: [ { "before": "る", "after": "られました" } ], },
    "polite passive past negative": { forms: [ { "before": "る", "after": "られませんでした" } ], },
    "causative": { forms: [ { "before": "る", "after": "させる" } ], },
    "causative negative": { forms: [ { "before": "る", "after": "させない" } ], },
    "causative past": { forms: [ { "before": "る", "after": "させた" } ], },
    "causative past negative": { forms: [ { "before": "る", "after": "させなかった" } ], },
    "causative passive": { forms: [ { "before": "る", "after": "させられる" } ], },
    "causative passive negative": { forms: [ { "before": "る", "after": "させられない" } ], },
    "causative passive past": { forms: [ { "before": "る", "after": "させられた" } ], },
    "causative passive past negative": { forms: [ { "before": "る", "after": "させられなかった" } ], },
    "progressive": { forms: [ { "before": "る", "after": "ている" } ], },
    "progressive negative": { forms: [ { "before": "る", "after": "ていない" } ], },
    "polite progressive": { forms: [ { "before": "る", "after": "ています" } ], },
    "polite progressive negative": { forms: [ { "before": "る", "after": "ていません" } ], },
    "progressive past": { forms: [ { "before": "る", "after": "ていた" } ], },
    "progressive past negative": { forms: [ { "before": "る", "after": "ていなかった" } ], },
    "polite progressive past": { forms: [ { "before": "る", "after": "ていました" } ], },
    "polite progressive past negative": { forms: [ { "before": "る", "after": "ていませんでした" } ], },
    "desire": { forms: [ { "before": "る", "after": "たい" }, ], },
    "desire negative": { forms: [ { "before": "る", "after": "たくない" }, ], },
    "desire past": { forms: [ { "before": "る", "after": "たかった" }, ], },
    "desire past negative": { forms: [ { "before": "る", "after": "たくなかった" }, ], },
    "desire te-form": { forms: [ { "before": "る", "after": "たくて" }, ], },
    "desire te-form negative": { forms: [ { "before": "る", "after": "たくなくて" }, ], },
    "desire polite": { forms: [ { "before": "る", "after": "たいです" }, ], },
    "desire polite negative": { forms: [ { "before": "る", "after": "たくないです" }, ], },
    "desire polite past": { forms: [ { "before": "る", "after": "たかったです" }, ], },
    "desire polite past negative": { forms: [ { "before": "る", "after": "たくなかったです" }, ], },
    "volitional": { forms: [ { "before": "る", "after": "よう" }, ], },
    "polite volitional": { forms: [ { "before": "る", "after": "ましょう" }, ], },
  },

  "iku": {
    "negative": { forms: [ { "result": "行[い]かない" }, ], },
    "polite": { forms: [ { "result": "行[い]きます" }, ], },
    "polite negative": { forms: [ { "result": "行[い]きません" }, ], },
    "past": { forms: [ { "result": "行[い]った" }, ], },
    "past negative": { forms: [ { "result": "行[い]かなかった" }, ], },
    "polite past": { forms: [ { "result": "行[い]きました" }, ], },
    "polite past negative": { forms: [ { "result": "行[い]きませんでした" }, ], },
    "te-form": { forms: [ { "result": "行[い]って" }, ], },
    "te-form negative": { forms: [ { "result": "行[い]かなくて" }, { "result": "行[い]かないで" } ], },
    "potential": { forms: [ { "result": "行[い]ける" } ], },
    "potential negative": { forms: [ { "result": "行[い]けない" } ], },
    "polite potential": { forms: [ { "result": "行[い]けます" } ], },
    "polite potential negative": { forms: [ { "result": "行[い]けません" } ], },
    "imperative": { forms: [ { "result": "行[い]け" } ], },
    "imperative negative": { forms: [ { "result": "行[い]くな" } ], },
    "passive": { forms: [ { "result": "行[い]かれる" } ], },
    "passive negative": { forms: [ { "result": "行[い]かれない" } ], },
    "passive past": { forms: [ { "result": "行[い]かれた" } ], },
    "passive past negative": { forms: [ { "result": "行[い]かれなかった" } ], },
    "passive te-form": { forms: [ { "result": "行[い]かれて" } ], },
    "polite passive": { forms: [ { "result": "行[い]かれます" } ], },
    "polite passive negative": { forms: [ { "result": "行[い]かれません" } ], },
    "polite passive past": { forms: [ { "result": "行[い]かれました" } ], },
    "polite passive past negative": { forms: [ { "result": "行[い]かれませんでした" } ], },
    "causative": { forms: [ { "result": "行[い]かせる" } ], },
    "causative negative": { forms: [ { "result": "行[い]かせない" } ], },
    "causative past": { forms: [ { "result": "行[い]かせた" } ], },
    "causative past negative": { forms: [ { "result": "行[い]かせなかった" } ], },
    "causative passive": { forms: [ { "result": "行[い]かせられる" } ], },
    "causative passive negative": { forms: [ { "result": "行[い]かせられない" } ], },
    "causative passive past": { forms: [ { "result": "行[い]かせられた" } ], },
    "causative passive past negative": { forms: [ { "result": "行[い]かせられなかった" } ], },
    "progressive": { forms: [ { "result": "行[い]っている" } ], },
    "progressive negative": { forms: [ { "result": "行[い]っていない" } ], },
    "polite progressive": { forms: [ { "result": "行[い]っています" } ], },
    "polite progressive negative": { forms: [ { "result": "行[い]っていません" } ], },
    "progressive past": { forms: [ { "result": "行[い]っていた" } ], },
    "progressive past negative": { forms: [ { "result": "行[い]っていなかった" } ], },
    "polite progressive past": { forms: [ { "result": "行[い]っていました" } ], },
    "polite progressive past negative": { forms: [ { "result": "行[い]っていませんでした" } ], },
    "desire": { forms: [ { "result": "行[い]きたい" }, ], },
    "desire negative": { forms: [ { "result": "行[い]きたくない" }, ], },
    "desire past": { forms: [ { "result": "行[い]きたかった" }, ], },
    "desire past negative": { forms: [ { "result": "行[い]きたくなかった" }, ], },
    "desire te-form": { forms: [ { "result": "行[い]きたくて" }, ], },
    "desire te-form negative": { forms: [ { "result": "行[い]きたくなくて" }, ], },
    "desire polite": { forms: [ { "result": "行[い]きたいです" }, ], },
    "desire polite negative": { forms: [ { "result": "行[い]きたくないです" }, ], },
    "desire polite past": { forms: [ { "result": "行[い]きたかったです" }, ], },
    "desire polite past negative": { forms: [ { "result": "行[い]きたくなかったです" }, ], },
    "volitional": { forms: [ { "result": "行[い]こう" }, ], },
    "polite volitional": { forms: [ { "result": "行[い]きましょう" }, ], },
  },

  "kuru": {
    "negative": { forms: [ { "result": "来[こ]ない" } ], },
    "polite": { forms: [ { "result": "来[き]ます" } ], },
    "polite negative": { forms: [ { "result": "来[き]ません" } ], },
    "past": { forms: [ { "result": "来[き]た" } ], },
    "past negative": { forms: [ { "result": "来[こ]なかった" } ], },
    "polite past": { forms: [ { "result": "来[き]ました" } ], },
    "polite past negative": { forms: [ { "result": "来[き]ませんでした" } ], },
    "te-form": { forms: [ { "result": "来[き]て" } ], },
    "te-form negative": { forms: [ { "result": "来[こ]なくて" }, { "result": "来[こ]ないで" } ], },
    "potential": { forms: [ { "result": "来[こ]られる" } ], },
    "potential negative": { forms: [ { "result": "来[こ]られない" } ], },
    "polite potential": { forms: [ { "result": "来[こ]られます" } ], },
    "polite potential negative": { forms: [ { "result": "来[こ]られません" } ], },
    "imperative": { forms: [ { "result": "来[こ]い" } ], },
    "imperative negative": { forms: [ { "result": "来[く]るな" } ], },
    "passive": { forms: [ { "result": "来[こ]られる" } ], },
    "passive negative": { forms: [ { "result": "来[こ]られない" } ], },
    "passive past": { forms: [ { "result": "来[こ]られた" } ], },
    "passive past negative": { forms: [ { "result": "来[こ]られなかった" } ], },
    "passive te-form": { forms: [ { "result": "来[こ]られて" } ], },
    "polite passive": { forms: [ { "result": "来[こ]られます" } ], },
    "polite passive negative": { forms: [ { "result": "来[こ]られません" } ], },
    "polite passive past": { forms: [ { "result": "来[こ]られました" } ], },
    "polite passive past negative": { forms: [ { "result": "来[こ]られませんでした" } ], },
    "causative": { forms: [ { "result": "来[こ]させる" } ], },
    "causative negative": { forms: [ { "result": "来[こ]させない" } ], },
    "causative past": { forms: [ { "result": "来[こ]させた" } ], },
    "causative past negative": { forms: [ { "result": "来[こ]させなかった" } ], },
    "causative passive": { forms: [ { "result": "来[こ]させられる" } ], },
    "causative passive negative": { forms: [ { "result": "来[こ]させられない" } ], },
    "causative passive past": { forms: [ { "result": "来[こ]させられた" } ], },
    "causative passive past negative": { forms: [ { "result": "来[こ]させられなかった" } ], },
    "progressive": { forms: [ { "result": "来[き]ている" } ], },
    "progressive negative": { forms: [ { "result": "来[き]ていない" } ], },
    "polite progressive": { forms: [ { "result": "来[き]ています" } ], },
    "polite progressive negative": { forms: [ { "result": "来[き]ていません" } ], },
    "progressive past": { forms: [ { "result": "来[き]ていた" } ], },
    "progressive past negative": { forms: [ { "result": "来[き]ていなかった" } ], },
    "polite progressive past": { forms: [ { "result": "来[き]ていました" } ], },
    "polite progressive past negative": { forms: [ { "result": "来[き]ていませんでした" } ], },
    "desire": { forms: [ { "result": "来[き]たい" }, ], },
    "desire negative": { forms: [ { "result": "来[き]たくない" }, ], },
    "desire polite": { forms: [ { "result": "来[き]たいです" }, ], },
    "desire polite negative": { forms: [ { "result": "来[き]たくないです" }, ], },
    "volitional": { forms: [ { "result": "来[こ]よう" }, ], },
    "polite volitional": { forms: [ { "result": "来[き]ましょう" }, ], },
  },

  "suru": {
    "negative": { forms: [ { "before": "する", "after": "しない" }, ], },
    "polite": { forms: [ { "before": "する", "after": "します" }, ], },
    "polite negative": { forms: [ { "before": "する", "after": "しません" }, ], },
    "past": { forms: [ { "before": "する", "after": "した" }, ], },
    "past negative": { forms: [ { "before": "する", "after": "しなかった" }, ], },
    "polite past": { forms: [ { "before": "する", "after": "しました" }, ], },
    "polite past negative": { forms: [ { "before": "する", "after": "しませんでした" }, ], },
    "te-form": { forms: [ { "before": "する", "after": "して" }, ], },
    "te-form negative": { forms: [ { "before": "する", "after": "しなくて" }, { "before": "する", "after": "しないで" } ], },
    "potential": { forms: [ { "before": "する", "after": "できる" } ], },
    "potential negative": { forms: [ { "before": "する", "after": "できない" } ], },
    "polite potential": { forms: [ { "before": "する", "after": "できます" } ], },
    "polite potential negative": { forms: [ { "before": "する", "after": "できません" } ], },
    "imperative": { forms: [ { "before": "する", "after": "しろ" } ], },
    "imperative negative": { forms: [ { "before": "する", "after": "するな" } ], },
    "passive": { forms: [ { "before": "する", "after": "される" } ], },
    "passive negative": { forms: [ { "before": "する", "after": "されない" } ], },
    "passive past": { forms: [ { "before": "する", "after": "された" } ], },
    "passive past negative": { forms: [ { "before": "する", "after": "されなかった" } ], },
    "passive te-form": { forms: [ { "before": "する", "after": "されて" } ], },
    "polite passive": { forms: [ { "before": "する", "after": "されます" } ], },
    "polite passive negative": { forms: [ { "before": "する", "after": "されません" } ], },
    "polite passive past": { forms: [ { "before": "する", "after": "されました" } ], },
    "polite passive past negative": { forms: [ { "before": "する", "after": "されませんでした" } ], },
    "causative": { forms: [ { "before": "する", "after": "させる" } ], },
    "causative negative": { forms: [ { "before": "する", "after": "させない" } ], },
    "causative past": { forms: [ { "before": "する", "after": "させた" } ], },
    "causative past negative": { forms: [ { "before": "する", "after": "させなかった" } ], },
    "causative passive": { forms: [ { "before": "する", "after": "させられる" } ], },
    "causative passive negative": { forms: [ { "before": "する", "after": "させられない" } ], },
    "causative passive past": { forms: [ { "before": "する", "after": "させられた" } ], },
    "causative passive past negative": { forms: [ { "before": "する", "after": "させられなかった" } ], },
    "progressive": { forms: [ { "before": "する", "after": "している" } ], },
    "progressive negative": { forms: [ { "before": "する", "after": "していない" } ], },
    "polite progressive": { forms: [ { "before": "する", "after": "しています" } ], },
    "polite progressive negative": { forms: [ { "before": "する", "after": "していません" } ], },
    "progressive past": { forms: [ { "before": "する", "after": "していた" } ], },
    "progressive past negative": { forms: [ { "before": "する", "after": "していなかった" } ], },
    "polite progressive past": { forms: [ { "before": "する", "after": "していました" } ], },
    "polite progressive past negative": { forms: [ { "before": "する", "after": "していませんでした" } ], },
    "desire": { forms: [ { "before": "する", "after": "したい" }, ], },
    "desire negative": { forms: [ { "before": "する", "after": "したくない" }, ], },
    "desire past": { forms: [ { "before": "する", "after": "したかった" }, ], },
    "desire past negative": { forms: [ { "before": "する", "after": "したくなかった" }, ], },
    "desire te-form": { forms: [ { "before": "する", "after": "したくて" }, ], },
    "desire te-form negative": { forms: [ { "before": "する", "after": "したくなくて" }, ], },
    "desire polite": { forms: [ { "before": "する", "after": "したいです" }, ], },
    "desire polite negative": { forms: [ { "before": "する", "after": "したくないです" }, ], },
    "desire polite past": { forms: [ { "before": "する", "after": "したかったです" }, ], },
    "desire polite past negative": { forms: [ { "before": "する", "after": "したくなかったです" }, ], },
    "volitional": { forms: [ { "before": "する", "after": "しよう" }, ], },
    "polite volitional": { forms: [ { "before": "する", "after": "しましょう" }, ], },
  },

  "i-adjective": {

    "negative": { forms: [ { "before": "い", "after": "くない" } ], },
    "polite": { forms: [ { "before": "い", "after": "いです" } ], },
    "polite negative": { forms: [ { "before": "い", "after": "くないです" }, { "before": "い", "after": "くありません" } ], },
    "past": { forms: [ { "before": "い", "after": "かった" } ], },
    "past negative": { forms: [ { "before": "い", "after": "くなかった" } ], },
    "polite past": { forms: [ { "before": "い", "after": "かったです" } ], },
    "polite past negative": { forms: [ { "before": "い", "after": "くなかったです" }, { "before": "い", "after": "くありませんでした" } ], },
  },

  "ii": {
    "negative": { forms: [ { "result": "良[よ]くない" } ], },
    "polite": { forms: [ { "result": "いいです" } ], },
    "polite negative": { forms: [ { "result": "良[よ]くないです" }, { "result": "良[よ]くありません" } ], },
    "past": { forms: [ { "result": "良[よ]かった" } ], },
    "past negative": { forms: [ { "result": "良[よ]くなかった" } ], },
    "polite past": { forms: [ { "result": "良[よ]かったです" } ], },
    "polite past negative": { forms: [ { "result": "良[よ]くなかったです" }, { "result": "良[よ]くありませんでした" } ], },
  },

  "na-adjective": {
    "negative": { forms: [ { "before": "だ", "after": "ではない" }, { "before": "だ", "after": "じゃない" } ], },
    "polite": { forms: [ { "before": "だ", "after": "です" } ], },
    "polite negative": { forms: [ { "before": "だ", "after": "ではないです" }, { "before": "だ", "after": "じゃないです" }, { "before": "だ", "after": "ではありません" }, { "before": "だ", "after": "じゃありません" } ], },
    "past": { forms: [ { "before": "だ", "after": "だった" } ], },
    "past negative": { forms: [ { "before": "だ", "after": "ではなかった" }, { "before": "だ", "after": "じゃなかった" } ], },
    "polite past": { forms: [ { "before": "だ", "after": "でした" } ], },
    "polite past negative": { forms: [ { "before": "だ", "after": "ではなかったです" }, { "before": "だ", "after": "じゃなかったです" }, { "before": "だ", "after": "ではありませんでした" }, { "before": "だ", "after": "じゃありませんでした" } ], },
  },
};

function calculateConjugations(word, conjugation) {

  if (words[word] == undefined)
    return undefined;

  var group = words[word].group;
  var dictionary = words[word].dictionary;

  if (conjugation == 'dictionary')
    return dictionary;

  if (rules[group] == undefined)
    return undefined;

  if (rules[group][conjugation] == undefined)
    return undefined;

  var conjugations = rules[group][conjugation].forms;

  var result = {
    forms: []
  };

  if (rules[group][conjugation].tetakei) {
    result.tetakei = true;
  }

  conjugations.forEach(function (rule) {

    if (rule.before && rule.after) {
      if (dictionary.endsWith(rule.before)) {
        result.forms.push(dictionary.substring(0, dictionary.length - rule.before.length) + rule.after);
      }
    }

    if (rule.result) {
      result.forms.push(rule.result);
    }
  });

  return result;
}

function calculateAllConjugations() {

  Object.keys(words).forEach(function (word) {
    
    words[word].conjugations = { "dictionary": { forms: [words[word].dictionary] } };

    var group = words[word].group;

    Object.keys(rules[group]).forEach(function (conjugation) {
      words[word].conjugations[conjugation] = calculateConjugations(word, conjugation);
    })
  });
}
