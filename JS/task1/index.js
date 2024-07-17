// 1

// Есть список эндпойнтов. Нужно сделать запросы последовательно
// на каждый эндпойнт, передавая в каждом последующем запросе
// результат ответа предыдущего запроса. Какими способами можно 
// это сделать это в JS?

const endPoints = [
  'https://jsonplaceholder.typicode.com/users?name=Leanne%20Graham',
  'https://jsonplaceholder.typicode.com/todos?user=',
  'https://jsonplaceholder.typicode.com/todos/'
]
  
  // *V2 - тут id пользователя полученного в прошлом запросе.
  // *V3 - тут id последней таски, полученной во втором запросе

  
const newEndPoints = async (endPoints1) => {
  let resultData = '';
  for (let i = 0; i < endPoints1.length; i++) {
    if (i > 0) {
      endPoints1[i] += resultData;
    }
    const responce = await fetch(endPoints1[i])
      .then((responce) => {
        if (responce.ok) {
          return responce.json();
        }
      })
      .then((data) => {
        if (Array.isArray(data)) {
          resultData = data[0].id;
          return data[0];
        } else {
          return data;
        }
      })
      .catch((err) => new Error(`Error occured! ${err}`));

    console.log(responce);
  }
}

newEndPoints(endPoints);
