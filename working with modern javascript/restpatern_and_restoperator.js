// 'use strict';
// //note when ...is used in right hand side then it is known as spreed operator i.e.---->
// const firstName = [
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
// const lastName = ['Ray', 'shrestha', 'acharya', 'etc'];
// const speedOperator = [...firstName, ...lastName];
// console.log(speedOperator);
// //but when it is used in left hand side then it is known as rest  operator i.e.---->
// //for example if we want to store first two first names data in  one variable remaing in rest then we can use this rest operator---->
// const [firstFirstName, secondFirstName, ...restFirstName] = firstName;
// console.log(firstFirstName);
// console.log(secondFirstName);
// console.log(restFirstName);

// //we can also use resrt operator to create a function which will accept unlimated number of  we need to pass in the fucnction by folllowing below steps -------------------->
// function sumUnilmatedNumber(...number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   return sum;
// }
// console.log(sumUnilmatedNumber(2, 4, 5));
