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

let between = Math.floor(Math.random() * 20);
let highScore = 0;
// console.log(between);
document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  let score = Number(document.querySelector('.score').textContent);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No Number Entered';
      document.querySelector('body').style.backgroundColor = '	#EE4B2B';
    } else if (guess > 20) {
      document.querySelector('.message').textContent = '⚠️Out Of Range...';
      document.querySelector('body').style.backgroundColor = '#FEDE00';
    } else if (guess > between) {
      document.querySelector('.message').textContent = '👆 Number Is Lower...';
      document.querySelector('.score').textContent = score - 1;
    } else if (guess < between) {
      document.querySelector('.message').textContent = '👇 Number Is Higher...';
      document.querySelector('.score').textContent = score - 1;
    } else {
      document.querySelector('.message').textContent = '🤝 Correct  guess';
      document.querySelector('.number').textContent = guess;
      document.querySelector('body').style.backgroundColor = '#00FF00';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  } else {
    document.querySelector('.message').textContent = '🥹 Game over';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#FF0000';
  }
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    between = Math.floor(Math.random() * 20);
    // console.log(between);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
  });
});
