// 12

// Написать функцию которая будет строить “шахматную доску”
// Пример работы:



let number = 0;
let sum = ''
let createBoard = () => {
    for(let i = 0 ; i<60; i++){
      {
        if (number === 10) {
          sum +='\n';
          number=0;
         
        }
      if (i % 2 ==0) {
        sum+='_'  
        number++
      }
      else {sum+='#' , number++};

    }
    
  }
  return sum
}


console.log(createBoard());
