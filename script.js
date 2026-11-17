const timeValue = document.getElementById('timeValue');
const buttons = document.querySelectorAll('.control-btn');

let secondsLeft = 10;
let timerId = null;
let isRunning = false;

function updateDisplay() {
  timeValue.textContent = secondsLeft;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;

  timerId = setInterval(() => {
    secondsLeft -= 1;

    if (secondsLeft <= 0) {
      secondsLeft = 0;
      updateDisplay();
      stopTimer();
      return;
    }

    updateDisplay();
  }, 1000);
}

function stopTimer() {
  isRunning = false;
  clearInterval(timerId);
}

function pauseTimer() {
  stopTimer();
}

function resetTimer() {
  stopTimer();
  secondsLeft = 10;
  updateDisplay();
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;

    if (action === 'play') startTimer();
    if (action === 'pause') pauseTimer();
    if (action === 'reset') resetTimer();
    if (action === 'stop') {
      stopTimer();
      secondsLeft = 0;
      updateDisplay();
    }
  });
});

updateDisplay();
