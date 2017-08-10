// drill.js

var words = {

  "走る": {

    "group": "godan",

    "conjugations": {

      "dictionary": "走[はし]る",
      "negative": "走[はし]らない",
      "polite": "走[はし]ります",
      "polite negative": "走[はし]りません",
      "past": "走[はし]った",
      "past negative": "走[はし]らなかった",
      "polite past": "走[はし]りました",
      "polite past negative": "走[はし]りませんでした",
      "te-form": "走[はし]って",
      "te-form negative": "走[はし]らなくて",
      "potential": "走[はし]れる",
      "potential negative": "走[はし]れない",
      "passive": "走[はし]られる",
      "passive negative": "走[はし]られない",
      "causative": "走[はし]らせる",
      "causative negative": "走[はし]らせない",
      "causative passive": "走[はし]らせられる",
      "causative passive negative": "走[はし]らせられない",
      "imperative": "走[はし]れ",
      "imperative negative": "走[はし]るな",
      "progressive": "走[はし]っている",
      "progressive negative": "走[はし]っていない",
      "polite progressive": "走[はし]っています",
      "polite progressive negative": "走[はし]っていません",
      "progressive past": "走[はし]っていた",
      "progressive past negative": "走[はし]っていなかった",
      "polite progressive past": "走[はし]っていました",
      "polite progressive past negative": "走[はし]っていませんでした",
    },
  },

  "死ぬ": {

    "group": "godan",

    "conjugations": {

      "dictionary": "死[し]ぬ",
      "negative": "死[し]なない",
      "polite": "死[し]にます",
      "polite negative": "死[し]にません",
      "past": "死[し]んだ",
      "past negative": "死[し]ななかった",
      "polite past": "死[し]にました",
      "polite past negative": "死[し]にませんでした",
      "te-form": "死[し]んで",
      "te-form negative": "死[し]ななくて",
      "potential": "死[し]ねる",
      "potential negative": "死[し]ねない",
      "passive": "死[し]なれる",
      "passive negative": "死[し]なれない",
      "causative": "死[し]なせる",
      "causative negative": "死[し]なせない",
      "causative passive": "死[し]なせられる",
      "causative passive negative": "死[し]なせられない",
      "imperative": "死[し]ね",
      "imperative negative": "死[し]ぬな",
      "progressive": "死[し]んでいる",
      "progressive negative": "死[し]んでいない",
      "polite progressive": "死[し]んでいます",
      "polite progressive negative": "死[し]んでいません",
      "progressive past": "死[し]んでいた",
      "progressive past negative": "死[し]んでいなかった",
      "polite progressive past": "死[し]んでいました",
      "polite progressive past negative": "死[し]んでいませんでした",
    },
  },

  "上げる": {

    "group": "ichidan",

    "conjugations": {

      "dictionary": "上[あ]げる",
      "negative": "上[あ]げない",
      "polite": "上[あ]げます",
      "polite negative": "上[あ]げません",
      "past": "上[あ]げた",
      "past negative": "上[あ]げなかった",
      "polite past": "上[あ]げました",
      "polite past negative": "上[あ]げませんでした",
      "te-form": "上[あ]げて",
      "te-form negative": "上[あ]げなくて",
      "potential": "上[あ]げられる",
      "potential negative": "上[あ]げられない",
      "passive": "上[あ]げられる",
      "passive negative": "上[あ]げられない",
      "causative": "上[あ]げさせる",
      "causative negative": "上[あ]げさせない",
      "causative passive": "上[あ]げさせられる",
      "causative passive negative": "上[あ]げさせられない",
      "imperative": "上[あ]げろ",
      "imperative negative": "上[あ]げるな",
      "progressive": "上[あ]げている",
      "progressive negative": "上[あ]げていない",
      "polite progressive": "上[あ]げています",
      "polite progressive negative": "上[あ]げていません",
      "progressive past": "上[あ]げていた",
      "progressive past negative": "上[あ]げていなかった",
      "polite progressive past": "上[あ]げていました",
      "polite progressive past negative": "上[あ]げていませんでした",
    },
  },

  "上る": {

    "group": "godan",

    "conjugations": {

      "dictionary": "上[のぼ]る",
      "negative": "上[のぼ]らない",
      "polite": "上[のぼ]ります",
      "polite negative": "上[のぼ]りません",
      "past": "上[のぼ]った",
      "past negative": "上[のぼ]らなかった",
      "polite past": "上[のぼ]りました",
      "polite past negative": "上[のぼ]りませんでした",
      "te-form": "上[のぼ]って",
      "te-form negative": "上[のぼ]らなくて",
      "potential": "上[のぼ]れる",
      "potential negative": "上[のぼ]れない",
      "passive": "上[のぼ]られる",
      "passive negative": "上[のぼ]られない",
      "causative": "上[のぼ]らせる",
      "causative negative": "上[のぼ]らせない",
      "causative passive": "上[のぼ]らせられる",
      "causative passive negative": "上[のぼ]らせられない",
      "imperative": "上[のぼ]れ",
      "imperative negative": "上[のぼ]るな",
      "progressive": "上[のぼ]っている",
      "progressive negative": "上[のぼ]っていない",
      "polite progressive": "上[のぼ]っています",
      "polite progressive negative": "上[のぼ]っていません",
      "progressive past": "上[のぼ]っていた",
      "progressive past negative": "上[のぼ]っていなかった",
      "polite progressive past": "上[のぼ]っていました",
      "polite progressive past negative": "上[のぼ]っていませんでした",
    },
  },

  "聞く": {

    "group": "godan",

    "conjugations": {

      "dictionary": "聞[き]く",
      "negative": "聞[き]かない",
      "polite": "聞[き]きます",
      "polite negative": "聞[き]きません",
      "past": "聞[き]いた",
      "past negative": "聞[き]かなかった",
      "polite past": "聞[き]きました",
      "polite past negative": "聞[き]きませんでした",
      "te-form": "聞[き]いて",
      "te-form negative": "聞[き]かなくて",
      "potential": "聞[き]ける",
      "potential negative": "聞[き]けない",
      "passive": "聞[き]かれる",
      "passive negative": "聞[き]かれない",
      "causative": "聞[き]かせる",
      "causative negative": "聞[き]かせない",
      "causative passive": "聞[き]かせられる",
      "causative passive negative": "聞[き]かせられない",
      "imperative": "聞[き]け",
      "imperative negative": "聞[き]くな",
      "progressive": "聞[き]いている",
      "progressive negative": "聞[き]いていない",
      "polite progressive": "聞[き]いています",
      "polite progressive negative": "聞[き]いていません",
      "progressive past": "聞[き]いていた",
      "progressive past negative": "聞[き]いていなかった",
      "polite progressive past": "聞[き]いていました",
      "polite progressive past negative": "聞[き]いていませんでした",
    },
  },

  "書く": {

    "group": "godan",

    "conjugations": {

      "dictionary": "書[か]く",
      "negative": "書[か]かない",
      "polite": "書[か]きます",
      "polite negative": "書[か]きません",
      "past": "書[か]いた",
      "past negative": "書[か]かなかった",
      "polite past": "書[か]きました",
      "polite past negative": "書[か]きませんでした",
      "te-form": "書[か]いて",
      "te-form negative": "書[か]かなくて",
      "potential": "書[か]ける",
      "potential negative": "書[か]けない",
      "passive": "書[か]かれる",
      "passive negative": "書[か]かれない",
      "causative": "書[か]かせる",
      "causative negative": "書[か]かせない",
      "causative passive": "書[か]かせられる",
      "causative passive negative": "書[か]かせられない",
      "imperative": "書[か]け",
      "imperative negative": "書[か]くな",
      "progressive": "書[か]いている",
      "progressive negative": "書[か]いていない",
      "polite progressive": "書[か]いています",
      "polite progressive negative": "書[か]いていません",
      "progressive past": "書[か]いていた",
      "progressive past negative": "書[か]いていなかった",
      "polite progressive past": "書[か]いていました",
      "polite progressive past negative": "書[か]いていませんでした",
    },
  },

  "消す": {

    "group": "godan",

    "conjugations": {

      "dictionary": "消[け]す",
      "negative": "消[け]さない",
      "polite": "消[け]します",
      "polite negative": "消[け]しません",
      "past": "消[け]した",
      "past negative": "消[け]さなかった",
      "polite past": "消[け]しました",
      "polite past negative": "消[け]しませんでした",
      "te-form": "消[け]して",
      "te-form negative": "消[け]さなくて",
      "potential": "消[け]せる",
      "potential negative": "消[け]せない",
      "passive": "消[け]される",
      "passive negative": "消[け]されない",
      "causative": "消[け]させる",
      "causative negative": "消[け]させない",
      "causative passive": "消[け]させられる",
      "causative passive negative": "消[け]させられない",
      "imperative": "消[け]せ",
      "imperative negative": "消[け]すな",
      "progressive": "消[け]している",
      "progressive negative": "消[け]していない",
      "polite progressive": "消[け]しています",
      "polite progressive negative": "消[け]していません",
      "progressive past": "消[け]していた",
      "progressive past negative": "消[け]していなかった",
      "polite progressive past": "消[け]していました",
      "polite progressive past negative": "消[け]していませんでした",
    },
  },

  "着る": {

    "group": "ichidan",

    "conjugations": {

      "dictionary": "着[き]る",
      "negative": "着[き]ない",
      "polite": "着[き]ます",
      "polite negative": "着[き]ません",
      "past": "着[き]た",
      "past negative": "着[き]なかった",
      "polite past": "着[き]ました",
      "polite past negative": "着[き]ませんでした",
      "te-form": "着[き]て",
      "te-form negative": "着[き]なくて",
      "potential": "着[き]られる",
      "potential negative": "着[き]られない",
      "passive": "着[き]られる",
      "passive negative": "着[き]られない",
      "causative": "着[き]させる",
      "causative negative": "着[き]させない",
      "causative passive": "着[き]させられる",
      "causative passive negative": "着[き]させられない",
      "imperative": "着[き]ろ",
      "imperative negative": "着[き]るな",
      "progressive": "着[き]ている",
      "progressive negative": "着[き]ていない",
      "polite progressive": "着[き]ています",
      "polite progressive negative": "着[き]ていません",
      "progressive past": "着[き]ていた",
      "progressive past negative": "着[き]ていなかった",
      "polite progressive past": "着[き]ていました",
      "polite progressive past negative": "着[き]ていませんでした",
    },
  },

  "育てる": {

    "group": "ichidan",

    "conjugations": {

      "dictionary": "育[そだ]てる",
      "negative": "育[そだ]てない",
      "polite": "育[そだ]てます",
      "polite negative": "育[そだ]てません",
      "past": "育[そだ]てた",
      "past negative": "育[そだ]てなかった",
      "polite past": "育[そだ]てました",
      "polite past negative": "育[そだ]てませんでした",
      "te-form": "育[そだ]てて",
      "te-form negative": "育[そだ]てなくて",
      "potential": "育[そだ]てられる",
      "potential negative": "育[そだ]てられない",
      "passive": "育[そだ]てられる",
      "passive negative": "育[そだ]てられない",
      "causative": "育[そだ]てさせる",
      "causative negative": "育[そだ]てさせない",
      "causative passive": "育[そだ]てさせられる",
      "causative passive negative": "育[そだ]てさせられない",
      "imperative": "育[そだ]てろ",
      "imperative negative": "育[そだ]てるな",
      "progressive": "育[そだ]てている",
      "progressive negative": "育[そだ]てていない",
      "polite progressive": "育[そだ]てています",
      "polite progressive negative": "育[そだ]てていません",
      "progressive past": "育[そだ]てていた",
      "progressive past negative": "育[そだ]てていなかった",
      "polite progressive past": "育[そだ]てていました",
      "polite progressive past negative": "育[そだ]てていませんでした",
    },
  },

  "遊ぶ": {

    "group": "godan",

    "conjugations": {

      "dictionary": "遊[あそ]ぶ",
      "negative": "遊[あそ]ばない",
      "polite": "遊[あそ]びます",
      "polite negative": "遊[あそ]びません",
      "past": "遊[あそ]んだ",
      "past negative": "遊[あそ]ばなかった",
      "polite past": "遊[あそ]びました",
      "polite past negative": "遊[あそ]びませんでした",
      "te-form": "遊[あそ]んで",
      "te-form negative": "遊[あそ]ばなくて",
      "potential": "遊[あそ]べる",
      "potential negative": "遊[あそ]べない",
      "passive": "遊[あそ]ばれる",
      "passive negative": "遊[あそ]ばれない",
      "causative": "遊[あそ]ばせる",
      "causative negative": "遊[あそ]ばせない",
      "causative passive": "遊[あそ]ばせられる",
      "causative passive negative": "遊[あそ]ばせられない",
      "imperative": "遊[あそ]べ",
      "imperative negative": "遊[あそ]ぶな",
      "progressive": "遊[あそ]んでいる",
      "progressive negative": "遊[あそ]んでいない",
      "polite progressive": "遊[あそ]んでいます",
      "polite progressive negative": "遊[あそ]んでいません",
      "progressive past": "遊[あそ]んでいた",
      "progressive past negative": "遊[あそ]んでいなかった",
      "polite progressive past": "遊[あそ]んでいました",
      "polite progressive past negative": "遊[あそ]んでいませんでした",
    },
  },

  "褒める": {

    "group": "ichidan",

    "conjugations": {

      "dictionary": "褒[ほ]める",
      "negative": "褒[ほ]めない",
      "polite": "褒[ほ]めます",
      "polite negative": "褒[ほ]めません",
      "past": "褒[ほ]めた",
      "past negative": "褒[ほ]めなかった",
      "polite past": "褒[ほ]めました",
      "polite past negative": "褒[ほ]めませんでした",
      "te-form": "褒[ほ]めて",
      "te-form negative": "褒[ほ]めなくて",
      "potential": "褒[ほ]められる",
      "potential negative": "褒[ほ]められない",
      "passive": "褒[ほ]められる",
      "passive negative": "褒[ほ]められない",
      "causative": "褒[ほ]めさせる",
      "causative negative": "褒[ほ]めさせない",
      "causative passive": "褒[ほ]めさせられる",
      "causative passive negative": "褒[ほ]めさせられない",
      "imperative": "褒[ほ]めろ",
      "imperative negative": "褒[ほ]めるな",
      "progressive": "褒[ほ]めている",
      "progressive negative": "褒[ほ]めていない",
      "polite progressive": "褒[ほ]めています",
      "polite progressive negative": "褒[ほ]めていません",
      "progressive past": "褒[ほ]めていた",
      "progressive past negative": "褒[ほ]めていなかった",
      "polite progressive past": "褒[ほ]めていました",
      "polite progressive past negative": "褒[ほ]めていませんでした",
    },
  },

  "学ぶ": {

    "group": "godan",

    "conjugations": {

      "dictionary": "学[まな]ぶ",
      "negative": "学[まな]ばない",
      "polite": "学[まな]びます",
      "polite negative": "学[まな]びません",
      "past": "学[まな]んだ",
      "past negative": "学[まな]ばなかった",
      "polite past": "学[まな]びました",
      "polite past negative": "学[まな]びませんでした",
      "te-form": "学[まな]んで",
      "te-form negative": "学[まな]ばなくて",
      "potential": "学[まな]べる",
      "potential negative": "学[まな]べない",
      "passive": "学[まな]ばれる",
      "passive negative": "学[まな]ばれない",
      "causative": "学[まな]ばせる",
      "causative negative": "学[まな]ばせない",
      "causative passive": "学[まな]ばせられる",
      "causative passive negative": "学[まな]ばせられない",
      "imperative": "学[まな]べ",
      "imperative negative": "学[まな]ぶな",
      "progressive": "学[まな]んでいる",
      "progressive negative": "学[まな]んでいない",
      "polite progressive": "学[まな]んでいます",
      "polite progressive negative": "学[まな]んでいません",
      "progressive past": "学[まな]んでいた",
      "progressive past negative": "学[まな]んでいなかった",
      "polite progressive past": "学[まな]んでいました",
      "polite progressive past negative": "学[まな]んでいませんでした",
    },
  },

  "喜ぶ": {

    "group": "godan",

    "conjugations": {

      "dictionary": "喜[よころ]ぶ",
      "negative": "喜[よころ]ばない",
      "polite": "喜[よころ]びます",
      "polite negative": "喜[よころ]びません",
      "past": "喜[よころ]んだ",
      "past negative": "喜[よころ]ばなかった",
      "polite past": "喜[よころ]びました",
      "polite past negative": "喜[よころ]びませんでした",
      "te-form": "喜[よころ]んで",
      "te-form negative": "喜[よころ]ばなくて",
      "potential": "喜[よころ]べる",
      "potential negative": "喜[よころ]べない",
      "passive": "喜[よころ]ばれる",
      "passive negative": "喜[よころ]ばれない",
      "causative": "喜[よころ]ばせる",
      "causative negative": "喜[よころ]ばせない",
      "causative passive": "喜[よころ]ばせられる",
      "causative passive negative": "喜[よころ]ばせられない",
      "imperative": "喜[よころ]べ",
      "imperative negative": "喜[よころ]ぶな",
      "progressive": "喜[よころ]んでいる",
      "progressive negative": "喜[よころ]んでいない",
      "polite progressive": "喜[よころ]んでいます",
      "polite progressive negative": "喜[よころ]んでいません",
      "progressive past": "喜[よころ]んでいた",
      "progressive past negative": "喜[よころ]んでいなかった",
      "polite progressive past": "喜[よころ]んでいました",
      "polite progressive past negative": "喜[よころ]んでいませんでした",
    },
  },

  "泳ぐ": {

    "group": "godan",

    "conjugations": {

      "dictionary": "泳[およ]ぐ",
      "negative": "泳[およ]がない",
      "polite": "泳[およ]ぎます",
      "polite negative": "泳[およ]ぎません",
      "past": "泳[およ]いだ",
      "past negative": "泳[およ]がなかった",
      "polite past": "泳[およ]ぎました",
      "polite past negative": "泳[およ]ぎませんでした",
      "te-form": "泳[およ]いで",
      "te-form negative": "泳[およ]がなくて",
      "potential": "泳[およ]げる",
      "potential negative": "泳[およ]げない",
      "passive": "泳[およ]がれる",
      "passive negative": "泳[およ]がれない",
      "causative": "泳[およ]がせる",
      "causative negative": "泳[およ]がせない",
      "causative passive": "泳[およ]がせられる",
      "causative passive negative": "泳[およ]がせられない",
      "imperative": "泳[およ]げ",
      "imperative negative": "泳[およ]ぐな",
      "progressive": "泳[およ]いでいる",
      "progressive negative": "泳[およ]いでいない",
      "polite progressive": "泳[およ]いでいます",
      "polite progressive negative": "泳[およ]いでいません",
      "progressive past": "泳[およ]いでいた",
      "progressive past negative": "泳[およ]いでいなかった",
      "polite progressive past": "泳[およ]いでいました",
      "polite progressive past negative": "泳[およ]いでいませんでした",
    },
  },

  "注ぐ": {

    "group": "godan",

    "conjugations": {

      "dictionary": "注[そそ]ぐ",
      "negative": "注[そそ]がない",
      "polite": "注[そそ]ぎます",
      "polite negative": "注[そそ]ぎません",
      "past": "注[そそ]いだ",
      "past negative": "注[そそ]がなかった",
      "polite past": "注[そそ]ぎました",
      "polite past negative": "注[そそ]ぎませんでした",
      "te-form": "注[そそ]いで",
      "te-form negative": "注[そそ]がなくて",
      "potential": "注[そそ]げる",
      "potential negative": "注[そそ]げない",
      "passive": "注[そそ]がれる",
      "passive negative": "注[そそ]がれない",
      "causative": "注[そそ]がせる",
      "causative negative": "注[そそ]がせない",
      "causative passive": "注[そそ]がせられる",
      "causative passive negative": "注[そそ]がせられない",
      "imperative": "注[そそ]げ",
      "imperative negative": "注[そそ]ぐな",
      "progressive": "注[そそ]いでいる",
      "progressive negative": "注[そそ]いでいない",
      "polite progressive": "注[そそ]いでいます",
      "polite progressive negative": "注[そそ]いでいません",
      "progressive past": "注[そそ]いでいた",
      "progressive past negative": "注[そそ]いでいなかった",
      "polite progressive past": "注[そそ]いでいました",
      "polite progressive past negative": "注[そそ]いでいませんでした",
    },
  },

  "急ぐ": {

    "group": "godan",

    "conjugations": {

      "dictionary": "急[いそ]ぐ",
      "negative": "急[いそ]がない",
      "polite": "急[いそ]ぎます",
      "polite negative": "急[いそ]ぎません",
      "past": "急[いそ]いだ",
      "past negative": "急[いそ]がなかった",
      "polite past": "急[いそ]ぎました",
      "polite past negative": "急[いそ]ぎませんでした",
      "te-form": "急[いそ]いで",
      "te-form negative": "急[いそ]がなくて",
      "potential": "急[いそ]げる",
      "potential negative": "急[いそ]げない",
      "passive": "急[いそ]がれる",
      "passive negative": "急[いそ]がれない",
      "causative": "急[いそ]がせる",
      "causative negative": "急[いそ]がせない",
      "causative passive": "急[いそ]がせられる",
      "causative passive negative": "急[いそ]がせられない",
      "imperative": "急[いそ]げ",
      "imperative negative": "急[いそ]ぐな",
      "progressive": "急[いそ]いでいる",
      "progressive negative": "急[いそ]いでいない",
      "polite progressive": "急[いそ]いでいます",
      "polite progressive negative": "急[いそ]いでいません",
      "progressive past": "急[いそ]いでいた",
      "progressive past negative": "急[いそ]いでいなかった",
      "polite progressive past": "急[いそ]いでいました",
      "polite progressive past negative": "急[いそ]いでいませんでした",
    },
  },

  "立つ": {

    "group": "godan",

    "conjugations": {

      "dictionary": "立[た]つ",
      "negative": "立[た]たない",
      "polite": "立[た]ちます",
      "polite negative": "立[た]ちません",
      "past": "立[た]った",
      "past negative": "立[た]たなかった",
      "polite past": "立[た]ちました",
      "polite past negative": "立[た]ちませんでした",
      "te-form": "立[た]って",
      "te-form negative": "立[た]たなくて",
      "potential": "立[た]てる",
      "potential negative": "立[た]てない",
      "passive": "立[た]たれる",
      "passive negative": "立[た]たれない",
      "causative": "立[た]たせる",
      "causative negative": "立[た]たせない",
      "causative passive": "立[た]たせられる",
      "causative passive negative": "立[た]たせられない",
      "imperative": "立[た]て",
      "imperative negative": "立[た]つな",
      "progressive": "立[た]っている",
      "progressive negative": "立[た]っていない",
      "polite progressive": "立[た]っています",
      "polite progressive negative": "立[た]っていません",
      "progressive past": "立[た]っていた",
      "progressive past negative": "立[た]っていなかった",
      "polite progressive past": "立[た]っていました",
      "polite progressive past negative": "立[た]っていませんでした",
    },
  },

  "打つ": {

    "group": "godan",

    "conjugations": {

      "dictionary": "打[う]つ",
      "negative": "打[う]たない",
      "polite": "打[う]ちます",
      "polite negative": "打[う]ちません",
      "past": "打[う]った",
      "past negative": "打[う]たなかった",
      "polite past": "打[う]ちました",
      "polite past negative": "打[う]ちませんでした",
      "te-form": "打[う]って",
      "te-form negative": "打[う]たなくて",
      "potential": "打[う]てる",
      "potential negative": "打[う]てない",
      "passive": "打[う]たれる",
      "passive negative": "打[う]たれない",
      "causative": "打[う]たせる",
      "causative negative": "打[う]たせない",
      "causative passive": "打[う]たせられる",
      "causative passive negative": "打[う]たせられない",
      "imperative": "打[う]て",
      "imperative negative": "打[う]つな",
      "progressive": "打[う]っている",
      "progressive negative": "打[う]っていない",
      "polite progressive": "打[う]っています",
      "polite progressive negative": "打[う]っていません",
      "progressive past": "打[う]っていた",
      "progressive past negative": "打[う]っていなかった",
      "polite progressive past": "打[う]っていました",
      "polite progressive past negative": "打[う]っていませんでした",
    },
  },

  "待つ": {

    "group": "godan",

    "conjugations": {

      "dictionary": "待[ま]つ",
      "negative": "待[ま]たない",
      "polite": "待[ま]ちます",
      "polite negative": "待[ま]ちません",
      "past": "待[ま]った",
      "past negative": "待[ま]たなかった",
      "polite past": "待[ま]ちました",
      "polite past negative": "待[ま]ちませんでした",
      "te-form": "待[ま]って",
      "te-form negative": "待[ま]たなくて",
      "potential": "待[ま]てる",
      "potential negative": "待[ま]てない",
      "passive": "待[ま]たれる",
      "passive negative": "待[ま]たれない",
      "causative": "待[ま]たせる",
      "causative negative": "待[ま]たせない",
      "causative passive": "待[ま]たせられる",
      "causative passive negative": "待[ま]たせられない",
      "imperative": "待[ま]て",
      "imperative negative": "待[ま]つな",
      "progressive": "待[ま]っている",
      "progressive negative": "待[ま]っていない",
      "polite progressive": "待[ま]っています",
      "polite progressive negative": "待[ま]っていません",
      "progressive past": "待[ま]っていた",
      "progressive past negative": "待[ま]っていなかった",
      "polite progressive past": "待[ま]っていました",
      "polite progressive past negative": "待[ま]っていませんでした",
    },
  },

  "持つ": {

    "group": "godan",

    "conjugations": {

      "dictionary": "持[も]つ",
      "negative": "持[も]たない",
      "polite": "持[も]ちます",
      "polite negative": "持[も]ちません",
      "past": "持[も]った",
      "past negative": "持[も]たなかった",
      "polite past": "持[も]ちました",
      "polite past negative": "持[も]ちませんでした",
      "te-form": "持[も]って",
      "te-form negative": "持[も]たなくて",
      "potential": "持[も]てる",
      "potential negative": "持[も]てない",
      "passive": "持[も]たれる",
      "passive negative": "持[も]たれない",
      "causative": "持[も]たせる",
      "causative negative": "持[も]たせない",
      "causative passive": "持[も]たせられる",
      "causative passive negative": "持[も]たせられない",
      "imperative": "持[も]て",
      "imperative negative": "持[も]つな",
      "progressive": "持[も]っている",
      "progressive negative": "持[も]っていない",
      "polite progressive": "持[も]っています",
      "polite progressive negative": "持[も]っていません",
      "progressive past": "持[も]っていた",
      "progressive past negative": "持[も]っていなかった",
      "polite progressive past": "持[も]っていました",
      "polite progressive past negative": "持[も]っていませんでした",
    },
  },

  "行く": {

    "group": "iku",

    "conjugations": {

      "dictionary": "行[い]く",
      "negative": "行[い]かない",
      "polite": "行[い]きます",
      "polite negative": "行[い]きません",
      "past": "行[い]った",
      "past negative": "行[い]かなかった",
      "polite past": "行[い]きました",
      "polite past negative": "行[い]きませんでした",
      "te-form": "行[い]って",
      "te-form negative": "行[い]かなくて",
      "potential": "行[い]ける",
      "potential negative": "行[い]けない",
      "imperative": "行[い]け",
      "imperative negative": "行[い]くな",
      "passive": "行[い]かれる",
      "passive negative": "行[い]かれない",
      "causative": "行[い]かせる",
      "causative negative": "行[い]かせない",
      "causative passive": "行[い]かせられる",
      "causative passive negative": "行[い]かせられない",
      "progressive": "行[い]っている",
      "progressive negative": "行[い]っていない",
      "polite progressive": "行[い]っています",
      "polite progressive negative": "行[い]っていません",
      "progressive past": "行[い]っていた",
      "progressive past negative": "行[い]っていなかった",
      "polite progressive past": "行[い]っていました",
      "polite progressive past negative": "行[い]っていませんでした",
    },
  },

  "飲む": {

    "group": "godan",

    "conjugations": {

      "dictionary": "飲[の]む",
      "negative": "飲[の]まない",
      "polite": "飲[の]みます",
      "polite negative": "飲[の]みません",
      "past": "飲[の]んだ",
      "past negative": "飲[の]まなかった",
      "polite past": "飲[の]みました",
      "polite past negative": "飲[の]みませんでした",
      "te-form": "飲[の]んで",
      "te-form negative": "飲[の]まなくて",
      "potential": "飲[の]める",
      "potential negative": "飲[の]めない",
      "imperative": "飲[の]め",
      "imperative negative": "飲[の]むな",
      "passive": "飲[の]まれる",
      "passive negative": "飲[の]まれない",
      "causative": "飲[の]ませる",
      "causative negative": "飲[の]ませない",
      "causative passive": "飲[の]ませられる",
      "causative passive negative": "飲[の]ませられない",
      "progressive": "飲[の]んでいる",
      "progressive negative": "飲[の]んでいない",
      "polite progressive": "飲[の]んでいます",
      "polite progressive negative": "飲[の]んでいません",
      "progressive past": "飲[の]んでいた",
      "progressive past negative": "飲[の]んでいなかった",
      "polite progressive past": "飲[の]んでいました",
      "polite progressive past negative": "飲[の]んでいませんでした",
    },
  },

  "作る": {

    "group": "godan",

    "conjugations": {

      "dictionary": "作[つく]る",
      "negative": "作[つく]らない",
      "polite": "作[つく]ります",
      "polite negative": "作[つく]りません",
      "past": "作[つく]った",
      "past negative": "作[つく]らなかった",
      "polite past": "作[つく]りました",
      "polite past negative": "作[つく]りませんでした",
      "te-form": "作[つく]って",
      "te-form negative": "作[つく]らなくて",
      "potential": "作[つく]れる",
      "potential negative": "作[つく]れない",
      "imperative": "作[つく]れ",
      "imperative negative": "作[つく]るな",
      "passive": "作[つく]られる",
      "passive negative": "作[つく]られない",
      "causative": "作[つく]らせる",
      "causative negative": "作[つく]らせない",
      "causative passive": "作[つく]らせられる",
      "causative passive negative": "作[つく]らせられない",
      "progressive": "作[つく]っている",
      "progressive negative": "作[つく]っていない",
      "polite progressive": "作[つく]っています",
      "polite progressive negative": "作[つく]っていません",
      "progressive past": "作[つく]っていた",
      "progressive past negative": "作[つく]っていなかった",
      "polite progressive past": "作[つく]っていました",
      "polite progressive past negative": "作[つく]っていませんでした",
    },
  },

  "買い戻す": {

    "group": "godan",

    "conjugations": {

      "dictionary": "買[か]い戻[もど]す",
      "negative": "買[か]い戻[もど]さない",
      "polite": "買[か]い戻[もど]します",
      "polite negative": "買[か]い戻[もど]しません",
      "past": "買[か]い戻[もど]した",
      "past negative": "買[か]い戻[もど]さなかった",
      "polite past": "買[か]い戻[もど]しました",
      "polite past negative": "買[か]い戻[もど]しませんでした",
      "te-form": "買[か]い戻[もど]して",
      "te-form negative": "買[か]い戻[もど]さなくて",
      "potential": "買[か]い戻[もど]せる",
      "potential negative": "買[か]い戻[もど]せない",
      "imperative": "買[か]い戻[もど]せ",
      "imperative negative": "買[か]い戻[もど]すな",
      "passive": "買[か]い戻[もど]される",
      "passive negative": "買[か]い戻[もど]されない",
      "causative": "買[か]い戻[もど]させる",
      "causative negative": "買[か]い戻[もど]させない",
      "causative passive": "買[か]い戻[もど]させられる",
      "causative passive negative": "買[か]い戻[もど]させられない",
      "progressive": "買[か]い戻[もど]している",
      "progressive negative": "買[か]い戻[もど]していない",
      "polite progressive": "買[か]い戻[もど]しています",
      "polite progressive negative": "買[か]い戻[もど]していません",
      "progressive past": "買[か]い戻[もど]していた",
      "progressive past negative": "買[か]い戻[もど]していなかった",
      "polite progressive past": "買[か]い戻[もど]していました",
      "polite progressive past negative": "買[か]い戻[もど]していませんでした",
    },
  },

  "見る": {

    "group": "ichidan",

    "conjugations": {

      "dictionary": "見[み]る",
      "negative": "見[み]ない",
      "polite": "見[み]ます",
      "polite negative": "見[み]ません",
      "past": "見[み]た",
      "past negative": "見[み]なかった",
      "polite past": "見[み]ました",
      "polite past negative": "見[み]ませんでした",
      "te-form": "見[み]て",
      "te-form negative": "見[み]なくて",
      "potential": "見[み]られる",
      "potential negative": "見[み]られない",
      "imperative": "見[み]ろ",
      "imperative negative": "見[み]るな",
      "passive": "見[み]られる",
      "passive negative": "見[み]られない",
      "causative": "見[み]させる",
      "causative negative": "見[み]させない",
      "causative passive": "見[み]させられる",
      "causative passive negative": "見[み]させられない",
      "progressive": "見[み]ている",
      "progressive negative": "見[み]ていない",
      "polite progressive": "見[み]ています",
      "polite progressive negative": "見[み]ていません",
      "progressive past": "見[み]ていた",
      "progressive past negative": "見[み]ていなかった",
      "polite progressive past": "見[み]ていました",
      "polite progressive past negative": "見[み]ていませんでした",
    },
  },

  "食べる": {

    "group": "ichidan",

    "conjugations": {

      "dictionary": "食[た]べる",
      "negative": "食[た]べない",
      "polite": "食[た]べます",
      "polite negative": "食[た]べません",
      "past": "食[た]べた",
      "past negative": "食[た]べなかった",
      "polite past": "食[た]べました",
      "polite past negative": "食[た]べませんでした",
      "te-form": "食[た]べて",
      "te-form negative": "食[た]べなくて",
      "potential": "食[た]べられる",
      "potential negative": "食[た]べられない",
      "imperative": "食[た]べろ",
      "imperative negative": "食[た]べるな",
      "passive": "食[た]べられる",
      "passive negative": "食[た]べられない",
      "causative": "食[た]べさせる",
      "causative negative": "食[た]べさせない",
      "causative passive": "食[た]べさせられる",
      "causative passive negative": "食[た]べさせられない",
      "progressive": "食[た]べている",
      "progressive negative": "食[た]べていない",
      "polite progressive": "食[た]べています",
      "polite progressive negative": "食[た]べていません",
      "progressive past": "食[た]べていた",
      "progressive past negative": "食[た]べていなかった",
      "polite progressive past": "食[た]べていました",
      "polite progressive past negative": "食[た]べていませんでした",
    },
  },

  "起きる": {

    "group": "ichidan",

    "conjugations": {

      "dictionary": "起[お]きる",
      "negative": "起[お]きない",
      "polite": "起[お]きます",
      "polite negative": "起[お]きません",
      "past": "起[お]きた",
      "past negative": "起[お]きなかった",
      "polite past": "起[お]きました",
      "polite past negative": "起[お]きませんでした",
      "te-form": "起[お]きて",
      "te-form negative": "起[お]きなくて",
      "potential": "起[お]きられる",
      "potential negative": "起[お]きられない",
      "imperative": "起[お]きろ",
      "imperative negative": "起[お]きるな",
      "passive": "起[お]きられる",
      "passive negative": "起[お]きられない",
      "causative": "起[お]きさせる",
      "causative negative": "起[お]きさせない",
      "causative passive": "起[お]きさせられる",
      "causative passive negative": "起[お]きさせられない",
      "progressive": "起[お]きている",
      "progressive negative": "起[お]きていない",
      "polite progressive": "起[お]きています",
      "polite progressive negative": "起[お]きていません",
      "progressive past": "起[お]きていた",
      "progressive past negative": "起[お]きていなかった",
      "polite progressive past": "起[お]きていました",
      "polite progressive past negative": "起[お]きていませんでした",
    },
  },

  "買い換える": {

    "group": "ichidan",

    "conjugations": {

      "dictionary": "買[か]い換[か]える",
      "negative": "買[か]い換[か]えない",
      "polite": "買[か]い換[か]えます",
      "polite negative": "買[か]い換[か]えません",
      "past": "買[か]い換[か]えた",
      "past negative": "買[か]い換[か]えなかった",
      "polite past": "買[か]い換[か]えました",
      "polite past negative": "買[か]い換[か]えませんでした",
      "te-form": "買[か]い換[か]えて",
      "te-form negative": "買[か]い換[か]えなくて",
      "potential": "買[か]い換[か]えられる",
      "potential negative": "買[か]い換[か]えられない",
      "imperative": "買[か]い換[か]えろ",
      "imperative negative": "買[か]い換[か]えるな",
      "passive": "買[か]い換[か]えられる",
      "passive negative": "買[か]い換[か]えられない",
      "causative": "買[か]い換[か]えさせる",
      "causative negative": "買[か]い換[か]えさせない",
      "causative passive": "買[か]い換[か]えさせられる",
      "causative passive negative": "買[か]い換[か]えさせられない",
      "progressive": "買[か]い換[か]えている",
      "progressive negative": "買[か]い換[か]えていない",
      "polite progressive": "買[か]い換[か]えています",
      "polite progressive negative": "買[か]い換[か]えていません",
      "progressive past": "買[か]い換[か]えていた",
      "progressive past negative": "買[か]い換[か]えていなかった",
      "polite progressive past": "買[か]い換[か]えていました",
      "polite progressive past negative": "買[か]い換[か]えていませんでした",
    },
  },

  "来る": {

    "group": "kuru",

    "conjugations": {

      "dictionary": "来[く]る",
      "negative": "来[こ]ない",
      "polite": "来[き]ます",
      "polite negative": "来[き]ません",
      "past": "来[き]た",
      "past negative": "来[こ]なかった",
      "polite past": "来[き]ました",
      "polite past negative": "来[き]ませんでした",
      "te-form": "来[き]て",
      "te-form negative": "来[こ]なくて",
      "potential": "来[こ]られる",
      "potential negative": "来[こ]られない",
      "imperative": "来[こ]い",
      "imperative negative": "来[く]るな",
      "passive": "来[こ]られる",
      "passive negative": "来[こ]られない",
      "causative": "来[こ]させる",
      "causative negative": "来[こ]させない",
      "causative passive": "来[こ]させられる",
      "causative passive negative": "来[こ]させられない",
      "progressive": "来[き]ている",
      "progressive negative": "来[き]ていない",
      "polite progressive": "来[き]ています",
      "polite progressive negative": "来[き]ていません",
      "progressive past": "来[き]ていた",
      "progressive past negative": "来[き]ていなかった",
      "polite progressive past": "来[き]ていました",
      "polite progressive past negative": "来[き]ていませんでした",
    },
  },

  "する": {

    "group": "suru",

    "conjugations": {

      "dictionary": "する",
      "negative": "しない",
      "polite": "します",
      "polite negative": "しません",
      "past": "した",
      "past negative": "しなかった",
      "polite past": "しました",
      "polite past negative": "しませんでした",
      "te-form": "して",
      "te-form negative": "しなくて",
      "imperative": "しろ",
      "imperative negative": "さるな",
      "progressive": "している",
      "progressive negative": "していない",
      "polite progressive": "しています",
      "polite progressive negative": "していません",
      "progressive past": "していた",
      "progressive past negative": "していなかった",
      "polite progressive past": "していました",
      "polite progressive past negative": "していませんでした",
    },
  },

  "勉強する": {

    "group": "suru",

    "conjugations": {

      "dictionary": "勉[べん]強[きょう]する",
      "negative": "勉[べん]強[きょう]しない",
      "polite": "勉[べん]強[きょう]します",
      "polite negative": "勉[べん]強[きょう]しません",
      "past": "勉[べん]強[きょう]した",
      "past negative": "勉[べん]強[きょう]しなかった",
      "polite past": "勉[べん]強[きょう]しました",
      "polite past negative": "勉[べん]強[きょう]しませんでした",
      "te-form": "勉[べん]強[きょう]して",
      "te-form negative": "勉[べん]強[きょう]しなくて",
      "imperative": "勉[べん]強[きょう]しろ",
      "imperative negative": "勉[べん]強[きょう]さるな",
      "progressive": "勉[べん]強[きょう]している",
      "progressive negative": "勉[べん]強[きょう]していない",
      "polite progressive": "勉[べん]強[きょう]しています",
      "polite progressive negative": "勉[べん]強[きょう]していません",
      "progressive past": "勉[べん]強[きょう]していた",
      "progressive past negative": "勉[べん]強[きょう]していなかった",
      "polite progressive past": "勉[べん]強[きょう]していました",
      "polite progressive past negative": "勉[べん]強[きょう]していませんでした",
    },
  },

  "電話する": {

    "group": "suru",

    "conjugations": {

      "dictionary": "電[でん]話[わ]する",
      "negative": "電[でん]話[わ]しない",
      "polite": "電[でん]話[わ]します",
      "polite negative": "電[でん]話[わ]しません",
      "past": "電[でん]話[わ]した",
      "past negative": "電[でん]話[わ]しなかった",
      "polite past": "電[でん]話[わ]しました",
      "polite past negative": "電[でん]話[わ]しませんでした",
      "te-form": "電[でん]話[わ]して",
      "te-form negative": "電[でん]話[わ]しなくて",
      "imperative": "電[でん]話[わ]しろ",
      "imperative negative": "電[でん]話[わ]さるな",
      "progressive": "電[でん]話[わ]している",
      "progressive negative": "電[でん]話[わ]していない",
      "polite progressive": "電[でん]話[わ]しています",
      "polite progressive negative": "電[でん]話[わ]していません",
      "progressive past": "電[でん]話[わ]していた",
      "progressive past negative": "電[でん]話[わ]していなかった",
      "polite progressive past": "電[でん]話[わ]していました",
      "polite progressive past negative": "電[でん]話[わ]していませんでした",
    },
  },

  "読む": {

    "group": "godan",

    "conjugations": {

      "dictionary": "読[よ]む",
      "negative": "読[よ]まない",
      "polite": "読[よ]みます",
      "polite negative": "読[よ]みません",
      "past": "読[よ]んだ",
      "past negative": "読[よ]まなかった",
      "polite past": "読[よ]みました",
      "polite past negative": "読[よ]みませんでした",
      "te-form": "読[よ]んで",
      "te-form negative": "読[よ]まなくて",
      "potential": "読[よ]める",
      "potential negative": "読[よ]めない",
      "imperative": "読[よ]め",
      "imperative negative": "読[よ]むな",
      "passive": "読[よ]まれる",
      "passive negative": "読[よ]まれない",
      "causative": "読[よ]ませる",
      "causative negative": "読[よ]ませない",
      "causative passive": "読[よ]ませられる",
      "causative passive negative": "読[よ]ませられない",
      "progressive": "読[よ]んでいる",
      "progressive negative": "読[よ]んでいない",
      "polite progressive": "読[よ]んでいます",
      "polite progressive negative": "読[よ]んでいません",
      "progressive past": "読[よ]んでいた",
      "progressive past negative": "読[よ]んでいなかった",
      "polite progressive past": "読[よ]んでいました",
      "polite progressive past negative": "読[よ]んでいませんでした",
    },
  },

  "思う": {

    "group": "godan",

    "conjugations": {

      "dictionary": "思[おも]う",
      "negative": "思[おも]わない",
      "polite": "思[おも]います",
      "polite negative": "思[おも]いません",
      "past": "思[おも]った",
      "past negative": "思[おも]わなかった",
      "polite past": "思[おも]いました",
      "polite past negative": "思[おも]いませんでした",
      "te-form": "思[おも]って",
      "te-form negative": "思[おも]わなくて",
      "potential": "思[おも]える",
      "potential negative": "思[おも]えない",
      "imperative": "思[おも]え",
      "imperative negative": "思[おも]うな",
      "passive": "思[おも]われる",
      "passive negative": "思[おも]われない",
      "causative": "思[おも]わせる",
      "causative negative": "思[おも]わせない",
      "causative passive": "思[おも]わせられる",
      "causative passive negative": "思[おも]わせられない",
      "progressive": "思[おも]っている",
      "progressive negative": "思[おも]っていない",
      "polite progressive": "思[おも]っています",
      "polite progressive negative": "思[おも]っていません",
      "progressive past": "思[おも]っていた",
      "progressive past negative": "思[おも]っていなかった",
      "polite progressive past": "思[おも]っていました",
      "polite progressive past negative": "思[おも]っていませんでした",
    },
  },

  "買い与える": {

    "group": "ichidan",

    "conjugations": {

      "dictionary": "買[か]い与[あた]える",
      "negative": "買[か]い与[あた]えない",
      "polite": "買[か]い与[あた]えます",
      "polite negative": "買[か]い与[あた]えません",
      "past": "買[か]い与[あた]えた",
      "past negative": "買[か]い与[あた]えなかった",
      "polite past": "買[か]い与[あた]えました",
      "polite past negative": "買[か]い与[あた]えませんでした",
      "te-form": "買[か]い与[あた]えて",
      "te-form negative": "買[か]い与[あた]えなくて",
      "potential": "買[か]い与[あた]えられる",
      "potential negative": "買[か]い与[あた]えられない",
      "imperative": "買[か]い与[あた]えろ",
      "imperative negative": "買[か]い与[あた]えるな",
      "passive": "買[か]い与[あた]えられる",
      "passive negative": "買[か]い与[あた]えられない",
      "causative": "買[か]い与[あた]えさせる",
      "causative negative": "買[か]い与[あた]えさせない",
      "causative passive": "買[か]い与[あた]えさせられる",
      "causative passive negative": "買[か]い与[あた]えさせられない",
      "progressive": "買[か]い与[あた]えている",
      "progressive negative": "買[か]い与[あた]えていない",
      "polite progressive": "買[か]い与[あた]えています",
      "polite progressive negative": "買[か]い与[あた]えていません",
      "progressive past": "買[か]い与[あた]えていた",
      "progressive past negative": "買[か]い与[あた]えていなかった",
      "polite progressive past": "買[か]い与[あた]えていました",
      "polite progressive past negative": "買[か]い与[あた]えていませんでした",
    },
  },

  "座る": {

    "group": "godan",

    "conjugations": {

      "dictionary": "座[すわ]る",
      "negative": "座[すわ]らない",
      "polite": "座[すわ]ります",
      "polite negative": "座[すわ]りません",
      "past": "座[すわ]った",
      "past negative": "座[すわ]らなかった",
      "polite past": "座[すわ]りました",
      "polite past negative": "座[すわ]りませんでした",
      "te-form": "座[すわ]って",
      "te-form negative": "座[すわ]らなくて",
      "potential": "座[すわ]れる",
      "potential negative": "座[すわ]れない",
      "imperative": "座[すわ]れ",
      "imperative negative": "座[すわ]るな",
      "passive": "座[すわ]られる",
      "passive negative": "座[すわ]られない",
      "causative": "座[すわ]らせる",
      "causative negative": "座[すわ]らせない",
      "causative passive": "座[すわ]らせられる",
      "causative passive negative": "座[すわ]らせられない",
      "progressive": "座[すわ]っている",
      "progressive negative": "座[すわ]っていない",
      "polite progressive": "座[すわ]っています",
      "polite progressive negative": "座[すわ]っていません",
      "progressive past": "座[すわ]っていた",
      "progressive past negative": "座[すわ]っていなかった",
      "polite progressive past": "座[すわ]っていました",
      "polite progressive past negative": "座[すわ]っていませんでした",
    },
  },

  "休む": {

    "group": "godan",

    "conjugations": {

      "dictionary": "休[やす]む",
      "negative": "休[やす]まない",
      "polite": "休[やす]みます",
      "polite negative": "休[やす]みません",
      "past": "休[やす]んだ",
      "past negative": "休[やす]まなかった",
      "polite past": "休[やす]みました",
      "polite past negative": "休[やす]みませんでした",
      "te-form": "休[やす]んで",
      "te-form negative": "休[やす]まなくて",
      "potential": "休[やす]める",
      "potential negative": "休[やす]めない",
      "imperative": "休[やす]め",
      "imperative negative": "休[やす]むな",
      "passive": "休[やす]まれる",
      "passive negative": "休[やす]まれない",
      "causative": "休[やす]ませる",
      "causative negative": "休[やす]ませない",
      "causative passive": "休[やす]ませられる",
      "causative passive negative": "休[やす]ませられない",
      "progressive": "休[やす]んでいる",
      "progressive negative": "休[やす]んでいない",
      "polite progressive": "休[やす]んでいます",
      "polite progressive negative": "休[やす]んでいません",
      "progressive past": "休[やす]んでいた",
      "progressive past negative": "休[やす]んでいなかった",
      "polite progressive past": "休[やす]んでいました",
      "polite progressive past negative": "休[やす]んでいませんでした",
    },
  },

  "足す": {

    "group": "godan",

    "conjugations": {

      "dictionary": "足[た]す",
      "negative": "足[た]さない",
      "polite": "足[た]します",
      "polite negative": "足[た]しません",
      "past": "足[た]した",
      "past negative": "足[た]さなかった",
      "polite past": "足[た]しました",
      "polite past negative": "足[た]しませんでした",
      "te-form": "足[た]して",
      "te-form negative": "足[た]さなくて",
      "potential": "足[た]せる",
      "potential negative": "足[た]せない",
      "imperative": "足[た]せ",
      "imperative negative": "足[た]すな",
      "passive": "足[た]される",
      "passive negative": "足[た]されない",
      "causative": "足[た]させる",
      "causative negative": "足[た]させない",
      "causative passive": "足[た]させられる",
      "causative passive negative": "足[た]させられない",
      "progressive": "足[た]している",
      "progressive negative": "足[た]していない",
      "polite progressive": "足[た]しています",
      "polite progressive negative": "足[た]していません",
      "progressive past": "足[た]していた",
      "progressive past negative": "足[た]していなかった",
      "polite progressive past": "足[た]していました",
      "polite progressive past negative": "足[た]していませんでした",
    },
  },

  "歌う": {

    "group": "godan",

    "conjugations": {

      "dictionary": "歌[うた]う",
      "negative": "歌[うた]わない",
      "polite": "歌[うた]います",
      "polite negative": "歌[うた]いません",
      "past": "歌[うた]った",
      "past negative": "歌[うた]わなかった",
      "polite past": "歌[うた]いました",
      "polite past negative": "歌[うた]いませんでした",
      "te-form": "歌[うた]って",
      "te-form negative": "歌[うた]わなくて",
      "potential": "歌[うた]える",
      "potential negative": "歌[うた]えない",
      "imperative": "歌[うた]え",
      "imperative negative": "歌[うた]うな",
      "passive": "歌[うた]われる",
      "passive negative": "歌[うた]われない",
      "causative": "歌[うた]わせる",
      "causative negative": "歌[うた]わせない",
      "causative passive": "歌[うた]わせられる",
      "causative passive negative": "歌[うた]わせられない",
      "progressive": "歌[うた]っている",
      "progressive negative": "歌[うた]っていない",
      "polite progressive": "歌[うた]っています",
      "polite progressive negative": "歌[うた]っていません",
      "progressive past": "歌[うた]っていた",
      "progressive past negative": "歌[うた]っていなかった",
      "polite progressive past": "歌[うた]っていました",
      "polite progressive past negative": "歌[うた]っていませんでした",
    },
  },

  "高い": {

    "group": "i-adjective",

    "conjugations": {

      "dictionary": "高[たか]い",
      "negative": "高[たか]くない",
      "polite": "高[たか]いです",
      "polite negative": "高[たか]くないです",
      "past": "高[たか]かった",
      "past negative": "高[たか]くなかった",
      "polite past": "高[たか]かったです",
      "polite past negative": "高[たか]くなかったです",
    },
  },

  "面白い": {

    "group": "i-adjective",

    "conjugations": {

      "dictionary": "面[おも]白[しろ]い",
      "negative": "面[おも]白[しろ]くない",
      "polite": "面[おも]白[しろ]いです",
      "polite negative": "面[おも]白[しろ]くないです",
      "past": "面[おも]白[しろ]かった",
      "past negative": "面[おも]白[しろ]くなかった",
      "polite past": "面[おも]白[しろ]かったです",
      "polite past negative": "面[おも]白[しろ]くなかったです",
    },
  },

  "暗い": {

    "group": "i-adjective",

    "conjugations": {

      "dictionary": "暗[くら]い",
      "negative": "暗[くら]くない",
      "polite": "暗[くら]いです",
      "polite negative": "暗[くら]くないです",
      "past": "暗[くら]かった",
      "past negative": "暗[くら]くなかった",
      "polite past": "暗[くら]かったです",
      "polite past negative": "暗[くら]くなかったです",
    },
  },

  "いい": {

    "group": "i-adjective",

    "conjugations": {

      "dictionary": "いい",
      "negative": "良[よ]くない",
      "polite": "いいです",
      "polite negative": "良[よ]くないです",
      "past": "良[よ]かった",
      "past negative": "良[よ]くなかった",
      "polite past": "良[よ]かったです",
      "polite past negative": "良[よ]くなかったです",
    },
  },

  "暖かい": {

    "group": "i-adjective",

    "conjugations": {

      "dictionary": "暖[あたた]かい",
      "negative": "暖[あたた]かくない",
      "polite": "暖[あたた]かいです",
      "polite negative": "暖[あたた]かくないです",
      "past": "暖[あたた]かかった",
      "past negative": "暖[あたた]かくなかった",
      "polite past": "暖[あたた]かかったです",
      "polite past negative": "暖[あたた]かくなかったです",
    },
  },

  "華々しい": {

    "group": "i-adjective",

    "conjugations": {

      "dictionary": "華[はな]々[ばな]しい",
      "negative": "華[はな]々[ばな]しくない",
      "polite": "華[はな]々[ばな]しいです",
      "polite negative": "華[はな]々[ばな]しくないです",
      "past": "華[はな]々[ばな]しかった",
      "past negative": "華[はな]々[ばな]しくなかった",
      "polite past": "華[はな]々[ばな]しかったです",
      "polite past negative": "華[はな]々[ばな]しくなかったです",
    },
  },

  "怖い": {

    "group": "i-adjective",

    "conjugations": {

      "dictionary": "怖[こわ]い",
      "negative": "怖[こわ]くない",
      "polite": "怖[こわ]いです",
      "polite negative": "怖[こわ]くないです",
      "past": "怖[こわ]かった",
      "past negative": "怖[こわ]くなかった",
      "polite past": "怖[こわ]かったです",
      "polite past negative": "怖[こわ]くなかったです",
    },
  },

  "硬い": {

    "group": "i-adjective",

    "conjugations": {

      "dictionary": "硬[かた]い",
      "negative": "硬[かた]くない",
      "polite": "硬[かた]いです",
      "polite negative": "硬[かた]くないです",
      "past": "硬[かた]かった",
      "past negative": "硬[かた]くなかった",
      "polite past": "硬[かた]かったです",
      "polite past negative": "硬[かた]くなかったです",
    },
  },

  "有名": {

    "group": "na-adjective",

    "conjugations": {

      "dictionary": "有[ゆう]名[めい]だ",
      "negative": "有[ゆう]名[めい]ではない",
      "polite": "有[ゆう]名[めい]です",
      "polite negative": "有[ゆう]名[めい]ではありません",
      "past": "有[ゆう]名[めい]だった",
      "past negative": "有[ゆう]名[めい]ではなかった",
      "polite past": "有[ゆう]名[めい]でした",
      "polite past negative": "有[ゆう]名[めい]ではありませんでした",
    },
  },

  "好き": {

    "group": "na-adjective",

    "conjugations": {

      "dictionary": "好[す]きだ",
      "negative": "好[す]きではない",
      "polite": "好[す]きです",
      "polite negative": "好[す]きではありません",
      "past": "好[す]きだった",
      "past negative": "好[す]きではなかった",
      "polite past": "好[す]きでした",
      "polite past negative": "好[す]きではありませんでした",
    },
  },

  "元気": {

    "group": "na-adjective",

    "conjugations": {

      "dictionary": "元[げん]気[き]だ",
      "negative": "元[げん]気[き]ではない",
      "polite": "元[げん]気[き]です",
      "polite negative": "元[げん]気[き]ではありません",
      "past": "元[げん]気[き]だった",
      "past negative": "元[げん]気[き]ではなかった",
      "polite past": "元[げん]気[き]でした",
      "polite past negative": "元[げん]気[き]ではありませんでした",
    },
  },

  "意地悪": {

    "group": "na-adjective",

    "conjugations": {

      "dictionary": "意[い]地[じ]悪[わる]だ",
      "negative": "意[い]地[じ]悪[わる]ではない",
      "polite": "意[い]地[じ]悪[わる]です",
      "polite negative": "意[い]地[じ]悪[わる]ではありません",
      "past": "意[い]地[じ]悪[わる]だった",
      "past negative": "意[い]地[じ]悪[わる]ではなかった",
      "polite past": "意[い]地[じ]悪[わる]でした",
      "polite past negative": "意[い]地[じ]悪[わる]ではありませんでした",
    },
  },

  "静": {

    "group": "na-adjective",

    "conjugations": {

      "dictionary": "静[しず]かだ",
      "negative": "静[しず]かではない",
      "polite": "静[しず]かです",
      "polite negative": "静[しず]かではありません",
      "past": "静[しず]かだった",
      "past negative": "静[しず]かではなかった",
      "polite past": "静[しず]かでした",
      "polite past negative": "静[しず]かではありませんでした",
    },
  },

  "便利": {

    "group": "na-adjective",

    "conjugations": {

      "dictionary": "便[べん]利[り]だ",
      "negative": "便[べん]利[り]ではない",
      "polite": "便[べん]利[り]です",
      "polite negative": "便[べん]利[り]ではありません",
      "past": "便[べん]利[り]だった",
      "past negative": "便[べん]利[り]ではなかった",
      "polite past": "便[べん]利[り]でした",
      "polite past negative": "便[べん]利[り]ではありませんでした",
    },
  },

  "上手": {

    "group": "na-adjective",

    "conjugations": {

      "dictionary": "上[じょう]手[ず]だ",
      "negative": "上[じょう]手[ず]ではない",
      "polite": "上[じょう]手[ず]です",
      "polite negative": "上[じょう]手[ず]ではありません",
      "past": "上[じょう]手[ず]だった",
      "past negative": "上[じょう]手[ず]ではなかった",
      "polite past": "上[じょう]手[ず]でした",
      "polite past negative": "上[じょう]手[ず]ではありませんでした",
    },
  },

  "幸い": {

    "group": "na-adjective",

    "conjugations": {

      "dictionary": "幸[さいわ]いだ",
      "negative": "幸[さいわ]いではない",
      "polite": "幸[さいわ]いです",
      "polite negative": "幸[さいわ]いではありません",
      "past": "幸[さいわ]いだった",
      "past negative": "幸[さいわ]いではなかった",
      "polite past": "幸[さいわ]いでした",
      "polite past negative": "幸[さいわ]いではありませんでした",
    },
  },
};

var transformations = [

  { from: "negative", to: "dictionary" },
  { from: "past", to: "dictionary" },
  { from: "polite", to: "dictionary" },
  { from: "te-form", to: "dictionary" },
  { from: "potential", to: "dictionary" },
  { from: "imperative", to: "dictionary" },
  { from: "causative", to: "dictionary" },
  { from: "passive", to: "dictionary" },
  { from: "progressive", to: "dictionary" },
  { from: "dictionary", to: "negative" },
  { from: "past negative", to: "negative" },
  { from: "polite negative", to: "negative" },
  { from: "te-form negative", to: "negative" },
  { from: "potential negative", to: "negative" },
  { from: "imperative negative", to: "negative" },
  { from: "causative negative", to: "negative" },
  { from: "passive negative", to: "negative" },
  { from: "progressive negative", to: "negative" },
  { from: "dictionary", to: "past" },
  { from: "past negative", to: "past" },
  { from: "polite past", to: "past" },
  { from: "progressive past", to: "past" },
  { from: "negative", to: "past negative" },
  { from: "past", to: "past negative" },
  { from: "polite past negative", to: "past negative" },
  { from: "progressive past negative", to: "past negative" },
  { from: "dictionary", to: "polite" },
  { from: "polite past", to: "polite" },
  { from: "polite negative", to: "polite" },
  { from: "polite progressive", to: "polite" },
  { from: "past", to: "polite past" },
  { from: "polite", to: "polite past" },
  { from: "polite past negative", to: "polite past" },
  { from: "polite progressive past", to: "polite past" },
  { from: "negative", to: "polite negative" },
  { from: "polite", to: "polite negative" },
  { from: "polite past negative", to: "polite negative" },
  { from: "polite progressive negative", to: "polite negative" },
  { from: "past negative", to: "polite past negative" },
  { from: "polite past", to: "polite past negative" },
  { from: "polite negative", to: "polite past negative" },
  { from: "polite progressive past negative", to: "polite past negative" },
  { from: "dictionary", to: "te-form" },
  { from: "te-form negative", to: "te-form" },
  { from: "te-form", to: "te-form negative" },
  { from: "negative", to: "te-form negative" },
  { from: "dictionary", to: "potential" },
  { from: "potential negative", to: "potential" },
  { from: "potential", to: "potential negative" },
  { from: "negative", to: "potential negative" },
  { from: "dictionary", to: "imperative" },
  { from: "imperative negative", to: "imperative" },
  { from: "imperative", to: "imperative negative" },
  { from: "negative", to: "imperative negative" },
  { from: "dictionary", to: "causative" },
  { from: "causative negative", to: "causative" },
  { from: "causative passive", to: "causative" },
  { from: "causative", to: "causative negative" },
  { from: "negative", to: "causative negative" },
  { from: "causative passive negative", to: "causative negative" },
  { from: "dictionary", to: "passive" },
  { from: "passive negative", to: "passive" },
  { from: "causative passive", to: "passive" },
  { from: "passive", to: "passive negative" },
  { from: "negative", to: "passive negative" },
  { from: "causative passive negative", to: "passive negative" },
  { from: "causative", to: "causative passive" },
  { from: "passive", to: "causative passive" },
  { from: "causative passive negative", to: "causative passive" },
  { from: "causative negative", to: "causative passive negative" },
  { from: "passive negative", to: "causative passive negative" },
  { from: "causative passive", to: "causative passive negative" },
  { from: "dictionary", to: "progressive" },
  { from: "polite progressive", to: "progressive" },
  { from: "progressive negative", to: "progressive" },
  { from: "progressive past", to: "progressive" },
  { from: "progressive", to: "progressive negative" },
  { from: "negative", to: "progressive negative" },
  { from: "progressive past negative", to: "progressive negative" },
  { from: "polite progressive negative", to: "progressive negative" },
  { from: "progressive", to: "polite progressive" },
  { from: "polite", to: "polite progressive" },
  { from: "polite progressive negative", to: "polite progressive" },
  { from: "polite progressive past", to: "polite progressive" },
  { from: "polite progressive", to: "polite progressive negative" },
  { from: "polite negative", to: "polite progressive negative" },
  { from: "progressive negative", to: "polite progressive negative" },
  { from: "polite progressive past negative", to: "polite progressive negative" },
  { from: "past", to: "progressive past" },
  { from: "progressive", to: "progressive past" },
  { from: "progressive past negative", to: "progressive past" },
  { from: "polite progressive past", to: "progressive past" },
  { from: "past negative", to: "progressive past negative" },
  { from: "progressive negative", to: "progressive past negative" },
  { from: "progressive past", to: "progressive past negative" },
  { from: "polite progressive past negative", to: "progressive past negative" },
  { from: "polite past", to: "polite progressive past" },
  { from: "polite progressive", to: "polite progressive past" },
  { from: "progressive past", to: "polite progressive past" },
  { from: "polite progressive past negative", to: "polite progressive past" },
  { from: "polite past negative", to: "polite progressive past negative" },
  { from: "progressive past negative", to: "polite progressive past negative" },
  { from: "polite progressive past", to: "polite progressive past negative" },
  { from: "polite progressive negative", to: "polite progressive past negative" },
];

var log;

Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)]
}

// From: http://stackoverflow.com/a/2897510

new function ($) {
  $.fn.getCursorPosition = function () {
    var input = this.get(0);
    if (!input) return; // No (input) element found
    if ('selectionStart' in input) {
      // Standard-compliant browsers
      return input.selectionStart;
    } else if (document.selection) {
      // IE
      input.fmcus();
      var sel = document.selection.createRange();
      var selLen = document.selection.createRange().text.length;
      sel.moveStart('character', -input.value.length);
      return sel.text.length - selLen;
    }
  }
}(jQuery);

// From: http://stackoverflow.com/questions/499126/jquery-set-cursor-position-in-text-area

new function ($) {
  $.fn.setCursorPosition = function (pos) {
    if (this.setSelectionRange) {
      this.setSelectionRange(pos, pos);
    } else if (this.createTextRange) {
      var range = this.createTextRange();
      range.collapse(true);
      if (pos < 0) {
        pos = $(this).val().length + pos;
      }
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }
}(jQuery);

function resetLog() {
  log = { "history": [] };
}

function getVerbForms(entry) {

  function kanaForm(word) {
    return word.split(/.\[([^\]]*)\]/).join("");
  }

  function kanjiForm(word) {
    return word.split(/(.)\[[^\]]*\]/).join("");
  }

  var result = {
    "kanji": {},
    "hiragana": {},
    "furigana": {}
  };

  Object.keys(words[entry].conjugations).forEach(function (key) {
    result["kanji"][key] = kanjiForm(words[entry].conjugations[key]);
    result["hiragana"][key] = kanaForm(words[entry].conjugations[key]);
    result["furigana"][key] = words[entry].conjugations[key];
  });

  return result;
}

function wordWithFurigana(word) {

  var bits = word.split(/(.)\[([^\]]*)\]/);

  while (bits.length > 1) {
    bits[0] = bits[0] + "<span tooltip='" + bits[2] + "'>" + bits[1] + "</span>" + bits[3];
    bits.splice(1, 3);
  }

  return bits[0];
}

function processAnswerKey() {

  var el = $('#answer');

  var pos = el.getCursorPosition();
  var val = el.val();

  var last1 = val.slice(pos - 1, pos);
  var last2 = val.slice(pos - 2, pos);
  var last3 = val.slice(pos - 3, pos);

  var replace1 = {
    "a": "あ", "i": "い", "u": "う", "e": "え", "o": "お"
  };

  var replace2 = {

    "ka": "か", "ki": "き", "ku": "く", "ke": "け", "ko": "こ",
    "sa": "さ", "si": "し", "su": "す", "se": "せ", "so": "そ",
    "ta": "た", "ti": "ち", "tu": "つ", "te": "て", "to": "と",
    "na": "な", "ni": "に", "nu": "ぬ", "ne": "ね", "no": "の",
    "ha": "は", "hi": "ひ", "hu": "ふ", "he": "へ", "ho": "ほ",
    "ma": "ま", "mi": "み", "mu": "む", "me": "め", "mo": "も",
    "ra": "ら", "ri": "り", "ru": "る", "re": "れ", "ro": "ろ",
    "ga": "が", "gi": "ぎ", "gu": "ぐ", "ge": "げ", "go": "ご",
    "za": "ざ", "zi": "じ", "zu": "ず", "ze": "ぜ", "zo": "ぞ",
    "da": "だ", "di": "ぢ", "du": "づ", "de": "で", "do": "ど",
    "ba": "ば", "bi": "び", "bu": "ぶ", "be": "べ", "bo": "ぼ",
    "pa": "ぱ", "pi": "ぴ", "pu": "ぷ", "pe": "ぺ", "po": "ぽ",

    "qa": "くぁ", "qi": "くぃ", "qu": "く", "qe": "くぇ", "qo": "くぉ",
    "wa": "わ", "wi": "うぃ", "wu": "う", "we": "うぇ", "wo": "を",
    "ya": "や", "yi": "い", "yu": "ゆ", "ye": "いぇ", "yo": "よ",
    "fa": "ふぁ", "fi": "ふぃ", "fu": "ふ", "fe": "ふぇ", "fo": "ふぉ",
    "ja": "じゃ", "ji": "じ", "ju": "じゅ", "je": "じぇ", "jo": "じょ",
    "la": "ぁ", "li": "ぃ", "lu": "ぅ", "le": "ぇ", "lo": "ぉ",
    "za": "ざ", "zi": "じ", "zu": "ず", "ze": "ぜ", "zo": "ぞ",
    "xa": "ぁ", "xi": "ぃ", "xu": "ぅ", "xe": "ぇ", "xo": "ぉ",
    "ca": "か", "ci": "し", "cu": "く", "ce": "せ", "co": "こ",
    "va": "ヴぁ", "vi": "ヴぃ", "vu": "ヴ", "ve": "ヴぇ", "vo": "ヴぉ",

    "lu": "っ",

    "nn": "ん", "n'": "ん",

    "nb": "んb", "nc": "んc", "nd": "んd", "nf": "んf", "ng": "んg",
    "nh": "んh", "nj": "んj", "nk": "んk", "nl": "んl", "nm": "んm",
    "np": "んp", "nq": "んq", "nr": "んr", "ns": "んs", "nt": "んt",
    "nv": "んv", "nw": "んw", "nx": "んx", "nz": "んz",

    "aa": "っa", "bb": "っb", "cc": "っc", "dd": "っd", "ee": "っe",
    "ff": "っf", "gg": "っg", "hh": "っh", "ii": "っi", "jj": "っj",
    "kk": "っk", "ll": "っl", "mm": "っm", "oo": "っo", "pp": "っp",
    "qq": "っq", "rr": "っr", "ss": "っs", "tt": "っt", "uu": "っu",
    "vv": "っv", "ww": "っw", "xx": "っx", "yy": "っy", "zz": "っz",
  };

  var replace3 = {

    "kya": "きゃ", "kyi": "きぃ", "kyu": "きゅ", "kye": "きぇ", "kyo": "きょ",
    "sha": "しゃ", "shi": "し", "shu": "しゅ", "she": "しぇ", "sho": "しょ",
    "cha": "ちゃ", "chi": "ち", "chu": "ちゅ", "che": "ちぇ", "cho": "ちょ",
    "nya": "にゃ", "nyi": "にぃ", "nyu": "にゅ", "nye": "にぇ", "nyo": "にょ",
    "hya": "ひゃ", "hyi": "ひぃ", "hyu": "ひゅ", "hye": "ひぇ", "hyo": "ひょ",
    "mya": "みゃ", "myi": "みぃ", "myu": "みゅ", "mye": "みぇ", "myo": "みょ",
    "rya": "りゃ", "ryi": "りぃ", "ryu": "りゅ", "rye": "りぇ", "ryo": "りょ",
    "gya": "ぎゃ", "gyi": "ぎぃ", "gyu": "ぎゅ", "gye": "ぎぇ", "gyo": "ぎょ",
    "zya": "じゃ", "zyi": "じぃ", "zyu": "じゅ", "zye": "じぇ", "zyo": "じょ",
    "dya": "ぢゃ", "dyi": "ぢぃ", "dyu": "ぢゅ", "dye": "ぢぇ", "dyo": "ぢょ",
    "bya": "びゃ", "byi": "びぃ", "byu": "びゅ", "bye": "びぇ", "byo": "びょ",
    "pya": "ぴゃ", "pyi": "ぴぃ", "pyu": "ぴゅ", "pye": "ぴぇ", "pyo": "ぴょ",

    "shi": "し",
    "tsu": "つ",
  };

  if (replace3[last3]) {
    val = val.slice(0, pos - 3) + replace3[last3] + val.slice(pos, -1);
    el.val(val);
    el.setCursorPosition(pos - 3 + replace3[last3].length);
  } else if (replace2[last2]) {
    val = val.slice(0, pos - 2) + replace2[last2] + val.slice(pos, -1);
    el.val(val);
    el.setCursorPosition(pos - 2 + replace2[last2].length);
  } else if (replace1[last1]) {
    val = val.slice(0, pos - 1) + replace1[last1] + val.slice(pos, -1);
    el.val(val);
    el.setCursorPosition(pos - 1 + replace1[last1].length);
  }
}

function generateQuestion() {

  var entry;
  var to_form;
  var from_form;
  var forms;

  var count = 0;

  while (true) {

    if (count++ == 10000) {
      showSplash();
      return;
    }

    entry = Object.keys(words).randomElement();
    transformation = transformations.randomElement();

    from_form = transformation.from;
    to_form = transformation.to;

    forms = getVerbForms(entry);

    var valid = true;

    transformation.tags.forEach(function (type) {
      if ($('#' + type).is(':checked') == false) {
        valid = false;
      }
    });

    if ($('#' + words[entry].group).is(':checked') == false) {
      valid = false;
    }

    if (!forms["furigana"][from_form])
      valid = false;

    if (!forms["furigana"][to_form])
      valid = false;

    if (valid) {
      break;
    }
  }

  var word = forms["word"];
  var kanjiForms = forms["kanji"];
  var kanaForms = forms["hiragana"];
  var furiganaForms = forms["furigana"];

  var question = "What is the " + transformation.phrase + " form of " + wordWithFurigana(furiganaForms[from_form]) + "?";
  var answer = kanjiForms[to_form];
  var answer2 = kanaForms[to_form];

  $('#question').html(question);

  window.question = question;
  window.word = word;
  window.answer = kanjiForms[to_form];
  window.answerWithFurigana = wordWithFurigana(furiganaForms[to_form]);
  window.answer2 = answer2;

  $('#next').prop('disabled', true);
  $('#response').html("");
  $('#message').html("");

  $('#proceed').hide();
  $('#input').show();
  $('#answer').focus();

  $('#answer').on('input', processAnswerKey);

  if (log.start == undefined) {
    log.start = Date.now();
  }
}

function processAnswer() {

  var response = $('#answer').val().trim();

  if (response == "")
    return;

  var correct = ((response == window.answer) || (response == window.answer2));
  var klass = correct ? "correct" : "incorrect";

  log.history.push({
    "question": window.question,
    "response": response,
    "answer": window.answerWithFurigana,
    "kana": window.answer2,
    "correct": correct
  });

  $('#answer').val("");
  $('#response').prop('class', klass).text(response);
  $('#next').prop('disabled', false);

  if ((response == window.answer) || (response == window.answer2)) {
    $('#message').html("");
  } else {
    $('#message').html("<div>The correct answer is " + window.answerWithFurigana + "</div>");
  }

  $('#input').hide();
  $('#proceed').show();
  $('#proceed button').focus();

  if (log.end == undefined) {
    log.end = Date.now();
  }

  updateHistoryView(log);
}

function updateHistoryView(log) {

  var review = $('<table>');

  var total = 0;
  var correct = 0;

  var header_tr = $('<tr>');

  header_tr.append($('<th>Question</th>'));
  header_tr.append($('<th>Answer</th>'));
  header_tr.append($('<th>Response</th>'));

  review.append(header_tr);

  log.history.forEach(function (entry) {

    total++;

    if (entry.correct) {
      correct++;
    }

    var tr = $('<tr>');

    var td1 = $('<td>');
    var td2 = $('<td>');
    var td3 = $('<td>');

    td1.html(entry.question);
    td2.html(entry.answer);
    td3.text(entry.response);

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);

    if (entry.correct) {
      td3.append("<span class='answer-correct'> ○</span>");
    } else {
      td3.append("<span class='answer-wrong'> ×</span>");
    }
    review.append(tr);
  });

  $('#history').empty().append(review);

  $('#history').append("<p>" + correct + " of " + total + " correct.</p>");
  $('#history').append("<p>" + ((log.end - log.start) / 1000.0) + " seconds.</p>");
}

function proceed() {
  if (log.history.length == $('#numQuestions').val()) {
    endQuiz();
  } else {
    generateQuestion();
  }
}

function showSplash() {
  $('#splash').show();
  $('#quizSection').hide();
  $('#scoreSection').hide();

  $('#go').focus();
}

function startQuiz() {
  $('#splash').hide();
  $('#quizSection').show();
  $('#scoreSection').hide();

  resetLog();
  generateQuestion();
}

function endQuiz() {
  $('#splash').hide();
  $('#quizSection').hide();
  $('#scoreSection').show();

  $('#backToStart').focus();
}

function updateTeNotice() {
  if ($('#te-form').is(':checked')) {
    $('#te-notice').show();
  } else {
    $('#te-notice').hide();
  }
}

function arrayDifference(a, b) {
  // From http://stackoverflow.com/a/1723220
  return a.filter(function (x) { return b.indexOf(x) < 0 });
}

function arrayUnique(arr) {
  return arr.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

function calculateTransitions() {

  function getTags(str) {

    var tags = str.split(" ");

    if ((tags.length == 1) && (tags[0] == "plain")) {
      tags = [];
    }

    return tags;
  }

  function calculateTags(tags) {

    tags = tags.split(" ");

    if (tags.indexOf("polite") == -1) {
      tags.push("plain");
    }

    if (tags.indexOf("dictionary") != -1) {
      tags.splice(tags.indexOf("dictionary"), 1);
    }

    return tags;
  }

  transformations.forEach(function (transformation) {

    var from = getTags(transformation.from);
    var to = getTags(transformation.to);

    var from_extra = {
      "negative": "affirmative",
      "past": "present",
      "polite": "plain",
      "te-form": "non-て",
      "potential": "non-potential",
      "imperative": "non-imperative",
      "causative": "non-causative",
      "passive": "active",
      "progressive": "non-progressive",
    };

    var to_extra = {
      "negative": "negative",
      "past": "past",
      "polite": "polite",
      "te-form": "て",
      "potential": "potential",
      "imperative": "imperative",
      "causative": "causative",
      "passive": "passive",
      "progressive": "progressive",
    };

    var phrase;

    phrase = phrase || from_extra[arrayDifference(from, to)[0]];
    phrase = phrase || to_extra[arrayDifference(to, from)[0]];

    transformation.phrase = phrase;

    transformation.tags = arrayUnique(calculateTags(transformation.from).concat(calculateTags(transformation.to)));

  });

  // Add trick forms

  var trick_forms = [];

  transformations.forEach(function (transformation) {
    trick_forms.push({
      from: transformation.to,
      to: transformation.to,
      phrase: transformation.phrase,
      tags: transformation.tags.concat(["trick"])
    });

    // Cheap trick to make trick questions appear on average 25% of the time
    // instead of 50%. I'll fix this later *cough*.

    trick_forms.push(transformation);
    trick_forms.push(transformation);
  });

  transformations = transformations.concat(trick_forms);
}

$('window').ready(function () {

  calculateTransitions();

  $('#go').click(startQuiz);
  $('#backToStart').click(showSplash);

  $('#te-form').click(updateTeNotice);
  updateTeNotice();

  showSplash();
});
