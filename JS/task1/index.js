// 1

// Есть список эндпойнтов. Нужно сделать запросы последовательно
// на каждый эндпойнт, передавая в каждом последующем запросе
// результат ответа предыдущего запроса. Какими способами можно 
// это сделать это в JS?

const endPoints = [
  'https://jsonplaceholder.typicode.com/users?name=Leanne%20Graham',
  'https://jsonplaceholder.typicode.com/todos?user=',
  'https://jsonplaceholder.typicode.com/todos/v3'
]
  
  // *V2 - тут id пользователя полученного в прошлом запросе.
  // *V3 - тут id последней таски, полученной во втором запросе

  let newEndPoints = (endPoints1) => {
    let resultData;
      for (let i = 0; i < endPoints1.length; i++) {
        if(i == 0){
          const firstEndPoint = fetch(endPoints1[i])
          .then((value)=>value.json())
          .then(data=>{
                if(Array.isArray(data)){
                return resultData = data[0].id }
                  else {throw new Error('полученные данные не являются массивом!')}})
          .catch(()=>  new Error('Недостежимый url!'))
        }

        else if((resultData !== undefined ) && (i == 1)){
          const  secondEndPoint = fetch(endPoints1[i] + String(resultData))
          .then((value)=>value.json())
          .then(data => {
            
          })
          .catch(()=>  new Error('Недостежимый url!'))
          return secondEndPoint;  
        }
        else if((secondEndPoint !== false) && (i == 2)){
          let thirdEndPoint = fetch(endPoints1[i]).then((value)=>value.json()).catch(()=>  new Error('Недостежимый url!'))
          return thirdEndPoint;
        }
      }
  }

  console.log(newEndPoints(endPoints));