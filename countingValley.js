/*

Un excursionist pasionat ține evidențe meticuloase ale excursiilor lor. În timpul ultimei excursii in care a făcut exact aceeasi pași, pentru fiecare pas s-a notat dacă a fost un pas în sus sau în jos. Drumețiile încep și se termină întotdeauna la nivelul mării și fiecare pas în sus sau în jos reprezintă o unitate de schimbare a altitudinii. Definim următorii termeni:
 - Un munte este o secvență de pași consecutivi deasupra nivelului mării, începând cu un pas în sus de la nivelul mării și terminând cu un pas în jos până la nivelul mării.
 - O vale este o secvență de pași consecutivi sub nivelul mării, începând cu un pas în jos de la nivelul mării și terminând cu un pas până la nivelul mării.

 steps: the number of steps on the hike 
 path: a string describing the path
 Return: nr de vai traversate 

countingValleys(8, [UDDDUDUU]) // 1 => o vale 

*/ 


function countingValleys(steps, path){ 

  let count = 0;
  let valleyCount = 0;

  for(let i = 0; i < steps; i++){ 
    let item = path[i]
      if(item === 'U'){ 
      count++; 
      if( count === 0){ 
        valleyCount++
      }
    } else { 
      count--;
    }
  }
    
  return valleyCount;
  
}

console.log(countingValleys(8,"UDDDUDUU"))
