/* 
Doua pisici si un soarece sunt in pozitii variate pe o linie. Le vei da pozitia de start. 
Task-ul este sa determini care pisica o sa ajunga prima la soarece, asumand faptul ca soarecele nu se misca si pisicile calatoresc la viteze egale. Daca pisicile ajung in acelasi timp, soarecele se va putea misca si va scapa cat timp cele doua se bat. 

Avem q queries in forma de x, y si z reprezentand pozitiile pentru pisica A si B si soarecele C. 
  - Daca pisica A prinde prima soarecele, printam Cat A 
  - Daca pisica B prinde prima soarecele, printam Cat B
  - Daca ambele pisici ajung la in acelasi timp, printam Mouse C 

  x = 2 
  y = 5 
  z = 4 

  Pisicile sunt in pozitie 2(Cat A) si 5(Cat B) si soarecele este la pozitia 4. Pisica B o sa ajunga prima, fiind la pozitia 5 avand doar o unitate intre ei, iar cealalta avand 2 unitati. Returnam Cat B. 

  2 
  1(Cat A) |  2(Cat B)   |  3(Mouse C)  
  1(Cat A) |  3(Mouse C) |  2(Cat B) 

  Cat B - 1 unitate distanta 
  Mouse C - pisicile ajung in acelasi timp 

*/

function catAndMouse(x, y, z) {
  if (Math.abs(x - z) < Math.abs(y - z))console.log('Cat A')
  else if(Math.abs(x - z) > Math.abs(y - z)) console.log('Cat B')
  else console.log('Mouse C') 

}

console.log(catAndMouse(1, 3, 2))