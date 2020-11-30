//=================запрос фетч
// document.querySelector('.btn3').addEventListener('click', function(e) {
//   sendPost();
// });
// function sendPost() {
//   let data={
//     Name: document.querySelector('[type="text"]').value,
//     Password: document.querySelector('[type="password"]').value,
//     email: document.querySelector('[name="email"]').value,
//   };

//   //let data = new FormData(document.forms[1]);
//   fetch('https://my-json-server.typicode.com/SergeyBerez/server/myPost', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then(response => {
//       console.log(response);
//       return response.json();
//     })
//     .then(json => console.log(json))
//     .catch(function(error) {
//       console.log(`ошибка ${error}`);
//     });
// }

document.forms[1].addEventListener('submit', function (e) {
  e.preventDefault();

  let data = {
    Name: e.target.querySelector('[type="text"]').value,
    Password: e.target.querySelector('[type="password"]').value,
    email: e.target.querySelector('[name="email"]').value,
  };

  // let data = new FormData(document.forms[1]);
  // for (let [name, value] of data) {
  //   console.log(name);
  //   console.log(data);
  // }
  fetch('https://my-json-server.typicode.com/SergeyBerez/server/myPost', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(json => console.log(json))
    .catch(error => {
      console.log(`ошибка ${error}`);
    });
});
