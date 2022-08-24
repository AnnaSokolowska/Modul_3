const photos = [];

const loadImg = url => new Promise(resolve => {
  const img = new Image();
  img.width = 300;
  img.src = url;
  img.addEventListener('load', () => {
    document.body.append(img);
    resolve();
  });
});

const shoaImg = async () => {
  const img = [];
  img.push(await loadImg(photos[0]));
  img.push(await loadImg(photos[1]));
  img.push(await loadImg(photos[2]));
  img.push(await loadImg(photos[3]));
  img.push(await loadImg(photos[4]));
  document.body.append(...img);
};

shoaImg();


loadImg(photos[0])
  .then(() => loadImg(photos[1]))
  .then(() => loadImg(photos[2]))
  .then(() => loadImg(photos[3]))
  .then(() => loadImg(photos[4]));


const showImg = async () => Promise.all([
  loadImg(photos[0]),
  loadImg(photos[1]),
  loadImg(photos[2]),
  loadImg(photos[3]),
  loadImg(photos[4]),
]);
showImg().then(data => document.body.append(...data));
