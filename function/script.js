'use strict';
//in this session we will rearn about advance function and its use

//defult argument is bassically used when we the value of some item is known or fixed like interest.

//Defining a funtion with defult argument for a flight ticket so lets begin -->
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
  if (details.passportNo === 9844030942) {
    alert('checkd in ');
  } else {
    alert('wrong passport');
  }
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
