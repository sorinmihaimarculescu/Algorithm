/*

Un video player joacă un joc în care personajul concurează într-o cursă de obstacole. Obstacolele sunt de diferite înălțimi, iar personajele au o înălțime maximă pe care o pot sări. Există o poțiune magică pe care o pot lua, care va crește înălțimea maximă a săriturilor pe unitate pentru fiecare doză. 
Câte doze din poțiune trebuie să ia personajul pentru a putea sări toate obstacolele. Dacă personajul poate elimina deja toate obstacolele, reveniți.

height = [1, 2, 3, 3, 2]
k = 1 
Caracterul poate sari o unitate inaltime si trebuie sa ia 3 - 1 = 2 doze de potiune pentru a putea sari toate obstacolele. 

k = inaltimea pe care caracterul o poate sari in mod natural 
height: inaltimea fiecarui obstacol 

Return: numarul minim de doze necesare, mereu 0 sau mai mult 

5 4 
1 6 3 5 2 

2 

Caracterul lui Dan sare maximul de k = 4 unitati, dar cel mai inalt obstacol este dee h1 = 6; 

Pentru a fi capabil sa sara toata obstacolele Dan trebuie sa bea 6 - 4 = 2 doze. 

*/
function hurdleRace(k, height) {

  let largest; 

  if(height.length > 0){ 
    largest = height[0];
  } else {
    largest = 0;
  }

  for(let i = 0; i < height.length; i++){ 
    if(height[i] > largest){ 
      largest = height[i]
    }
  }

  if(k > largest) return 0; 
  return largest - k;
}


console.log(hurdleRace(7, [2, 5, 4, 5, 2]))

/* Easy way 

function hurdleRace(k, height) {

  if(Math.max(k) > Math.max(...height)) return 0;
  return Math.max(...height) - Math.max(k);
}

*/