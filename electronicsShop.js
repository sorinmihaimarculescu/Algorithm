/* 
O persoana doreste sa vada care este cel mai scump calculatro cu tastatura si USB care poate fi cumparat cu un buget anume. 
Avand o lista de preturi pentru tastatura si USB si un buget, gaseste costul pentru a le cumpara. 
Daca nu este posibil sa le cumparam pe ambele returnam -1; 

b = 60; 
keybords = [40, 50, 60]; 
drives = [5, 8, 12]; 
Persoana poate cumpara 40 tastaturi + 12 USB = 52 / 50 tastaturi + 8 USB = 58. Alegem ultima si cea mai scumpa varianta si returnam 58. 

keyboard: pretul tastaturii 
drives: pretul USB 
b: bugetul 

Return: maximul care poate fi cheltuit sau -1 daca nu e posibil sa le poata cumpara pe ambele

Ex:                                       return 
10 2 3    
3 1                                          9                      
5 2 8 

Cumpara a doua tastatura si al treilea USB 8 + 1 = 9
*/

function getMoneySpent(b, keyboards, drives) {

  let result = []; 
  let maxBuget = b[0];
  let maxResult = [];
  for(let i = 1; i < b.length; i++){ 
    if(b[i]> maxBuget) maxBuget = b[i]
  }

  for(let i = 0; i < drives.length; i++){ 
    for(let j = 0; j < keyboards.length; j++){ 
      result = keyboards[j] + drives[i]
      if(result < maxBuget){ 
        maxResult.push(result)
      }
    } 
  }
  let max = Math.max(...maxResult); 

  if(max < maxBuget){ 
    return max 
  } else {  
    return -1;
  }
  
}


console.log(getMoneySpent([10, 2, 3], [3, 1], [5, 2, 8]))