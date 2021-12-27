'use strict';
/*
!START SECTION 10 -------------------------------------------------------
*/
//!Start Default Parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 3);
createBooking('LH123', 5);
createBooking('LH123', undefined, 3); // This is how you can skip a parameter

//!Start Passing Arguments

const flight = 'LH234';
const eric = {
  name: 'Eric Yantis',
  passport: 12355162634,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 12355162634) {
    console.log('Check in');
  } else console.log('Wrong Passport');
};
console.log(checkIn(flight, eric));
console.log(flight, eric); // Flight is the same but name was changed
// This is because the flight was a primitive so it was a copy...
//The name was an object...so it was a copy but just of the reference..
// The object passed in was a reference to the original so it can change it

//Summary - variables contain either a primitive data type or a reference to a data structure
//Passing in a variable will make a copy of the primitive or data reference.

//! Functions Accepting Callback Functions
