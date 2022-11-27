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

//------------------------------------------------Reduce method ------------------------------------------------------------
console.log(
  '------------------------------------Reduce method--------------------------------'
);
//The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

//so just begin with an example by just adding all the value in the momvent array calling this as cuurentBalance

const currentBalance = movement.reduce(function (accumalate, value) {
  return accumalate + value;
}, 0);
console.log(movement);
console.log(currentBalance);

//just look to another example where we want store maxium value in movments in this case also we can use reduce method.
const max = movement.reduce(function (acc, val) {
  return val > acc ? val : acc;
}, movement[0]);
console.log(max);
