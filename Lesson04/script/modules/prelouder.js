
let starTime = NaN;
const durationFly = 1500;
const durationOpacity = 1000;

let left = 0;

const overlay = document.createElement('div');

overlay.style.cssText = `
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: black;
opacity: 1;
z-index: 999;
`;

const fly = document.createElement('div');
fly.style.cssText = `
position: fixed;
width: 50px;
height: 50px;
left: ${left};
top: calc(50% - 25px);
background: url('image/fly.svg') center/contain no-repeat;
`;
overlay.append(fly);
document.body.append(overlay);

const hideOverlay = (timestamp) => {
  starTime ||= timestamp;
  const progress = (timestamp - starTime) / durationOpacity;
  overlay.style.opacity = 1 - progress;

  if (progress < 1) {
    requestAnimationFrame(hideOverlay);
  } else {
    overlay.remove();
  }
};

requestAnimationFrame(hideOverlay);

const stepFly = (timestamp) => {
  starTime ||= timestamp;
  const progress = (timestamp - starTime) / durationFly;
  left = document.documentElement.scrollWidth * progress;
  fly.style.transform = `translateX(${left}px)`;
  if (progress < 1) {
    requestAnimationFrame(stepFly);
  } else {
    starTime = NaN;
    requestAnimationFrame(hideOverlay);
  }
};
requestAnimationFrame(stepFly);
