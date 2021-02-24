"use strict";

var _translator = require("./translator.js");

it('should translate code . _ to letter a', function () {
  var result = (0, _translator.translateMorseToEnglish)('. _');
  expect(result).toBe('a');
}); //test invalid inputs

it('should translate aa to invalid input', function () {
  var result = (0, _translator.translateEnglishToMorse)('aa');
  expect(result).toBe('invalid input');
});
it('should translate aa to invalid input', function () {
  var result = (0, _translator.translateMorseToEnglish)('aa');
  expect(result).toBe('invalid input');
}); //test null/empty-string input

it('should return true to ._.  ._', function () {
  var result = (0, _translator.isMorse)('._.._');
  expect(result).toBe(true);
});
it('should return false to .A.._', function () {
  var result = (0, _translator.isMorse)('._A.._');
  expect(result).toBe(false);
});
it('should return "invalid input" to null ', function () {
  var result = (0, _translator.translate)(null);
  expect(result).toBe('invalid input');
});
it('should translate "" to ""', function () {
  var result = (0, _translator.translate)('');
  expect(result).toBe('');
});
it('should translate "_ . _ .   _ _ _   _ _ _   . _ . ." to "cool"', function () {
  var result = (0, _translator.translate)('_ . _ .   _ _ _   _ _ _   . _ . .');
  expect(result).toBe('cool');
});
it('should translate awesome" to ". _   . _ _   .   . . .   _ _ _   _ _   ."', function () {
  var result = (0, _translator.translate)('awesome');
  expect(result).toBe('. _   . _ _   .   . . .   _ _ _   _ _   .');
});
it('should translate aWeSoMe" to ". _   . _ _   .   . . .   _ _ _   _ _   ."', function () {
  var result = (0, _translator.translate)('aWeSoMe');
  expect(result).toBe('. _   . _ _   .   . . .   _ _ _   _ _   .');
});