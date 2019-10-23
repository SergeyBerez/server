// ======================запрос axios
// document.forms[0].addEventListener('submit', function(e) {
//   e.preventDefault();
//   let data = {
//     Name: document.querySelector('[type="text"]').value,
//     Password: document.querySelector('[type="password"]').value,
//     email: document.querySelector('[name="email"]').value,
//   };
//   axios
//     .post('https://my-json-server.typicode.com/SergeyBerez/server/posts', data)
//     .then(function(response) {
//       console.log(response);
//       let { data } = response;
//       return data;
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.log(`ошибка ${error}`);
//     });

//======================запрос фетч
document.querySelector('.btn3').addEventListener('click', function(e) {
  sendPost();
});
function sendPost() {
  let data = {
    Name: document.querySelector('[type="text"]').value,
    Password: document.querySelector('[type="password"]').value,
    email: document.querySelector('[name="email"]').value,
  };
  fetch('https://my-json-server.typicode.com/SergeyBerez/server/myGet', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(function(error) {
      console.log(`ошибка ${error}`);
    });
}

// // ==============самописная функиция  myAxios
document.querySelector('.btn1').onclick = function(e) {
  e.preventDefault();

  myAxiosGet('https://my-json-server.typicode.com/SergeyBerez/server/my_get')
    .then(Arr => {
      createCart(Arr);
    })
    .catch(error => {
      console.log(error);
    });
};
// функция по вствки с карточек в нtml
function createCart(Arr) {
  Arr.forEach(obj => {
    console.log(obj);
    let div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<img src="${obj.photo}" alt="">`;
    document.querySelector('header').insertAdjacentElement('beforeend', div);
  });
}
// ---------------------------

// =================сама функция
function myAxiosGet(url) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let arr = JSON.parse(xhr.response);
        console.log(arr);
        resolve(arr);
      } else {
        var error = new Error('ошибка');
        reject(error);
      }
    };
    xhr.onerror = function() {
      reject(new Error('Network Error'));
    };
  });
}
