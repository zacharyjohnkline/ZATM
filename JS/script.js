'use strict';
// let secretNumber = Math.trunc(Math.random() * 10) + 1;
let secretNumber = 5;
let tries = 10;

let highScore = 0;

let goBack = Array.from(document.getElementsByClassName('.tlresume'));

let screensContainers = Array.from(
  document.getElementsByClassName('.toolow-container')
);
function back() {
  let goBack = Array.from(document.getElementsByClassName('.tlresume'));
  let screensContainers = Array.from(
    document.getElementsByClassName('.toolow-container')
  );

  goBack.forEach(overlay => {
    overlay.addEventListener('click', () => {
      forEach(screensContainers);
    });
  });
}

document.getElementById('second').addEventListener('click', function () {
  if (secretNumber > 2) {
    screens.style.zIndex = '100';
    screens.style.opacity = '1';
    screensContainers.style.top = '1%';
    document.getElementById('second').style.display = 'none';
  } else {
    screens.style.zIndex = '100';
    screens.style.opacity = '1';
    screensContainers.style.top = '1%';
  }
});
