/* 

  Când este selectat un bloc contigu de text într-un vizualizator PDF, selecția este evidențiată cu un dreptunghi albastru. În acest vizualizator PDF, fiecare cuvânt este evidențiat independent.
  Există o listă de 26 înălțimi ale caracterelor aliniate după index la literele lor. De exemplu, „a” este la index 0 și „z” este la index 25. De asemenea, va exista un șir. Folosind înălțimile literelor date mm patrat, determinați aria evidențierii dreptunghiului, presupunând că toate literele sunt 1mm largi.

  h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5]
  word = 'torn'
  inaltimea t = 2, o = 1, r = 1 si n = 1. Cea mai mare litera este 2 si sunt 4 litere. Area subliniata o sa fie 2 * 4 = 8mm patrati, deci raspunsul este 8 
  
  h = inaltimea fiecarei litere
  word = string 

  Return: lungimea ariei subliniate'
  
  Input 0 

  h= [1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5]
  abc 

  Output
  9 

  Am subliniat cuvntul abc. a = 1, b = 3, c = 1. Cea mai mare litera "b" are 3 mm. deci 3 x 1mm x 3mm = 9 mm patrati

  Input 1

  h = [1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7]
  zaba

  Output 
  28 

  Cea mai mare litera din zaba este "z" la 7mm. Aria sectiunii este 4 x 1mm x 7mm = 28mm patrati 
*/

function designerPdfViewer(h, word) {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const wordSplit = word.split('');
  const wordLength = word.length;

  let letterValue ={}; 
  let sameLetter = {};

  alphabet.forEach((element,index)=>{ 
    letterValue[element] = h[index] 
  })

  wordSplit.forEach((element)=>{ 
    sameLetter[element] = letterValue[element]
  })
  
  const maxValue = Object.values(sameLetter)
  const max = Math.max(...maxValue); 
  
  let sectionArea = wordLength * max 

  return sectionArea

}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba')) 

/* Alta abordare - internet

function designerPdfViewer(h, word) {
  
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let letterHeight = [];
  
  for (let i = 0; i < word.length; i++){
    letterHeight.push(h[letters.indexOf(word[i])]);
  }
  
  let tallest = letterHeight.sort()[letterHeight.length-1];
  
  return tallest * word.length;
  
}

*/
