'use strict';

/*
* Important
! Warning
? Question
TODO: To do
*/

////////////////////////////////////////////////////////
// START SECTION 9 - DATA STRUCTURES and MODERN OPERATORS
/////////////////////////////////////////////////////////
// Data needed for a later exercise

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

// DEFAULT VALUES
// const [p, q, r] = [8, 9]; //trying to pull more elements than the array has
// console.log(p, q, r); // = 8, 9, and undefined

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

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// // Here item is a variable you can name anything...the for loop iterates over the array
// // It then pulls the elements of the arrays into the variable

// // If you want the index and the element you have to do this.
// for (const item of menu.entries()) {
//     console.log(item);
// }

// // With Destructuring
// for (const [i, el] of menu.entries()) {
//     console.log(i, el);
// }

// Enhanced Object Literals

// Computing
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHrs = {
//     [weekdays[0]]: {
//         open: 12,
//         close: 23,
//     },
//     [weekdays[1 + 2]]: {
//         // Thu
//         open: 11,
//         close: 22,
//     },
//     [`${weekdays[5]}urday`]: {
//         //Saturday
//         open: 10,
//         close: 24,
//     },
// };
// console.log(openingHrs); // Mon: open:12 close:23

// END ENHANCED OBJECT LITERALS
////////////////////////////////////////////////
// START OPTIONAL CHAINING (?)

// // If you get info from an API or something you might not know what is in an object
// //Here we are trying to see the hours IF the restaurant is open on monday
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // ENTER OPTIONAL CHAINING

// // Here...if Monday exists then get the opening hours.
// console.log(restaurant.openingHours.mon?.open); //undefined but no error
// //Now checking if opening hours even exists first
// console.log(restaurant.openingHours?.mon?.open);

// More real world example
const wkdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//This code iterates through the restaurant objects opening hours and checks returns the opening hours only if open on the day.
// This returns undefined for any day that the restaurant is not open
// for (const day of wkdays) {
//     console.log(day);
//     const open = restaurant.openingHours[day]?.open;
//     console.log(open);
// }
// If we want to get rid of the undefined we can set a default value like:
// We use a nullish coalescing operator (??) so that Saturdays opening hour of '0' returns even though it is falsy
// for (const day of wkdays) {
//     console.log(day);
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(open);
// }

// // Methods
// //Here we can check if a method exists before calling it
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // Focaccia, Pasta
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // Method does not exist

// // Arrays
// let currentYear = new Date().getFullYear();
// console.log(currentYear);
// const family = [
//     { name: 'Eric', age: currentYear - 1980 },
//     { name: 'Rebecca', age: currentYear - 1983 },
//     { name: 'Joseph', age: currentYear - 2004 },
//     { name: 'Edward', age: currentYear - 2007 },
//     { name: 'Zachary', age: currentYear - 2009 },
// ];
// console.log(family);
// console.log(family[0]?.name) ?? 'Array Empty'; //Eric
// console.log(family[0]?.age) ?? 'Array Empty'; //41

// // END OPTIONAL CHAINING (?)
// ////////////////////////////////////////////////
// // START LOOPING OBJECTS: OBJECT KEYS, VALUES, and ENTRIES

// // Object Property Names/Keys

// const properties = Object.keys(openingHrs);
// console.log(properties); // Array with all keys from object (mon, thu, saturday)

// // for (const day of Object.keys(openingHrs)) {
// //     console.log(day); // Pulled all the keys from the object into a variable
// // }
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//     openStr += `${day}, `;
// }
// console.log(openStr); // We are open on 3 days: mon, thu, saturday

// // Object Property Values

// const values = Object.values(openingHrs);
// console.log(values); // open and close for all entries just no days because those are keys

// // Object Entries (Both keys and values)
// // const entries = Object.entries(openingHrs);
// // console.log(entries);

// // for (const [key, { open, close }] of entries) {
// //     console.log(`On ${key} we open at ${open} and close at ${close}`);
// // }
// //On mon we open at 12 and close at 23
// //On thu we open at 11 and close at 22
// //On saturday we open at 10 and close at 24

// const entries = Object.entries(family);
// console.log(entries);

// for (const [entry, { name, age }] of entries) {
//     console.log(`Family member ${name} is ${age} years old`);
// }

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//
/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀
*/

/*
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
*/
// const entries = Object.entries(game.scored);
// console.log(entries);
// for (const [i, person] of entries) {
//     console.log(person);
//     console.log(`Goal ${Number(i) + 1}: ${person}`);
// }

/*
2. Use a loop to calculate the average odd and log it to the console (We already
    studied how to calculate averages, you can go check if you don't remember)
    */
// const oddsValue = Object.values(game.odds);
// console.log(oddsValue);

// let average = 0;
// for (let odds of oddsValue) {
//     console.log(odds);
//     average += odds;
//     average /= oddsValue.length;
//     console.log(average);
// }

/*
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
*/

// const entries = Object.entries(game.odds);
// for (let [team, odds] of entries) {
//     const teamStr =
//         team === 'x'
//             ? 'draw'
//             :
//             console.log(
//                   `Odds for victory of ${game[team]}? draw is: ${odds}`
//               );
// }

// END CODING CHALLENGE 2
////////////////////////////////////////////////
// START SETS

// const ordersSet = new Set([
//     'Pasta',
//     'Pizza',
//     'Pizza',
//     'Risotto',
//     'Pasta',
//     'Pizza',
// ]);
// console.log(ordersSet); // a Set of 3

// console.log(new Set('Eric'));
// console.log(ordersSet.size); // instead of length  = 3\
// console.log(ordersSet.has('Pizza')); // Case sensitive returns true
// console.log(ordersSet.has('Bread')); // returns false

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread'); // Only adds one
// ordersSet.delete('Risotto');
// // ordersSet.clear(); // erases all data
// console.log(ordersSet);

// // No point to Retrieve values (there are NO indexes because all values are unique)

// for (const order of ordersSet) console.log(order);

// // USE CASE FOR SETS

// // Can be used to remove duplicates in arrays
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const uniqueStaff = [...new Set(staff)];
// console.log(uniqueStaff);
// console.log(new Set(staff).size);

// console.log(new Set('EricYantis').size); //size = 9 because 'i' is duplicated

// END SETS
////////////////////////////////////////////////
// START MAPS

// IN MAPS...KEYS CAN BE ANY DATA TYPE EVEN FUNCTION!!!!!!!!!!!

// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy'); //These not only set...but also return!
// console.log(rest.set(2, 'Lisbon, Portugal'));
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open :D')
//     .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('open'));
// console.log(rest.has(11));

// rest.delete(2);
// console.log(rest.size);

// // rest.clear();

// // This wont work because the arrays are different
// rest.set([1, 2], 'Test');
// rest.get([1, 2]);

// // Here it will work
// const arr = [1, 2, 3];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'Heading');

// MAPS: ITERATION ////////////////////////////////

// const question = new Map([
//     ['question', 'What is the best programming language?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JavaScript'],
//     ['correct', 3],
//     [true, 'You are Correct!'],
//     [false, 'You are Wrong!'],
// ]);

// // Convert Object to map
// function getByValue(map, search) {
//     for (let [key, value] of question.entries()) {
//         if (value === search) {
//             return key;
//         }
//     }
// }
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);
// console.log(question.get('question'));
// for (const [key, value] of question) {
//     if (typeof key === 'number') console.log(key, value);
// }
// const answer = prompt('Your Answer');

// console.log(
//     question.get(question.get('correct') === getByValue(question, answer))
// );

// Convert Map to Array
// console.log([...question]);

// END MAPS
////////////////////////////////////////////////
// START DATA STRUCTURES, MODERN OPERATORS AND STRINGS
/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
⚽
[FIRST HALF] 17:
GOAL
GOOD LUCK 😀
*/
// const gameEvents = new Map([
//     [17, '⚽ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽ GOAL'],
//     [80, '⚽ GOAL'],
//     [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);
// console.log(`An event happened, on
// average, every ${90 / gameEvents.size} minutes`);

// for (const [key, value] of gameEvents) {
//     if (key <= 45) {
//         console.log(`[Fisrt Half]${key}: ${value}`);
//     } else console.log(`[Second Half]${key}: ${value}`);
// }

// END CODING CHALLENGE 3
////////////////////////////////////////////////
// START WORKING WITH STRINGS

// const airline = 'Yantis Air';
// const plane = 'A320';

// // Get Characters
// console.log(plane[0]); // A
// console.log('B737'[0]); // B

// // Get Length
// console.log(airline.length);

// // Methods
// console.log(airline.indexOf('i')); // 3
// console.log(airline.lastIndexOf('i')); // 8
// console.log(airline.indexOf('Air')); // 7

// console.log(airline.slice(4)); // is Air
// console.log(airline.slice(7, 10)); // Air

// console.log(airline.slice(0, airline.indexOf(' '))); // Yantis
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Air

// console.log(airline.slice(-3)); // Air (negatives go from end)
// console.log(airline.slice(1, -1)); // antis Air
// console.log(airline.slice(3, -4)); // tis

// const checkMiddleSeat = function (seat) {
//     // B and E are middle seats
//     const s = seat.slice(-1);
//     s === 'B' || s === 'E'
//         ? console.log(`${seat} is a middle seat`)
//         : console.log(`${seat} is not a middle seat`);
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(airline.toLowerCase()); // yantis air\
// console.log(airline.toUpperCase()); // YANTIS AIR

// // Fix capitalization in passenger name
// const passenger = 'eRiC';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//     passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect); // Eric

// // comparing emails

// const email = 'hello@yantis.com';
// const loginEmail = '  Hello@Yantis.CoM  \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail); // hello@yantis.com

// // Or all in one line
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail); // hello@yantis.com

// console.log(email === normalizedEmail); // true

// // Replacing parts of strings
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//     'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replaceAll(/door/g, 'gate'));

// // Boolean Methods
// const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320')); // true
// console.log(plane2.startsWith('Air')); // true

// if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
//     console.log('Part of the new Airbus Family');
// }

// // Practice Exercise
// const checkBaggage = function (items) {
//     const baggage = items.toLowerCase();
//     if (baggage.includes('knife') || baggage.includes('gun')) {
//         console.log('Stay the Fuck off the plane');
//     } else console.log('Welcome Aboard');
// };

// checkBaggage('I have a laptop, some Food, and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// // SPLIT METHOD (VERY POWERFUL)
// console.log('a+very+nice+string'.split('+')); // ['a', 'very', 'nice', 'string']
// console.log('Eric Yantis'.split(' ')); // [Eric, Yantis]

// // With Destructuring
// const [firstName, lastName] = 'Eric Yantis'.split(' ');
// console.log(firstName, lastName); // Eric Yantis
// console.log(typeof firstName); // string

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName); // Mr. Eric YANTIS

// const capitalizeName = function (name) {
//     const names = name.split(' ');
//     const namesUpper = [];
//     console.log(names);
//     for (const n of names) {
//         // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//         namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('eric yantis');

// // Padding a string
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+')); // +++++++++++Go to gate 23!
// console.log(message.padStart(25, '+').padEnd(35, '+')); // +++++++++++Go to gate 23!++++++++++

// // Real world example

// const maskCreditCard = function (num) {
//     const str = num + '';
//     const last4 = str.slice(-4);
//     return console.log(last4.padStart(str.length, '*'));
// };
// maskCreditCard(4356343578975434);
// maskCreditCard('4356343578923456');
// maskCreditCard('43563435789754343675');

// // repeat method
// const weatherTicker = 'Bad weather... All Departures Delayed... ';
// console.log(weatherTicker.repeat(3));

// const planesInLine = function (n) {
//     console.log(`There are ${n} planes in line ${'✈️ '.repeat(n)}`);
// };
// planesInLine(4);

// END WORKING WITH STRINGS
////////////////////////////////////////////////
// START CODING CHALLENGE 4
/*

Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase      ✅
firstName          ✅✅
someVariable       ✅✅✅
calculateAge      ✅✅✅✅
delayedDeparture  ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§
This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// let textArea = document.querySelector('textarea');
// const button = document.querySelector('button');
// let text = '';
// button.addEventListener('click', function () {
//     text = textArea.value.toLowerCase();
//     textArea.value = '';
//     convertText(text);
// });
// function convertText(text) {
//     let output = '';
//     const splitArr = text.split('\n');
//     for (const [i, item] of splitArr.entries()) {
//         const [first, second] = item.split('_');
//         output = `${first}${second.replace(
//             second[0],
//             second[0].toUpperCase()
//         )}`;
//         console.log(output.padEnd(20) + '✅'.repeat(i + 1));

//         console.log(output);
//     }
// }
//         namesUpper.push(n.replace(n[0], n[0].toUpperCase()));

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const separateFlights = flights.split('+');
console.log(separateFlights);

for (const flight of separateFlights) {
    const [status, depart, arrive, time] = flight.split(';');
    console.log(
        `${status.replaceAll('_', ' ').trimStart()} from ${depart
            .slice(0, 3)
            .toUpperCase()} to ${arrive
            .slice(0, 3)
            .toUpperCase()} (${time.replace(':', 'h')})`
    );
}

// END SECTION 9
