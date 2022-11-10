'use strict';
// // her "document.querySelector('.ClassName') is use for selection of class"
// //where '.textContent' is used for selecting text on that class.
// document.querySelector('.message').textContent = 'fuck gassing';
// document.querySelector('.score').textContent = 0;
// document.querySelector('.highscore').textContent = 100;
// document.querySelector('.guess').value = 10;

// secoond attempt for understanding
// document.querySelector('.check').addEventListener('click', function () {
//   document.querySelector('.message').textContent = 'fuck you..';

//   document.querySelector('.number').textContent =
//     document.querySelector('.guess').value;
// });
//understood

// Lets begin with bulding  game

const between = Math.floor(Math.random() * 20);
console.log(between);
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  const score = Number(document.querySelector('.score').textContent);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number Entered';
  } else if (guess > between) {
    document.querySelector('.message').textContent = '👆 Number Is Higher...';
    document.querySelector('.score').textContent = score - 1;
  } else if (guess < between) {
    document.querySelector('.message').textContent = '👇 Number Is Lower...';
    document.querySelector('.score').textContent = score - 1;
  } else {
    document.querySelector('.message').textContent = '🤝 Correct  guess';
    document.querySelector('.number').textContent = guess;
  }
});
// document.querySelector('.again').addEventListener('click', function () {
//   index.realo;
// });
