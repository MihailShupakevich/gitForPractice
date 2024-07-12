// 4

// Напишите функцию которая сортирует массив по датам
let temp;
const arr = [
  { date: '10.01.2016' },
  { date: '11.01.2017' },
  { date: '05.11.2016' },
  { date: '21.12.2002' }
];

let a = (arr1) => {
    let b = arr1.map((el) => el.date.split('.') )
    // console.log(b);
    for (let i = b.length - 1; i > 0 ; i-- ) {
    for(let i = b.length - 1; i > 0 ; i-- ){
         if (b[i][2] < b[i-1][2]) {
          temp = b[i]
          b[i] = b[i-1]
          b[i-1] = temp    
          }    
      }
    }
 }
  a(arr);
