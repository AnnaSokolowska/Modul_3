const URL = '' //адрес http

const httpRequest = (url, {
  method = 'get',
  callback,
  body = {},
  headers,
}) => {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    if (headers) {
      for (const [key, value] of Object.entries(headers)) {
        xhr.setRequestHeader(key, value);
      }
    }

    xhr.addEventListener('load', () => {
      if (xhr.status < 200 || xhr.status >= 300) {
        callback(new Error(xhr.status), xhr.response);
        return;
      }
      const data = JSON.parse(xhr.response);
      if (callback) callback(null, data);
    });
    xhr.addEventListener('error', () => {
      callback(new Error(xhr.status), xhr.response);
    });
    xhr.send(JSON.stringify(body));
  } catch (err) {
    callback(new Error(err));
  }
};

const fetchRequest = async (url, {
  method = 'get',
  callback,
  body,
  headers,
}) => {
  try {
    const options = {
      method,
    };
    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;

    const response = await fetch(url, options);

    if (response.ok) {
      const data = await response.json();
      if (callback) callback(null, data);
      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    callback(err);
  }
};

const renderGoods = (err, data) => {
  if (err) {
    console.warn(err, data);
    const h2 = document.createElement('h2');
    h2.style.color = 'red';
    h2.textContent = err;
    document.body.append(h2);
    return;
  }
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
    callback(err, data) {
      if (err) {
        console.warn(err, data);
        form.textContent = err;
      }
      form.textContent = `Заявка успешно отправлена, номер заявка ${data.id}`;
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
});

// fetchRequest  нужно вызывать вместо httpRequest