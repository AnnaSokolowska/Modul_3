import {cvvValidation, cardHolderValidate, numberValidation}
  from './validate.js';

describe('Проверка правильности ввода данных крединой карты', () => {
  it('Валидатор CVV работает корректно c неправильными номерами', () => {
    expect(cvvValidation('1-2')).toBe('Номер введен не верно');
    expect(cvvValidation(',./')).toBe('Номер введен не верно');
    expect(cvvValidation('12')).toBe('Номер введен не верно');
    expect(cvvValidation('1224')).toBe('Номер введен не верно');
    expect(cvvValidation('ann')).toBe('Номер введен не верно');
    expect(cvvValidation('ава')).toBe('Номер введен не верно');
  });
  it('Валидатор CVV работает корректно c правильными номерами', () => {
    expect(cvvValidation('123')).toBe('123');
  });
  it('Валидатор Card Holder работает корректно c неправильными данными', () => {
    expect(cardHolderValidate('ывыв ываыаы')).toBe('Данные введены не верно');
    expect(cardHolderValidate('asadadas')).toBe('Данные введены не верно');
    expect(cardHolderValidate('asada ываыва')).toBe('Данные введены не верно');
    expect(cardHolderValidate('1sdfsf kkhk')).toBe('Данные введены не верно');
    expect(cardHolderValidate('ann./ hdhgds')).toBe('Данные введены не верно');
    expect(cardHolderValidate('ава')).toBe('Данные введены не верно');
    expect(cardHolderValidate('hgfhf ghjgj fjfhghgd')).toBe('Данные введены не верно');
  });
  it('Валидатор Card Holder работает корректно c правильными данными', () => {
    expect(cardHolderValidate('anna Sokolowska')).toBe('anna Sokolowska');
  });
  it('Валидатор CardNumber работает корректно c неправильными номерами', () => {
    expect(numberValidation('1-2')).toBe('Номер введен не верно');
    expect(numberValidation(',./')).toBe('Номер введен не верно');
    expect(numberValidation('12')).toBe('Номер введен не верно');
    expect(numberValidation('12242536475273452')).toBe('Номер введен не верно');
    expect(numberValidation('ann')).toBe('Номер введен не верно');
    expect(numberValidation('ава')).toBe('Номер введен не верно');
  });
  it('Валидатор CardNumber работает корректно c правильными номерами', () => {
    expect(numberValidation('3456 3456 3456 3456')).toBe('3456345634563456');
  });
});
