'use strict';
////////////////////////////////////////////////////////
// START SECTION 9 - DATA STRUCTURES and MODERN OPERATORS
/////////////////////////////////////////////////////////
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

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

// //receive two return values from a function.
// const [starter, mainCourse] = restaurant.order(3, 1);
// console.log(starter, mainCourse);

// //How to pull from nested arrays
// // NESETD DESTRUCTURING
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested; // returns 2, [5, 6]

// const [i, , [j, k]] = nested;
// console.log(i, j, k); // Returns 2, 5, and 6.

// // DEFAULT VALUES
// // const [p, q, r] = [8, 9]; //trying to pull more elements than the array has
// // console.log(p, q, r); // = 8, 9, and undefined

// const [p = 1, q = 1, r = 1] = [8, 9]; //Now with default values
// console.log(p, q, r); // = 8, 9, and 1
//this is useful if you are getting data from an API and you do not know what is coming...set a default value so you do not get undefined everywhere...you will know which weren't there.

// END ARRAY DESTRUCTURING
//////////////////////////////////////
// START OBJECT DESTRUCTURING LECTURE

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    // Restructuring inside the argument of the function
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
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
restaurant.orderDelivery({
  //Calling the function and passing in an object!
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
//////////////////////////////////////
// START OBJECT DESTRUCTURING LECTURE

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // But what if we want to use different variable names?
// const { n = name, o = openingHours, c = categories} = restaurant;
// console.log(n, o, c);
// Or...
// const {
//   name: resturantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(resturantName, hours, tags);

// Default values

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b); // a dn b variable become 23, 7

//Nested Objects
//In the Resturant Object there is an openingHours object, inside of those are objects for days...

// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// END OBJECT DESTRUCTURING LECTURE
//////////////////////////////////////
// START THE SPREAD OPERATOR LECTURE

// Old way
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// //New way with spread operator
// const newArr = [1, 2, ...arr]; //Takes all the array elements
// console.log(newArr);

// console.log(...newArr); // This logs individual elements of the array instead of the array itself.

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//Note spread operator is only used where you would normally write values seperated by commas... you can not use it by itself to create new variables

// copy array
// const mainMenuCopy = [...restaurant.mainMenu]; //shallow copy

// // Merge arrays

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables are Arrays, Strings, Maps, Sets, not Objects
// const str = 'Jamie';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { foundedIn: 1988, ...restaurant, founder: 'Jamie' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma ';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// END THE SPREAD OPERATOR
//////////////////////////////////////
// START REST PATTERN AND PARAMETERS

// DESTRUCTURING

//SPREAD, beacuse on RIGHT side of =
//   const arr = [1,2, ...[3,4]];
// // REST, because on LEFT side of operator =
// //It is calles REST because it will take the rest of the elements and put them into an array
//   const[ a, b, ...others ] = [1,2,3,4,5];
//   console.log(a, b, others)

// Both sides
//Note, if you skip an item like below, REST will not grab it...rest has to be last thing.
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood); //Pizza, Risoto, then the rest

// // OBJECTS - Difference is rest of elements will be collected into a new object instead of an Array
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// // FUNCTIONS
// // REST ARGUMENTS
// //This grabs all array elements and packs them together
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// const k = [24, 6, 8];
// const x = [23, 5, 7];
// add(x, k); //This spreads the numbers and runs the function with them

// // METHOD ( See order pizza method line: 123)
// restaurant.orderPizza('mushrooms', 'bacon', 'sausage');

// // END REST PATTERN and PARAMETERS
// ////////////////////////////////////////////////
// // START SHORT CIRCUITING (&& and ||)

// console.log('----------OR-----------');
// // LOGICAL OPERATORS can use ANY data type, return ANY data type, and short-circuit evaluation
// console.log(3 || ['Eric']); // 3
// // (||) SHORT CIRCUITING means that it returns the first Truthy value and stops
// console.log('' || 'Eric'); // Eric
// console.log(true || 0); //true
// console.log(undefined || null); //null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // = Hello

// //Here you can check to see if something like numGuests exists..(it does not) and else it returns a value
// const guests1 = restaurant.numGuests ? restaurant.numbers : 10; //= 10
// //This is the quicker way using (||) short circuiting
// const guests2 = restaurant.numGuests || 10;

// console.log('----------AND-----------');

// console.log(0 && 'Eric'); // = 0   Short circuits when first Falsy value
// console.log(7 && 'Eric'); // = 'Eric' because it returns the last value if both Truthy

// console.log('Hello' && 23 && null && 'Eric'); // = null...the first Falsy value

// // PRACTICE EXAMPLE
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach'); //This checks with 'if' if the method exists..and if it dows executes it
// }
// // This is the same as above...it checks if truthy and if it is it evaluates the second part calling it.
// restaurant.orderPizza && restaurant.orderPizza('Onion', 'Mushrooms');

// END SHORT CIRCUITING (&& and ||)
////////////////////////////////////////////////
// START THE NULLISH COALESCING OPERATOR (??)

//This below didn't work because even though numGuests has a value and exists...it is 0 which is falsy so it gets skipped.
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//This fixes it and gives the value even if falsy!
// ?? only cares if it is Nullish (null or undefined) and returns first Truthy
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const a = 0;
console.log(a ?? 'Eric'); // = 0
const b = null;
console.log(b ?? 'Eric'); // = Eric

// END THE NULLISH COALESCING OPERATOR (??)
////////////////////////////////////////////////
// START LOGICAL ASSIGNMENT OPERATORS
