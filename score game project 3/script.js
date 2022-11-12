'use strict';

//selecting first page components
let firstPage = document.querySelector('.btn--start');
let firstPageInfo = document.querySelector('.header');
let secondPage = document.querySelector('.main-Content');
//player name
let player1Name = document.getElementById('name--0');
let player2Name = document.getElementById('name--1');
//staring page player name

//starting condition
let startingCondition = function () {
  player1TotalScore.textContent = 0;
  player2TotalScore.textContent = 0;
  diceImage.classList.add('hidden');
  BothCurrentCore.textContent = 0;
};

let changingPlayerName = function () {
  let firsPlayerName = document.querySelector('.PLAYER2Name').value;
  let secondPlayerName = document.querySelector('.PLAYER1Name').value;
  player1Name.textContent = firsPlayerName;
  player2Name.textContent = secondPlayerName;
};
//switching from first page to second page
firstPage.addEventListener('click', function () {
  firstPageInfo.classList.add('hidden');
  secondPage.classList.remove('hidden');
  changingPlayerName();
  startingCondition();
});
//for restart button
let reStartBtn = document.querySelector('.btn--new');
//adding event for restart button
reStartBtn.addEventListener('click', function () {
  firstPageInfo.classList.remove('hidden');
  secondPage.classList.add('hidden');
  document.querySelector('.PLAYER2Name').value = '';
  document.querySelector('.PLAYER1Name').value = '';
});

//Selecting and storing player score in variable for second part
let AcivePlayer1 = document.querySelector('.player--0');
let AcivePlayer2 = document.querySelector('.player--1');
let player1TotalScore = document.getElementById('score--0');
let player2TotalScore = document.getElementById('score--1');
let BothCurrentCore = document.querySelector('.current-score');
//defining different button
let rollDice = document.querySelector('.btn--roll');
let holdButton = document.querySelector('.btn--hold');
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
    diceImage.classList.remove('hidden');
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
