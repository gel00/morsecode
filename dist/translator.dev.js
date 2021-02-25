"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translate = exports.isMorse = exports.translateEnglishToMorse = exports.translateMorseToEnglish = void 0;
var en_morse_abc = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.-- -',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..'
};

var translateMorseToEnglish = function translateMorseToEnglish(code) {
  var letter = Object.keys(en_morse_abc).find(function (key) {
    return en_morse_abc[key] === code;
  });

  if (letter) {
    return letter;
  } else {
    return "invalid input";
  }
};

exports.translateMorseToEnglish = translateMorseToEnglish;

var translateEnglishToMorse = function translateEnglishToMorse(letter) {
  if (letter === " ") {
    return "/ ";
  }

  var code = en_morse_abc[letter.toLowerCase()];

  if (code) {
    return code;
  } else {
    return "invalid input";
  }
};

exports.translateEnglishToMorse = translateEnglishToMorse;

var isMorse = function isMorse(str) {
  var patt = new RegExp(/^[\s.-]+$/);
  return patt.test(str);
};

exports.isMorse = isMorse;

var translate = function translate(str) {
  if (typeof str === "string") {
    var result = "";

    if (isMorse(str)) {
      str.split(" ").forEach(function (code) {
        result += translateMorseToEnglish(code);
      });
    } else {
      str.split("").forEach(function (letter, i) {
        if (i > 0) {
          result += " ";
        }

        result += translateEnglishToMorse(letter);
      });
    }

    return result;
  } else {
    return 'invalid input';
  }
};

exports.translate = translate;