// 3

// Написать функцию которая будет принимать строку и возвращать объект 
// Пример работы функции:

let sum = '';
let convertToObject = (abc) => {
  for(let i = abc.length-1 ; i >= 0; i--){
    a = [...abc];
    sum = `${a[i]}: {${sum}}`
    console.log(sum);
  }
}
convertToObject('bcd') // { a: { b: { c: {} } } }