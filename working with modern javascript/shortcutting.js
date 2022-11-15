// 'use strict';
// //1 can be used in any data type
// //2 return any data type
// //3 short circuit
// //<---------- OR operator ---------------->
// //1) it return the first true value
// //2) if all the value are false then it return the last false value.
// //3)it just check for the first true value and if it finds that then program terminate and value returns there
// //-------example-------------------------------->
// console.log(0 || 'sumit');
// console.log('sumit' || 'abhinav');
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// //Real life example-->
// const restaurant = {};
// restaurant.numGuests = 1;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// //<------------------AND operator--------------------------->
// //1)if any of the value is false then program terminate and return the false value there
// //2)if all the value are true then it returns the  last value
// //3)if the first value is true and then there is false value then program will terminate  there and will return false value

// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');

// // Practical example i.e-->some time we can use and operator instead of if statement
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// console.log(restaurant.orderPizza);

// console.log(
//   restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')
// );
