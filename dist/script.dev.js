"use strict";

var _translator = require("./translator.js");

console.log((0, _translator.translate)("test"));
var timeout = "";
var input = document.getElementById("text");
var result = document.getElementById("result");
var container = document.getElementsByClassName("container").item(0);

var startClicking = function startClicking() {
  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(function () {
    container.classList.remove("active");
    ;
  }, 700);
};

var value = "";
input.addEventListener("input", function () {
  var currentValue = input.value;

  if (value.length < currentValue.length) {
    container.classList.add("active");
    startClicking();
  }

  value = currentValue;
  result.textContent = (0, _translator.translate)(input.value);
});