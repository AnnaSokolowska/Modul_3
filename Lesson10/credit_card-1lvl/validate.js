export const cardHolderValidate = (cardHolderInput) => {
  cardHolderInput.toString();
  const regExpCardHolder = /^(?:[A-Z]+\s)(?:[A-Z]+)$/iu;
  const res = cardHolderInput.match(regExpCardHolder);
  if (res === null) {
    return 'Данные введены не верно';
  }
  console.log(res);
  return res[0];
};

export const cvvValidation = (cvv) => {
  cvv.toString();
  const regExpCvv = /^[0-9]{3}$/g;
  const res = cvv.match(regExpCvv);
  if (res === null) {
    return 'Номер введен не верно';
  }
  console.log(res);
  return res[0];
};
export const numberValidation = (cardNumberInput) => {
  const number = cardNumberInput.toString().split(' ').join('');
  const regExpNumber = /^[0-9]{16}$/g;
  const res = number.match(regExpNumber);
  if (res === null) {
    return 'Номер введен не верно';
  }
  console.log(res);
  return res[0];
};
