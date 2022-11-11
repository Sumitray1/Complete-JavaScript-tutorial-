'use strict';
//Selecting snd storing player score in variable
let player1TotalScore = document.getElementById('score--0');
let player2TotalScore = document.getElementById('score--1');

//selecting and storing  dice image in variable
let diceImage = document.querySelector('.dice');

//starting condition
player1TotalScore.textContent = 0;
player2TotalScore.textContent = 0;
diceImage.classList.add('hide');

//generating random value of dice in
