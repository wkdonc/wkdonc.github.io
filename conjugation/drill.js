// drill.js

var transformations = [];

var log;

const configOptions = {

  options: ["plain", "polite", "negative", "past", "te-form", "progressive",
    "potential", "imperative", "passive", "causative", "godan", "ichidan",
    "iku", "kuru", "suru", "i-adjective", "na-adjective", "ii", "desire",
    "volitional", "trick", "kana", "furigana_always", "use_voice"],

  selects: ["questionFocus"],

  inputs: ["numQuestions"]
}

const defaultConfig = {
  "plain": true,
  "polite": true,
  "negative": true,
  "past": true,
  "te-form": false,
  "progressive": false,
  "potential": false,
  "imperative": false,
  "passive": false,
  "causative": false,
  "godan": true,
  "ichidan": true,
  "iku": true,
  "kuru": true,
  "suru": true,
  "i-adjective": false,
  "na-adjective": false,
  "ii": false,
  "desire": false,
  "volitional": false,
  "trick": true,
  "kana": false,
  "furigana_always": true,
  "use_voice": false,
  "questionFocus": "none",
  "numQuestions": "10"
}

const localStorageOptionsKey = "conjugationDrillOptions";

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

// Waaaayy overkill here but these ranges were taken from http://www.unicode.org/charts/ and I kinda got carried away.

var japaneseTextPattern = /^[\u{3040}-\u{309f}\u{30a0}-\u{30ff}\u{3190}-\u{319f}\u{31f0}-\u{31ff}\u{3400}-\u{4dbf}\u{4e00}-\u{9ffc}\u{f900}-\u{faff}\u{ff00}-\u{ffef}\u{1b000}-\u{1b0ff}\u{1b100}-\u{1b12f}\u{1b130}-\u{1b16f}\u{20000}-\u{2a6dd}\u{2a700}-\u{2b734}\u{2b740}-\u{2b81d}\u{2b820}-\u{2cea1}\u{2ceb0}-\u{2ebe0}\u{2f800}-\u{2fa1f}\u{30000}-\u{3134a}]*$/u;

function commaList(items, conjunction) {

  if (conjunction == undefined) {
    conjunction = "and";
  }

  var result = "";

  for (var i = 0; i < items.length; i++) {
    result = result + items[i];

    if (i < (items.length - 2)) {
      result += ", ";
    }

    if (i == (items.length - 2)) {
      result += " " + conjunction + " ";
    }
  }

  return result;
}

function resetLog() {
  log = { "history": [] };
}

function kanaForm(words) {

  if (words.constructor !== Array) {
    words = [words];
  }

  return words.map(function (word) { return word.split(/.\[([^\]]*)\]/).join(""); });
}

function kanjiForm(words) {

  if (words.constructor !== Array) {
    words = [words];
  }

  return words.map(function (word) { return word.split(/(.)\[[^\]]*\]/).join(""); });
}

function getVerbForms(entry) {

  var result = {
    "kanji": {},
    "hiragana": {},
    "furigana": {}
  };

  Object.keys(words[entry].conjugations).forEach(function (key) {
    result["kanji"][key] = kanjiForm(words[entry].conjugations[key].forms);
    result["hiragana"][key] = kanaForm(words[entry].conjugations[key].forms);
    result["furigana"][key] = words[entry].conjugations[key].forms;
  });

  return result;
}

function wordWithFurigana(words) {

  var options = getOptions();

  if (words.constructor !== Array) {
    words = [words];
  }

  return words.map(function (word) {

    var bits = word.split(/(.)\[([^\]]*)\]/);

    while (bits.length > 1) {
      if (options["kana"]) {
        bits[0] = bits[0] + bits[2] + bits[3];
      } else if (options["furigana_always"]) {
        bits[0] = bits[0] + "<ruby>" + bits[1] + "<rp>(</rp><rt>" + bits[2] + "</rt><rp>)</rp></ruby>" + bits[3];
      } else {
        bits[0] = bits[0] + "<ruby class='furiganaHover'>" + bits[1] + "<rp>(</rp><rt>" + bits[2] + "</rt><rp>)</rp></ruby>" + bits[3];
      }
      bits.splice(1, 3);
    }

    return bits[0];
  });
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

function processAnswerKeyDown(evt) {

  if (evt.keyCode == 32) {

    var options = getOptions();

    if (options.use_voice) {

      window.speechSynthesis.cancel();

      textToSpeech(window.questionData.givenWordAsKanji, evt.shiftKey);
      evt.preventDefault();
    }
  }
}

function validQuestion(entry, forms, transformation, options) {

  var valid = true;

  transformation.tags.forEach(function (type) {
    if (options[type] == false) {
      valid = false;
    }
  });

  if (options[words[entry].group] == false) {
    valid = false;
  }

  if (!forms["furigana"][transformation.from])
    valid = false;

  if (!forms["furigana"][transformation.to])
    valid = false;

  if (valid) {

    if (options.questionFocus != "none") {

      if (options.questionFocus == 'tetakei') {
        // console.log("tetakei", words[entry].conjugations[transformation.from].tetakei, words[entry].conjugations[transformation.to].tetakei)
        if (words[entry].conjugations[transformation.from].tetakei == words[entry].conjugations[transformation.to].tetakei) {
          valid = false;
        }
      } else if (transformation.type != options.questionFocus) {
        valid = false;
      }
    }
  }

  return valid;
}

function generateQuestion() {

  var questionText = {
    "affirmative": "<span class='first'>make</span> the following <span class='emphasis'>affirmative</span>",
    "negative": "<span class='first'>make</span> the following <span class='emphasis'>negative</span>",
    "present": "<span class='first'>convert</span> the following to the <span class='emphasis'>present tense</span>",
    "past": "<span class='first'>convert</span> the following to the <span class='emphasis'>past tense</span>",
    "plain": "<span class='first'>make</span> the following <span class='emphasis'>informal</span>",
    "polite": "<span class='first'>make</span> the following <span class='emphasis'>polite</span>",
    "て": "<span class='emphasis first'>add</span> the <span class='emphasis'>て pattern</span> to the following",
    "non-て": "<span class='emphasis first'>remove</span> the <span class='emphasis'>て pattern</span> from the following",
    "potential": "<span class='first'>make</span> the following <span class='emphasis'>potential</span>",
    "non-potential": "<span class='first'>make</span> the following <span class='emphasis'>non-potential</span>",
    "imperative": "<span class='first'>make</span> the following <span class='emphasis'>imperative</span>",
    "non-imperative": "<span class='first'>make</span> the following <span class='emphasis'>non-imperative</span>",
    "causative": "<span class='first'>make</span> the following <span class='emphasis'>causative</span>",
    "non-causative": "<span class='first'>make</span> the following <span class='emphasis'>non-causative</span>",
    "passive": "<span class='first'>make</span> the following <span class='emphasis'>passive</span>",
    "active": "<span class='first'>make</span> the following <span class='emphasis'>active</span>",
    "progressive": "<span class='first'>make</span> the following <span class='emphasis'>progressive</span>",
    "non-progressive": "<span class='first'>make</span> the following <span class='emphasis'>non-progressive</span>",
    "&apos;desire&apos;": "<span class='first'>convert</span> the following to the <span class='emphasis'>&apos;desire&apos;</span> form",
    "&apos;non-desire&apos;": "<span class='first'>convert</span> the following to the <span class='emphasis'>&apos;non-desire&apos;</span> form",
    "volitional": "<span class='first'>make</span> the following <span class='emphasis'>volitional</span>",
    "non-volitional": "<span class='first'>make</span> the following <span class='emphasis'>non-volitional</span>"
  };

  var entry;
  var to_form;
  var from_form;
  var forms;
  var options = getOptions();

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

    var valid = validQuestion(entry, forms, transformation, getOptions());

    // Modify the chance of trick questions so that they appear on average 25%
    // of the time. When trick questions are active then 50% of the
    // transformation structure are trick questions and so a 33% filter here
    // will achieve the 25% because this test is only performed when a trick
    // question has been selected.

    if (transformation.tags.indexOf('trick') != -1) {
      if (Math.random() > 0.333) {
        valid = false;
      }
    }

    if (valid) {
      break;
    }
  }

  var kanjiForms = forms["kanji"];
  var kanaForms = forms["hiragana"];
  var furiganaForms = forms["furigana"];

  var candidates;

  if (options["kana"]) {
    candidates = kanaForms[from_form];
  } else {
    candidates = wordWithFurigana(furiganaForms[from_form]);
  }

  var candidateIndex = Math.floor(Math.random() * candidates.length);

  var givenWord = candidates[candidateIndex];
  var givenWordAsKanji = kanjiForms[from_form][candidateIndex];

  var thisQuestionText = questionText[transformation.phrase];

  // thisQuestionText = thisQuestionText[0].toUpperCase() + thisQuestionText.substring(1);

  var questionFirstHalf = thisQuestionText;
  var questionSecondHalf = givenWord;
  var question = questionFirstHalf.replace("the following", questionSecondHalf);

  var answer = kanjiForms[to_form];
  var answer2 = kanaForms[to_form];
  var answerWithFurigana = wordWithFurigana(furiganaForms[to_form]);

  if (options["kana"]) {
    answer = answer2;
    answerWithFurigana = kanaForms[to_form];
  }

  $('#questionFirstHalf').html(questionFirstHalf);

  if (options.use_voice) {
    $('#questionSecondHalf').html("<div id='speechSpace'><i>Press Space for word</i><br><div class='halfSpeed'>Use Shift key for half speed</div></div>");
  } else {
    $('#questionSecondHalf').html(questionSecondHalf);
  }

  window.questionData = {
    entry: entry,
    transformation: transformation,
    question: question,
    answer: answer,
    answer2: answer2,
    answerWithFurigana: answerWithFurigana,
    givenWord: givenWord,
    givenWordAsKanji: givenWordAsKanji,
  };

  // Construct the explanation page.

  var data = window.questionData;

  var groupLabels = {
    "godan": "godan verb",
    "ichidan": "ichidan verb",
    "iku": "godan verb",
    "suru": "suru verb",
    "kuru": "special verb",
    "i-adjective": "い-adjective",
    "ii": "い-adjective",
    "na-adjective": "な-adjective",
  };

  var dictionary = words[data.entry].conjugations["dictionary"].forms;

  if (words[data.entry].group == "na-adjective") {
    for (var i = 0; i < dictionary.length; i++) {
      dictionary[i] = dictionary[i].replace(/だ$/, '')
    }
  }

  if (!options["kana"]) {
    dictionary = wordWithFurigana(dictionary);
  } else {
    dictionary = kanaForm(dictionary);
  }

  $('#explain-given').html(givenWord);
  $('#explain-given-tags').html(data.transformation.from_tags.map(function (tag) { return "<span class='tag'>" + tag + "</span>"; }).join(" "));
  $('.explain-given-dictionary').html(dictionary);
  $('#explain-group').html(groupLabels[words[data.entry].group]);
  $('.explain-transform').html(data.transformation.phrase);
  $('.explain-answer-tags').html(data.transformation.to_tags.map(function (tag) { return "<span class='tag'>" + tag + "</span>"; }).join(" "));
  $('.explain-answer-tags2').html(data.transformation.to_tags.join(" "));
  $('.explain-answer').html(commaList(questionData.answerWithFurigana, "or"));

  $('.explain-answer-as-list').empty();

  questionData.answerWithFurigana.forEach(function (answer) {
    $('.explain-answer-as-list').append("<li>" + answer);
  });

  if (window.questionData.transformation.tags.indexOf("trick") != -1) {
    $('.explain-trick').show();
    $('.explain-no-trick').hide();
  } else {
    $('.explain-trick').hide();
    $('.explain-no-trick').show();
  }

  if (data.transformation.to == "dictionary") {
    $('.explain-hide-end').hide();
  } else {
    $('.explain-hide-end').show();
  }

  if (data.answer.length == 1) {
    $('.explain-answer-single').show();
    $('.explain-answer-multiple').hide();
  } else {
    $('.explain-answer-single').hide();
    $('.explain-answer-multiple').show();
  }

  $('#response').html("");
  $('#message').hide();

  $('#proceed').hide();
  $('#explanation').hide();
  $('#inputArea').show();
  $('#answer').focus();

  $('#answer').on('input', processAnswerKey);
  $('#answer').on('keydown', processAnswerKeyDown);
}

function processAnswer() {

  var questionData = window.questionData;
  var response = $('#answer').val().trim();

  var shake = false;

  if (response == "")
    shake = true;

  if (!response.match(japaneseTextPattern))
    shake = true;

  if (shake) {
    shakeInputArea();
    return;
  }

  var correct = ((questionData.answer.indexOf(response) != -1) || (questionData.answer2.indexOf(response) != -1));

  var klass = correct ? "correct" : "incorrect";

  log.history.push({
    "question": questionData.question,
    "response": response,
    "answer": questionData.answerWithFurigana,
    "kana": questionData.answer2,
    "correct": correct
  });

  var totalQuestions = $('#numQuestions').val();
  var answeredQuestions = log.history.length;

  updateProgressBar(answeredQuestions / totalQuestions * 100);

  $('#answer').val("");
  $('#responseButton').prop('class', klass).text(response);

  if (correct) {
    $('#message').hide();
  } else {
    $('#message').show();
    $('#message #correction').html("The correct answer was " + commaList(questionData.answerWithFurigana, "or"));
  }

  $('#inputArea').hide();
  $('#proceed').show();
  $('#explanation').hide();
  $('#proceed button').focus();

  updateHistoryView(log);
}

function shakeInputArea() {

  var inputArea = $('#inputArea');
  var shakeClass = "shake";

  inputArea.addClass(shakeClass);

  setTimeout(function () {
    inputArea.removeClass(shakeClass)
  }, 1000);
}

function updateHistoryView(log) {

  var review = $('<div>');

  var total = 0;
  var correct = 0;

  log.history.forEach(function (entry, index) {

    total++;

    if (entry.correct) {
      correct++;
    }

    var tr = $('<div class="row mt-4">');

    var td1 = $('<div class="col-md-6 mb-2">');
    var td2 = $('<div class="col-md-6">');

    td1.html((index + 1) + ". " + entry.question + ".");

    var responseDiv = $('<div>');
    responseDiv.text(entry.response);

    if (entry.correct) {
      responseDiv.append("<span class='answer-correct'> 〇</span>");
    } else {
      responseDiv.append("<span class='answer-wrong'> ×</span>");
    }

    td2.append(responseDiv);

    if (!entry.correct) {

      var correctDiv = $('<div>');

      correctDiv.html(commaList(entry.answer, "or"));
      correctDiv.append("<span class='answer-correct'> 〇</span>");

      td2.append(correctDiv);
    }

    tr.append(td1);
    tr.append(td2);

    review.append(tr);
  });

  $('#history').empty().append(review);

  var resultString;

  if (correct == total) {
    resultString = "All correct!";
  } else if (correct == 0) {
    resultString = "All incorrect!";
  } else {
    resultString = correct + " of " + total + " correct";
  }

  $('#scoreSectionTitleNarrow').text(resultString);
  $('#scoreSectionTitleWide').text(resultString);
}

function updateProgressBar(progress) {
  $('.progressBar').attr('style', 'width: ' + progress + '%');
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

  var options = getOptions();

  const voiceSelectError = document.querySelector('#voiceSelectError');

  if (options.use_voice && !getVoiceConfig()) {
    voiceSelectError.style.display = "block";
    return;
  } else {
    voiceSelectError.style.display = "none";
  }

  updateProgressBar(0);

  $('#splash').hide();
  $('#quizSection').show();
  $('#scoreSection').hide();

  if (options.furigana_always) {
    $('body').addClass("furiganaAlways");
  } else {
    $('body').removeClass("furiganaAlways");
  }

  resetLog();
  generateQuestion();
}

function endQuiz() {
  $('#splash').hide();
  $('#quizSection').hide();
  $('#scoreSection').show();

  $('#backToStart').focus();
}

// Text to Speech

function loadVoiceList(callback) {
	if (window.speechSynthesis.getVoices().length == 0) {
		window.speechSynthesis.addEventListener('voiceschanged', function () {
      if (callback) {
  			callback();
      }
		});
	} else {
    if (callback) {
		  callback();
    }
	}
}

function populateVoiceList() {

	loadVoiceList(function () {

	  var voiceSelect = document.querySelector("#voice_select");

	  voiceSelect.innerHTML = "<option>Select voice...</option>" +
        window.speechSynthesis.getVoices().map(function (voice) { return "<option>" + voice.name + "</option>" }).join("");

	  var currentVoice = getCurrentVoice();

	  if (currentVoice) {
	  	voiceSelect.value = currentVoice;
	  }
	});
}

function getVoiceConfig() {
	return JSON.parse(localStorage.getItem("voiceConfig"));
}

function setVoiceConfig(config) {
	localStorage.setItem("voiceConfig", JSON.stringify(config));
}

function getCurrentVoice() {
    const voiceConfig = getVoiceConfig();

    if (voiceConfig) {
		    return voiceConfig.voice;
    }
}

function textToSpeech(text, slowMode, callback) {

	loadVoiceList(function () {

		const availableVoices = window.speechSynthesis.getVoices();

    const voiceConfig = getVoiceConfig();
		const currentVoice = voiceConfig.voice;

		var voice = '';

		for (var i = 0; i < availableVoices.length; i++) {
			if (availableVoices[i].name == currentVoice) {
				voice = availableVoices[i];
				break;
			}
		}

		if (voice === '') {
			voice = availableVoices[0];
		}

		// new SpeechSynthesisUtterance object

		var utter = new SpeechSynthesisUtterance();
		utter.rate = slowMode ? voiceConfig.rate * 0.5 : voiceConfig.rate;;
		utter.pitch = voiceConfig.pitch;
		utter.text = text;
		utter.voice = voice;

		// event after text has been spoken

		utter.onend = function () {
			if (callback) {
				callback(undefined);
			}
		}

		// speak
		window.speechSynthesis.speak(utter);
	});
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
      tags.splice(0, 0, "plain");
    }

    if (tags.indexOf("dictionary") != -1) {
      tags.splice(tags.indexOf("dictionary"), 1);
    }

    return tags;
  }

  var allTags = {};

  Object.keys(words).forEach(function (word) {

    Object.keys(words[word].conjugations).forEach(function (conjugation) {

      if (conjugation == "dictionary") {
        conjugation = "";
      }

      allTags[conjugation] = conjugation.split(" ");
    });
  });

  Object.keys(allTags).forEach(function (srcTag) {

    if (srcTag != "") {

      for (var i = 0; i < allTags[srcTag].length; i++) {

        var tagWithDrop = allTags[srcTag].slice();

        tagWithDrop.splice(i, 1);

        var dstTag = tagWithDrop.join(" ");

        if (allTags[dstTag]) {

          if (srcTag == "") {
            srcTag = "dictionary";
          }

          if (dstTag == "") {
            dstTag = "dictionary";
          }

          transformations.push({ from: srcTag, to: dstTag });
          transformations.push({ from: dstTag, to: srcTag });
        }
      }
    }
  });

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
      "desire": "&apos;non-desire&apos;",
      "volitional": "non-volitional",
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
      "desire": "&apos;desire&apos;",
      "volitional": "volitional",
    };

    var phrase;

    phrase = phrase || from_extra[arrayDifference(from, to)[0]];
    phrase = phrase || to_extra[arrayDifference(to, from)[0]];

    transformation.phrase = phrase;

    transformation.from_tags = calculateTags(transformation.from);
    transformation.to_tags = calculateTags(transformation.to);
    transformation.tags = arrayUnique(calculateTags(transformation.from).concat(calculateTags(transformation.to)));

    var diffFromTo = arrayDifference(transformation.from_tags, transformation.to_tags);

    if (diffFromTo.length > 0) {
      type = diffFromTo[0];
    } else {
      type = arrayDifference(transformation.to_tags, transformation.from_tags)[0];
    }

    if ((type == "plain") || (type == "polite")) {
      type = "politeness";
    }

    transformation.type = type;
  });

  // Add trick forms

  var trick_forms = [];

  transformations.forEach(function (transformation) {
    trick_forms.push({
      from: transformation.to,
      to: transformation.to,
      type: transformation.type,
      phrase: transformation.phrase,
      from_tags: transformation.to_tags,
      to_tags: transformation.to_tags,
      tags: transformation.tags.concat(["trick"])
    });
  });

  transformations = transformations.concat(trick_forms);
}

function updateOptionSummary() {

  // Calculate how many questions will apply

  var options = getOptions();
  var applicable = 0;

  Object.keys(words).forEach(function (word) {

    var forms = getVerbForms(word);

    transformations.forEach(function (transformation) {

      if (validQuestion(word, forms, transformation, options)) {
        applicable++;
      }
    });
  });

  $("#questionCount").text(applicable);

  if (!options.plain && !options.polite) {
    document.querySelector('#politePlainError').style.display = 'block';
  } else {
    document.querySelector('#politePlainError').style.display = 'none';
  }
}

function saveOptions() {
  localStorage.setItem(localStorageOptionsKey, JSON.stringify(getOptions()));
}

function restoreDefaults() {
  localStorage.setItem(localStorageOptionsKey, JSON.stringify(defaultConfig));
  loadOptions();
  updateOptionSummary();
}

function updateVoiceSelect() {

  const options = getOptions();
  const voice_select_options = document.querySelector("#voice_select_options");
  
  if (options.use_voice) {
    voice_select_options.style.display = "block";
  } else {
    voice_select_options.style.display = "none";
  }
}

function updateVoiceSelection() {

  const newSelection = document.querySelector("#voice_select").selectedOptions[0].text;

  const voiceConfig = {
    voice: document.querySelector("#voice_select").selectedOptions[0].text,
    rate: 1,
    pitch: 1
  };

  setVoiceConfig(voiceConfig);
}

function explain() {
  $('#explanation').show();
  $('#message').hide();
  $('#explain-proceed-button').focus();
}

function getOptions() {

  var result = {};

  configOptions.options.forEach(function (option) {
    result[option] = $('#' + option).is(':checked') != false;
  });

  configOptions.selects.forEach(function (select) {
    result[select] = $('#' + select).val();
  });

  configOptions.inputs.forEach(function (input) {
    result[input] = $('#' + input).val();
  });

  return result;
}

function loadOptions() {

  var storedOptionsText = localStorage.getItem(localStorageOptionsKey);

  if (storedOptionsText) {

    var storedOptions = JSON.parse(storedOptionsText);

    configOptions.options.forEach(function (option) {
      if (storedOptions[option] != undefined) {
        $(`#${option}`).prop('checked', storedOptions[option]);
      }
    });

    configOptions.selects.forEach(function (select) {
      if (storedOptions[select] != undefined) {
        $(`#${select} [value=${storedOptions[select]}]`).attr('selected', false)
        $(`#${select} [value=${storedOptions[select]}]`).attr('selected', 'selected')
      }
    });

    configOptions.inputs.forEach(function (input) {
      if (storedOptions[input] != undefined) {
        $(`#${input}`).val(storedOptions[input]);
      }
    });
  }
}

$('window').ready(function () {

	if (window.speechSynthesis) {
    populateVoiceList();
    $('#useVoiceSection').show();
    $('input#use_voice').click(updateVoiceSelect);
    $('select#voice_select').on('change', updateVoiceSelection);
  }

  calculateAllConjugations();
  calculateTransitions();
  loadOptions();

  $('#go').click(startQuiz);
  $('#defaults').click(restoreDefaults);
  $('#backToStart').click(showSplash);

  $('div.options input').click(updateOptionSummary);
  $('select#questionFocus').on('change', updateOptionSummary);
  $('input#trick').click(updateOptionSummary);
  $('input#focus_mode').click(updateOptionSummary);

  $('select').change(saveOptions);
  $('input').change(saveOptions);

  updateOptionSummary();

  showSplash();
});
