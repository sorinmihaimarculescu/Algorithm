/*

Avand un array de numere naturale, gasiti cel mai lung subarray unde diferenta absoluta dintre fiecare doua elemente este mai mica sau egala cu 1

a = [1, 1, 2, 2, 4, 4, 5, 5, 5]

Sunt doua subarray-uri care indeplinesc criteriile: [1, 1, 2, 2] si [4, 4, 5, 5, 5]. Lungimea maxima a subarray-ului are 5 elemente. 

n = un array de numere naturale 
Return = lungimea celui mai mare subarray care indeplineste criteriile 

Input 0 
4 6 5 3 3 1 
Output 0 
3 

Explicatie : 
Am ales urmatorul multiset din interiorul array-ului: 4, 3, 3. Fiecare pereche are o diferenta absoluta <= 1 => | 4 - 3 | = 1 si | 3 - 3 | = 0, deci printam numarul 3. 

Input 1 
1 2 2 3 1 2 
Output 1 
5 

Explicatie 
Am ales urmatorul multiset din interiorul array-ului: 1,2,2,1,2. Fiecare pereche are o diferenta absoluta <= 1 => | 1 - 2 | = 1, | 1 - 1 | = 0 si | 2 - 2 | = 0 deci printam numarul 5. 


*/

function pickingNumbers(a) {

  let frequency = []; 
  a.forEach(element => {
    frequency[element] = (frequency[element] || 0) + 1;
  });

  let max = Number.NEGATIVE_INFINITY;

  frequency.forEach((element, index)=>{ 
    let maxResult = element + (frequency[index + 1] || 0);
    if(maxResult > max) max = maxResult
  })

  return max

}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]))