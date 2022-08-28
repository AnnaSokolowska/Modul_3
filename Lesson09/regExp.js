'use strict';
const input = document.getElementById('input');

const output = document.getElementById('output');

input.addEventListener('input', () => {
//  input.textContent = input.value.replace(/\d/g, '');// запрет ввода цифр
//  input.textContent = input.value.replace(/[А-Я]/ig, '');
// не вводится кирилица
//  input.textContent = input.value.replace(/[^А-Я]/ig, '');
// запрет на ввод латиницы
  output.textContent = input.value.replace(/\D/g, (str) => str.toUpperCase());
  output.textContent = input.value.replace(/(\w+)@(\w+)\.(\w+)/,
    (...str) => console.log(str));
});

