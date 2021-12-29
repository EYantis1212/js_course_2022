'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//! START SECTION 11

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE0  returns new array
console.log(arr.slice(2)); // new array with c, d, e
console.log(arr.slice(-1)); // Returns last element
console.log(arr.slice(2, 4)); //Returns element 2 and 3 but not 4
console.log(arr.slice()); // creates a shallow copy
console.log([...arr]); // Same as above...creates a shallow copy

//SPLICE    This changes the original array
console.log(arr.splice(2)); // returns c,d,e and leaves a, b in original array\

console.log(arr.splice(-1)); // Deletes last element
console.log(arr.splice(1, 2)); //Deletes 2 elements starting at element 1

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse()); // Mutated original array to be reversed

// CONCAT;

const letters = arr.concat(arr2);
console.log(letters); // both joined together ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

console.log([...arr, ...arr2]); // This does the same thing

// JOIN
console.log(letters.join('-')); // Creates string of array with set divider

//!  The New 'At' Method

const array = [23, 11, 64];
console.log(array[0]);
console.log(array.at(2)); // New way more modern

console.log(array[-1]); // undefined...cant get last element this way
console.log(array[array.length - 1]); // This is how you had to get last element
console.log(array.slice(-1)[0]); // Or this
console.log(array.at(-1)); // Now with modern 'at' method!!!!!!!!!!!!
// This is better for chaining!!!

console.log('yantis'.at(-1)); // It works with strings!!!!!!!!!!

//! Looping Arrays: forEach
