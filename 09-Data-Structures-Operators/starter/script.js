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
// console.log(firs"#80fff4");
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
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

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
//In the Restaurant Object there is an openingHours object, inside of those are objects for days...

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

//SPREAD, because on RIGHT side of =
//   const arr = [1,2, ...[3,4]];
// // REST, because on LEFT side of operator =
// //It is called REST because it will take the rest of the elements and put them into an array
//   const[ a, b, ...others ] = [1,2,3,4,5];
//   console.log(a, b, others)

// Both sides
//Note, if you skip an item like below, REST will not grab it...rest has to be last thing.
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood); //Pizza, Risotto, then the rest

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
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

//This fixes it and gives the value even if falsy!
// ?? only cares if it is Nullish (null or undefined) and returns first Truthy
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const a = 0;
// console.log(a ?? 'Eric'); // = 0
// const b = null;
// console.log(b ?? 'Eric'); // = Eric

// END THE NULLISH COALESCING OPERATOR (??)
////////////////////////////////////////////////
// START LOGICAL ASSIGNMENT OPERATORS

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'la Piazza',
//   owner: 'Giovanni Rossi',
// };
// Got these restaurants from an API and now want to apply something to all of them.
// This just set numGuests to both of them...

// Now we can write in a more concise way
//This check for value and if not gives it the 10
//However if it had the value of 0 it is falsy so defaults to 10
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10; // = 0 YAY!
// rest2.numGuests ??= 10; // = 10

// console.log(rest1); // = 20
// console.log(rest2); // = 10

// // &&= only assigns the value to a variable if it is truthy
// rest1.owner &&= 'ANONYMOUS'; // So this didn't have anything assigned
// console.log(rest1);

// rest2.owner &&= 'ANONYMOUS'; // This changed owner to ANONYMOUS
// console.log(rest2);

// END LOGICAL ASSIGNMENT OPERATORS
////////////////////////////////////////////////
// START CODING CHALLENGE #1
/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK �
*/
// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // 2.
// const [gk, ...fieldplayers] = players1;
// console.log(gk, fieldplayers);
// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// // 5.
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// // 6.
// const printGoals = function (...players) {
//   console.log(`${players.length} Goals were scored!`);
// };
// printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
// printGoals(...game.scored);
// // 7.
// I GAVE UP HERE  WILL COME BACK

// v
////////////////////////////////////////////////
// Challenge \
//Approach 1
// function isValidPassword(password, username) {
//     if (password.length >= 8) {
//         if (password.indexOf(' ') == -1) {
//             if (password.indexOf(username) == -1) {
//                 console.log('Is Valid Password');
//             } else {
//                 console.log('Password must not equal username');
//             }
//         } else {
//             console.log('Password must not contain spaces');
//         }
//     } else {
//         console.log('Password must contain at least 8 characters');
//     }
// }
// // Approach #2
// function isValidPassword(password, username) {
//     if (password.length < 8) {
//         console.log('Password must contain at least 8 characters');
//     }
//     if (password.indexOf(' ') !== -1) {
//         console.log('Password must not contain spaces');
//     }
//     if (password.indexOf(username) !== -1) {
//         console.log('Password must not contain username');
//     }
//     console.log('Password is Valid');
// }
// function isValidPassword(password, username) {
//     const tooShort = password.length < 8;
//     const hasSpace = password.indexOf(' ') !== -1;
//     const hasUser = password.indexOf(username) !== -1;
//     if (tooShort || hasSpace || hasUser) {
//         console.log('Password is invalid');
//     } else console.log('Valid Password');
// }

// // isValidPassword('89Fjj1nms', 'dogLuvr');
// // isValidPassword('dogLuvr123!', 'dogLuvr');

// // END CODING CHALLENGE #1
// //Extra coding challenge #2

// // approach 1
// // function avg(arr) {
// //     let sum = 0;
// //     let average = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //         sum += arr[i];
// //         average = sum / arr.length;
// //     }
// //     console.log(sum);
// //     console.log(average);
// // }

//Approach 2
// function avg(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         sum += num;
//     }
//     let average = sum / arr.length;
//     return average;
// }

// avg([0, 50]);
// avg([75, 76, 80, 95, 100]);

// function makeBetweenFunc(x, y) {
//     return function (num) {
//         return num >= x && num <= y;
//     };
// }
// const isRetired = makeBetweenFunc(62, 120);

// console.log(isRetired(65));

// function myFunc(name) {
//     return 'Hello ' + name;
// }
// const wee = myFunc('Jamie');
// console.log(wee);

//Fizz Buzz Challenge

// 1. Count up to current entered Number
// 2. When a number is divisible by 3 return fizz
// 3. When a number is divisible by 5 return buzz
// 4. When a number is divisible by both return fizzbuzz
// 5. Otherwise return the number

// function fizzBuzz(num) {
//     for (let i = 1; i < num; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log('FizzBuzz');
//         } else if (i % 3 == 0) {
//             console.log('Fizz');
//         } else if (i % 5 == 0) {
//             console.log('Buzz');
//         } else console.log(i);
//     }
// }
// fizzBuzz(31);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
// Here item is a variable you can name anything...the for loop iterates over the array
// It then pulls the elements of the arrays into the variable

// If you want the index and the element you have to do this.
for (const item of menu.entries()) {
    console.log(item);
}

// With Destructuring
for (const [i, el] of menu.entries()) {
    console.log(i, el);
}

// Enhanced Object Literals

// Computing
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHrs = {
    [weekdays[0]]: {
        open: 12,
        close: 23,
    },
    [weekdays[1 + 2]]: {
        // Thu
        open: 11,
        close: 22,
    },
    [`${weekdays[5]}urday`]: {
        //Saturday
        open: 10,
        close: 24,
    },
};
console.log(openingHrs); // Mon: open:12 close:23

// END ENHANCED OBJECT LITERALS
////////////////////////////////////////////////
// START OPTIONAL CHAINING (?)
