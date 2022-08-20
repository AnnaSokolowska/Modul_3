

const loadGoods = (callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://');

  xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response);
    // в формвте JSON поэтому сразу обрабатываем 
    callback(data);
  });
  xhr.addEventListener('error', () => {
    console.log('eror');
  });
  xhr.send();
};

const sendData = (body, callback) => { // отправка данных с пом XMLHttpRequest
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response);
    // в формвте JSON поэтому сразу обрабатываем
    callback(data);
  });
  xhr.addEventListener('error', () => {
    console.log('eror');
  });
  xhr.send(JSON.stringify(body));
};

const renderGoods = (data) => {
  const cardsWrapper = document.createElement('div');
  cardsWrapper.className = 'cards';

  const goods = data.map(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
  <h2>${item.title}</h2>
  <br>
  <p>Цена: ${item.price}Р</p>
  <br>
  <p>${item.description}</p>
  `;

    return card;
  });
  cardsWrapper.append(...goods);
  document.body.append(cardsWrapper);
};

const get = document.querySelector('#get'); // кнопка

get.addEventListener('click', () => {
  loadGoods(renderGoods);
});

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  sendData({
    title: form.title.value,
    body: form.description.value,
  }, (data) => {
    form.textContent = `Заявка успешно отправлена, номер заявка ${data.id}`;
  });
});

// работа с ошибками

const httpRequest = (url, {
  method = 'get',
  callback,
  body = {},
  headers,
}) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  if (headers) {
    for (const [key, value] of Object.entries(headers)) {
      xhr.setRequestHeader(key, value);
    }
  }

  xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response);
    if (callback) callback(data);
  });

  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send(JSON.stringify(body));
};

const geta = document.querySelector('#get'); // кнопка

get.addEventListener('click', () => {
  httpRequest(URL, {
    method: 'get',
    callback: renderGoods,
  });
});

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  httpRequest('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: {
      title: form.title.value,
      body: form.description.value,
    },
  callback(data) {
    form.textContent = `Заявка успешно отправлена, номер заявка ${data.id}`;
  },
  headers: {
 'Content-Type': 'application/json',
  }
});
});
