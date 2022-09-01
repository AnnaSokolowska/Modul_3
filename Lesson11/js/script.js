'use strict';

/* const headerSign = $('.header__sign');

 headerSign.click(function() {
    $(this).toggleClass('header__sign_active');
})

headerSign.dblclick(function() {
    $(this).toggleClass('red');
})
  */

const modalBtn = $('.present__btn');
const modalOrder = $('.modal-order');
modalBtn.on('click', function() {
  modalOrder.show(500);
});

const closeModal = $('.modal-order__close');
closeModal.on('click', () => {
  modalOrder.hide(500);
});

const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalOrderInput.focus(function() {
    modalOrderTitle.text(`Введите ${$(this).attr('placeholder').toLowerCase()}`)
})
modalOrderInput.blur(function() {
    modalOrderTitle.text('Заполните форму');
})
const modalOrderWrapper = $('.modal-order__wrapper');

//  modalOrderWrapper.mousedown(function(event) {
//    console.log(event.type)
// })
// modalOrderWrapper.mouseup(function(event) {
//    console.log(event.type)
// })

/* const foo = function() {
    $(this).next().animate({
        height: '-20px'
    }, 1000, )
}

$('.what-building__item').on('click', foo);
$('.what-building__box').off('click', foo);

const div = $('<div>');

div.css('padding', '40px');
div.css('border', '3px solid black');

div.html(`
  <div class="hello-world">
    <h1>Привет друзья</h1>
  </div>
`)
$('body').append(div);

div.innerHeight();
console.log(div.innerHeight());
console.log(div.height()); */

/* $('.modal-order__form').submit(function(event) {
event.preventDefault();
$.post('https://jsonplaceholder.typicode.com/todos', $(this).serialize())
.then(function(data) {
    console.log(data);
    return data;
})
.then(function(request) {
    console.log(request);
    return request;
})
.catch(function(err) {
    console.log(err);
    return err;
})
})*/

$('.modal-order__form').submit(function(event) {
  event.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.ypicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    success(data) {
      modalOrderTitle.text('Спасибо' + data.id);

$('.modal-order__form').slideUp(300);
    },
    error() {
      modalOrderTitle.text('Упс');
    },
  });
});

const headerNavigation = $('.header__navigation');
console.log(headerNavigation[0]);

$('.header__burger').on('click', function() {
    $('.navigation').animate({
        left: 0,
    }, 500, function() {
        $('.navigation__close').animate({
            opacity: 1,
        }), 300, 'swing' 
    });
    $('.header__navigation').show(200)
  
})

const navigationClose = $('.navigation__close');

navigationClose.on('click', function() {
    $('.header__navigation').hide(500)
    });

$('body').on('click', function(e) {
  if (!headerNavigation[0].contains(e.target)) {
    headerNavigation.hide();
  }
});
