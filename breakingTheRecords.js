/*

Breaking the Records 

	Maria joaca basket si vrea sa ajunga pro. In fiecare sezon isi mentine un record cu jocurile ei. Inregistreaza de cate ori isi depaseste recordul sezonal petru cele mai multe si cele mai putine puncte in joc. Punctele inregistrate pentru primul joc, stabilesc recordul pentru sezon si incepe sa numere de acolo. 
	Exemplu: 
	scores = [12,24,10,24] 
	Scores are aceiasi ordine ca jocurile jucate. Isi inregistreaza rezultatele dupa cum urmeaza: 
	                        Count
    Game  Score  Minimum  Maximum   Min Max
     0      	12     	12       	12       0  	 0
     1       	24     	12       	24       0   	 1
     2      	10     	10       	24       1   	 1
     3      	24     	10       	24       1   	 1

Dand scorul pentru un sezon, determinati de cate ori Maria si-a batut recordul pentru cele mai multe si cele mai putine puncte de-alungul sezonului. 
Return: 
int[2]: un array cu numarul de cate ori si-a invins recordul. Index 0 este pentru distrugerea celor mai multe puncte, si index 1 pentru cele mai putine puncte. 
Sample input 0 
9
0   1  2  3  4  5 6  7  8
10 5 20 20 4 5 2 25 1 
Sample Output 0 
2 4 
Si-a depasit recordul de doua ori ( dupa jocul 2 si 7), iar cel mai prost scor a fost de patru ori ( dupa jocul 1, 4, 6 si 8), deci printam 2 4 ca si raspuns. Trebuie mentinonat ca nu si-a doborat recordul pentru cel mai bun scor in timpul jocului 3 ,deoarece scorul sau in timpul acelui joc nu a fost strict mai mare decat cel mai bun record din acea vreme.


*/

function breakingRecords(scores) {
  let best = 0;
  let worst = 0;
  let bestScore = scores[0];
  let worstScore = scores[0];
   
  for(let i = 1; i < scores.length; i++) {
    if (scores[i] > bestScore) {
      bestScore = scores[i];
      best++;
    }
    if (scores[i] < worstScore) {
      worstScore = scores[i]
      worst++;
    }
  }
  return [best, worst];

} 

