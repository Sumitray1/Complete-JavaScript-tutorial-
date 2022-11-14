'use strict';
//with the help of thid operastor we can easily can take input from array and string etc----
// ...operator for string----
const name = 'sumit Ray';
console.log(...name);
//if we want ot store the value of a array and some extra value then we can do this ----
const food = ['meat', 'rice', 'daal', 'fish'];
const newFood = [...food, 'milk', 'curd', 'vegitable'];
console.log(food);
console.log(newFood);
console.log(...food);
//if we want to store all the value of two variable array in a variable array then we can do this ----
const veg = ['carrot', 'oninon', 'calulflower', 'cabbage'];
const meat = ['chicken', 'goat', 'pig'];
const vegAandMeat = [...veg, ...meat];
console.log(vegAandMeat); //array containing the data of two variables

//
