"use strict";
function getResult(a,b,c){    
    let disk;
    let z;
    let y;
    let x = [];
    disk = Math.pow(b, 2) - (4*a*c);
    if (disk === 0){
          z = (-b + Math.sqrt(disk))/(2*a);
          x.push(z);
          return x;
    } else if (disk > 0){
        z = (-b + Math.sqrt(disk))/(2*a); 
        y = (-b - Math.sqrt(disk))/(2*a);
        x.push(z);
        x.push(y);
        return x;
    } else {
       return x; 
    }
}


function getAverageMark(marks){   
    let summ = 0 ;
    let averageMark = 0 ;
    if (marks.length > 5){  
        marks.splice(5);  
        console.log (`Оценок больше 5!`);             
    } 
    for (let i = 0; i < marks.length; i++){   
         summ += marks[i];
         averageMark = summ/marks.length;
           }
        return averageMark;    
  }


function askDrink(name,dateOfBirthday){
    let today = new Date().getFullYear();
    let year = dateOfBirthday.getFullYear();
    let result;
      if((today - year) > 18){
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
     return result;
}