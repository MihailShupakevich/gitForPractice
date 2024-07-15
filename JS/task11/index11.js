// 11

// Напишите функцию для бинарного поиска, она должна принимать
// отсортированный массив и элемент который ищем

const arr = [1,2,3,6,7,9,9,10,12,15]
let binaryFn = (arr1, b) => {
  if (arr1.length % 2 == 0){
    while(arr1[arr1.length-1] !== b){
    for (let i = 0; i < arr1.length-1; i++) {
        arr1.pop()
        console.log(arr1);

      
    }
  }
}
}
binaryFn(arr,2)