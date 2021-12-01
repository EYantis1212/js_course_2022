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

const age = 18;

if (age >= 18) {
    console.log("Sara can start driver's License 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Can take driver's test in ${yearsLeft} years.`);
}

//Century is not defined...This is because the variable is only accessible in the control block it was created in.
// const birthYear = 1991;

// if (birthYear <= 2000) {
//     let century = 20;
// } else {
//     let century = 21;
// }
// console.log(century);

//Here is the way if you needed to access the variable
const birthYr = 2012;
let cent;
if (birthYr <= 2000) {
    cent = 20;
} else {
    cent = 21;
}
console.log(cent);

// END TAKING DECISIONS: IF / ELSE STATEMENTS
///////////////////////////////////////////////////////////
