/*
Bill Division 

Doi prieteni Ana si Brian decid cum sa imparta nota de plata la cina. Fiecare o sa plateasca pentru ce au consumat. Brian ia nota si calculeaza portia Anei. Trebuie sa determinam daca calculul este corect. 

Exemplu: 
Nota de plata : bill= [2,4,6]. Ana refuza sa manance k = bill[2] care costa 6. 
Daca Brian calculeaza nota corect, Ana o sa plateasca (2+4)/2 = 3. 
Daca include costul bill[2], el va calcula (2 + 4 + 6)/2 = 6. In al doilea caz trebuie sa ii returneze Anei 3.  

Descrierea functiei: 
Completati functia bonAppetit care trebuie sa returneze “Bon Appetit” daca nota este impartita corect, altfel returneaza banii pe care Brian trebuie sa ii dea Anei (bcharge - bactual).  
    • bill: un array de numere intregi care reprezinta costul fiecarui produs comandat 
    • k: un numar intreg care reprezinta un index zero-based al itemul-ului pe care Ana nu l-a mancat 
    • b: banii cu care Ana a contribuit la nota  

Explicate:  
Sample Input 0: 
4 1 
3 10 2 9 
12 
a. Sample Output 0: 
5 
Ana nu a mancat bill[1] = 10, dar a impartit restul cu Brian. Costul total al produselor este 3 + 2 + 9 = 14 si impartit la jumatate avem bactual = 7. Brian ii da bcharge= 12 pentru portia din nota. Printam cat i-a dat peste,  bcharge - bactual = 12 - 7 = 5 pe o linie noua. 
b. Sample Output 1: 
7 
Ana nu a mancat bill[1] = 10, dar a impartit restul cu Brian. Costul total al produselor este 3 + 2 + 9 = 14 si impartit la jumatate avem bactual = 7. Deoarece bcharge  =  bactual printam “Bon Appetit”. 
*/

function bonAppetit(bill, k, b) {                                                     
    const notEat = bill[k]
    let totalBill = 0; 
    for(let i = 0; i < bill.length; i++) {
        totalBill += bill[i]
    } 
    const bActual = (totalBill - notEat)/2
    if(bActual === b) { 
        console.log("Bon Appetit")
    } else { 
        
    console.log(b - bActual)
    }
}


