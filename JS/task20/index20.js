// 20

// Создать функцию inverse, которая заменит 1 на 0 и наоборот 
// во всем дереве.

const tree = {
  a: {
    a: 1,
    b: {
      a: 0,
      b: 1
    },
    c: 0
  },
  b: 0,
  c: 1
};



const inverse = (tree1) => {
  const newTree = {};
  for (const key in tree1) {
    if (typeof tree1[key] === 'object') {
      newTree[key] = inverse(tree1[key]);
    } else {
      newTree[key] = tree1[key] === 0? 1 : 0;
    }
  }
  return newTree;
};

const newTree = inverse(tree);
console.log(newTree);