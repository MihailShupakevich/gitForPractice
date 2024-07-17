// 25 
//  избавиться от дубликатов букв, которые стоят друг за другом.

const uniqueNonConsecutiveElements = (word) => {
  let newWord='';
    for (let i = 0; i < [...word].length; i++) {
      if ([...word][i]===[...word][i+1]) {
        continue;
      }
      newWord += [...word][i]
      }
      return [...newWord]
}
const result = uniqueNonConsecutiveElements("hello");
console.log(result); // Output: ['h', 'e', 'l', 'o']