'use strict';
const cafe = {
  Name: 'morning cafe',
  Menu: ['pasta', 'momo', 'tea', 'coffee', 'Almond'],
  OpeningHours: 'sunday to friday open everyday',
};

//we can print all the properties name of the object just by doing this -------->
console.log(Object.keys(cafe)); //vill print in array
//if we want to print the value in string then we need to do this -------->
for (const title of Object.keys(cafe)) {
  console.log(title);
}
//can also print then value of any properties in the object by doing this -------->
console.log(Object.values(cafe)); //this will print all the values in the form of array
//if we want to print the value in string then we need to do this---->
for (const data of Object.values(cafe)) {
  console.log(data);
}
//if we want all the properties and values in the object we can do this -------->
const value = Object.entries(cafe);
for (const [keys, values] of value) {
  console.log(` ${keys} => ${values}`);
}
