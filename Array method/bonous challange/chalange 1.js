'use strict';

//chalange 1------>
function checkDogs(dogsJulia, dogsKate) {
  console.log('-------- for julia dog ------');
  dogsJulia.forEach(function (dogs, i) {
    if (dogs >= 3) {
      console.log(`Dog number ${i + 1} is Adult, and is ${dogs} year old`);
    } else {
      console.log(
        `Dog number ${i + 1} is still puppy, and is ${dogs} year old`
      );
    }
  });
  console.log('-------- for kate dog ------');
  dogsKate.forEach(function (dogs, i) {
    if (dogs >= 3) {
      console.log(`Dog nuber ${i + 1} is Adult, and ${dogs} year old`);
    } else {
      console.log(
        `Dog number ${i + 1} is still puppy, and is ${dogs} year old`
      );
    }
  });
}
const julia = [3, 5, 2, 12, 7];
const juliaNew = julia.slice(1, -2);
console.log(juliaNew);
const kate = [4, 1, 15, 8, 3];
checkDogs(juliaNew, kate);
