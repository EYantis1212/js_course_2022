'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// These are deposits and withdrawls

for (const movement of movements) {
  if (movement > 0) {
    console.log(`$${movement} was deposited into your account`);
  } else console.log(`$${Math.abs(movement)} was withdrawn from your account`);
}

//To Get the Index
console.log('------------old way to get indexes-----------');
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1}. $${movement} was deposited into your account`);
  } else
    console.log(
      `${i + 1}. $${Math.abs(movement)} was withdrawn from your account`
    );
}
// Now the for each
console.log('-------------FOR EACH -----------------');

// With the for Each you get the element, the index, and the entire array to play with
movements.forEach(function (movement, index, array) {
  return movement > 0
    ? console.log(`${index + 1}. $${movement} was deposited into your account`)
    : console.log(
        `${index + 1}. $${Math.abs(movement)} was withdrawn from your account`
      );
});

// For Each will always loop over the whole array...no breaks or continues

//! For Each with Maps and Sets

// WITH MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// WITH SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // Set(3) {'USD', 'GBP', 'EUR'}

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`); // USD: USD, GBP: GBP, EUR: EUR
});
// There are no keys in Sets so you just get two of the same arguments
// So you can write: value, _, map

//! Creating Dom Elements
