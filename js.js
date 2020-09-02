// ======================запрос axios
document.forms[0].addEventListener('submit', function (e) {
  e.preventDefault();
  let data = {
    Name: document.querySelector('[type="text"]').value,
    Password: document.querySelector('[type="password"]').value,
    email: document.querySelector('[name="email"]').value,
  };

  // подвешиваем событие на форму и вызываем axios.post()
  axios
    .post('https://my-json-server.typicode.com/SergeyBerez/server/myPost', data)
    .then(function (response) {
      console.log(response);
      let { data } = response;
      console.log(data);
      return data;
    })
    .then(data => {
      // console.log(data);
    })
    .catch(error => {
      console.log(`ошибка ${error}`);
    });
});

//===

//=====

//============================
// // ==============самописная функиция  myAxios
document.querySelector('.btn1').onclick = async function (e) {
  e.preventDefault();
  try {
    let response = await myAxiosGet(
      'https://my-json-server.typicode.com/SergeyBerez/server/myGet',
    );

    createCart(response);
    console.log(response);
  } catch (error) {
    console.log(error);
  }

  // .then(Arr => {
  //   createCart(Arr);
  // })
  // .catch(error => {
  //   console.log(error);
  // });
};
// функция по вствки с карточек в нtml
function createCart(Arr) {
  Arr.forEach(obj => {
    console.log(obj);
    let div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<img src="${obj.photo}" alt="">`;
    document.querySelector('header').insertAdjacentElement('beforeend', div);
  });
}
// ---------------------------

// =================сама функция
function myAxiosGet(url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let arr = JSON.parse(xhr.response);
        console.log(xhr.response);
        resolve(arr);
      } else {
        reject(new Error('Network Error'));
      }
    };
    // xhr.onerror = function () {
    //   console.log('error');
    //   reject(new Error('Network Error'));
    // };
  });
}

// document.addEventListener('click', function(e) {
//   httpGetAsync(
//     'https://my-json-server.typicode.com/SergeyBerez/server/myGet',
//     function(e) {
//       console.log(e);
//     },
//   );
// });
// function httpGetAsync(url, callback) {
//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.onreadystatechange = function() {
//     if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//       callback(xmlHttp.responseText);
//   };
//   xmlHttp.open('GET', url, true);
//   xmlHttp.send(null);
// }
