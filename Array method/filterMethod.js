'use strict';
/*The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.
*/

//so lets begin with an example here we have an array for various numbe and we want to store it in other variables only if its value is greater than zero.
const movement = [100, -200, 300, 400, 500, -600, 700, 800, -900];
//so we just want to store the value in an variable with name deposit where we value is greater than zero could be stored.

const deposit = movement.filter(function (val) {
  return val > 0;
});
const withdrawl = movement.filter(function (val) {
  return val < 0;
});

console.log(movement);
console.log('------Deposit----');
console.log(deposit);
console.log('------Withdrawl----');
console.log(withdrawl);
