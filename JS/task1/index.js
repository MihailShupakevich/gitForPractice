// 1

// Есть список эндпойнтов. Нужно сделать запросы последовательно
// на каждый эндпойнт, передавая в каждом последующем запросе
// результат ответа предыдущего запроса. Какими способами можно 
// это сделать это в JS?

const endPoints = [
  // 'https://jsonplaceholder.typicode.com/users?name=Leanne%20Graham',
  // 'https://jsonplaceholder.typicode.com/todos?user=*V2',
  // 'https://jsonplaceholder.typicode.com/todos/*V3'
  ]
  
  // *V2 - тут id пользователя полученного в прошлом запросе.
  // *V3 - тут id последней таски, полученной во втором запросе