/*
  Un copac Utopian merge in 2 cicluri si creste in fiecare an. In fiecare primavara isi dubleaza inaltimea. In fiecare vara inaltimea ii creste cu 1m, 
  La inceputul primaverii este plantat un puiet de copac utopian cu inaltimea de 1m. Cat de inalt va fi copacul dupa n cicluri de crestere. 

  Exemplu 
  Daca numarul de cresteri este n = 5 calculul o sa fie 

              Perioada              Inaltime 
                  0                     1
                  1                     2
                  2                     3
                  3                     6
                  4                     7
                  5                     14

  n: numarul de cicluri crescute 
  Returns: inaltimea copacului dupa numarul de cicluri date 
  
  Input             OutPut
    3
    0                 1
    1                 2
    4                 7
  
  Avem 3 cazuri de test:
  - In primul caz ( n = 0) inaltimea initiala (H = 1) a copacului ramane neschimbata. 
  - In al doilea caz ( n = 1) copacul isi dubleaza inaltimea si are doi metri dupa ciclul de primavara. 
  - In al treilea caz ( n = 4 ) copacul si-a dublat inaltimea in primavara (n = 1, H = 2) apoi a crescut un metru in vara (n = 2, H = 3), apoi s-a dublat in urmatoarea primavara (n = 3, H = 6), si a mai crescut un metru in vara (n = 4, H = 7). Acesta este sfarsitul a 4 cicluri, inaltimea este de 7 m. 
*/    

function utopianTree(n){ 
  let cycle = 1;
  let height = 1;
  
  while (cycle <= n){
    if(cycle % 2 !== 0 ){
      height *= 2;
    }else{
      height++;
    }
    cycle++;
  }
  
  return height;
}

console.log(utopianTree(5))


/* recursiv - internet 
function utopianTree(n) {
    if (n < 3) return n + 1
    if (n % 2 == 0) return (utopianTree(n - 2) * 2) + 1
    else return (utopianTree(n - 2) + 1) * 2
}
*/