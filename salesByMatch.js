/* 

Există o grămadă mare de șosete care trebuiesc asortate în funcție de culoare. Având în vedere o serie de numere întregi care reprezintă culoarea fiecărui șosete, determinați câte perechi de șosete cu culori potrivite există. 

n: numarul de sosete
ar: coloarea sosetei 

Returneaza numarul de perechi

sockMerchant(7, [1,2,1,2,1,3,2]) // 2
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]) // 3
sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]) // 3

*/ 

sockMerchant = (n, arr) => { 

  let count = 0; 
  arr.sort()

  for(let i = 0; i < arr.length; i++){ 
    if(arr[i] == arr[i + 1]) { 
      i++;
      count++;
    }
  }
  return count;
}

console.log(sockMerchant(7, [1,2,1,2,1,3,2]))
  // // declar variabila count 
  // let count = 0; 
  // // sortam array-ul 
  // arr.sort()
  // //iterez prin arr 
  // for(let i = 0; i < arr.length; i++){ 
  //   // daca arr[i] == arr[i + 1] 
  //   if(arr[i] == arr[i + 1]) { 
  //     // incrementam i 
  //     i++;
  //     // count++
  //     count++;
  //   }
  // }
  // // returnez varbila count
  // return count;
  