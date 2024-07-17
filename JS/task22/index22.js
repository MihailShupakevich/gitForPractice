// 22
// напишите функцию которая при каждом вызове будет увеличивать внутренний 
// счетчик на 1 
// ! внешних переменных создать нельзя
// console.log(inc(), inc(), inc()) // 1, 2, 3



const inc = () => {
  (typeof(count)  === 'undefined') ? count=1 : count+=1;
  return count;
 }
console.log(inc(), inc(), inc()) // 1, 2, 3
