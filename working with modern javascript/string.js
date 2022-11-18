'use strict';
//so lets begin with the string in js ------------>

const fullName = 'sumit kumar Ray';
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

//to cover the lattar in upper or lower case we need to do this ------>
const firstNameUpperCase = fullName.toUpperCase();
console.log(firstNameUpperCase); //to cover in uper case
//to conver in the lower case we need to do this ------>
const FirstLowerCase = fullName.toLowerCase();
console.log(FirstLowerCase);

//----REAL LIFE EXAMPLE 1 -----

const passangeFirstName = 'suMiT';
const passangeFirstNameLowerCase = passangeFirstName.toLocaleLowerCase();
const passangeFirstCorrectOrder =
  passangeFirstNameLowerCase[0].toLocaleUpperCase() +
  passangeFirstNameLowerCase.slice(1);
console.log(passangeFirstCorrectOrder);

// ---- REAL LIFE EXAMPLE 2 -----
//to trim all the white space we need to call stringName.trim();

const email = '  SumitRay@gmail.com';
const lowerEmail = email.toLowerCase();
const correctEmail = lowerEmail.trim();
console.log(correctEmail);

//instead of doing this as above we can do it in just one line:---->
const perfectEmail = email.toLowerCase().trim();
console.log(perfectEmail);

//---- REAL LIFE EXAMPLE 3 -------
//replacing string
const announcement = 'All the passanger come to door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

//------------- Boolen in Js-------->

//to check your string contains any latar or words in it or not just do this ---stringName.include('latter or words')
//example--->
console.log(announcement.includes('the'));
//to check string start with this lattar or word or not
console.log(announcement.startsWith('sum'));
console.log(announcement.startsWith('All'));
//to check our string ends wit mention condition or not
console.log(announcement.endsWith('!'));

//----------------------------------------------------------------STRING PART 2------------------------------------------------------------------
console.log(
  '-----------------------------------------------------STRING PART 3-------------------------------------------------------------------------'
);
//for example if we a string like fullname and we want to sstore first and last name in different variable  which is seperated by spaces then we can use "stringName.split('required condition)" function--->
const fName = 'sumit Ray';
const [firstPart, lastPart] = fName.split(' ');
console.log(firstPart);
console.log(lastPart);

//joining the string from array
const uniqueName = ['Mr', firstPart, lastPart.toLocaleLowerCase()].join('_');
console.log(uniqueName);

//------------REAL LIFE EXAMPLE ----------------
//just make a function that make first latter of first middle and last name to upper case

//1> first method------>
function makeUpperCase(name) {
  const divName = name.split(' ');
  const modifiedName = [];
  for (const part of divName) {
    modifiedName.push(part.replace(part[0], part[0].toUpperCase()));
  }
  console.log(modifiedName.join(' '));
}
makeUpperCase('sumit ray');

//2> first method------>
function upperCase(name) {
  const divName = name.split(' ');
  const modifiedName = [];
  for (const part of divName) {
    modifiedName.push(part[0].toUpperCase() + part.slice(1));
  }
  console.log(modifiedName.join(' '));
}
upperCase('abhinay ray');

//<---------- padding -------->

//method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

//Example ------>
const nameS = 'my name is sumit ray....';
console.log(nameS.padStart(30, '+'));

//padding real life Example ------>
//just make a string that retuns last 2 number and remaning with * like -->*********14
function hideNumber(number) {
  const numberToString = String(number);
  const last2 = numberToString.slice(-2);
  return last2.padStart(numberToString.length, '*');
}
console.log(hideNumber(9844030942));

//----> repeting string is the in built features of javascript that allow us to repeat the number of times we want ot repaet sting
const repeatNameS = nameS.repeat(5);

console.log(repeatNameS);
