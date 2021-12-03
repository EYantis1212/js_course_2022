// START JAVASCRIPT FUNDAMENTALS PART 2
////////////////////////////////////////////////////////////////////////////////////////////////
"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////
//START FUNCTIONS LECTURE

// function logger() {
//     console.log("My name is Eric");
// }

// // calling / running / invoking the function
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} Apples and ${oranges} Oranges`;
//     return juice;
// }

// //AppleJuice!

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// //AppleOrange Juice

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// END FUNCTIONS LECTURE
///////////////////////////////////////////////////////////////////////////////////////////////
//START FUNCTION DECLARATIONS vs EXPRESSIONS LECTURE

//FUNCTION DECLARATION!!!!!!!!
// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }
//Simplified
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1980);

// //FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// };

// const age2 = calcAge2(1983);
// console.log(age1, age2);

// END FUNCTION DECLARATIONS vs EXPRESSIONS LECTURE
///////////////////////////////////////////////////////////////////////////////////////////////
//START ARROW FUNCTIONS LECTURE

//FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// };

//ARROW FUNCTION (We do not understand this yet...but arrow functions do not get "this" keyword...we will learn this later. )
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1980);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} has ${retirement} years until retirement!`;
// };
// console.log(yearsUntilRetirement(1980, "Eric"));
// console.log(yearsUntilRetirement(1983, "Rebecca"));

// END ARROW FUNCTIONS LECTURE
///////////////////////////////////////////////////////////////////////////////////////////////
// START FUNCTIONS CALLING OTHER FUNCTIONS

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} Apple Pieces and ${orangePieces} Orange Pieces`;
//     return juice;
// }
// const appleOrangeJuice = fruitProcessor(2, 3);
// console.log(appleOrangeJuice);

// END FUNCTIONS CALLING OTHER FUNCTIONS
///////////////////////////////////////////////////////////////////////////////////////////////
// START REVIEWING FUNCTIONS

// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         return `${firstName} has ${retirement} years until retirement!`;
//     } else return `${firstName} has already retired!`;
// };
// console.log(yearsUntilRetirement(1980, "Eric"));
// console.log(yearsUntilRetirement(1983, "Rebecca"));

//REVIEW////////////////////////////////////////////////////

//FUNCTION DECLARATION
// function calcAge(birthYear) {
//     return 2021 - birthYear;
// }

// //FUNCTION EXPRESSION
// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// };

// //ARROW FUNCTION
// const calcAge = (birthYear) => 2021 - birthYear;

// END REVIEWING FUNCTIONS
///////////////////////////////////////////////////////////////////////////////////////////////
// START CODING CHALLENGE #1
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK
*/

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);
// console.log(avgDolphins);
// console.log(avgKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         return `Dolphins win ${avgDolphins} to ${avgKoalas}!`;
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         return `Koalas win ${avgKoalas} to ${avgDolphins}!`;
//     } else return "No one wins...";
// }
// console.log(checkWinner(avgDolphins, avgKoalas));

// END CODING CHALLENGE #1
///////////////////////////////////////////////////////////////////////////////////////////////
// START INTRODUCTION TO ARRAYS

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);

// // This returns the length of an array...Note: this is not zero based. So in this example the console will log 3.
// console.log(friends.length);

// // This would return the last element of the array
// console.log(friends[friends.length - 1]);

// // Here you see you can change an element of an array even if it was declared with const. This is because only primitives are immutable...and arrays are not primitives.
// friends[2] = "Jay";
// console.log(friends);

// // This will not work on an array defined by const as you are trying to replace the entire array.
// // friends = ["Bob, Alice"];
// const family = ["Rebecca", "Joseph", "Eddie", "Zachary"];
// const firstName = "Eric";
// const eric = [firstName, "Yantis", 2021 - 1980, "Developer", family];
// console.log(eric);

// Exercise
// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// };
// console.log(calcAge(1980));
// const years = [1980, 1983, 2004, 2007, 2009];

// // This doesn't work
// // console.log(calcAge[years]);

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//     calcAge(years[0]),
//     calcAge(years[1]),
//     calcAge(years[2]),
//     calcAge(years[3]),
//     calcAge(years[4]),
// ];

// console.log(ages);

// END INTRODUCTION TO ARRAYS LECTURE
///////////////////////////////////////////////////////////////////////////////////////////////
// START BASIC ARRAY OPERATIONS (METHODS) LECTURE

// ADDING ELEMENTS TO ARRAYS, (THESE FUNCTIONS RETURN NEW LENGTH OF ARRAY)
// const family = ["Rebecca", "Joseph", "Eddie", "Zachary"];
// family.push("Eric"); // PUSH ADDS TO END FO ARRAY
// console.log(family);

// family.unshift("Eric"); // UNSHIFT ADDS TO START OF ARRAY
// console.log(family);

// // REMOVING ELEMENTS FROM ARRAYS (THESE FUNCTIONS RETURN ARRAY ELEMENT REMOVED)
// family.pop(); // REMOVES LAST ELEMENT
// console.log(family);

// family.shift(); // REMOVES FIRST ELEMENT
// console.log(family);

// // EXTRA METHODS

// console.log(family.indexOf("Rebecca")); //indexOf Function returns the position of an Array Element

// console.log(family.includes("Rebecca")); //includes function or method tells you if something is present in the array.  Returns Boolean True or False/  This is strict comparison so '23' will not equal 23.

// // Using includes to write conditionals is very common and useful.

// if (family.includes("Eddie")) {
//     console.log("You have a family member named Edward");
// }

// END BASIC ARRAY OPERATIONS (METHODS) LECTURE
///////////////////////////////////////////////////////////////////////////////////////////////
// START CODING CHALLENGE #2

/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
GOOD LUCK �
*/
//
//FUNCTION DECLARATION
// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         let tip = bill * 0.15;
//         return tip;
//     } else {
//         let tip = bill * 0.2;
//         return tip;
//     }
// }
//FUNCTION TERNARY
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

//ARROW FUNCTION
// const calcTip = (bill) =>
//     bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips, bills);

// const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(totals);

// END CODING CHALLENGE #2
///////////////////////////////////////////////////////////////////////////////////////////////
// START INTRO TO OBJECTS LECTURE

// This object has 5 properties or 'keys'
// const eric = {
//     firstName: "Eric",
//     lastName: "Yantis",
//     age: 2021 - 1980,
//     occupation: "Developer",
//     family: ["Rebecca", "Joseph", "Edward", "Zachary"],
// };
// console.log(eric); // As you can see the properties are all ordered alphabetically, so the order does not matter at all in objects like it does arrays.

// //  Here is how to retrieve data from an object using the dot (.) method
// console.log(eric.age);
// // and the bracket method which also allows you to use expressions
// console.log(eric["occupation"]);

// const nameKey = "Name";

// console.log(eric["first" + nameKey]);
// console.log(eric["last" + nameKey]);

// const interestedIn = prompt(
//     "What do you want to know about Eric? Choose between firstName, lastName, age, occupation, family"
// );

// // console.log(eric[interestedIn]);

// if (eric[interestedIn]) {
//     alert(eric[interestedIn]);
// } else {
//     alert(
//         "Wrong request! Choose between firstName, lastName, age, occupation, family. "
//     );
// }

// ADDING PROPERTIES TO OBJECTS
// const eric = {
//     firstName: "Eric",
//     lastName: "Yantis",
//     age: 2021 - 1980,
//     occupation: "Developer",
//     family: ["Rebecca", "Joseph", "Edward", "Zachary"],
// };
// eric.location = "Arizona";
// eric["email"] = "mememe@barley.com";
// console.log(eric.location, eric.email);

// // CHALLENGE
// // "Eric has 4 family members, and his spouse us called Rebecca"

// console.log(
//     `${eric.firstName} has ${eric.family.length} family members, and his spouse is named ${eric.family[0]}`
// );

//END INTRO TO OBJECTS LECTURE
///////////////////////////////////////////////////////////////////////////////////////////////////
// START OBJECT METHODS LECTURE

// YOU CAN ADD FUNCTIONS INTO OBJECTS!!!!!!!  Just use an expression instead of a declaration.
// const eric = {
//     firstName: "Eric",
//     lastName: "Yantis",
//     birthYear: 1980,
//     occupation: "Developer",
//     family: ["Rebecca", "Joseph", "Edward", "Zachary"],
//     hasDriversLicense: true,
//     calcAge: function (birthYear) {
//         return 2021 - birthYear;
//     },
// };
// console.log(eric.calcAge(eric.birthYear));
// This works...but now lets have the function pull the data automatically using 'THIS'
// let currentYear = new Date().getFullYear();
// const eric = {
//     firstName: "Eric",
//     lastName: "Yantis",
//     birthYear: 1980,
//     occupation: "Developer",
//     family: ["Rebecca", "Joseph", "Edward", "Zachary"],
//     hasDriversLicense: true,
//     // calcAge: function () {
//     //     console.log(this); //Here you can see 'this' just means the parent object the 'this' is inside.
//     //     return 2021 - this.birthYear;
//     calcAge: function () {
//         this.age = currentYear - this.birthYear;
//         return this.age;
//     },
// };
// eric.calcAge();
// console.log(eric.age);

// // Challenge
// console.log(
//     `${eric.firstName} is a ${eric.age} year old ${eric.occupation} and he ${
//         eric.hasDriversLicense ? "has " : "doesn't have"
//     }a drivers license.`
// );

//END OBJECT METHODS LECTURE
///////////////////////////////////////////////////////////////////////////////////////////////////
// START CODING CHALLENGE #3

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK �
*/

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    },
};
mark.calcBMI();
console.log(mark.BMI);

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    },
};
john.calcBMI();
console.log(john.BMI);

if (mark.BMI > john.BMI) {
    console.log(
        `${mark.fullName}'s BMI of ${mark.BMI.toFixed(2)} is higher than ${
            john.fullName
        }'s BMI of ${john.BMI.toFixed(2)}!`
    );
} else
    console.log(
        `${john.fullName}'s BMI of ${john.BMI.toFixed(2)} is higher than ${
            mark.fullName
        }'s BMI of ${mark.BMI.toFixed(2)}!`
    );

//END CODING CHALLENGE #3
///////////////////////////////////////////////////////////////////////////////////////////////////
// START ITERATION: FOR LOOPS LECTURE
