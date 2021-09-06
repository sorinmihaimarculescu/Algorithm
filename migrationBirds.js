/* Migration Birds

Avand in vedere un array de observari de pasari in care fiecare element reprezinta un tip id al pasarii, determinati id-ul tipului cel mai frecvent vazut. Daca s-a depistat mai mult de un tip, suma maxima, returneaza cel mai mic id. 
Exemplu: 
arr  = [1, 1, 2, 2, 3]
Sunt doua tipuri din 1 si 2, observam un singur tip 3. Il luam pe cel mai mic dintre cele doua tipuri pe care le-am vazut de doua ori si returnam tipul 1. 

Descrierea functiei
migratoryBirds parametru arr si returneaza cel mai mic tip de id a celei mai frecvent observate pasari. 

Sample input 0 
6 
1 4 4 4 5 3 

Sample output 0 
4 
Explicatie: 
Diferitele tipuri de pasari apar in urmatoarele frecvente: 
tipul 1: 1 pasare; 
tipul 2: 0; 
tipul 3: 1 pasare; 
tipul 4: 3 pasari; 
tipul 5: 1 pasare
Tipul care apare de cele mai multe ori este 4, deci printam 4 ca raspuns 

*/
function migratoryBirds(arr) {
   let birdsCount = {}; 
   let maxCount = 0;
   let ids = []; 
   let minId = Infinity; 
   
   for(let i = 0; i < arr.length; i++){ 
       if(!(arr[i] in birdsCount)){ 
           birdsCount[arr[i]] = 0;  
       }
       birdsCount[arr[i]] += 1
   }

    Object.entries(birdsCount).forEach(([id, count]) => { 
        if (count > maxCount){ 
            maxCount = count
            ids = []
        } 
        if (count === maxCount){
            ids.push(parseInt(id))
        }
    })
    
    for(let i = 0; i < ids.length; i++){ 
       if ( ids[i] < minId){ 
           minId = ids[i]
       }
    }
    
    return minId
}