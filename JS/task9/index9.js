// 9

// Необходимо реализовать функцию getNumberCharacters, которая
// считает количество символов в строке и выводит
//  *количество символов**символ* 

// Пример aaabbcaff → выведет 3a2b1c1a2f


let count = 1;
let sum= '';
let getNumberCharacters = (stroka) => {

  for(let i = 0; i<=stroka.length-1; i++){
    if(stroka[i]=== stroka[i+1]){ 
          count +=1;
                                } 
    else {sum += `${count}${stroka[i]}`
          count =1;
        }
    }
    return sum
}

console.log(getNumberCharacters('helllo'));

