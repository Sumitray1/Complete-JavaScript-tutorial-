// 'use strict';
// //with the help of thid operastor we can easily can take input from array and string etc----
// // ...operator for string----
// const name = 'sumit Ray';
// console.log(...name);
// //if we want ot store the value of a array and some extra value then we can do this ----
// const food = ['meat', 'rice', 'daal', 'fish'];
// const newFood = [...food, 'milk', 'curd', 'vegitable'];
// console.log(food);
// console.log(newFood);
// console.log(...food);
// //if we want to store all the value of two variable array in a variable array then we can do this ----
// const veg = ['carrot', 'oninon', 'calulflower', 'cabbage'];
// const meat = ['chicken', 'goat', 'pig'];
// const vegAandMeat = [...veg, ...meat];
// console.log(vegAandMeat); //array containing the data of two variables

// //if we want to store all the variable of strig in a variable array then we can do this ----
// const fullName = 'sumit Ray';
// const letterOfFullName = [...fullName];
// console.log(letterOfFullName);
// //if we make a function that accpt more than two argumnet then we can create a array can pass it in function argument by just using ...operator.for example---
// function employeeName(first, second, third) {
//   return `employee name are \n${first} \n${second}\n${third}`;
// }
// //  const NameEmployee = [
// //   prompt('enter fist employee name'),
// //   prompt('Enter second employee name'),
// //   prompt('Enter third employee name'),
// // ];
// //normal method
// //console.log(employeeName(NameEmployee[0], NameEmployee[1], NameEmployee[2]));
// // using ...operator()
// // console.log(employeeName(...NameEmployee));
// //it is not supported in object but however we can use it to copy object from one to another and can add more feature without effectin orginal one. for example---
// const ClassDetails = {
//   Caption: 'bct computer',
//   CR: 'bipin ',
//   population: 43,
// };
// const newClassDetails = {
//   ...ClassDetails,
//   Fans: 4,
//   Heater: 1,
// };
// console.log(ClassDetails);
// console.log(newClassDetails);
// //this  all for this session
// //Thank You !!
