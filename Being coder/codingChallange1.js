"use strict";
//functionForecast
function printForecast(temprature) {
  for (let i = 0; i < temprature.length; i++) {
    console.log(`${temprature[i]} degree Celcius in ${i + 1} days `);
  }
}
let dataFirst = [17, 21, 231];
let dataSecond = [12, 5, -5, 0, 4];
console.log("-----first Data-----");
printForecast(dataFirst);
console.log("-----second Data----");
printForecast(dataSecond);
