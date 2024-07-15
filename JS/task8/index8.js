// 8

// Написать метод массивов reverse через рекурсию


const arr = [1,2,3,4];
let newArr = [];
let variable;
const reverseFunc = (arr1) => {
  if(arr1.length !== 0){
      variable = arr1.pop()
      newArr.push(variable);
    return  reverseFunc(arr1);
    }
  else return newArr;
  }
reverseFunc(arr)
