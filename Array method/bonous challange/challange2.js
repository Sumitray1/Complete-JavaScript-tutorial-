'use strict';
console.log(
  '---------------------------------------challange 2--------------------------------'
);
const dataFirst = [5, 2, 4, 1, 15, 8, 3];
const dataSecond = [16, 6, 10, 5, 6, 1, 4];

console.log('--challange 1--');
const calcAverageHumanAge = function (age) {
  const humanage = age.map(function (data) {
    if (data <= 2) {
      return data * 2;
    } else if (data > 2) {
      return data * 4 + 16;
    }
  });
  console.log(humanage);
  const requiredAge = humanage.filter(function (val) {
    return val > 18;
  });
  console.log(requiredAge);
  const averagAdultDogAge = requiredAge.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  console.log(
    `average adult dog age = ${averagAdultDogAge / requiredAge.length}`
  );
};
console.log('---data first---');
console.log(dataFirst);
calcAverageHumanAge(dataFirst);
console.log('---data second---');
calcAverageHumanAge(dataSecond);
