/* 
  1. Cartea poate fi deschisa din fata sau din spate 
  2. Mereu o sa se dea o singura pagina 
  3. Cand deschid cartea pag 1 este pe partea dreapta 
  4. Cand se da pagina 1 se afiseaza pagina 2 si 3. 
  5. Fiecare pagina, exceptand-o pe ultima va fi mereu printata pe ambele parti 


   Daca cartea are o lungime n de pagini si un stundent vrea sa dea pagini pana la pagina p, care este numarul minim de pagini care trebuiesc intoarse? Pot porni de la inceput sau de la sfarsit. 

  n = numarul paginilor din carte 
  p = numarul paginii la care sa ajungem 

  n = 6 
  p = 2 
  outPut = 1
  Daca studentul incepe de la pag. 1, trebuie sa dea 1 pagina.
  Daca studentul incepe de la pag. 6, trebuie sa dea 2 pagini.

*/

function pageCount(n, p){ 

  if (n === 1) return p = 1;  
  if (n - p === 1) return 0; 
  let tabs = n / 2;

  let min = Math.round(p/2); 
  let max = tabs - min;

  return min
}


console.log(pageCount(5, 4))
