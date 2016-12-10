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
    "furigana": "食[た]べる",
    "kana": "たべる"
  },

  {
    "pos": "verb",
    "english": "to drink",
    "word": "飲む",
    "furigana": "飲[の]む",
    "kana": "のむ"
  },

  {
    "pos": "verb",
    "english": "to make",
    "word": "作る",
    "furigana": "作[つく]る",
    "kana": "つくる"
  },

  {
    "pos": "verb",
    "english": "to add",
    "word": "足す",
    "furigana": "足[た]す",
    "kana": "たす"
  },

  {
    "pos": "verb",
    "english": "to see",
    "word": "見る",
    "furigana": "見[み]る",
    "kana": "みる"
  },

  {
    "pos": "verb",
    "english": "to rest",
    "word": "休む",
    "furigana": "休[やす]む",
    "kana": "やすむ"
  },

  {
    "pos": "verb",
    "english": "to sing",
    "word": "歌う",
    "furigana": "歌[うた]う",
    "kana": "うたう"
  },

  {
    "pos": "verb",
    "english": "to sit",
    "word": "座る",
    "furigana": "座[すわ]る",
    "kana": "すわる"
  },

  {
    "pos": "verb",
    "english": "to buy as a gift",
    "word": "買い与える",
    "furigana": "買[か]い与[あた]える",
    "kana": "かいあたえる"
  },

  {
    "pos": "verb",
    "english": "to buy as a replacement",
    "word": "買い換える",
    "furigana": "買[か]い換[か]える",
    "kana": "かいかえる"
  },

  {
    "pos": "verb",
    "english": "to buy back",
    "word": "買い戻す",
    "furigana": "買[か]い戻[もど]す",
    "kana": "かいもどす",
  },

  {
    "pos": "verb",
    "english": "to think",
    "word": "思う",
    "furigana": "思[おも]う",
    "kana": "おもう"
  },

  {
    "pos": "verb",
    "english": "to go",
    "word": "行く",
    "furigana": "行[い]く",
    "kana": "いく"
  },

  {
    "pos": "verb",
    "english": "to read",
    "word": "読む",
    "furigana": "読[よ]む",
    "kana": "よむ"
  },

  {
    "pos": "verb",
    "english": "to wake up",
    "word": "起きる",
    "furigana": "起[お]きる",
    "kana": "おきる"
  },
]

var log = { "history": [] };

Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)]
}

function getVerbForms(word) {

  function aux(dictionary_form, dictionary_kana) {

    var forms = new Object();
  
    forms["dictionary"] = dictionary_form;
  
    // Special case for くる and する
  
    if (dictionary_form == "くる") {
  
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
  
    } else if (dictionary_form == "する") {
  
      forms["negative"] = "しない";
      forms["past"] = "した";
      forms["past negative"] = "しなかった";
      forms["formal"] = "します";
      forms["te-form"] = "して";
  
      return forms;
    }
  
    var group;
  
    if (dictionary_form.slice(-2) == "する") {
      group = "suru";
    } else if (dictionary_form.slice(-2) == "くる") {
      group = "kuru";
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
  
    if (dictionary_form == "行く") {
      forms["te-form"] = "行って";
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
  
    if (dictionary_form == "行く") {
      forms["past"] = "行った";
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

  return {
    "word" : aux(word["word"], word["kana"]),
    "kana" : aux(word["kana"], word["kana"])
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

    "negative": "affirmative",
    "past": "present",
    "formal": "informal",
    "te-form": "informal",
  },

  "negative": {

    "dictionary": "negative",
    "past negative": "present",
    "formal negative": "informal",
    "te-form": "negative",
  },

  "past" : {

    "dictionary": "past",
    "past negative" : "affirmative",
    "formal past": "informal",
    "te-form": "past",
  },

  "past negative" : {

    "negative": "past",
    "past": "negative",
    "formal past negative": "informal",
    "te-form": "past negative",
  },

  "formal": {

    "dictionary": "formal",
    "formal past": "present",
    "formal negative": "affirmative",
    "te-form": "formal",
  },

  "formal past": {

    "past": "formal",
    "formal": "past",
    "formal past negative": "affirmative",
    "te-form": "formal past",
  },

  "formal negative": {

    "negative": "formal",
    "formal": "negative",
    "formal past negative": "present",
    "te-form": "formal negative",
  },

  "formal past negative": {

    "past negative": "formal",
    "formal past": "negative",
    "formal negative": "present",
    "te-form": "formal past negative",
  },
};

function generateVerbQuestion() {
  
  var entry = words.randomElement();

  var forms = getVerbForms(entry);

  var kanjiForms = forms["word"];
  var kanaForms = forms["kana"];

  var to_form = Object.keys(verb_relative_form).randomElement();
  var from_form = Object.keys(verb_relative_form[to_form]).randomElement();

  var question = "What is the " + verb_relative_form[to_form][from_form] + " form of <span tooltip='" + kanaForms[from_form] + "'>" + kanjiForms[from_form] + "</span>?";
  var answer = kanjiForms[to_form];
  var answer2 = kanaForms[to_form];

  console.log("From form = " + from_form);
  console.log("To form = " + to_form);
  console.log("Question = " + question);
  console.log("Answer = " + answer);

  $('#question').html(question);

  window.question = question;
  window.answer = answer;
  window.answer2 = answer2;

  $('#next').prop('disabled', true);
  $('#response').html("");
  $('#message').html("");

  $('#proceed').hide();
  $('#input').show();
  $('#answer').focus();

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
    "answer"   : window.answer,
    "kana"     : window.answer2,
    "correct"  : correct
  });

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
    td2.html("<span tooltip='" + entry.kana + "'>" + entry.answer + "</span>");
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

  var ikuForms = getVerbForms( { "word" : "行く", "kana" : "いく" } );
  var nomuForms = getVerbForms( { "word" : "飲む", "kana" : "のむ" } );
  var tsukuruForms = getVerbForms( { "word" : "作る", "kana" : "つくる" } );
  var kaimodosuForms = getVerbForms( { "word" : "買い戻す", "kana" : "かいもどす" } );
  var miruForms = getVerbForms( { "word" : "見る", "kana" : "みる" } );
  var taberuForms = getVerbForms( { "word" : "食べる", "kana" : "たべる" } );
  var okiruForms = getVerbForms( { "word" : "起きる", "kana" : "おきる" } );
  var kaikaeruForms = getVerbForms( { "word" : "買い換える", "kana" : "かいかえる" } );

  assertEqual("行く", ikuForms["word"]["dictionary"]);
  assertEqual("行きます", ikuForms["word"]["formal"]);
  assertEqual("行かない", ikuForms["word"]["negative"]);
  assertEqual("行きません", ikuForms["word"]["formal negative"]);
  assertEqual("行った", ikuForms["word"]["past"]);
  assertEqual("行って", ikuForms["word"]["te-form"]);
  assertEqual("行きました", ikuForms["word"]["formal past"]);
  assertEqual("行かなかった", ikuForms["word"]["past negative"]);
  assertEqual("行きませんでした", ikuForms["word"]["formal past negative"]);
  // assertEqual("行ける", ikuForms["word"]["Potential, -ru"]);
  // assertEqual("行かれる", ikuForms["word"]["Passive, -reru"]);
  // assertEqual("行かせる", ikuForms["word"]["Causative, -seru"]);
  // assertEqual("行かせられる", ikuForms["word"]["Passive causative, -serareru"]);
  // assertEqual("行け", ikuForms["word"]["Imperative"]);

  assertEqual("飲む", nomuForms["word"]["dictionary"]);
  assertEqual("飲みます", nomuForms["word"]["formal"]);
  assertEqual("飲まない", nomuForms["word"]["negative"]);
  assertEqual("飲みません", nomuForms["word"]["formal negative"]);
  assertEqual("飲んだ", nomuForms["word"]["past"]);
  assertEqual("飲んで", nomuForms["word"]["te-form"]);
  assertEqual("飲みました", nomuForms["word"]["formal past"]);
  assertEqual("飲まなかった", nomuForms["word"]["past negative"]);
  assertEqual("飲みませんでした", nomuForms["word"]["formal past negative"]);
  // assertEqual("飲める", nomuForms["word"]["Potential, -ru"]);
  // assertEqual("飲まれる", nomuForms["word"]["Passive, -reru"]);
  // assertEqual("飲ませる", nomuForms["word"]["Causative, -seru"]);
  // assertEqual("飲ませられる", nomuForms["word"]["Passive causative, -serareru"]);
  // assertEqual("飲め", nomuForms["word"]["Imperative"]);

  assertEqual("作る", tsukuruForms["word"]["dictionary"]);
  assertEqual("作ります", tsukuruForms["word"]["formal"]);
  assertEqual("作らない", tsukuruForms["word"]["negative"]);
  assertEqual("作りません", tsukuruForms["word"]["formal negative"]);
  assertEqual("作った", tsukuruForms["word"]["past"]);
  assertEqual("作って", tsukuruForms["word"]["te-form"]);
  assertEqual("作りました", tsukuruForms["word"]["formal past"]);
  assertEqual("作らなかった", tsukuruForms["word"]["past negative"]);
  assertEqual("作りませんでした", tsukuruForms["word"]["formal past negative"]);
  // assertEqual("作れる", tsukuruForms["word"]["Potential, -ru"]);
  // assertEqual("作られる", tsukuruForms["word"]["Passive, -reru"]);
  // assertEqual("作らせる", tsukuruForms["word"]["Causative, -seru"]);
  // assertEqual("作らせられる", tsukuruForms["word"]["Passive causative, -serareru"]);
  // assertEqual("作れ", tsukuruForms["word"]["Imperative"]);

  assertEqual("買い戻す", kaimodosuForms["word"]["dictionary"]);
  assertEqual("買い戻します", kaimodosuForms["word"]["formal"]);
  assertEqual("買い戻さない", kaimodosuForms["word"]["negative"]);
  assertEqual("買い戻しません", kaimodosuForms["word"]["formal negative"]);
  assertEqual("買い戻した", kaimodosuForms["word"]["past"]);
  assertEqual("買い戻して", kaimodosuForms["word"]["te-form"]);
  assertEqual("買い戻しました", kaimodosuForms["word"]["formal past"]);
  assertEqual("買い戻さなかった", kaimodosuForms["word"]["past negative"]);
  assertEqual("買い戻しませんでした", kaimodosuForms["word"]["formal past negative"]);
  // assertEqual("買い戻せる", kaimodosuForms["word"]["Potential, -ru"]);
  // assertEqual("買い戻される", kaimodosuForms["word"]["Passive, -reru"]);
  // assertEqual("買い戻させる", kaimodosuForms["word"]["Causative, -seru"]);
  // assertEqual("買い戻させられる", kaimodosuForms["word"]["Passive causative, -serareru"]);
  // assertEqual("買い戻せ", kaimodosuForms["word"]["Imperative"]);

  assertEqual("見る", miruForms["word"]["dictionary"]);
  assertEqual("見ます", miruForms["word"]["formal"]);
  assertEqual("見ない", miruForms["word"]["negative"]);
  assertEqual("見ません", miruForms["word"]["formal negative"]);
  assertEqual("見た", miruForms["word"]["past"]);
  assertEqual("見て", miruForms["word"]["te-form"]);
  assertEqual("見ました", miruForms["word"]["formal past"]);
  assertEqual("見なかった", miruForms["word"]["past negative"]);
  assertEqual("見ませんでした", miruForms["word"]["formal past negative"]);
  // assertEqual("見られる", miruForms["word"]["Potential, -rareru"]);
  // assertEqual("見られる", miruForms["word"]["Passive, -rareru"]);
  // assertEqual("見させる", miruForms["word"]["Causative, -saseru"]);
  // assertEqual("見させられる", miruForms["word"]["Passive causative, -saserareru"]);
  // assertEqual("見ろ", miruForms["word"]["Imperative, -ro"]);

  assertEqual("食べる", taberuForms["word"]["dictionary"]);
  assertEqual("食べます", taberuForms["word"]["formal"]);
  assertEqual("食べない", taberuForms["word"]["negative"]);
  assertEqual("食べません", taberuForms["word"]["formal negative"]);
  assertEqual("食べた", taberuForms["word"]["past"]);
  assertEqual("食べて", taberuForms["word"]["te-form"]);
  assertEqual("食べました", taberuForms["word"]["formal past"]);
  assertEqual("食べなかった", taberuForms["word"]["past negative"]);
  assertEqual("食べませんでした", taberuForms["word"]["formal past negative"]);
  // assertEqual("食べられる", taberuForms["word"]["Potential, -rareru"]);
  // assertEqual("食べられる", taberuForms["word"]["Passive, -rareru"]);
  // assertEqual("食べさせる", taberuForms["word"]["Causative, -saseru"]);
  // assertEqual("食べさせられる", taberuForms["word"]["Passive causative, -saserareru"]);
  // assertEqual("食べろ", taberuForms["word"]["Imperative, -ro"]);

  assertEqual("起きる", okiruForms["word"]["dictionary"]);
  assertEqual("起きます", okiruForms["word"]["formal"]);
  assertEqual("起きない", okiruForms["word"]["negative"]);
  assertEqual("起きません", okiruForms["word"]["formal negative"]);
  assertEqual("起きた", okiruForms["word"]["past"]);
  assertEqual("起きて", okiruForms["word"]["te-form"]);
  assertEqual("起きました", okiruForms["word"]["formal past"]);
  assertEqual("起きなかった", okiruForms["word"]["past negative"]);
  assertEqual("起きませんでした", okiruForms["word"]["formal past negative"]);
  // assertEqual("起きられる", okiruForms["word"]["Potential, -rareru"]);
  // assertEqual("起きられる", okiruForms["word"]["Passive, -rareru"]);
  // assertEqual("起きさせる", okiruForms["word"]["Causative, -saseru"]);
  // assertEqual("起きさせられる", okiruForms["word"]["Passive causative, -saserareru"]);
  // assertEqual("起きろ", okiruForms["word"]["Imperative, -ro"]);

  assertEqual("買い換える", kaikaeruForms["word"]["dictionary"]);
  assertEqual("買い換えます", kaikaeruForms["word"]["formal"]);
  assertEqual("買い換えない", kaikaeruForms["word"]["negative"]);
  assertEqual("買い換えません", kaikaeruForms["word"]["formal negative"]);
  assertEqual("買い換えた", kaikaeruForms["word"]["past"]);
  assertEqual("買い換えて", kaikaeruForms["word"]["te-form"]);
  assertEqual("買い換えました", kaikaeruForms["word"]["formal past"]);
  assertEqual("買い換えなかった", kaikaeruForms["word"]["past negative"]);
  assertEqual("買い換えませんでした", kaikaeruForms["word"]["formal past negative"]);
  // assertEqual("買い換えられる", kaikaeruForms["word"]["Potential, -rareru"]);
  // assertEqual("買い換えられる", kaikaeruForms["word"]["Passive, -rareru"]);
  // assertEqual("買い換えさせる", kaikaeruForms["word"]["Causative, -saseru"]);
  // assertEqual("買い換えさせられる", kaikaeruForms["word"]["Passive causative, -saserareru"]);
  // assertEqual("買い換えろ", kaikaeruForms["word"]["Imperative, -ro"]);

  console.log("Complete.");
}

$('window').ready(function() {
  generateVerbQuestion();
});
