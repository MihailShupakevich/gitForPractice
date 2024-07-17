// 21 напишите кастомный Flat

function flat(data) {
  const result = [];

  function flatten(data) {
    if (Array.isArray(data)) {
      for (const item of data) {
        flatten(item);
      }
    } else if (typeof data === 'object') {
      for (const key in data) {
        if (Array.isArray(data[key])) {
          flatten(data[key]);
        } else if (typeof data[key] === 'object') {
          Object.assign(result, data[key]);
        } else {
          result.push(data[key]);
        }
      }
    } else {
      result.push(data);
    }
  }

  flatten(data);

  return result;
}



const test = [
  1,
  2,
  [[3], 4, [5, [11], 9]],
  {
    one: 1,
    two: {
      bar: 'pop',
      three: {
        foo: 33,
        name: 'oleg',
        olga: true,
        unic: { in: 'in' }
      }
    }
  },
  ['098', [33, 44, [[12], 1, [56]]]]
];

console.log(flat(test)); // должно вернуть [1, 2, 3, 4, 5, 11, 9, { one: 1, bar : 'pop', foo: 33, name: 'oleg', olga: true, in: 'in' }, '098', 33, 44, 12, 1, 56]

const test2 = {
  foo: {
    one: 1,
    two: {
      bar: 'pop',
      three: {
        foo2: 33,
        name: 'oleg',
        olga: true,
        unic: { in: 'in' }
      }
    },
    abc: [
      1,
      2,
      [[3], 4, [5, [11], 9]],
      ['098', [33, 44, [[12], 1, [56]]]]
    ]
  },
} 
console.log(flat(test2)); // вернет {one: 1, bar: 'pop', foo2: 33, name: 'oleg', olga: true, in: 'in', abc: [1, 2, 3, 4, 5, 11, 9, '098', 33, 44, 12, 1, 56]},