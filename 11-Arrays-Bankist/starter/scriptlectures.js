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

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
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

/*
! Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog
🐶 number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
GOOD LUCK 😀
*/
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = dogsJulia.slice(1, -2);
  console.log(dogsJuliaCopy);
  const combinedDogs = dogsJuliaCopy.concat(dogsKate);
  combinedDogs.forEach(function (dogAge, index) {
    return dogAge >= 3
      ? console.log(
          `Dog Number ${index + 1} is and Adult who is ${dogAge} years old.`
        )
      : console.log(
          `Dog Number ${index + 1} is a Puppy who is ${dogAge} year(s) old.`
        );
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//! Data Transformations: map, filter, reduce

//! Map Method
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.13;

const usdMovements = movements.map(mov => mov * eurToUSD);
console.log(movements);
console.log(usdMovements);

const movementsDesc = movements.map((mov, i) => {
  return mov > 0
    ? `${i + 1}. Deposit of $${mov}`
    : `${i + 1}. Withdrawal of $${Math.abs(mov)}`;
});
console.log(movementsDesc);

//! Computing Usernames (See App script.js)

//! The Filter Method
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

//! The Reduce Method
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const maxValue = movements.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(maxValue);
console.log(Math.max(...movements));

//! Coding Challenge 2
