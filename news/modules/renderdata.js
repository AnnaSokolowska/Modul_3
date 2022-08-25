import renderNews from './renderNews.js';
import fetchRequest from './fetch.js';
import newFetchRequest from './newFetch.js';
import renderSearch from './renderSearch.js';


const newsListTop = document.querySelector('.news-list-top');
newsListTop.style.cssText = `
display: grid;
    grid-template-columns: repeat(auto-fit, 270px);
    justify-content: space-evenly;
    gap: 40px 20px;
`;
const newsListSearch = document.querySelector('.news-list');
newsListSearch.style.cssText = `
display: grid;
    grid-template-columns: repeat(auto-fit, 270px);
    justify-content: space-evenly;
    gap: 40px 20px;
`;

const input = document.querySelector('.search-input');

const form = document.querySelector('.form-search');
const spanSearch = document.querySelector('.search');
const searchText = document.querySelector('.news-result');


const init = () => Promise.all([fetchRequest(URL, {
  headers: {
    'X-Api-Key': '1bf9ae021bd04e2a8ad215ec671457ca',
  },
  callback: renderNews}),
]);

init().then(data => {
  newsListTop.append(...data);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const infoSearch = input.value;
  searchText.style.visibility = 'visible';
  spanSearch.textContent = `${infoSearch}`;
  while (newsListTop.firstChild) {
    newsListTop.removeChild(newsListTop.firstChild);
  }

  const initSearch = () => Promise.all([fetchRequest(URL, {
    headers: {
      'X-Api-Key': '1bf9ae021bd04e2a8ad215ec671457ca',
    },
    callback: renderSearch}),
  newFetchRequest(`${input.value}`, {
    headers: {
      'X-Api-Key': '1bf9ae021bd04e2a8ad215ec671457ca',
    },
    callback: renderNews}),
  ]);

  initSearch().then(data => {
    newsListSearch.append(data[1]);
    newsListTop.append(data[0]);
  });
});

