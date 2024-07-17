// 23 
// найти и исправить как можно больше ошибок, функция должна создавать полную копию объекта

function createCopy(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid input data');
  }

  const copy = JSON.parse(JSON.stringify(data));

  if (!copy.setting || typeof copy.setting !== 'object') {
    copy.setting = {};
  }

  if (typeof copy.setting.title !== 'string') {
    copy.setting.title = '';
  }

  copy.setting = {...copy.setting, title: `new copy ${copy.setting.title}` };
  return copy;
}

console.log(createCopy({1:2,3:4}));