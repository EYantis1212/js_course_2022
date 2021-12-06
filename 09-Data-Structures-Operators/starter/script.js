'use strict';
////////////////////////////////////////////////////////
// START SECTION 9 - DATA STRUCTURES and MODERN OPERATORS
/////////////////////////////////////////////////////////
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// ARRAY DESTRUCTURING

// const arr = [2, 3, 4];

// const [x, y, z] = arr; // This is not an array...this is destructuring the array above and assigning all the values to variable...  now x = 2, y = 3, and z = 4
// // The original Array is not affected.
// console.log(x, y, z);

// // Example 2 - You do not have to grab all the elements

// const [first, second] = restaurant.categories;
// console.log(first, second);
// // If you needed to cheery pick you can [fisrt, , third, , fifth]

//switching variables
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary); // Italian Pizzaria

// [main, secondary] = [secondary, main];
// console.log(main, secondary); // Pizzaria Italian

//receive two return values from a function.
const [starter, mainCourse] = restaurant.order(3, 1);
console.log(starter, mainCourse);

//How to pull from nested arrays
// NESETD DESTRUCTURING
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested; // returns 2, [5, 6]

const [i, , [j, k]] = nested;
console.log(i, j, k); // Returns 2, 5, and 6.

// DEFAULT VALUES
// const [p, q, r] = [8, 9]; //trying to pull more elements than the array has
// console.log(p, q, r); // = 8, 9, and undefined

const [p = 1, q = 1, r = 1] = [8, 9]; //Now with default values
console.log(p, q, r); // = 8, 9, and 1
//this is useful if you are getting data from an API and you do not know what is coming...set a default value so you do not get undefined everywhere...you will know which weren't there.
