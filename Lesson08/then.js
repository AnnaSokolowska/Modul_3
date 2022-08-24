const promise = new Promise((resolve, reject) => {
    console.log('Ждем пиццу');
    let timerBad = NaN;

    const timerId = setTimeout(() => {
        clearTimeout(timerBad);
        resolve('Пиццу доставили');
    }, Math.fllor(Math.random() * 5000));

    timerBad = setTimeout(() => {
        clearTimeout(timerId);
        reject(new Error('Пиццу не доставили во время'));
    }, 2000);
});

promise
.then(data => {
    console.log('1');
})
.catch(err => {
    console.error(err);
});

