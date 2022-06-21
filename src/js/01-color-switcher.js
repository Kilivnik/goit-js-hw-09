function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', 'disabled');
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
});
