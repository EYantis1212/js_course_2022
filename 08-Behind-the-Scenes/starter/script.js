'use strict';
///////////////////////////////////////////
// START JS BEHIND THE SCENES SECTION
//////////////////////////////////////////
// START SCOPING LECTURE

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;
//   console.log(firstName, age);
//   return age;
// }
// //If these vvvvv were reversed it would not work because the firstName variable would not be called before the function was called and needed it.
// const firstName = 'Eric';
// calcAge(1980);

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     const output = `You are ${firstName}. You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1980 && birthYear <= 1996) {
//       // Here a second variable firstName is created in the block scope so it is seen first and is used instead of the global one.  These are two different variables and are both named the same thing.  This is just like being able to use the same parameters like [i] across different fucntions.  It is all scope.  To simply redifine a variable instead...use (firstName = 'Jamie') instead of creating it again with const or let.
//       const firstName = 'Jamie';
//       //Var millineal is function scoped and can be accessed by the parent function
//       var millenial = true;
//       const str = `Oh and you are a millenial, ${firstName} `;
//       console.log(str);
//     }
//     console.log(millenial);
//     function add(a, b) {
//       return (a = b);
//     }
//   }

//   printAge();

//   return age;
// }
// //If these vvvvv were reversed it would not work because the firstName variable would not be called before the function was called and needed it.
// const firstName = 'Eric';
// calcAge(1980);
//You can not even call functions that are nested from outside like thisVV
// printAge();

//END SCOPING LECTURE
///////////////////////////////////////////
// START HOISTING AND TDZ LECTURE

// Variables

// console.log(me); // hoisted and works but is undefined because var
// console.log(year); //Not initialized so it is in TDZ
// console.log(job); //Not initialized so it is in TDZ

// var me = 'Eric';
// let job = 'Developer';
// const year = 1980;

// Functions
// console.log(addDecl(2, 3)); //Expression not decalred so hoisted and works
// console.log(addExpr(2, 3)); //Declared so in TDZ and not initialized
// console.log(addArrow(2, 3)); //Declared so in TDZ and not initialized
// ////Expression
// function addDecl(a, b) {
//   return a + b;
// }

// //// Declaration
// const addExpr = function (a, b) {
//   return a + b;
// };

// //// Arrow
// const addArrow = (a, b) => a + b;

// Hoisting pitfall Be Aware...
// if (!numProducts) deleteShoppingCart(); //This deleted the cart even though there were products in the cart...this is because both were hoisted but var = undefined when it got hoisted.  Undefined = falsy...so function runs.

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All Products Deleted!');
// }

// END HOISTING AND TDZ LECTURE
//////////////////////////////////////
// START THIS KEYWORD LECTURE

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// };
// calcAge(1980);

// const calcAgeArrow = birthYear => {
//   console.log(2021 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const eric = {
//   year: 1980,
//   calcAge: function () {
//     console.log(2021 - this.year);
//     console.log(this);
//   },
// };
// eric.calcAge();
// // this is pointing to what called the function...not the function itself

// const rebecca = {
//   year: 1983,
// };
// // this just put the calcAge function into rebecca
// rebecca.calcAge = eric.calcAge;
// rebecca.calcAge();

// Regular Functions vs Arrow Functions

// const eric = {
//   firstName: 'Eric',
//   year: 1980,
//   calcAge: function () {
//     console.log(2021 - this.year);
//     console.log(this);
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// eric.greet();
// In this example the arrow function does not get a 'This' keyword so it looks to the global scope and 'firstName' does not exist there so it returns undefined.

// BIG TAKEAWAY - NEVER USE AN ARROW FUNCTION AS A METHOD (A object property that holds a function)

// PITFALL #2

const eric = {
  firstName: 'Eric',
  year: 1980,
  calcAge: function () {
    console.log(2021 - this.year);
    // Solution 1
    // console.log(this);
    // const self = this; // Here we create a variable that will take the place of this in deeper functions.
    // const isMillenial = function () {
    //   console.log(self.year >= 1980 && self.year <= 1996);
    // 	// console.log(this.year >= 1980 && this.year <= 1996);
    // };

    //Solution 2
    // Here because an arrow function does not get its own 'this' keyword it looks to its parent object and this works.
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1980 && this.year <= 1996);
      // console.log(this.year >= 1980 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};
eric.greet();
eric.calcAge();

//// argument keyword does not work in arrow function but does in other
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
//// Arrow
const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

// THIS KEYWORD LECTURE
//////////////////////////////////////
// START PRIMITIVES VS OBJECTS (REFERENCE TYPES)LECTURE
