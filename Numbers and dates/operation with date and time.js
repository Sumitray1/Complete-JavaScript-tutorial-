"use strict";

//we can also do operation with date and time in js for that lets begin with an example

//1> example 1---> Lets us make a function which shows how many days have been passed in betn two days.
function calcDays(date1, date2) {
  const diff = Math.abs(((date1 - date2) / 1000) * 60 * 60 * 24);
  console.log(`diff betn ${date1} and ${date2} is ${diff} days`);
}
const today = new Date();
const past = new Date(2057, 7, 22);
calcDays(today, past);

// console.log(today, past);
