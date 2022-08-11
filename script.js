'use strict';

const getContainer = () => {
  const container = document.querySelector('.container');
  return container;
};

const setForm = () => {
  const form = document.createElement('form');
  form.classList.add('form');
  form.insertAdjacentHTML('beforeend', `
  <label class="form-group me-3 mb-0">
    <input type = "text" class = "input" id = "task" 
    name = "task" required>
      </label>`);
  return form;
};


const timeOut = (input, paragraf) => {
  input.addEventListener('change', e => {
    paragraf.innerHTML = '';
    setTimeout(() => {
      paragraf.insertAdjacentHTML('afterbegin', `${input.value}`);
      console.log(paragraf);
    }, 300);
  });
};

const init = () => {
  const container = getContainer();
  const form = setForm();
  container.innerHTML = '<p class="paragraf"></p>';
  container.prepend(form);
  const paragraf = document.querySelector('.paragraf');
  const input = form.querySelector('.input');
  timeOut(input, paragraf);
};

init();
