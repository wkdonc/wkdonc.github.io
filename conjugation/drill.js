// drill.js

var vowelPart = {
  "あ": "あ", "い": "い", "う": "う", "え": "え", "お": "お",
  "か": "あ", "き": "い", "く": "う", "け": "え", "こ": "お",
  "さ": "あ", "し": "い", "す": "う", "せ": "え", "そ": "お",
  "た": "あ", "ち": "い", "つ": "う", "て": "え", "と": "お",
  "な": "あ", "に": "い", "ぬ": "う", "ね": "え", "の": "お",
  "は": "あ", "ひ": "い", "ふ": "う", "へ": "え", "ほ": "お",
  "ま": "あ", "み": "い", "む": "う", "め": "え", "も": "お",
  "や": "あ", "ゆ": "う", "よ": "お",
  "ら": "あ", "り": "い", "る": "う", "れ": "え", "ろ": "お",
  "わ": "あ", "を": "お",
  "が": "あ", "ぎ": "い", "ぐ": "う", "げ": "え", "ご": "お",
  "ざ": "あ", "じ": "い", "ず": "う", "ぜ": "え", "ぞ": "お",
  "だ": "あ", "ぢ": "い", "づ": "う", "で": "え", "ど": "お",
  "ば": "あ", "び": "い", "ぶ": "う", "べ": "え", "ぼ": "お",
  "ぱ": "あ", "ぴ": "い", "ぷ": "う", "ぺ": "え", "ぽ": "お"
};

var consonantPart = {
  "あ": "あ", "い": "あ", "う": "あ", "え": "あ", "お": "あ",
  "か": "か", "き": "か", "く": "か", "け": "か", "こ": "か",
  "さ": "さ", "し": "さ", "す": "さ", "せ": "さ", "そ": "さ",
  "た": "た", "ち": "た", "つ": "た", "て": "た", "と": "た",
  "な": "な", "に": "な", "ぬ": "な", "ね": "な", "の": "な",
  "は": "は", "ひ": "は", "ふ": "は", "へ": "は", "ほ": "は",
  "ま": "ま", "み": "ま", "む": "ま", "め": "ま", "も": "ま",
  "や": "や", "ゆ": "や", "よ": "や",
  "ら": "ら", "り": "ら", "る": "ら", "れ": "ら", "ろ": "ら",
  "わ": "わ", "を": "わ",
  "ん": "ん",
  "が": "が", "ぎ": "が", "ぐ": "が", "げ": "が", "ご": "が",
  "ざ": "ざ", "じ": "ざ", "ず": "ざ", "ぜ": "ざ", "ぞ": "ざ",
  "だ": "だ", "ぢ": "だ", "づ": "だ", "で": "だ", "ど": "だ",
  "ば": "ば", "び": "ば", "ぶ": "ば", "べ": "ば", "ぼ": "ば",
  "ぱ": "ぱ", "ぴ": "ぱ", "ぷ": "ぱ", "ぺ": "ぱ", "ぽ": "ぱ"
};

var combineParts = {
  "ああ": "あ", "あい": "い", "あう": "う", "あえ": "え", "あお": "お",
  "かあ": "か", "かい": "き", "かう": "く", "かえ": "け", "かお": "こ",
  "さあ": "さ", "さい": "し", "さう": "す", "さえ": "せ", "さお": "そ",
  "たあ": "た", "たい": "ち", "たう": "つ", "たえ": "て", "たお": "と",
  "なあ": "な", "ない": "に", "なう": "ぬ", "なえ": "ね", "なお": "の",
  "はあ": "は", "はい": "ひ", "はう": "ふ", "はえ": "へ", "はお": "ほ",
  "まあ": "ま", "まい": "み", "まう": "む", "まえ": "め", "まお": "も",
  "やあ": "や", "やう": "ゆ", "やお": "よ",
  "らあ": "ら", "らい": "り", "らう": "る", "らえ": "れ", "らお": "ろ",
  "わあ": "わ", "わお": "を",
  "があ": "が", "がい": "ぎ", "がう": "ぐ", "がえ": "げ", "がお": "ご",
  "ざあ": "ざ", "ざい": "じ", "ざう": "ず", "ざえ": "ぜ", "ざお": "ぞ",
  "だあ": "だ", "だい": "ぢ", "だう": "づ", "だえ": "で", "だお": "ど",
  "ばあ": "ば", "ばい": "び", "ばう": "ぶ", "ばえ": "べ", "ばお": "ぼ",
  "ぱあ": "ぱ", "ぱい": "ぴ", "ぱう": "ぷ", "ぱえ": "ぺ", "ぱお": "ぽ"
};

var words = [
  {
    "pos" : "verb",
    "english": "to eat",
    "word": "食[た]べる",
  },

  {
    "pos": "verb",
    "english": "to drink",
    "word": "飲[の]む",
  },

  {
    "pos": "verb",
    "english": "to make",
    "word": "作[つく]る",
  },

  {
    "pos": "verb",
    "english": "to add",
    "word": "足[た]す",
  },

  {
    "pos": "verb",
    "english": "to see",
    "word": "見[み]る",
  },

  {
    "pos": "verb",
    "english": "to rest",
    "word": "休[やす]む",
  },

  {
    "pos": "verb",
    "english": "to sing",
    "word": "歌[うた]う",
  },

  {
    "pos": "verb",
    "english": "to sit",
    "word": "座[すわ]る",
  },

  {
    "pos": "verb",
    "english": "to buy as a gift",
    "word": "買[か]い与[あた]える",
  },

  {
    "pos": "verb",
    "english": "to buy as a replacement",
    "word": "買[か]い換[か]える",
  },

  {
    "pos": "verb",
    "english": "to buy back",
    "word": "買[か]い戻[もど]す",
  },

  {
    "pos": "verb",
    "english": "to think",
    "word": "思[おも]う",
  },

  {
    "pos": "verb",
    "english": "to go",
    "word": "行[い]く",
  },

  {
    "pos": "verb",
    "english": "to read",
    "word": "読[よ]む",
  },

  {
    "pos": "verb",
    "english": "to wake up",
    "word": "起[お]きる",
  },
];

var log = { "history": [] };

Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)]
}

// From: http://stackoverflow.com/a/2897510

new function($) {
    $.fn.getCursorPosition = function() {
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

new function($) {
  $.fn.setCursorPosition = function(pos) {
    if (this.setSelectionRange) {
      this.setSelectionRange(pos, pos);
    } else if (this.createTextRange) {
      var range = this.createTextRange();
      range.collapse(true);
      if(pos < 0) {
        pos = $(this).val().length + pos;
      }
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }
}(jQuery);

function getVerbForms(word) {

  function aux(dictionary_form, dictionary_kana) {

    var forms = new Object();
  
    forms["dictionary"] = dictionary_form;
  
    // Special case for くる and する
  
    if (dictionary_kana == "くる") {
  
      forms["negative"] = "こない";
      forms["past"] = "きた";
      forms["past negative"] = "こなかった";
      forms["formal"] = "きます";
      forms["te-form"] = "きて";
  
      // forms["dictionary"] = "来る";
      // forms["formal"] = "来ます";
      // forms["past"] = "来た";
      // forms["formal past"] = "来ました";
      // forms["negative"] = "来ない";
      // forms["formal negative"] = "来ません";
      // forms["past negative"] = "来なかった";
      // forms["formal past negative"] = "来ませんでした";
      // forms["te-form"] = "来て";
      // forms["conditional"] = "来れば";
      // forms["volitional"] = "来よう";
      // forms["passive"] = "来られる";
      // forms["causative"] = "来させる";
      // forms["potential"] = "来られる";
      // forms["imperative"] = "来い";
  
      return forms;
  
    } else if (dictionary_kana == "する") {
  
      forms["negative"] = "しない";
      forms["past"] = "した";
      forms["past negative"] = "しなかった";
      forms["formal"] = "します";
      forms["te-form"] = "して";
  
      return forms;
    }
  
    var group;
  
    if (dictionary_kana.slice(-2) == "する") {
      group = "suru";
    } else if ((dictionary_kana.slice(-1) == "る") && (
      (vowelPart[dictionary_kana.slice(-2)[0]] == "い") ||
      (vowelPart[dictionary_kana.slice(-2)[0]] == "え"))) {
  
      group = "ichidan";
  
    } else {
  
      group = "godan";
    }
  
    // masu form (verbs)
  
    var masu_root;
  
    if (group == "ichidan") {
      masu_root = dictionary_form.slice(0, -1);
    } if (group == "godan") {
      masu_root = dictionary_form.slice(0, -1) + combineParts[consonantPart[dictionary_form.slice(-1)] + "い"];
    }
  
    forms["formal"]               = masu_root + "ます";
    forms["formal past"]          = masu_root + "ました";
    forms["formal negative"]      = masu_root + "ません";
    forms["formal past negative"] = masu_root + "ませんでした";
    forms["volitional"]           = masu_root + "ましょう";
  
    // te form
  
    if (dictionary_kana == "いく") {
      forms["te-form"] = dictionary_form.slice(0, -1) + "って";
    } else if (group == "godan") {
      switch (dictionary_kana.slice(-1)) {
  
        case "う":
        case "つ":
        case "る":
        forms["te-form"] = dictionary_form.slice(0, -1) + "って";
        break;
  
        case "す":
        forms["te-form"] = dictionary_form.slice(0, -1) + "して";
        break;
  
        case "く":
        forms["te-form"] = dictionary_form.slice(0, -1) + "いて";
        break;
  
        case "ぐ":
        forms["te-form"] = dictionary_form.slice(0, -1) + "いで";
        break;
  
        case "ぶ":
        case "む":
        case "ぬ":
        forms["te-form"] = dictionary_form.slice(0, -1) + "んで";
        break;
      }
    } else {
      forms["te-form"] = dictionary_form.slice(0, -1) + "て";
    }
  
    // present negative
  
    if (group == "godan") {
  
      if (dictionary_kana.slice(-1) == "う") {
        forms["negative"] = dictionary_form.slice(0, -1) + "わない";
      } else {
        forms["negative"] = dictionary_form.slice(0, -1) +
          combineParts[consonantPart[dictionary_form.slice(-1)] + "あ"] + "ない";
      }
    } else {
  
      // ichidan verb
  
      forms["negative"] = dictionary_form.slice(0, -1) + "ない";
    }
  
    // past informal
  
    if (dictionary_kana == "いく") {
      forms["past"] = dictionary_form.slice(0, -1) + "った";
    } else if (group == "godan") {
      switch (dictionary_form.slice(-1)) {
  
        case "う":
        case "つ":
        case "る":
        forms["past"] = dictionary_form.slice(0, -1) + "った";
        break;
  
        case "す":
        forms["past"] = dictionary_form.slice(0, -1) + "した";
        break;
  
        case "く":
        forms["past"] = dictionary_form.slice(0, -1) + "いた";
        break;
  
        case "ぐ":
        forms["past"] = dictionary_form.slice(0, -1) + "いだ";
        break;
  
        case "ぶ":
        case "む":
        case "ぬ":
        forms["past"] = dictionary_form.slice(0, -1) + "んだ";
        break;
      }
    } else {
      forms["past"] = dictionary_form.slice(0, -1) + "た";
    }
  
    // informal past negative
  
    if (group == "godan") {
      if (dictionary_kana.slice(-1) == "う") {
        forms["past negative"] = dictionary_form.slice(0, -1) + "わなかった";
      } else {
        forms["past negative"] = dictionary_form.slice(0, -1) +
          combineParts[consonantPart[dictionary_form.slice(-1)] + "あ"] + "なかった";
      }
    } else {
      forms["past negative"] = dictionary_form.slice(0, -1) + "なかった";
    }
  
    return forms;
  }

  var word_form = word["word"].split(/(.)\[[^\]]*\]/).join("");
  var kana_form = word["word"].split(/.\[([^\]]*)\]/).join("");

  return {
    "word": word["word"],
    "kanji": aux(word_form, kana_form),
    "hiragana": aux(kana_form, kana_form),
    "furigana": aux(word["word"], kana_form)
  };
}

function getAdjectiveForms(dictionary_form) {

  var result = new Object();

  // past affirmative form (adjectives)

  if (dictionary_form == "いい") {
    result["past affirmative adj"] = "よかったです";
  } else if (dictionary_form.slice(-1) == "い") {
    result["past affirmative adj"] = dictionary_form.slice(0, -1) + "かったです";
  } else if (dictionary_form.slice(-1) == "な") {
    result["past affirmative adj"] = dictionary_form.slice(0, -1) + "でした";
  }

  // present negative form (adjectives)

  if (dictionary_form == "いい") {
    result["present negative adj"] = "よくないです";
  } else if (dictionary_form.slice(-1) == "い") {
    result["present negative adj"] = dictionary_form.slice(0, -1) + "くないです";
  } else if (dictionary_form.slice(-1) == "な") {
    result["present negative adj"] = dictionary_form.slice(0, -1) + "じゃないです";
  }
}

var verb_relative_form = {

  "dictionary" : {

    "negative": "affirmative",
    "past": "present",
    "formal": "informal",
//    "te-form": "informal",
  },

  "negative": {

    "dictionary": "negative",
    "past negative": "present",
    "formal negative": "informal",
 //   "te-form": "negative",
  },

  "past" : {

    "dictionary": "past",
    "past negative" : "affirmative",
    "formal past": "informal",
//    "te-form": "past",
  },

  "past negative" : {

    "negative": "past",
    "past": "negative",
    "formal past negative": "informal",
//    "te-form": "past negative",
  },

  "formal": {

    "dictionary": "formal",
    "formal past": "present",
    "formal negative": "affirmative",
//    "te-form": "formal",
  },

  "formal past": {

    "past": "formal",
    "formal": "past",
    "formal past negative": "affirmative",
//    "te-form": "formal past",
  },

  "formal negative": {

    "negative": "formal",
    "formal": "negative",
    "formal past negative": "present",
 //   "te-form": "formal negative",
  },

  "formal past negative": {

    "past negative": "formal",
    "formal past": "negative",
    "formal negative": "past",
//    "te-form": "formal past negative",
  },
};

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
    "a" : "あ", "i" : "い", "u" : "う", "e" : "え", "o" : "お"
  };

  var replace2 = {

    "ka" : "か", "ki" : "き", "ku" : "く", "ke" : "け", "ko" : "こ",
    "sa" : "さ", "si" : "し", "su" : "す", "se" : "せ", "so" : "そ",
    "ta" : "た", "ti" : "ち", "tu" : "つ", "te" : "て", "to" : "と",
    "na" : "な", "ni" : "に", "nu" : "ぬ", "ne" : "ね", "no" : "の",
    "ha" : "は", "hi" : "ひ", "hu" : "ふ", "he" : "へ", "ho" : "ほ",
    "ma" : "ま", "mi" : "み", "mu" : "む", "me" : "め", "mo" : "も",
    "ra" : "ら", "ri" : "り", "ru" : "る", "re" : "れ", "ro" : "ろ",
    "ga" : "が", "gi" : "ぎ", "gu" : "ぐ", "ge" : "げ", "go" : "ご",
    "za" : "ざ", "zi" : "じ", "zu" : "ず", "ze" : "ぜ", "zo" : "ぞ",
    "da" : "だ", "di" : "ぢ", "du" : "づ", "de" : "で", "do" : "ど",
    "ba" : "ば", "bi" : "び", "bu" : "ぶ", "be" : "べ", "bo" : "ぼ",
    "pa" : "ぱ", "pi" : "ぴ", "pu" : "ぷ", "pe" : "ぺ", "po" : "ぽ",

    "qa" : "くぁ", "qi" : "くぃ", "qu" : "く", "qe" : "くぇ", "qo" : "くぉ",
    "wa" : "わ", "wi" : "うぃ", "wu" : "う", "we" : "うぇ", "wo" : "を",
    "ya" : "や", "yi" : "い", "yu" : "ゆ", "ye" : "いぇ", "yo" : "よ",
    "fa" : "ふぁ", "fi" : "ふぃ", "fu" : "ふ", "fe" : "ふぇ", "fo" : "ふぉ",
    "ja" : "じゃ", "ji" : "じ", "ju" : "じゅ", "je" : "じぇ", "jo" : "じょ",
    "la" : "ぁ", "li" : "ぃ", "lu" : "ぅ", "le" : "ぇ", "lo" : "ぉ",
    "za" : "ざ", "zi" : "じ", "zu" : "ず", "ze" : "ぜ", "zo" : "ぞ",
    "xa" : "ぁ", "xi" : "ぃ", "xu" : "ぅ", "xe" : "ぇ", "xo" : "ぉ",
    "ca" : "か", "ci" : "し", "cu" : "く", "ce" : "せ", "co" : "こ",
    "va" : "ヴぁ", "vi" : "ヴぃ", "vu" : "ヴ", "ve" : "ヴぇ", "vo" : "ヴぉ",

    "lu" : "っ",

    "nn" : "ん",

    "nb" : "んb",
    "nc" : "んc",
    "nd" : "んd",
    "nf" : "んf",
    "ng" : "んg",
    "nh" : "んh",
    "nj" : "んj",
    "nk" : "んk",
    "nl" : "んl",
    "nm" : "んm",
    "np" : "んp",
    "nq" : "んq",
    "nr" : "んr",
    "ns" : "んs",
    "nt" : "んt",
    "nv" : "んv",
    "nw" : "んw",
    "nx" : "んx",
    "nz" : "んz",

    "aa" : "っa",
    "bb" : "っb",
    "cc" : "っc",
    "dd" : "っd",
    "ee" : "っe",
    "ff" : "っf",
    "gg" : "っg",
    "hh" : "っh",
    "ii" : "っi",
    "jj" : "っj",
    "kk" : "っk",
    "ll" : "っl",
    "mm" : "っm",
    "oo" : "っo",
    "pp" : "っp",
    "qq" : "っq",
    "rr" : "っr",
    "ss" : "っs",
    "tt" : "っt",
    "uu" : "っu",
    "vv" : "っv",
    "ww" : "っw",
    "xx" : "っx",
    "yy" : "っy",
    "zz" : "っz",
  };

  var replace3 = {

    "kya" : "きゃ", "kyi" : "きぃ", "kyu" : "きゅ", "kye" : "きぇ", "kyo" : "きょ",
    "sya" : "しゃ", "syi" : "しぃ", "syu" : "しゅ", "sye" : "しぇ", "syo" : "しょ",
    "tya" : "ちゃ", "tyi" : "ちぃ", "tyu" : "ちゅ", "tye" : "ちぇ", "tyo" : "ちょ",
    "nya" : "にゃ", "nyi" : "にぃ", "nyu" : "にゅ", "nye" : "にぇ", "nyo" : "にょ",
    "hya" : "ひゃ", "hyi" : "ひぃ", "hyu" : "ひゅ", "hye" : "ひぇ", "hyo" : "ひょ",
    "mya" : "みゃ", "myi" : "みぃ", "myu" : "みゅ", "mye" : "みぇ", "myo" : "みょ",
    "rya" : "りゃ", "ryi" : "りぃ", "ryu" : "りゅ", "rye" : "りぇ", "ryo" : "りょ",
    "gya" : "ぎゃ", "gyi" : "ぎぃ", "gyu" : "ぎゅ", "gye" : "ぎぇ", "gyo" : "ぎょ",
    "zya" : "じゃ", "zyi" : "じぃ", "zyu" : "じゅ", "zye" : "じぇ", "zyo" : "じょ",
    "dya" : "ぢゃ", "dyi" : "ぢぃ", "dyu" : "ぢゅ", "dye" : "ぢぇ", "dyo" : "ぢょ",
    "bya" : "びゃ", "byi" : "びぃ", "byu" : "びゅ", "bye" : "びぇ", "byo" : "びょ",
    "pya" : "ぴゃ", "pyi" : "ぴぃ", "pyu" : "ぴゅ", "pye" : "ぴぇ", "pyo" : "ぴょ",

    "shi" : "し",
    "tsu" : "つ",
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

function generateVerbQuestion() {
  
  var entry = words.randomElement();

  var forms = getVerbForms(entry);

  var word = forms["word"];
  var kanjiForms = forms["kanji"];
  var kanaForms = forms["hiragana"];
  var furiganaForms = forms["furigana"];

  var to_form = Object.keys(verb_relative_form).randomElement();
  var from_form = Object.keys(verb_relative_form[to_form]).randomElement();

  var question = "What is the " + verb_relative_form[to_form][from_form] + " form of " + wordWithFurigana(furiganaForms[from_form]) + "?";
  var answer = kanjiForms[to_form];
  var answer2 = kanaForms[to_form];

  console.log("From form = " + from_form);
  console.log("To form = " + to_form);
  console.log("Question = " + question);
  console.log("Answer = " + answer);

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
    "question" : window.question,
    "response" : response,
    "answer"   : window.answerWithFurigana,
    "kana"     : window.answer2,
    "correct"  : correct
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
    td2.html(entry.answerWithFurigana);
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
  if (log.history.length == 10) {
    console.log("終わり。");
  } else {
    generateVerbQuestion();
  }
}

function tests() {

  function assertEqual(expected, actual) {
    if (expected != actual) {
      throw "Expected: " + expected + ", actual " + actual;
    }

  }

// Group 1 tests::::
//
//   "飲む"
//   "作る"
//   "買い戻す"
//
// Group 2 tests
//
//   "見る"
//   "食べる"
//   "起きる"
//   "買い換える"
//
// // Special case tests
//
//   "行く"

  var ikuForms = getVerbForms( { "word" : "行[い]く" } );
  var nomuForms = getVerbForms( { "word" : "飲[の]む" } );
  var tsukuruForms = getVerbForms( { "word" : "作[つく]る" } );
  var kaimodosuForms = getVerbForms( { "word" : "買[か]い戻[もど]す" } );
  var miruForms = getVerbForms( { "word" : "見[み]る" } );
  var taberuForms = getVerbForms( { "word" : "食[た]べる" } );
  var okiruForms = getVerbForms( { "word" : "起[お]きる" } );
  var kaikaeruForms = getVerbForms( { "word" : "買[か]い換[か]える" } );

  assertEqual("行く", ikuForms["kanji"]["dictionary"]);
  assertEqual("行きます", ikuForms["kanji"]["formal"]);
  assertEqual("行かない", ikuForms["kanji"]["negative"]);
  assertEqual("行きません", ikuForms["kanji"]["formal negative"]);
  assertEqual("行った", ikuForms["kanji"]["past"]);
  assertEqual("行って", ikuForms["kanji"]["te-form"]);
  assertEqual("行きました", ikuForms["kanji"]["formal past"]);
  assertEqual("行かなかった", ikuForms["kanji"]["past negative"]);
  assertEqual("行きませんでした", ikuForms["kanji"]["formal past negative"]);
  // assertEqual("行ける", ikuForms["kanji"]["Potential, -ru"]);
  // assertEqual("行かれる", ikuForms["kanji"]["Passive, -reru"]);
  // assertEqual("行かせる", ikuForms["kanji"]["Causative, -seru"]);
  // assertEqual("行かせられる", ikuForms["kanji"]["Passive causative, -serareru"]);
  // assertEqual("行け", ikuForms["kanji"]["Imperative"]);

  assertEqual("いく", ikuForms["hiragana"]["dictionary"]);
  assertEqual("いきます", ikuForms["hiragana"]["formal"]);
  assertEqual("いかない", ikuForms["hiragana"]["negative"]);
  assertEqual("いきません", ikuForms["hiragana"]["formal negative"]);
  assertEqual("いった", ikuForms["hiragana"]["past"]);
  assertEqual("いって", ikuForms["hiragana"]["te-form"]);
  assertEqual("いきました", ikuForms["hiragana"]["formal past"]);
  assertEqual("いかなかった", ikuForms["hiragana"]["past negative"]);
  assertEqual("いきませんでした", ikuForms["hiragana"]["formal past negative"]);
  // assertEqual("いける", ikuForms["hiragana"]["Potential, -ru"]);
  // assertEqual("いかれる", ikuForms["hiragana"]["Passive, -reru"]);
  // assertEqual("いかせる", ikuForms["hiragana"]["Causative, -seru"]);
  // assertEqual("いかせられる", ikuForms["hiragana"]["Passive causative, -serareru"]);
  // assertEqual("いけ", ikuForms["hiragana"]["Imperative"]);

  assertEqual("飲む", nomuForms["kanji"]["dictionary"]);
  assertEqual("飲みます", nomuForms["kanji"]["formal"]);
  assertEqual("飲まない", nomuForms["kanji"]["negative"]);
  assertEqual("飲みません", nomuForms["kanji"]["formal negative"]);
  assertEqual("飲んだ", nomuForms["kanji"]["past"]);
  assertEqual("飲んで", nomuForms["kanji"]["te-form"]);
  assertEqual("飲みました", nomuForms["kanji"]["formal past"]);
  assertEqual("飲まなかった", nomuForms["kanji"]["past negative"]);
  assertEqual("飲みませんでした", nomuForms["kanji"]["formal past negative"]);
  // assertEqual("飲める", nomuForms["kanji"]["Potential, -ru"]);
  // assertEqual("飲まれる", nomuForms["kanji"]["Passive, -reru"]);
  // assertEqual("飲ませる", nomuForms["kanji"]["Causative, -seru"]);
  // assertEqual("飲ませられる", nomuForms["kanji"]["Passive causative, -serareru"]);
  // assertEqual("飲め", nomuForms["kanji"]["Imperative"]);

  assertEqual("のむ", nomuForms["hiragana"]["dictionary"]);
  assertEqual("のみます", nomuForms["hiragana"]["formal"]);
  assertEqual("のまない", nomuForms["hiragana"]["negative"]);
  assertEqual("のみません", nomuForms["hiragana"]["formal negative"]);
  assertEqual("のんだ", nomuForms["hiragana"]["past"]);
  assertEqual("のんで", nomuForms["hiragana"]["te-form"]);
  assertEqual("のみました", nomuForms["hiragana"]["formal past"]);
  assertEqual("のまなかった", nomuForms["hiragana"]["past negative"]);
  assertEqual("のみませんでした", nomuForms["hiragana"]["formal past negative"]);
  // assertEqual("のめる", nomuForms["hiragana"]["Potential, -ru"]);
  // assertEqual("のまれる", nomuForms["hiragana"]["Passive, -reru"]);
  // assertEqual("のませる", nomuForms["hiragana"]["Causative, -seru"]);
  // assertEqual("のませられる", nomuForms["hiragana"]["Passive causative, -serareru"]);
  // assertEqual("のめ", nomuForms["hiragana"]["Imperative"]);

  assertEqual("作る", tsukuruForms["kanji"]["dictionary"]);
  assertEqual("作ります", tsukuruForms["kanji"]["formal"]);
  assertEqual("作らない", tsukuruForms["kanji"]["negative"]);
  assertEqual("作りません", tsukuruForms["kanji"]["formal negative"]);
  assertEqual("作った", tsukuruForms["kanji"]["past"]);
  assertEqual("作って", tsukuruForms["kanji"]["te-form"]);
  assertEqual("作りました", tsukuruForms["kanji"]["formal past"]);
  assertEqual("作らなかった", tsukuruForms["kanji"]["past negative"]);
  assertEqual("作りませんでした", tsukuruForms["kanji"]["formal past negative"]);
  // assertEqual("作れる", tsukuruForms["kanji"]["Potential, -ru"]);
  // assertEqual("作られる", tsukuruForms["kanji"]["Passive, -reru"]);
  // assertEqual("作らせる", tsukuruForms["kanji"]["Causative, -seru"]);
  // assertEqual("作らせられる", tsukuruForms["kanji"]["Passive causative, -serareru"]);
  // assertEqual("作れ", tsukuruForms["kanji"]["Imperative"]);

  assertEqual("つくる", tsukuruForms["hiragana"]["dictionary"]);
  assertEqual("つくります", tsukuruForms["hiragana"]["formal"]);
  assertEqual("つくらない", tsukuruForms["hiragana"]["negative"]);
  assertEqual("つくりません", tsukuruForms["hiragana"]["formal negative"]);
  assertEqual("つくった", tsukuruForms["hiragana"]["past"]);
  assertEqual("つくって", tsukuruForms["hiragana"]["te-form"]);
  assertEqual("つくりました", tsukuruForms["hiragana"]["formal past"]);
  assertEqual("つくらなかった", tsukuruForms["hiragana"]["past negative"]);
  assertEqual("つくりませんでした", tsukuruForms["hiragana"]["formal past negative"]);
  // assertEqual("つくれる", tsukuruForms["hiragana"]["Potential, -ru"]);
  // assertEqual("つくられる", tsukuruForms["hiragana"]["Passive, -reru"]);
  // assertEqual("つくらせる", tsukuruForms["hiragana"]["Causative, -seru"]);
  // assertEqual("つくらせられる", tsukuruForms["hiragana"]["Passive causative, -serareru"]);
  // assertEqual("つくれ", tsukuruForms["hiragana"]["Imperative"]);

  assertEqual("買い戻す", kaimodosuForms["kanji"]["dictionary"]);
  assertEqual("買い戻します", kaimodosuForms["kanji"]["formal"]);
  assertEqual("買い戻さない", kaimodosuForms["kanji"]["negative"]);
  assertEqual("買い戻しません", kaimodosuForms["kanji"]["formal negative"]);
  assertEqual("買い戻した", kaimodosuForms["kanji"]["past"]);
  assertEqual("買い戻して", kaimodosuForms["kanji"]["te-form"]);
  assertEqual("買い戻しました", kaimodosuForms["kanji"]["formal past"]);
  assertEqual("買い戻さなかった", kaimodosuForms["kanji"]["past negative"]);
  assertEqual("買い戻しませんでした", kaimodosuForms["kanji"]["formal past negative"]);
  // assertEqual("買い戻せる", kaimodosuForms["kanji"]["Potential, -ru"]);
  // assertEqual("買い戻される", kaimodosuForms["kanji"]["Passive, -reru"]);
  // assertEqual("買い戻させる", kaimodosuForms["kanji"]["Causative, -seru"]);
  // assertEqual("買い戻させられる", kaimodosuForms["kanji"]["Passive causative, -serareru"]);
  // assertEqual("買い戻せ", kaimodosuForms["kanji"]["Imperative"]);

  assertEqual("かいもどす", kaimodosuForms["hiragana"]["dictionary"]);
  assertEqual("かいもどします", kaimodosuForms["hiragana"]["formal"]);
  assertEqual("かいもどさない", kaimodosuForms["hiragana"]["negative"]);
  assertEqual("かいもどしません", kaimodosuForms["hiragana"]["formal negative"]);
  assertEqual("かいもどした", kaimodosuForms["hiragana"]["past"]);
  assertEqual("かいもどして", kaimodosuForms["hiragana"]["te-form"]);
  assertEqual("かいもどしました", kaimodosuForms["hiragana"]["formal past"]);
  assertEqual("かいもどさなかった", kaimodosuForms["hiragana"]["past negative"]);
  assertEqual("かいもどしませんでした", kaimodosuForms["hiragana"]["formal past negative"]);
  // assertEqual("かいもどせる", kaimodosuForms["hiragana"]["Potential, -ru"]);
  // assertEqual("かいもどされる", kaimodosuForms["hiragana"]["Passive, -reru"]);
  // assertEqual("かいもどさせる", kaimodosuForms["hiragana"]["Causative, -seru"]);
  // assertEqual("かいもどさせられる", kaimodosuForms["hiragana"]["Passive causative, -serareru"]);
  // assertEqual("かいもどせ", kaimodosuForms["hiragana"]["Imperative"]);

  assertEqual("見る", miruForms["kanji"]["dictionary"]);
  assertEqual("見ます", miruForms["kanji"]["formal"]);
  assertEqual("見ない", miruForms["kanji"]["negative"]);
  assertEqual("見ません", miruForms["kanji"]["formal negative"]);
  assertEqual("見た", miruForms["kanji"]["past"]);
  assertEqual("見て", miruForms["kanji"]["te-form"]);
  assertEqual("見ました", miruForms["kanji"]["formal past"]);
  assertEqual("見なかった", miruForms["kanji"]["past negative"]);
  assertEqual("見ませんでした", miruForms["kanji"]["formal past negative"]);
  // assertEqual("見られる", miruForms["kanji"]["Potential, -rareru"]);
  // assertEqual("見られる", miruForms["kanji"]["Passive, -rareru"]);
  // assertEqual("見させる", miruForms["kanji"]["Causative, -saseru"]);
  // assertEqual("見させられる", miruForms["kanji"]["Passive causative, -saserareru"]);
  // assertEqual("見ろ", miruForms["kanji"]["Imperative, -ro"]);

  assertEqual("みる", miruForms["hiragana"]["dictionary"]);
  assertEqual("みます", miruForms["hiragana"]["formal"]);
  assertEqual("みない", miruForms["hiragana"]["negative"]);
  assertEqual("みません", miruForms["hiragana"]["formal negative"]);
  assertEqual("みた", miruForms["hiragana"]["past"]);
  assertEqual("みて", miruForms["hiragana"]["te-form"]);
  assertEqual("みました", miruForms["hiragana"]["formal past"]);
  assertEqual("みなかった", miruForms["hiragana"]["past negative"]);
  assertEqual("みませんでした", miruForms["hiragana"]["formal past negative"]);
  // assertEqual("みられる", miruForms["hiragana"]["Potential, -rareru"]);
  // assertEqual("みられる", miruForms["hiragana"]["Passive, -rareru"]);
  // assertEqual("みさせる", miruForms["hiragana"]["Causative, -saseru"]);
  // assertEqual("みさせられる", miruForms["hiragana"]["Passive causative, -saserareru"]);
  // assertEqual("みろ", miruForms["hiragana"]["Imperative, -ro"]);

  assertEqual("食べる", taberuForms["kanji"]["dictionary"]);
  assertEqual("食べます", taberuForms["kanji"]["formal"]);
  assertEqual("食べない", taberuForms["kanji"]["negative"]);
  assertEqual("食べません", taberuForms["kanji"]["formal negative"]);
  assertEqual("食べた", taberuForms["kanji"]["past"]);
  assertEqual("食べて", taberuForms["kanji"]["te-form"]);
  assertEqual("食べました", taberuForms["kanji"]["formal past"]);
  assertEqual("食べなかった", taberuForms["kanji"]["past negative"]);
  assertEqual("食べませんでした", taberuForms["kanji"]["formal past negative"]);
  // assertEqual("食べられる", taberuForms["kanji"]["Potential, -rareru"]);
  // assertEqual("食べられる", taberuForms["kanji"]["Passive, -rareru"]);
  // assertEqual("食べさせる", taberuForms["kanji"]["Causative, -saseru"]);
  // assertEqual("食べさせられる", taberuForms["kanji"]["Passive causative, -saserareru"]);
  // assertEqual("食べろ", taberuForms["kanji"]["Imperative, -ro"]);

  assertEqual("たべる", taberuForms["hiragana"]["dictionary"]);
  assertEqual("たべます", taberuForms["hiragana"]["formal"]);
  assertEqual("たべない", taberuForms["hiragana"]["negative"]);
  assertEqual("たべません", taberuForms["hiragana"]["formal negative"]);
  assertEqual("たべた", taberuForms["hiragana"]["past"]);
  assertEqual("たべて", taberuForms["hiragana"]["te-form"]);
  assertEqual("たべました", taberuForms["hiragana"]["formal past"]);
  assertEqual("たべなかった", taberuForms["hiragana"]["past negative"]);
  assertEqual("たべませんでした", taberuForms["hiragana"]["formal past negative"]);
  // assertEqual("たべられる", taberuForms["hiragana"]["Potential, -rareru"]);
  // assertEqual("たべられる", taberuForms["hiragana"]["Passive, -rareru"]);
  // assertEqual("たべさせる", taberuForms["hiragana"]["Causative, -saseru"]);
  // assertEqual("たべさせられる", taberuForms["hiragana"]["Passive causative, -saserareru"]);
  // assertEqual("たべろ", taberuForms["hiragana"]["Imperative, -ro"]);

  assertEqual("起きる", okiruForms["kanji"]["dictionary"]);
  assertEqual("起きます", okiruForms["kanji"]["formal"]);
  assertEqual("起きない", okiruForms["kanji"]["negative"]);
  assertEqual("起きません", okiruForms["kanji"]["formal negative"]);
  assertEqual("起きた", okiruForms["kanji"]["past"]);
  assertEqual("起きて", okiruForms["kanji"]["te-form"]);
  assertEqual("起きました", okiruForms["kanji"]["formal past"]);
  assertEqual("起きなかった", okiruForms["kanji"]["past negative"]);
  assertEqual("起きませんでした", okiruForms["kanji"]["formal past negative"]);
  // assertEqual("起きられる", okiruForms["kanji"]["Potential, -rareru"]);
  // assertEqual("起きられる", okiruForms["kanji"]["Passive, -rareru"]);
  // assertEqual("起きさせる", okiruForms["kanji"]["Causative, -saseru"]);
  // assertEqual("起きさせられる", okiruForms["kanji"]["Passive causative, -saserareru"]);
  // assertEqual("起きろ", okiruForms["kanji"]["Imperative, -ro"]);

  assertEqual("おきる", okiruForms["hiragana"]["dictionary"]);
  assertEqual("おきます", okiruForms["hiragana"]["formal"]);
  assertEqual("おきない", okiruForms["hiragana"]["negative"]);
  assertEqual("おきません", okiruForms["hiragana"]["formal negative"]);
  assertEqual("おきた", okiruForms["hiragana"]["past"]);
  assertEqual("おきて", okiruForms["hiragana"]["te-form"]);
  assertEqual("おきました", okiruForms["hiragana"]["formal past"]);
  assertEqual("おきなかった", okiruForms["hiragana"]["past negative"]);
  assertEqual("おきませんでした", okiruForms["hiragana"]["formal past negative"]);
  // assertEqual("おきられる", okiruForms["hiragana"]["Potential, -rareru"]);
  // assertEqual("おきられる", okiruForms["hiragana"]["Passive, -rareru"]);
  // assertEqual("おきさせる", okiruForms["hiragana"]["Causative, -saseru"]);
  // assertEqual("おきさせられる", okiruForms["hiragana"]["Passive causative, -saserareru"]);
  // assertEqual("おきろ", okiruForms["hiragana"]["Imperative, -ro"]);

  assertEqual("買い換える", kaikaeruForms["kanji"]["dictionary"]);
  assertEqual("買い換えます", kaikaeruForms["kanji"]["formal"]);
  assertEqual("買い換えない", kaikaeruForms["kanji"]["negative"]);
  assertEqual("買い換えません", kaikaeruForms["kanji"]["formal negative"]);
  assertEqual("買い換えた", kaikaeruForms["kanji"]["past"]);
  assertEqual("買い換えて", kaikaeruForms["kanji"]["te-form"]);
  assertEqual("買い換えました", kaikaeruForms["kanji"]["formal past"]);
  assertEqual("買い換えなかった", kaikaeruForms["kanji"]["past negative"]);
  assertEqual("買い換えませんでした", kaikaeruForms["kanji"]["formal past negative"]);
  // assertEqual("買い換えられる", kaikaeruForms["kanji"]["Potential, -rareru"]);
  // assertEqual("買い換えられる", kaikaeruForms["kanji"]["Passive, -rareru"]);
  // assertEqual("買い換えさせる", kaikaeruForms["kanji"]["Causative, -saseru"]);
  // assertEqual("買い換えさせられる", kaikaeruForms["kanji"]["Passive causative, -saserareru"]);
  // assertEqual("買い換えろ", kaikaeruForms["kanji"]["Imperative, -ro"]);

  assertEqual("かいかえる", kaikaeruForms["hiragana"]["dictionary"]);
  assertEqual("かいかえます", kaikaeruForms["hiragana"]["formal"]);
  assertEqual("かいかえない", kaikaeruForms["hiragana"]["negative"]);
  assertEqual("かいかえません", kaikaeruForms["hiragana"]["formal negative"]);
  assertEqual("かいかえた", kaikaeruForms["hiragana"]["past"]);
  assertEqual("かいかえて", kaikaeruForms["hiragana"]["te-form"]);
  assertEqual("かいかえました", kaikaeruForms["hiragana"]["formal past"]);
  assertEqual("かいかえなかった", kaikaeruForms["hiragana"]["past negative"]);
  assertEqual("かいかえませんでした", kaikaeruForms["hiragana"]["formal past negative"]);
  // assertEqual("かいかえられる", kaikaeruForms["hiragana"]["Potential, -rareru"]);
  // assertEqual("かいかえられる", kaikaeruForms["hiragana"]["Passive, -rareru"]);
  // assertEqual("かいかえさせる", kaikaeruForms["hiragana"]["Causative, -saseru"]);
  // assertEqual("かいかえさせられる", kaikaeruForms["hiragana"]["Passive causative, -saserareru"]);
  // assertEqual("かいかえろ", kaikaeruForms["hiragana"]["Imperative, -ro"]);

  console.log("Complete.");
}

$('window').ready(function() {
  generateVerbQuestion();
});
