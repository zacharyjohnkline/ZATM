'use strict';
let secretNumber = Math.trunc(Math.random() * 10) + 1;

let scoreCalc = Array.from(document.getElementsByClassName('guesses'));

let score = scoreCalc.length;

let highScore = 0;

let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let fourth = document.querySelector('.fourth');
let fifth = document.querySelector('.fifth');
let sixth = document.querySelector('.sixth');
let seventh = document.querySelector('.seventh');
let eighth = document.querySelector('.eighth');
let ninth = document.querySelector('.ninth');
let tenth = document.querySelector('.tenth');

document.querySelector('.too-low').addEventListener('click', function () {
  document.querySelector('.too-low').classList.remove('visible');
});
document.querySelector('.too-high').addEventListener('click', function () {
  document.querySelector('.too-high').classList.remove('visible');
});
document.querySelector('.you-win').addEventListener('click', function () {
  score = scoreCalc.length;
  if (score > highScore) {
    highScore = score;
    document.querySelector('.hs-number').textContent = `${highScore}`;
  }
  scoreCalc = Array.from(document.getElementsByClassName('guesses'));
  score = scoreCalc.length;
  document.querySelector('.tries-number').textContent = `${score}`;
  document.querySelector('.you-win').classList.remove('visible');
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  first.classList.remove('invisible');
  second.classList.remove('invisible');
  third.classList.remove('invisible');
  fourth.classList.remove('invisible');
  fifth.classList.remove('invisible');
  sixth.classList.remove('invisible');
  seventh.classList.remove('invisible');
  eighth.classList.remove('invisible');
  ninth.classList.remove('invisible');
  tenth.classList.remove('invisible');
  document.querySelector('.speech').textContent =
    "I'm thinking of a NEW number from 1 to 10.  Can you guess it?";
  setTimeout(() => {
    document.querySelector('.secret-number').textContent = '?';
  }, 1000);
});

document.querySelector('.first').addEventListener('click', function () {
  scoreCalc.splice(0, 1);
  let score = scoreCalc.length;
  if (secretNumber > 1) {
    first.classList.add('invisible');
    document.querySelector('.too-low').classList.add('visible');
  } else {
    document.querySelector(
      '.youwin-message'
    ).textContent = `${secretNumber}   HOORAY!`;
    document.querySelector('.you-win').classList.add('visible');
  }
  document.querySelector('.tries-number').textContent = `${score}`;
});
document.querySelector('.second').addEventListener('click', function () {
  scoreCalc.splice(1, 1);
  let score = scoreCalc.length;
  if (secretNumber > 2) {
    second.classList.add('invisible');
    document.querySelector('.too-low').classList.add('visible');
  } else if (secretNumber < 2) {
    second.classList.add('invisible');
    document.querySelector('.too-high').classList.add('visible');
  } else {
    document.querySelector(
      '.youwin-message'
    ).textContent = `${secretNumber}   HOORAY!`;
    document.querySelector('.you-win').classList.add('visible');
    document.querySelector('.secret-number').textContent = secretNumber;
  }
  document.querySelector('.tries-number').textContent = `${score}`;
});
document.querySelector('.third').addEventListener('click', function () {
  scoreCalc.splice(2, 1);
  let score = scoreCalc.length;
  if (secretNumber > 3) {
    third.classList.add('invisible');
    document.querySelector('.too-low').classList.add('visible');
  } else if (secretNumber < 3) {
    third.classList.add('invisible');
    document.querySelector('.too-high').classList.add('visible');
  } else {
    document.querySelector(
      '.youwin-message'
    ).textContent = `${secretNumber}   HOORAY!`;
    document.querySelector('.you-win').classList.add('visible');
    document.querySelector('.secret-number').textContent = secretNumber;
  }
  document.querySelector('.tries-number').textContent = `${score}`;
});
document.querySelector('.fourth').addEventListener('click', function () {
  scoreCalc.splice(3, 1);
  let score = scoreCalc.length;
  if (secretNumber > 4) {
    fourth.classList.add('invisible');
    document.querySelector('.too-low').classList.add('visible');
  } else if (secretNumber < 4) {
    fourth.classList.add('invisible');
    document.querySelector('.too-high').classList.add('visible');
  } else {
    document.querySelector(
      '.youwin-message'
    ).textContent = `${secretNumber}   HOORAY!`;
    document.querySelector('.you-win').classList.add('visible');
    document.querySelector('.secret-number').textContent = secretNumber;
  }
  document.querySelector('.tries-number').textContent = `${score}`;
});
document.querySelector('.fifth').addEventListener('click', function () {
  scoreCalc.splice(4, 1);
  let score = scoreCalc.length;
  if (secretNumber > 5) {
    fifth.classList.add('invisible');
    document.querySelector('.too-low').classList.add('visible');
  } else if (secretNumber < 5) {
    fifth.classList.add('invisible');
    document.querySelector('.too-high').classList.add('visible');
  } else {
    document.querySelector(
      '.youwin-message'
    ).textContent = `${secretNumber}   HOORAY!`;
    document.querySelector('.you-win').classList.add('visible');
    document.querySelector('.secret-number').textContent = secretNumber;
  }
  document.querySelector('.tries-number').textContent = `${score}`;
});
document.querySelector('.sixth').addEventListener('click', function () {
  scoreCalc.splice(5, 1);
  let score = scoreCalc.length;
  if (secretNumber > 6) {
    sixth.classList.add('invisible');
    document.querySelector('.too-low').classList.add('visible');
  } else if (secretNumber < 6) {
    sixth.classList.add('invisible');
    document.querySelector('.too-high').classList.add('visible');
  } else {
    document.querySelector(
      '.youwin-message'
    ).textContent = `${secretNumber}   HOORAY!`;
    document.querySelector('.you-win').classList.add('visible');
    document.querySelector('.secret-number').textContent = secretNumber;
  }
  document.querySelector('.tries-number').textContent = `${score}`;
});
document.querySelector('.seventh').addEventListener('click', function () {
  scoreCalc.splice(6, 1);
  let score = scoreCalc.length;
  if (secretNumber > 7) {
    seventh.classList.add('invisible');
    document.querySelector('.too-low').classList.add('visible');
  } else if (secretNumber < 7) {
    seventh.classList.add('invisible');
    document.querySelector('.too-high').classList.add('visible');
  } else {
    document.querySelector(
      '.youwin-message'
    ).textContent = `${secretNumber}   HOORAY!`;
    document.querySelector('.you-win').classList.add('visible');
    document.querySelector('.secret-number').textContent = secretNumber;
  }
  document.querySelector('.tries-number').textContent = `${score}`;
});
document.querySelector('.eighth').addEventListener('click', function () {
  scoreCalc.splice(7, 1);
  let score = scoreCalc.length;
  if (secretNumber > 8) {
    eighth.classList.add('invisible');
    document.querySelector('.too-low').classList.add('visible');
  } else if (secretNumber < 8) {
    eighth.classList.add('invisible');
    document.querySelector('.too-high').classList.add('visible');
  } else {
    document.querySelector(
      '.youwin-message'
    ).textContent = `${secretNumber}   HOORAY!`;
    document.querySelector('.you-win').classList.add('visible');
    document.querySelector('.secret-number').textContent = secretNumber;
  }
  document.querySelector('.tries-number').textContent = `${score}`;
});
document.querySelector('.ninth').addEventListener('click', function () {
  scoreCalc.splice(8, 1);
  let score = scoreCalc.length;
  if (secretNumber > 9) {
    ninth.classList.add('invisible');
    document.querySelector('.too-low').classList.add('visible');
  } else if (secretNumber < 9) {
    ninth.classList.add('invisible');
    document.querySelector('.too-high').classList.add('visible');
  } else {
    document.querySelector(
      '.youwin-message'
    ).textContent = `${secretNumber}   HOORAY!`;
    document.querySelector('.you-win').classList.add('visible');
    document.querySelector('.secret-number').textContent = secretNumber;
  }
  document.querySelector('.tries-number').textContent = `${score}`;
});
document.querySelector('.tenth').addEventListener('click', function () {
  scoreCalc.splice(9, 1);
  let score = scoreCalc.length;
  if (secretNumber > 10) {
    tenth.classList.add('invisible');
    document.querySelector('.too-low').classList.add('visible');
  } else if (secretNumber < 10) {
    tenth.classList.add('invisible');
    document.querySelector('.too-high').classList.add('visible');
  } else {
    document.querySelector(
      '.youwin-message'
    ).textContent = `${secretNumber}   HOORAY!`;
    document.querySelector('.you-win').classList.add('visible');
    document.querySelector('.secret-number').textContent = secretNumber;
  }
  document.querySelector('.tries-number').textContent = `${score}`;
});
