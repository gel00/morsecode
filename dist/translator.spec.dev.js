"use strict";

var _translator = require("./translator.js");

it('should translate code .- to letter a', function () {
  var result = (0, _translator.translateMorseToEnglish)('.-');
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

it('should return true to .-.  .-', function () {
  var result = (0, _translator.isMorse)('.-..-');
  expect(result).toBe(true);
});
it('should return false to .-A..-', function () {
  var result = (0, _translator.isMorse)('.-A..-');
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
it('should translate "-.-. --- --- .-.." to "cool"', function () {
  var result = (0, _translator.translate)('-.-. --- --- .-..');
  expect(result).toBe('cool');
});
it('should translate awesome" to ".- .-- . ... --- -- ."', function () {
  var result = (0, _translator.translate)('awesome');
  expect(result).toBe('.- .-- . ... --- -- .');
});
it('should translate aWeSoMe" to ".- .-- . ... --- -- ."', function () {
  var result = (0, _translator.translate)('aWeSoMe');
  expect(result).toBe('.- .-- . ... --- -- .');
});