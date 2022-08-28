'use strict';

const array = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts',
  'library.css', 'my.plugin.js'];

const arrayFilter = () => {
  const test = JSON.stringify(array);
  const reg = /\w+\.(jsx?|ts)/g;
  const newArray = test.match(reg);
  console.log(newArray);
  return newArray;
};
arrayFilter();

const testMassive = `'info@methed.ru', 'max24@mail.com', 'my-mail@yandex.ru',
  'java_script@google.io', 'tom_yam@ya.ru', 'zero@mai1.xyz'`;

const reg2 = /['"](\w+?)@([a-zA-Z]+?){3,}\.[a-zA-Z]{2,5}/gi;
const result = testMassive.match(reg2);
console.log(result);

const text = `Здоровый (праздничный) ужин вовсе не обязательно должен 
состоять из шпината, гречки и вареной куриной 
грудки. Самыми лучшими способами приготовления еды 
(по мнению моей мамы) являются следующие: варка на 
пару, запекание или варка в воде. Помимо стандартных 
мандаринов и ананасов, отличным украшением любого 
стола станут необычные, экзотические 
фрукты(например: личи, рамбутан, тамаринд). 
Здоровой может быть 
    даже выпечка, если она приготовлена на пару.
`;

const reg3 = /\(.*?\)/g;

const result3 = text.match(reg3);
console.log(result3);

const testtext = `Напишите функцию которая принимает строку, в 
этой строке находит url адрес и заменяет с помощью replace на тег
домены вида http://site.ru, https://site.com на `;
const link = (a) => {
  const reg = /(https?):\/\/(?<link>([a-zA-Z]+?)\.[a-zA-Z]{2,5})/g;
  const newLink = a.replace(reg, (...match) => {
    const groups = match.pop();
    const element = `<a href="${match[0]}">${groups.link}</a>`;
    return element;
  });
  console.log(newLink);
};
link(testtext);
