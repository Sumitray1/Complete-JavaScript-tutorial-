'use strict';
//Function declaration
function ageCalculator(birtYear) {
    return (`your Age is ${2022 - birtYear} years`);
};

//function expression
const calc = function (firstNum, secondNum) {
    return (`The sum is ${firstNum + secondNum}`);
}

let birtYear = prompt(`enter your birthyear`);
let age = ageCalculator(birtYear);
console.log(age);
let sum = calc(2, 4);
console.log(sum);