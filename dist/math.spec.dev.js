"use strict";

var _math = require("./math.js");

it('Should add 5+2 and equal 7', function () {
  //1. Arrange
  //2. Act
  var result = (0, _math.sum)(5, 2); //3. Asserts

  expect(result).toBe(7);
});
it('Should add 5*2 and equal 10', function () {
  //1. Arrange
  //2. Act
  var result = (0, _math.multiply)(5, 2); //3. Asserts

  expect(result).toBe(10);
});