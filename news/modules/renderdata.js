import renderNews from './renderNews.js';
import fetchRequest from './fetch.js';
import newFetchRequest from './newFetch.js';


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

const form = document.querySelector('.search-submit');
const select = document.querySelector('.js-choice');
const spanSearch = document.querySelector('.search');
const searchText = document.querySelector('.news-result');


input.addEventListener('change', () => {
  const infoSearch = input.value;

  searchText.style.visibility = 'visible';
  spanSearch.textContent = `${infoSearch}`;

  const init = () => Promise.all([newFetchRequest(`${infoSearch}`, {
    headers: {
      'X-Api-Key': '1bf9ae021bd04e2a8ad215ec671457ca',
    },
    callback: renderNews}),
  ]);

  init().then(data => {
    console.log(data);
    newsListSearch.append(...data);
  });
});


const init = () => Promise.all([fetchRequest(URL, {
  headers: {
    'X-Api-Key': '1bf9ae021bd04e2a8ad215ec671457ca',
  },
  callback: renderNews}),
]);

init().then(data => {
  newsListTop.append(...data);
});
