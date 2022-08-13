const n1 = setTimeout((str) => {
  console.log(str);
}, 2000, 'yahoo');

const n2 = setTimeout(() => {
  console.log('Ура!');
}, 1000);

// сначала выполнится n2  потом n1

const n3 = setInterval((str) => {
  console.log(str);
}, 1500, 'Привет');

// setInteval будет выводить Привет через каждые 1.5 сек

setTimeout(() => {
  clearInterval(n3);
  // удалит функцию Привет через 4 сек
}, 4000);

let count = 0;
let timerId = setTimeout(function tick() {
  count++;
  console.log('yahoo', count);
  if (count < 5) {
    setTimeout(tick, 4000);
  } else if (count < 10) {
    setTimeout(tick, 2000);
  } else if (count < 15) {
    setTimeout(tick, 1000);
  }
}); // после 15 прекратит выполнять

const timer = deadline => {
  const timerBlockHour = document.querySelector('.timer__block_hour');
  const timerBlockMin = document.querySelector('.timer__block_minute');
  const timerBlockSec = document.querySelector('.timer__block_seconds');

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = Date.now();
    const timeRemainig = dateStop - dateNow;
    console.log(timeRemainig / 1000 / 60 / 60);
    // количество милисекунд переводим в часы
    const seconds = Math.floor(timeRemainig / 1000 % 60);
    const minutes = Math.floor(timeRemainig / 1000 / 60 % 60);
    const hours = Math.floor(timeRemainig / 1000 / 60 / 60);

    return {timeRemainig, seconds, minutes, hours};
  };
  const start = () => {
    const timer = getTimeRemaining();
    timerBlockHour.textContent = timer.hours;
    timerBlockMin.textContent = timer.minutes;
    timerBlockSec.textContent = timer.seconds;

    const interbalId = setTimeout(start, 1000);

    if (timer.timeRemainig <= 0) {
      clearTimeout(interbalId);
      timerBlockHour.textContent = '00';
      timerBlockMin.textContent = '00';
      timerBlockSec.textContent = '00';
    };
  };

  start();
};

timer('2022/01/12 20:00');

const eacher = (arr, callback) => {
  let count = 0;
  const id = setInterval(() => {
    callback(arr[count++]);
    if (count >= arr.length) clearInterval(id);  
  }, 0);
};
const techs = ['JS', 'React', 'TS'];
eacher(techs, tech => {
  console.log('eacher1', tech);
});
// дополнение лучще испльзовать setTimeout

const eachers = (arr, callback) => {
  let count = 0;
  setTimeout(function eacherTimer() {
    callback(arr[count++]);
    if (count < arr.length) {
      setTimeout(eacherTimer);
    }
  });
};
