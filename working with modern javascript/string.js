'use strict';
//so lets begin with the string in js ------------>

const fullName = 'sumit kumar  Ray';
const age = '2023';
//so just like array we can get elemt from every position of the string---->
console.log(fullName[2]);
//ifc we want to get any output as number then we need to convert it into a number---------->
console.log(age[1]); //string
console.log(Number(age[2])); //number

// to get length it same as array----->
console.log(age.length);
console.log(fullName.length);
// to find position of lattar or word in string it is similar as array----->
console.log(fullName.indexOf('a')); //find postion from starting position
console.log(age.lastIndexOf('2')); //find from last position.
console.log(fullName.indexOf('Ray')); //finds the position of the word
//note finding word in the string is case sensitive.

//slicing the array---->
console.log(fullName.slice(3)); // will slice from position 3
console.log(fullName.slice(3, 8)); //will slice betwn them i.e 8-3
//if we want to slice the string from sstaring to the the first blank space we have to do this ------>
console.log(fullName.slice(0, fullName.indexOf(' '))); //will slice the word till there is firstSpace
console.log(fullName.slice(fullName.lastIndexOf(' ') + 1)); //will slice the word from last space till end of the string.

//if we want to slice our string from last part we can do this ------>
console.log(fullName.slice(-3));
//just to get more clear lets write a function that  display the sit

function sitCheck(seat) {
  const lastLattar = seat.slice(-1);
  //   console.log(lastLattar);
  if (lastLattar == 'M') {
    console.log('you got middle sit');
  } else if (lastLattar == 'W') {
    console.log('you got window sit');
  } else {
    console.log('you got cabin sit');
  }
}

sitCheck('11M');
sitCheck('11W');
sitCheck('11');

//----------------------------------------------------------------STRING PART 2------------------------------------------------------------------
console.log(
  '-----------------------------------------------------STRING PART 2--------------------------------------------------------'
);
