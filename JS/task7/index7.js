// 7

const { curry } = require("lodash");



// написать функцию суммирования, которая работает в двух режимах


const notCurrySum = (a,b) => a + b ;
let sum = curry(notCurrySum);
