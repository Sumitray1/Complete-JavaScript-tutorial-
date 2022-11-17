'use strict';
//in this session we wil learn about sets and some other feature----->
//1>  initialization  of set
const firstSet = new Set(['sumit', 'amit', 'abhi', 'sumit']);
console.log(firstSet);
// if we want to to put all the latter of string in the sets then we can do this ----->

const secondSet = new Set('sumit ray');
console.log(secondSet);
//to get size of set just do this ----->
console.log(firstSet.size);
console.log(secondSet.size);
//to check the set element is present in that set or not we can do this ----->
console.log(firstSet.has('amit'));
console.log(secondSet.has('abhi'));
//to add element in the set we can do this ----->
firstSet.add('cup');
console.log(firstSet);
//to delete any delete in the set we can do this ----->
firstSet.delete('cup');
console.log(firstSet);
//to delete all elements in the set we can do this ----->
firstSet.clear();
console.log(firstSet);
//----note we can not retirve te data from set if we need to fdo that than we need to define array

//we can also we ittraible in the set like we use to to in array and object-------->
for (const value of secondSet) {
  console.log(value);
}
//we can also store the set in array for this we need to to do this ----->
const secondSetArray = [...secondSet];
console.log(secondSetArray);

//-- so if we want  the value not to repeat then only we can use set if we need to store the value that can be reapet then we need to store it in array.
