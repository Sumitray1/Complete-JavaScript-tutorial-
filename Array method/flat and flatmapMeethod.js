'use strict';
console.log(
  '---------------------------------flat method-----------------------------------'
);
//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

//Example --> lets define a variable which has array inside a  array.
const checkArray = [1, 2, [3, 4], 5, 6, 8, [9, 3]];
const checkArray1 = [1, [2, [3, 4], 5], 6, 8, [9, 3]];
console.log(checkArray);
console.log(checkArray.flat());
console.log(checkArray1.flat()); //flat array only move content of array inside array not when there is array inside array inside array like shown above.

//so to go even further inside that then we have to sepcify how further inside we want to go in the flat bracket  as shown below

console.log(checkArray1.flat(2)); //here number 2 show that how inside the arrary we want to go flat .

// now lets begin with the real life example by just looking at our bank app where we have number of object. for that lets bring all those data from bank app file

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

//so lets add all the balance of every moments in  single varaible by --->

//by flat method
console.log('----overallBalance----');
const overallBalance = accounts
  .map(everyaccount => everyaccount.movements)
  .flat()
  .reduce((acc, money) => acc + money, 0);
console.log(overallBalance);

//by flat map method
const allbalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, money) => acc + money, 0);
console.log(allbalance);
