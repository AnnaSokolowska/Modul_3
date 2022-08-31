import {el, setChildren} from 'redom';


const createDiv = () => {
  const body = el('div', {'class': 'wrapper'},
    el('div', {'class': 'card'},
      el('p', {class: 'secure'}, 'Secure Checkout'),
      el('div', {class: 'credit-card'},
        el('span', {class: 'card__number'}, 'xxxx xxxx xxxx xxxx'),
        el('div', {class: 'card__personal'},
          el('span', {class: 'card__name'}, 'John Doe'),
          el('span', {class: 'card__date'}, '04/24'))),
      el('form', {class: 'form', id: 'form', action: '#'},
        el('div', {class: 'form__input-wrap form__input-wrap_holder'},
          el('label',
            {class: 'form__label form__holder-label', for: ''}, 'Card Holder'),
          el('input', {class: 'input input__holder', type: 'text'})),
        el('div', {class: 'form__input-wrap form__input-wrap_number'},
          el('label',
            {class: 'form__label form__number-label', for: ''}, 'Card Number'),
          el('input', {class: 'input input__number', id: 'cardNumber'})),
        el('div', {class: 'form__input-wrap form__input-wrap_date'},
          el('label',
            {class: 'form__label form__date-label', for: ''}, 'Card Expiry'),
          el('input', {class: 'input input__date', type: 'text'})),
        el('div', {class: 'form__input-wrap form__input-wrap_cvv'},
          el('label', {class: 'form__label form__cvv-label', for: ''}, 'CVV'),
          el('input',
            {class: 'input input__cvv', type: 'text', maxLength: '3'})),
        el('button', {class: 'form__button'}, 'CHECK OUT'))));


  return body;
};


const creditCeardMask = () => {
  const cardNumberInput = document.getElementById('cardNumber');
  const cardNumberOutput = document.querySelector('.card__number');

  cardNumberInput.addEventListener('mouseenter', () => {
    cardNumberInput.value = `${cardNumberOutput.textContent}`;
  });
  cardNumberInput.addEventListener('mouseleave', () => {
    cardNumberInput.value = '';
  });

  cardNumberInput.addEventListener('input', () => {
    let cardCode = cardNumberInput.value.replace(/[^\d]/g, '').substring(0, 16);
    cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    cardNumberInput.value = cardCode;
    // form.number.value = cardNumberInput.value.split(' ').join('');
    cardNumberOutput.textContent = cardNumberInput.value;
  });
};

const cardHolder = () => {
  const cardHolderInput = document.querySelector('.input__holder');
  const cardHolderOutput = document.querySelector('.card__name');
  cardHolderInput.addEventListener('input', () => {
    cardHolderOutput.textContent = cardHolderInput.value;
  });
};

const expiredDate = () => {
  const inputExpireDate = document.querySelector('.input__date');
  const outputExpireDate = document.querySelector('.card__date');
  inputExpireDate.addEventListener('input', () => {
    let cardCode = inputExpireDate.value.replace(/[^\d]/g, '').substring(0, 4);
    cardCode = cardCode !== '' ? cardCode.match(/.{1,2}/g).join('/') : '';
    inputExpireDate.value = cardCode;
    outputExpireDate.textContent = inputExpireDate.value;
  });
};

setChildren(document.body, createDiv());
creditCeardMask();
cardHolder();
expiredDate();

