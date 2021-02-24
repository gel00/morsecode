import {translate, translateEnglishToMorse} from './translator.js';

console.log(translate("test"));
let timeout ="";
const input = document.getElementById("text");
const result = document.getElementById("result");
const container = document.getElementsByClassName("container").item(0);
const startClicking= ()=> {
  if(timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(function(){ container.classList.remove("active");; }, 700);
}

let value = "";
input.addEventListener("input",()=>{
  let currentValue = input.value;
  if(value.length < currentValue.length) {
    container.classList.add("active");
    startClicking();
  }
  value = currentValue;
  result.textContent = translate(input.value);
  
});

