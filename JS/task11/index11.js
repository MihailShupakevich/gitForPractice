// 11

// Напишите функцию для бинарного поиска, она должна принимать
// отсортированный массив и элемент который ищем

const arr = [1,2,3,6,7,9,9,10,12,15]
let binaryFn = (arr1, target) => {
    for (let i = 0; i < arr1.length-1; i++) {
            if (arr1[i] === target) {
              return i; 
            }
          }
          return -1; 
        }
binaryFn(arr,9)
