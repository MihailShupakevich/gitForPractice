// 10

// Есть объект

const tree = {
  value: 1,
  next: [
    {
      value: 2,
      next: null,
    },
    {
      value: 2,
      next: {
        value2: 4,
        next: null,
      },
    },
  ],
  foo: {
    bar: {
      baz: [
        { value: 9 },
        {
          value: 2,
          next: {
            value: 4,
            next: null,
          },
        },
      ],
    },
    baz: 33,
    value: 1,
  },
};


let sum = (tree, key) => {
  let result = 0;
  const traverse = (node) => {
    if (typeof node === 'object' && node !== null) {
      if (node.hasOwnProperty(key)) {
        result += node[key];
      }
      if (Array.isArray(node)) {
        node.forEach(traverse);
      } else {
        Object.values(node).forEach(traverse);
      }
    }
  };
  traverse(tree);
  return result;
};

console.log(sum(tree, "value2")); 

// Напишите функцию которая принимает объект и название ключа, 
// и рекурсивно просчитывает все значения по ключу в объекте 
