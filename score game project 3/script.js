'use strict';
//Selecting and storing player score in variable
let AcivePlayer1 = document.querySelector('.player--0');
let AcivePlayer2 = document.querySelector('.player--1');
let player1TotalScore = document.getElementById('score--0');
let player2TotalScore = document.getElementById('score--1');
//defining different button
let rollDice = document.querySelector('.btn--roll');
let holdButton = document.querySelector('.btn--hold');
//player name
const player1Name = document.getElementById('name--0');
const player2Name = document.getElementById('name--1');
//selecting current score in variable
let currentScore1 = document.getElementById('current--0');
let currentScore2 = Number(document.getElementById('current--1'));
//selecting and storing  dice image in variable
let diceImage = document.querySelector('.dice');
//declaring variable for current score
let currentScore = 0;
let activePlayer = 0;
let totalScore = [0, 0];
let RunningGame = true;

//starting condition
player1TotalScore.textContent = 0;
player2TotalScore.textContent = 0;
diceImage.classList.add('hide');
//Defining fuction for switchin player
let switchPlayer = function () {
  //first switching current score to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  //switchin active player if 1 come in dice
  activePlayer = activePlayer === 0 ? 1 : 0;
  diceImage.src = 'dice-1.png';
  //toggling background of active player
  AcivePlayer1.classList.toggle('player--active');
  AcivePlayer2.classList.toggle('player--active');
};

//adding event on roll dice button click

rollDice.addEventListener('click', function () {
  if (RunningGame) {
    //adding dice image
    diceImage.classList.remove('hide');
    //generating random value and storing dice roll in varaible
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    if (diceRoll != 1) {
      //adding dice image according to dice roll value
      diceImage.src = `dice-${diceRoll}.png`;
      //settingUp player current score

      currentScore += diceRoll;
      //adding curent score in active player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }

    console.log(diceRoll);
  }
});
//ading event on hold button click
holdButton.addEventListener('click', function () {
  if (RunningGame) {
    //adding totalScore
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    if (totalScore[activePlayer] >= 100) {
      RunningGame = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
