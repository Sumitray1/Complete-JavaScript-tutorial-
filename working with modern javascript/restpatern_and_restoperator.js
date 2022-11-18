// 'use strict';
// //note when ...is used in right hand side then it is known as spreed operator i.e.---->
// const firstfullName = [
//   'sumit',
//   'amit',
//   'partik',
//   'abhi',
//   'aavash',
//   'gaurav',
//   'sugam',
//   'sushant',
//   'parksh',
// ];
// const lastfullName = ['Ray', 'shrestha', 'acharya', 'etc'];
// const speedOperator = [...firstfullName, ...lastfullName];
// console.log(speedOperator);
// //but when it is used in left hand side then it is known as rest  operator i.e.---->
// //for example if we want to store first two first fullNames data in  one variable remaing in rest then we can use this rest operator---->
// const [firstFirstfullName, secondFirstfullName, ...restFirstfullName] = firstfullName;
// console.log(firstFirstfullName);
// console.log(secondFirstfullName);
// console.log(restFirstfullName);

// //we can also use resrt operator to create a function which will accept unlimated number of  we need to pass in the fucnction by folllowing below steps -------------------->
// function sumUnilmatedNumber(...number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   return sum;
// }
// console.log(sumUnilmatedNumber(2, 4, 5));
