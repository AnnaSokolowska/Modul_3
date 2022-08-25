

const renderSearch = (err, data) => {
  if (err) {
    console.log(err, data);
    return;
  }

  const template = document.createDocumentFragment();


  const news = data.articles.map(item => {
    const newsLi = document.createElement('li');
    newsLi.className = 'news-item';
    newsLi.style.cssText = `
    display: flex;
    flex-direction: column;
    padding: 6px 6px 10px;
    box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.2);
    `;

    const image = document.createElement('img');
    image.classList.add('news-image');
    image.setAttribute('src', `${item.urlToImage}`);
    image.setAttribute('alt', `${item.title}`);
    image.style.cssText = `
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;`;

    const title = document.createElement('h3');
    title.classList.add('news-title');
    const titleHref = document.createElement('a');
    titleHref.classList.add('news-link');
    titleHref.setAttribute('href', `${item.url}`);
    titleHref.setAttribute('target', 'blanc');
    titleHref.textContent = `${item.title}`;
    title.append(titleHref);

    const description = document.createElement('p');
    description.classList.add('news-description');
    description.textContent = `${item.description}`;

    const footer = document.createElement('div');
    footer.classList.add('news-footer');
    const time = document.createElement('time');
    time.classList.add('news-datetime');
    time.setAttribute('datetime', `${item.publishedAt}`);
    time.textContent =
    `  ${(new Date(item.publishedAt)).toLocaleTimeString('en')}`;

    const span = document.createElement('span');
    span.classList.add('news-date');
    span.textContent =
    `${(new Date(item.publishedAt)).toLocaleDateString('ru')}`;
    time.prepend(span);

    const newsAuthor = document.createElement('p');
    newsAuthor.classList.add('news-author');
    if (item.author === null) {
      newsAuthor.textContent = '';
    } else {
      newsAuthor.textContent = `${item.author}`;
    }

    footer.append(time, newsAuthor);

    newsLi.append(image, title, description, footer);
    return newsLi;
  });
  for (let a = 0; a < 4; a++) {
    template.append(news[a]);
  }
  return template;
};


export default renderSearch;
