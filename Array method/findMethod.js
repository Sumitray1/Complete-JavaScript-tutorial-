'use strict';
/*
The find() method returns the value of the first element that passes a test.

The find() method executes a function for each array element.

The find() method returns undefined if no elements are found.

The find() method does not execute the function for empty elements.

The find() method does not change the original array.
*/

// for example lets make an array with positive and negative and find out first negative value in find method

console.log('-----------------find method ----------------');
const arr = [20, 30, 400, -50, 30, -46, -33];
console.log(arr);
const firstNegativeValue = arr.find(function (arr) {
  return arr < 0;
});
console.log(firstNegativeValue);

//now lets find an map form the given map of array as per owerRequirement
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const accounts = [account1, account2, account3, account4];
const reqAccount = accounts.find(acc => acc.owner === 'Sarah Smith');
console.log(reqAccount);

//this all about this session  will continue in other session
