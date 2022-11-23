'use strict';
//map method is use to create a new copy of array when we need to perform a specific function and strore it into different varaible.

//so lets begin with an example where we want to store money in diffrern currency form
console.log('-----------------Map method ----------------');
let usd = [1000, 3000, -400, 3000, -9000];

const usdToRupees = 118;

const nepalirupee = usd.map(function (money) {
  return money * usdToRupees;
});
console.log('---usd----\n', usd);
console.log('--------Nepali Rupees------ \n', nepalirupee);
