import {translateMorseToEnglish,translateEnglishToMorse,isMorse,translate} from './translator.js';



it ('should translate code .- to letter a', ()=>{
  const result = translateMorseToEnglish('.-')  ;
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



it ('should return true to .-.  .-', ()=>{
  const result = isMorse('.-..-');
  expect (result).toBe(true);
});


it ('should return false to .-A..-', ()=>{
  const result = isMorse('.-A..-');
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

it ('should translate "-.-. --- --- .-.." to "cool"', ()=>{
  const result = translate('-.-. --- --- .-..');
  expect (result).toBe('cool');
})

it ('should translate awesome" to ".- .-- . ... --- -- ."', ()=>{
  const result = translate('awesome');
  expect (result).toBe('.- .-- . ... --- -- .');
})
it ('should translate aWeSoMe" to ".- .-- . ... --- -- ."', ()=>{
  const result = translate('aWeSoMe');
  expect (result).toBe('.- .-- . ... --- -- .');
})
