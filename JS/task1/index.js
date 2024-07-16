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

  let newEndPoints = (endPoints1) => {
      for (let i = 0; i < endPoints1.length; i++) {
        if(i == 0){
          let firstEndPoint = fetch(endPoints1[i]).then((value)=>value.json()).catch(()=>  new Error('Недостежимый url!'))
          return firstEndPoint;
        }
        else if((firstEndPoint !== false) && (i == 1)){
          let secondEndPoint = fetch(endPoints1[i]).then((value)=>value.id.json()).catch(()=>  new Error('Недостежимый url!'))
          return secondEndPoint;
        }
        else if((secondEndPoint !== false) && (i == 2)){
          let thirdEndPoint = fetch(endPoints1[i]).then((value)=>value.json()).catch(()=>  new Error('Недостежимый url!'))
          return thirdEndPoint;
        }
      }
  }

  console.log(newEndPoints(endPoints));