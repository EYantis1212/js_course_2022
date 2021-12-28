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

/*
Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1.
Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favorite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2.
Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course
20Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉
GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get Answer
    let answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    // Update Answer Array
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    if (typeof answer !== 'number' || answer > this.answers.length) {
      alert('Not a Valid Number');
    }
    this.displayResults('string');
  },
  // Display Results
  displayResults(type) {
    if (type === 'string') {
      console.log(
        `Poll results are:\nJavascript:${this.answers[0]}\nPython:${this.answers[1]}\nRust:${this.answers[2]}\nC++:${this.answers[3]}`
      );
    } else console.log(this.answers);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

//! Immediately Invoked Function Expression (IIFE)
