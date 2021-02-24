"use strict";

var _translator = require("./translator.js");

//test valid inputs
it('should translate a to ._', function () {
  var result = (0, _translator.translateEnglishToMorse)('a');
  expect(result).toBe('._');
}); //test invalid inputs
//test null/empty-string input