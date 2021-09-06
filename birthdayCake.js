/* 

Esti responsabil pentru prajiturile de ziua copiilor. Trebuie sa hotarasti ca tortul are cate o lumanre pentru fiecare an din totalul varstei. Vor putea sa sufle doar in cea mai inalta lumanre. Numara cate lumanari sunt inalte. 


candles = [4,4,1,3]
Cea mai inalta lumanare este 4. Sunt doua deci returnam 2 

Function Description

birthdayCakeCandles has the following parameter(s):

int candles[n]: the candle heights
Returns int: the number of candles that are tallest

n: size of candles

*/

function birthdayCakeCandles(candles) { 
  let obj = {}; 
  candles.forEach((item)=>{ 
    obj[item] = (obj[item] || 0) + 1;
  })
  
  return Math.max(...Object.values(obj))

}

console.log(birthdayCakeCandles([3, 2, 1, 3]))
