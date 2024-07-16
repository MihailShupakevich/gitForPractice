// 17

// Напишите универсальную функцию дебаунса


const debounce = (callback, interval = 0) => {
  let prevTimeoutId;

  return (...args) => {
    prevTimeoutId = setTimeout(() => {
      callback(args);
    }, interval);
  }
}

debounce(()=> {1,2,3}, 1000)