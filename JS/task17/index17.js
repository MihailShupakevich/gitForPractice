// 17

// Напишите универсальную функцию дебаунса


const debounce = (callback, interval = 0) => {
  return (...args) => {
    prevTimeoutId = setTimeout(() => {
      callback(args);
    }, interval);
  }
}

const debouncedFunc = debounce(() => console.log('Hello!'), 1000);
debouncedFunc();