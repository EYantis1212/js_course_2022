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

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("string")); //true
console.log(Boolean({})); //true
console.log(Boolean(" ")); //false

const money = 1;
if (money) {
    console.log(`Don't spend it all `);
} else {
    console.log("You should get a job!");
}
// Here zero is a falsy value so converted to false and anything not zero is truthy and becomes true.

let height;
if (height) {
    console.log("Yay! height is defined!");
} else {
    console.log("Height is Undefined :(");
}

//Here height is a falsy value because it is undefined...so converted to false.

// END TRUTHY and  FALSY VALUES LECTURE
///////////////////////////////////////////////////
//START EQUALITY OPERATORS: == vs. ===
