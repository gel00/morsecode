import {translateMorseToEnglish,translateEnglishToMorse,isMorse,translate} from './translator.js';



it ('should translate code . _ to letter a', ()=>{
  const result = translateMorseToEnglish('. _')  ;
  expect (result).toBe('a');
});

//test invalid inputs

it ('should translate aa to invalid input', ()=>{
  const result = translateEnglishToMorse('aa')  ;
  expect (result).toBe('invalid input');
});

it ('should translate aa to invalid input', ()=>{
  const result = translateMorseToEnglish('aa')  ;
  expect (result).toBe('invalid input');
});

//test null/empty-string input



it ('should return true to ._.  ._', ()=>{
  const result = isMorse('._.._');
  expect (result).toBe(true);
});


it ('should return false to .A.._', ()=>{
  const result = isMorse('._A.._');
  expect (result).toBe(false);
});

it ('should return "invalid input" to null ', ()=>{
  const result = translate(null)  ;
  expect (result).toBe('invalid input');
})

it ('should translate "" to ""', ()=>{
  const result = translate('');
  expect (result).toBe('');
})

it ('should translate "_ . _ .   _ _ _   _ _ _   . _ . ." to "cool"', ()=>{
  const result = translate('_ . _ .   _ _ _   _ _ _   . _ . .');
  expect (result).toBe('cool');
})

it ('should translate awesome" to ". _   . _ _   .   . . .   _ _ _   _ _   ."', ()=>{
  const result = translate('awesome');
  expect (result).toBe('. _   . _ _   .   . . .   _ _ _   _ _   .');
})
it ('should translate aWeSoMe" to ". _   . _ _   .   . . .   _ _ _   _ _   ."', ()=>{
  const result = translate('aWeSoMe');
  expect (result).toBe('. _   . _ _   .   . . .   _ _ _   _ _   .');
})
