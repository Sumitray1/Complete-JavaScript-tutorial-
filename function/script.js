'use strict';
//in this session we will rearn about advance function and its use

//defult argument is bassically used when we the value of some item is known or fixed like interest.

//Defining a funtion with defult argument for a flight ticket so lets begin -->
console.log(
  '----------------------------------------------------------------------------------------Function with defult argument------------------------------------------------------'
);
const flightTicketDetails = [];
function flightTicket(
  name,
  numberOfPassanger = 1,
  price = 3000 * numberOfPassanger
) {
  const details = {
    name,
    numberOfPassanger,
    price,
  };
  console.log(details);
  flightTicketDetails.push(details);
}
//calling function with  name only
flightTicket('sumit Ray');
//calling function with name and number of passanger only
flightTicket('abhinav ray', 3);
//if we want to skip first defult argument and then pass another argument then first put "undefined" in the place the defult argument that is to skiped
//Example ------>
flightTicket('sumit Ray', undefined, 1000);

// ---------------------------------------------004 How Passing Arguments Works_ Value vs. Reference---------------------------------------
console.log(
  '---------------------------------------------004 How Passing Arguments Works_ Value vs. Reference---------------------------------------'
);

//In this session we will rearn about how function arguments worked for different kind of varaible
//so lets begin with the example-->

const flightNumber = 'ktm003';
const PassDetails = {
  name: 'sumit Ray',
  passportNo: 9844030942,
};
function checkedIn(flight, details) {
  flight = 'jnk112';
  details.name = 'Mr. ' + details.name;
  //   if (details.passportNo === 9844030942) {
  // alert('checkd in ');
  //   } else {
  // alert('wrong passport');
  //   }
  console.log(flight);
  console.log(details);
}
checkedIn(flightNumber, PassDetails);
console.log(flightNumber);
console.log(PassDetails);
//ass you can see the flight number and passDetails both is changed inside the function

//where flightNumber remains same outside the function whereas passDetails is still changed outside the function.

//so in short whenever we pass any numbr,stirng ie.(premative type) etc except for object its copy is passed so what ever we made change to that varriable that doesnt effect main variables i.e main variables remains unchanged.

//where as when we pass any object to the function which is outside from the function then its reference  address is passed which means when we made any change inside the function then its original variable value is also changed.

//Note--> In javascript we can pass function by value . we cannot pass function by reference in javascript.

//----------------------------------------------005 First-Class and Higher-Order Functions--------------------------------------------------
console.log(
  '----------------------------------------------005 First-Class and Higher-Order Functions--------------------------------------------------'
);
/*javascript funhction are called first class function because ----->

javascript treats function as 'first-class-citizens'
this means that function are simply values and function are just another type of object.

HIGHER-ORDER FUNCTIONS  are those type of function that recives as argument, that returns a new function or both 
this is only possible because of first class functions.  
*/

//.............................................FUNCTION ACCEPTING OTHER FUNCTION AS INPUT -----------------------------------------------

//In javascript we can pass function with other function as argument with passing it valus that is we cacl function inside function with out passing there argumnet.

//Example ------>
//lets call a funtion that accept the string and remove all the white spaces.

function spaceTrim(string) {
  return string.replaceAll(' ', '').toLowerCase();
}

//now creating a function and passing string to it with
//higer order function
function passFunc(sting, funn) {
  console.log(`original String: ${sting}`);
  console.log(`transformed String: ${funn(sting)}`);
  console.log(`Transformed by : ${funn.name}`); //checks the function name
}
console.log(
  `----------------------FUNCTION CHECK-----------------------------------`
);
passFunc('this is SUMIT Ray', spaceTrim);

//----------------------------------------------------------------007 Functions Returning Functions---------------------------

//In this session we will learn about the fuhnction returning other function as so lets begin witha example
//example--->
//here we are creating a function which take a argument and also return other function

function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const greeter = greet('hey'); //so here greeter become a function.

//now calling this function with greeter
greeter('sumit');
greeter('abhi');
//we can also call this by
greet('hey')('sumit');

// ------------------------------008 The call and apply Methods-------------------------------------------------
console.log(
  '------------------008 The call and apply Methods-----------------'
);
//in this session we will learn about defining this keyboard manually  so lets begin with first example

//defining a object for flight details

const nepalAirlinr = {
  Name: 'Buddha Airline',
  code: 'BDH',
  booking: [],
  book(flightNumber, name) {
    console.log(
      `${name} has booked the ticket  of ${this.Name} of  sit ${this.code}${flightNumber}`
    );
    this.booking.push({ flight: `${this.code}${flightNumber}`, name });
  },
};
nepalAirlinr.book(10, 'Sumit Ray');
console.log(nepalAirlinr);

//when we will try to store this function in any other variable an then calling this funtion let see what happens
/*
//this will not work 
const ticketbook = nepalAirlinr.book;
ticketbook(21, 'abhinav');
*/

//this will display  error as this keyword is undefined outside the object
/*
//so get ride of this error we have three method to do this i.e is 
1--> call method
2--> apply method
3--> bind method
*/
const airline = {
  Name: 'yeti Airline',
  code: 'YTE',
  booking: [],
};
//call method//here object property should be same
const ticketbook = nepalAirlinr.book;
ticketbook.call(airline, 21, 'abhinav');
ticketbook.call(nepalAirlinr, 21, 'nav');

//apply method
const details = [506, 'sanoth'];
ticketbook.apply(airline, details);

//-----------------------------------------------------------------009 The bind Method-----------------------------------------------------------------------

//just like call method bind also allows to set manually function call but it doesnt call the function but it returns a new function where this keyword is bind
const newbooking = ticketbook.bind(airline);
newbooking(11, 'Rakhi ray');
//we can also set defult arguments value in this bind method so that we dont have to definie it every time.

//Example--->
const flight23 = ticketbook.bind(airline, 23);
flight23('momy');
flight23('papa');
console.log(airline);

//so lets take it one step further and define a function for tax
function addTax(rate, values) {
  return values + values * rate;
}
console.log(addTax(0.1, 200));
// so we want use here to bind method for defult value we can do this here  for defult value in add tax funtion
const addVat = addTax.bind(null, 0.1);
console.log(addVat(200));
console.log(addVat(100));
//lets recall one function returning other function here
function adDTax(rate) {
  return function (values) {
    return values + values * rate;
  };
}
const rate = adDTax(0.1);
console.log(rate(200));
//----------------------------------------------011 Immediately Invoked Function Expressions (IIFE)-----------------------------------
console.log(
  '------------------------------011 Immediately Invoked Function Expressions (IIFE)----------------------------------'
);
//some time we only need to run a function for just once so in javascript we can do this called as 011 Immediately Invoked Function Expressions (IIFE) by  given example below--->

//1> first method------>

(function () {
  console.log(`fucnction inside this can can be called only once `);
})(); //here function need to pass inside paranthesis and all after this as mentioned above.

//1> second method------>     ARROW FUNCTION
(() => console.log('this function is made for calling once '))();

//------------------------------------------------------012 Closures----------------------------------------------------------------------------------------------
