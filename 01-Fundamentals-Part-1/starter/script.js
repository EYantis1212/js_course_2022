// Challenge 1 My Solution
//Test Data Set 1
// let markWtKg = 78;
// let markHtM = 1.69;
// let johnWtKg = 92;
// let johnHtM = 1.95;

// //Test Data Set 2
// let mark2WtKg = 95;
// let mark2HtM = 1.88;
// let john2WtKg = 85;
// let john2HtM = 1.76;

// //BMI Data Set 1
// let markBMI1 = markWtKg / markHtM ** 2;
// let johnBMI1 = johnWtKg / johnHtM ** 2;

// console.log(markBMI1, johnBMI1);

// let markHigherBMI = markBMI1 > johnBMI1;
// console.log(markHigherBMI);

// //BMI Data Set 2
// let markBMI2 = mark2WtKg / mark2HtM ** 2;
// let johnBMI2 = john2WtKg / john2HtM ** 2;

// console.log(markBMI2, johnBMI2);

// let markHigherBMI2 = markBMI2 > johnBMI2;
// console.log(markHigherBMI2);
// //Challenge 1 - What I Learned - I Learned I could have used less variables and still used 'const because  every-time you reload the webpage it clears the memory and stores all the variables all over again..

// //Strings and Template Literals Lecture and Notes

// const firstName = "Eric";
// const job = "Developer";
// const birthYear = 1980;
// const currentYear = 2021;

// // This is before JS6 Template Literals...it is annoying and wordy to code.
// // const eric =
// //     "I'm " +
// //     firstName +
// //     ", a " +
// //     (currentYear - birthYear) +
// //     "year old " +
// //     job +
// //     "!";

// // console.log(eric);

// //Here is the same thing but with Template Literals (note = you have to use back ticks not quotes single or double to start these.)

// const ericNew = `I'm ${firstName}, a ${
//     currentYear - birthYear
// } year old ${job}!`;
// console.log(ericNew);

// //Template Literal Back Tick (`) also allow multiple line strings (useful later)
// console.log(`String
// multiple
// lines`);

//END STRINGS AND TEMPLATE LITERALS LECTURE
//START TAKING DECISIONS: IF / ELSE STATEMENTS

//this is called an "IF/ELSE Control Structure"

// if (){

// } else {

// }

// const age = 18;

// if (age >= 18) {
//     console.log("Sara can start driver's License 🚗");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Can take driver's test in ${yearsLeft} years.`);
// }

//Century is not defined...This is because the variable is only accessible in the control block it was created in.
// const birthYear = 1991;

// if (birthYear <= 2000) {
//     let century = 20;
// } else {
//     let century = 21;
// }
// console.log(century);

//Here is the way if you needed to access the variable
// const birthYr = 2012;
// let cent;
// if (birthYr <= 2000) {
//     cent = 20;
// } else {
//     cent = 21;
// }
// console.log(cent);

// END TAKING DECISIONS: IF / ELSE STATEMENTS
///////////////////////////////////////////////////////////
// CODING CHALLENGE #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �
*/

//Test Data Set 1
// let markWtKg = 78;
// let markHtM = 1.69;
// let johnWtKg = 92;
// let johnHtM = 1.65;

// //BMI Data Set 1 = Here I learned how to Round to two decimal places!
// let markBMI =
//     Math.round((markWtKg / markHtM ** 2 + Number.EPSILON) * 100) / 100;
// let johnBMI =
//     Math.round((johnWtKg / johnHtM ** 2 + Number.EPSILON) * 100) / 100;

// console.log(markBMI, johnBMI);

// //CHALLENGE #2 SOLUTION
// if (markBMI > johnBMI) {
//     console.log(
//         `Mark's BMI of ${markBMI} is higher than John's BMI of ${johnBMI}!`
//     );
// } else {
//     console.log(
//         `John's BMI of ${johnBMI} is higher than Mark's BMI of ${markBMI}!`
//     );
// }
// END CODING CHALLENGE #2
///////////////////////////////////////////////////////////
//START TYPE CONVERSION and COERCION LECTURE

//Type Conversion
// const inputYear = "1991";
// console.log(inputYear + 18); //This will not work as it concatenates the string with a number instead of adding

// const inputYear = "1991";
// console.log(Number(inputYear) + 18); //the Number function here converts the string to a number to allow the calculation but does not change the string to the converted number...it is still a string.
// console.log(String(23)); //You can also convert a number to a string

// //Type Coercion
// console.log(" I am " + 41 + "  years old"); //Here JavaScript coerced (automatically converted) the type of the number to string.

// console.log("23" - "10" - 3); //Here the strings are coerced into numbers.

// let n = "1" + 1; //This ends up concatenating into the value 11.
// n = n - 1;
// console.log(n); //This is 10 instead of 1 because of the concatenation

//END TYPE CONVERSION and COERCION LECTURE
//////////////////////////////////////////////////////////
//START TRUTHY and  FALSY VALUES LECTURE

//Falsy values are not exactly false but will become false when we convert them into a boolean.

//There are 5 Falsy Values:  0, ' ', undefined, null, and NaN

//Anything else...like a number that is not '0' or a string...will be converted to true.  That is Truthy values.

// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("string")); //true
// console.log(Boolean({})); //true
// console.log(Boolean(" ")); //false

// const money = 1;
// if (money) {
//     console.log(`Don't spend it all `);
// } else {
//     console.log("You should get a job!");
// }
// Here zero is a falsy value so converted to false and anything not zero is truthy and becomes true.

// let height;
// if (height) {
//     console.log("Yay! height is defined!");
// } else {
//     console.log("Height is Undefined :(");
// }

//Here height is a falsy value because it is undefined...so converted to false.

// END TRUTHY and  FALSY VALUES LECTURE
///////////////////////////////////////////////////
//START EQUALITY OPERATORS: == vs. ===

// const age = 18;
// if (age === 18) console.log("You just became an adult");
// '===' is a strict equality comparison operator so it will not use coercion to change a value
// '==' will use coercion and convert a type to check boolean value

// END EQUALITY OPERATORS: == vs. ===
////////////////////////////////////////////////
// START LOGICAL OPERATORS

// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision); // false
// console.log(hasDriverLicense || hasGoodVision); // true
// console.log(!hasDriverLicense); // false

// const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Sarah might kill someone...no driving!");
// }

// const isTired = false; // C
// console.log(hasDriverLicense || hasGoodVision || isTired);

// if (hasDriverLicense && hasDriverLicense && !isTired) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Sarah might kill someone...no driving!");
// }

// END LOGICAL OPERATORS
//////////////////////////////////////////////
// START CODING CHALLENGE #3
/* 
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �
*/
// SCORES
// score1Dolphins = 90;
// score2Dolphins = 95;
// score3Dolphins = 100;

// score1Koalas = 90;
// score2Koalas = 95;
// score3Koalas = 100;

// //SCORE AVERAGES
// averageScoreDolphins = (score1Dolphins + score2Dolphins + score3Dolphins) / 3;

// averageScoreKoalas = (score1Koalas + score2Koalas + score3Koalas) / 3;

// console.log(averageScoreDolphins, averageScoreKoalas);

// //COMPARE AVERAGES
// if (averageScoreDolphins === averageScoreKoalas) {
//     console.log("DRAW!");
// } else if (averageScoreDolphins > averageScoreKoalas) {
//     console.log("Dolphin's Win!");
// } else {
//     console.log("Koala's Win!");
// }

//COMPARE AVERAGES BONUS 1
// if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins > 100) {
//     console.log("DRAW!");
// } else if (
//     averageScoreDolphins > averageScoreKoalas &&
//     averageScoreDolphins > 100
// ) {
//     console.log("Dolphin's Win!");
// } else if (
//     averageScoreKoalas > averageScoreDolphins &&
//     averageScoreDolphins > 100
// ) {
//     console.log("Koala's Win!");
// } else {
//     console.log("No One Wins!");
// }

// END CODING CHALLENGE #3
//////////////////////////////////////////////
// START THE SWITCH STATEMENT LECTURE

// const day = "saturday";

// switch (day) {
//     case "monday": // Day === Monday
//         console.log("Clean Kitchen");
//         console.log("Go Grocery Shopping");
//         break;
//     case "tuesday":
//         console.log("Clean Living Room");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("Clean Bathroom");
//         break;
//     case "friday":
//         console.log("Clean Bedroom");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Clean Yard");
//         break;
//     default:
//         console.log("Not a valid day!");
// }

if (day === "monday") {
    console.log("Clean Kitchen");
    console.log("Go Grocery Shopping");
} else if (day === "tuesday") {
    console.log("Clean Living Room");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Clean Bathroom");
} else if (day === "friday") {
    console.log("Clean Bedroom");
} else if (day === "saturday" || day === "sunday") {
    console.log("Clean Yard");
} else {
    console.log("Not a valid day!");
}

//END THE SWITCH STATEMENT LECTURE
///////////////////////////////////////////////
//START STATEMENTS AND EXPRESSIONS LECTURE
