// 26 
// написать функцию, которая будет принимать массив, удалять 
// дубликаты и сортировать его



const uniqueAndSortArray = (arr) => {
  return [...new Set(arr)].sort();
}

const result = uniqueAndSortArray(["hello","hello",'1','2','3','3','2']);
console.log(result); 