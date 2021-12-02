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
