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
    "word": "食べる",
    "kana": "たべる"
  },

  {
    "pos": "verb",
    "english": "to drink",
    "word": "飲む",
    "kana": "のむ"
  },

  {
    "pos": "verb",
    "english": "to sit",
    "word": "座る",
    "kana": "すわる"
  },

  {
    "pos": "verb",
    "english": "to buy as a gift",
    "word": "買い与える",
    "kana": "かいあたえる"
  },

  {
    "pos": "verb",
    "english": "to buy as a replacement",
    "word": "買い換える",
    "kana": "かいかえる"
  }
]

Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)]
}

function getVerbForms(dictionary_form) {

  var forms = new Object();

  forms["dictionary"] = dictionary_form;

  // Special case for くる and する

  if (dictionary_form == "くる") {

    forms["negative"] = "こない";
    forms["past"] = "きた";
    forms["past negative"] = "こなかった";
    forms["formal"] = "きます";
    forms["te-form"] = "きて";

    return forms;

  } else if (dictionary_form == "する") {

    forms["negative"] = "しない";
    forms["past"] = "した";
    forms["past negative"] = "しなかった";
    forms["formal"] = "します";
    forms["te-form"] = "して";

    return forms;
  }

  var group;

  if ((dictionary_form.slice(-1) == "る") && (
    (vowelPart[dictionary_form.slice(-2)[0]] == "い") ||
    (vowelPart[dictionary_form.slice(-2)[0]] == "え"))) {

    group = "ichidan";

  } else {

    group = "godan";
  }

  // masu form (verbs)

  if (dictionary_form.slice(-1) == "る") {
    forms["formal"] = dictionary_form.slice(0, -1) + "ます";
  } else {
    forms["formal"] = dictionary_form.slice(0, -1) +
      combineParts[consonantPart[dictionary_form.slice(-1)] + "い"] + "ます";
  }

  // te form

  if (dictionary_form == "いく") {
    forms["te-form"] = "いって";
  } else if (group == "godan") {
    switch (dictionary_form.slice(-1)) {

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

    if (dictionary_form.slice(-1) == "う") {
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

  if (dictionary_form == "いく") {
    forms["past"] = "いった";
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
    if (dictionary_form.slice(-1) == "う") {
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

function showForms(event) {

  if (event.keyCode == 13) {

    var input = $("input").val();
    var result = new getVerbForms(input);

    $("#word").html(input);
    $("#masu").html(result["formal"]);
    $("#te").html(result["te-form"]);
    $("#present_negative").html(result["negative"]);
    $("#past_informal").html(result["past"]);
    $("#past_negative_informal").html(result["past negative"]);

    var result = new getAdjectiveForms(input);

    $("#present_negative_adj").html(result["present negative adj"]);
    $("#past_affirmative_adj").html(result["past affirmative adj"]);
  }
}

var verb_relative_form = {

  "dictionary" : {

    "negative"      : "affirmative",
    "past"          : "present",
//  "past negative" : "present affirmative",
    "formal"        : "informal",
    "te-form"       : "informal",
  },

  "negative": {

    "dictionary"    : "negative",
//  "past"          : "present negative",
    "past negative" : "present",
//  "formal"        : "informal negative",
    "te-form"       : "negative",
  },

  "past" : {

    "dictionary"    : "past",
//  "negative"      : "past affirmative",
    "past negative" : "affirmative",
//  "formal"        : "past informal",
    "te-form"       : "past",
  },

  "past negative" : {

//  "dictionary"    : "past negative",
    "negative"      : "past",
    "past"          : "negative",
//  "formal"        : "informal past negative",
    "te-form"       : "past negative",
  },

  "formal": {

    "dictionary"    : "formal",
//  "negative"      : "formal affirmative",
//  "past"          : "present formal",
//  "past negative" : "present formal affirmative",
    "te-form"       : "formal",
  },
};

function generateVerbQuestion() {
  
  var entry = words.randomElement();

  var kanjiForms = getVerbForms(entry["word"]);
  var kanaForms = getVerbForms(entry["kana"]);

  var to_form = Object.keys(verb_relative_form).randomElement();
  var from_form = Object.keys(verb_relative_form[to_form]).randomElement();

  var question = "What is the " + verb_relative_form[to_form][from_form] + " form of " + kanjiForms[from_form] + "?";
  var answer = kanjiForms[to_form];
  var answer2 = kanaForms[to_form];

  console.log("From form = " + from_form);
  console.log("To form = " + to_form);
  console.log("Question = " + question);
  console.log("Answer = " + answer);

  $('#question').text(question);
  window.answer = answer;
  window.answer2 = answer2;

  $('#next').prop('disabled', true);
  $('#response').html("");
  $('#message').html("");

  $('#proceed').hide();
  $('#input').show();
  $('#answer').focus();
}

function processAnswer() {

  var response = $('#answer').val();
  var correct = ((response == window.answer) || (response == window.answer2));
  var klass = correct ? "correct" : "incorrect";

  $('#answer').val("");
  $('#response').prop('class', klass).text(response);
  $('#next').prop('disabled', false);
  
  if ((response == window.answer) || (response == window.answer2)) {
    $('#message').html("");
  } else {
    $('#message').html("<div>The correct answer was " + window.answer + "</div>");
  }

  $('#input').hide();
  $('#proceed').show();
  $('#proceed input').focus();
}

function proceed() {
  generateVerbQuestion();
}

$('window').ready(function() {
  generateVerbQuestion();
});
