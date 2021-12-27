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

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
console.log(upperFirstWord('eric yantis'));

//Higher order Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('javascript is the Best', upperFirstWord);
transformer('javascript is the Best', oneWord);

//! Functions returning Functions

const greet = function (greeting) {
  // Basically a function factory
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

console.log(greeterHey);
greeterHey('Eric');

greet('Hello')('Eric');

const greeting = greeting => name => console.log(`${greeting} ${name}`);

greeting('Hola')('Eric');

//! Call and Apply Methods

const yantisAir = {
  airline: 'Yantis Air',
  iataCode: 'YA',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};
console.log(yantisAir.bookings);
yantisAir.book(435, 'Eric Yantis');
yantisAir.book(446, 'Rebecca Yantis');

const RebeccaAir = {
  airline: 'Rebecca Air',
  iataCode: 'RY',
  bookings: [],
};

// Instead of copying the function code from airline to airline...store it

const book = yantisAir.book;

//call changes the 'this' keyword to point to first argument
book.call(RebeccaAir, 23, 'Alana Harrison');

//apply does the same but passes an array as the arguments
//This is not used anymore because there is a better method using call and the spread operator
const flightData = [625, 'Mary Bollard'];
book.apply(RebeccaAir, flightData);

// Here is the same thing but with spread operator
book.call(RebeccaAir, ...flightData);

//! The Bind Method
// This does not call the function...it creates a new function with the keyword 'this' bound

const bookRY = book.bind(RebeccaAir);
bookRY(123, 'Patricia Colette');

// You can also bind arguments into the function
//This is known as Partial application...partially applying the arguments
const bookRY235 = book.bind(RebeccaAir, 235);
bookRY235('Sam Christ');

// With Event Listeners
yantisAir.planes = 300;
yantisAir.buyPlane = function () {
  this.planes++;
  console.log(this);
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', yantisAir.buyPlane.bind(yantisAir));

// Partial Application

const addTax = (rate, value) => value + value * rate;

const addAZTax = addTax.bind(null, 0.097);

console.log(addAZTax(100));

//Now with a function factory
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addTucsonTax = addTaxRate(0.087);
const addLATax = addTaxRate(0.095);

console.log(addTucsonTax(123));
console.log(addLATax(900));

//! Coding Challenge 1
