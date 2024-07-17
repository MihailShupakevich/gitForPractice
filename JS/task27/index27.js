// 27 

const { reject } = require("bluebird");


// напишите свой Promise.all  и Promise.allSettled, на TS 

const promises = [
  new Promise((resolve) => setTimeout(() => resolve('Result 1'), 2000)),
  new Promise((resolve) => setTimeout(() => resolve('Result 2'), 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Result 3'), 3000)),
];
const promises2 = [
  new Promise((resolve) => setTimeout(() => resolve('Result 1'), 2000)),
  new Promise((resolve) => setTimeout(() => resolve('Result 2'), 1000)),
  new Promise((resolve,reject) => setTimeout(() => reject('Error 3'),    3000)),
  new Promise((reject) => setTimeout(() => reject('Result 22'), 1000)),
];


const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    let results = [];
    let pending = promises.length;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
      .then((result) => {
        results[i] = result;
        pending--;

        if (pending === 0) {
          resolve(results);
        }
      }).catch((error) => {
        reject(error);
      });
    }
  });
}

function promiseAllSettled(promises2) {
  return new Promise((resolve) => {
    const results = new Array(promises2.length);
    let settledCount = 0;

    promises2.forEach((promise, index) => {
      promise.then(
        (value) => {
          results[index] = { status: 'fulfilled', value };
          settledCount++;
          if (settledCount === promises2.length) {
            resolve(results);
          }
        },
        (reason) => {
          console.log('>>>>>>>>>>>>',reason);
          results[index] = { status: 'rejected', reason };
          settledCount++;
          if (settledCount === promises2.length) {
            resolve(results);
          }
        }
      );
    });
  });
}
 

promiseAll(promises).then((results) => console.log(results));
promiseAllSettled(promises2).then((results)=>console.log(results)).catch((err)=> console.log(err));
