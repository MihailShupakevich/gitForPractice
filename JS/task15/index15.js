// 15

// Напишите свой полифил для [].map()


  Array.prototype.myMap = function (callback, arg) {
    if (this == null) {
      throw TypeError('myMap called on null or undefined')
    }
    if (typeof callback !== 'function') {
      throw TypeError(`{callback} is not a function`)
    }
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray[i] = callback.call(arg, this[i], i, this)
    }
    return newArray;
  }

  let hello = [123,2,3,4]
 console.log( hello.myMap((el)=>el*2));
 