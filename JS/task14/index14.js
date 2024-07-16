// 14

// Есть несколько слов, определить состоят ли они из одних 
// и тех же букв
// например 
// matchCharacters('кот', 'ток', 'окт') --> true
// matchCharacters('кот', 'ком') --> false
// matchCharacters('аларм', 'малар', 'армал', 'рамал') --> true


let matchCharacters = (firstWord,...args) => {
  let sortedFirstWord =[...firstWord].sort();
  let anotherWords = [...args];
  let arr1 = anotherWords.map((el)=>[...el].sort());
   return arr1.every((el) => JSON.stringify(el) === JSON.stringify(sortedFirstWord));

} 
 console.log(matchCharacters( 'bro', 'rob','bor'));
