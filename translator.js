const en_morse_abc = {
  a : '.a-',
  b : '-...',
  c : '-.-.',
  d : '-..',
  e : '.',
  f : '..-.',
  g : '--.',
  h : '....',
  i : '..',
  j : '.-- -',
  k : '-.-',
  l : '.-..',
  m : '--',
  n : '-.',
  o : '---',
  p : '.--.',
  q : '--.-',
  r : '.-.',
  s : '...',
  t : '-',
  u : '..-',
  v : '...-',
  w : '.--',
  x : '-..-',
  y : '-.--',
  z : '--..'
};

export const translateMorseToEnglish = (code) => {

  const letter = Object.keys(en_morse_abc).find(key => en_morse_abc[key] === code);
  if (letter) {
    return letter;
  } else {
    return "invalid input"
  }
  
}

export const translateEnglishToMorse = (letter)=> {
  if(letter === " ") {
    return "/ ";
  }
  const code = en_morse_abc[letter.toLowerCase()];
  if (code) {
    return code;
  } else {
    return "invalid input";
  }
}

export const isMorse = (str) => {
  var patt = new RegExp(/^[\s.-]+$/);
  return patt.test(str);
}

export const translate = (str)=>{
  if (typeof str === "string") {
    let result = "";
    if (isMorse(str)) {
      
      str.split(" ").forEach(code => {
        result += translateMorseToEnglish(code);
      });
    } else {
      str.split("").forEach((letter,i) =>{
        if(i>0) {
          result += " ";
        }
        result += translateEnglishToMorse(letter);
      });
    }
    return result.replace(/invalid input/g,"");
  } else {
    return 'invalid input';
  }
  
}
