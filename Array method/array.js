'use strict';
/*----------------------------------------------------------ARRAy METHOD----------------------------------------------------------------------
--> Array method are nothing but just a function that we use in javascript
let us begin with some method we will use in this session 
*/
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
//1>--------->Slice method

//-->this not mutate original array but creat a new copy of array. TO use this method--->

let slice = arr.slice(3); //this wiil sclie the array starting from position 3.
let slice2 = arr.slice(2, 4); //to slice from required position .
let slice3 = arr.slice(-3); //to slice from last position. it will sclice the array from last 3 position.
let slice4 = arr.slice(2, -2); //this will slice from positon to leaviing last 2 elements of array

//to simply create a new array
let copyArr = arr.slice();

console.log(slice);
console.log(slice2);
console.log(slice3);
console.log(slice4);
console.log(copyArr);

//2>--------->SPLICE method

//---> this method mutate the original array i.e. if we if change anything using this methods then all the change made to this will reflect in the original array.
// so lets begain with the example --->
let spliceArr = arr.splice(2); //so this divide the original array into two parts --->
console.log(spliceArr);
console.log(arr);
//this is mostly use in the program while we need to delete the last element of the original araay.

//to deletefrom array betwn two position we use this method mostly.
let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr1);
console.log(arr1.splice(1, 3));
console.log(arr1);

////3>--------->REVERSE method

//THIS method also mutate the original array it is used when we need to reverse the original array
let arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//4>--------->concate method

//this method is used to concatenate(ADD TWO ARRAY ).this also does not mutate the original array`.
let arr3 = ['f', 'g', 'h'];
let arr4 = ['a', 'b', 'c', 'd', 'e', 'f'];
let arrJoin = arr4.concat(arr3);
console.log(arrJoin);

////3>--------->JOIN method
//this method is used to join all the elements in the array with the specified character
console.log(arrJoin.join('_'));

//5>--------->AT method
//this methods is use for calling array at different positions it is improved version of perious array  calling method.

let arr5 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr5.at(2));
console.log(arr5.at(-1));
