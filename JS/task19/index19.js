// 19

const { syncBuiltinESMExports } = require("module");

// Реализовать алгоритм сжатия строки "AAADDDGFFFAAR" → "3A3DG3F2AR"


let count = 1;
let otherNumber;
let sum= '';
let getNumber = (stroka) => {

  for(let i = 0; i<=stroka.length-1; i++){
    if(stroka[i]=== stroka[i+1]){ 
          count +=1;
                                } 
      else if(count > 1 ){sum += `${count}${stroka[i]}`
          count =1;
        }
        else {sum += `${stroka[i]}`}  
    }
    return sum
}

console.log(getNumber('AAADDDGFFFAAR'));