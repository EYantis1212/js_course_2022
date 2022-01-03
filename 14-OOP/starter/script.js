'use strict';

//! What is Object-Oriented Programming

// We use objects to model real world or abstract features

// Objects may contain data (Properties) and code (Methods)

// By using objects, we pack data and corresponding behavior into one block

// OOP objects are self-contained pieces/blocks of code
// They are used as building blocks for applications and interact with one another
// These interactions happen through an API: methods that the code outside of the object can access and use to communicate with the object

// A Class is like a blueprint from which we create new objects

//! The Four Principles of OOP

//! 1. Abstraction
/* Ignoring or Hiding details that don't matter, allowing for an overview perspective of what we are
implementing, instead of messing with details that do not matter.

//! 2. Encapsulation
/* Keep certain properties and methods private inside the class, so they are not accessible outside it.
Some Methods can be exposed as a public interface (API)

//! 3. Inheritance
/* Makes all properties and methods of a certain class available to a child class.
This forms a hierarchal relationship between classes.  This allows us to reuse common logic and
to model real-world relationships.

//! 4. Polymorphism
/* A child class can overwrite a method it inherited from a parent class. */

//! OOP in JavaScript
//! Constructor Functions and the New Operator

const Person = function (firstName, birthYear) {
	console.log(this); // Person {}
	this.firstName = firstName;
	this.birthYear = birthYear;
};

const eric = new Person('Eric', 1980);
console.log(eric); //Person {firstName: 'Eric', birthYear: 1980}

// 4 Things happen with the new keyword
// 1. New Object is Created {}
// 2. Function is called, this = {}
// 3. {} is linked to prototype
// 4. functions automatically returns {}

//! Prototypes
Person.prototype.calcAge = function () {
	console.log(2022 - this.birthYear);
};

eric.calcAge(); // 42

console.log(Person.prototype.isPrototypeOf(eric)); // true
// Person.prototype is the prototype that the object 'eric' is pointing to with its __proto__

Person.prototype.species = 'Human';

console.log(eric.hasOwnProperty('firstName')); // true
console.log(eric.hasOwnProperty('species')); // false

//! Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// §
// §
// Data car 1: 'BMW' going at 120 km/h
// Data car 2: 'Mercedes' going at 95km/hr

const Car = function (make, speed) {
	this.speed = speed;
	this.make = make;
};
Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(`${this.make} is now going ${this.speed}km/h`);
};
Car.prototype.brake = function () {
	this.speed -= 5;
	console.log(`${this.make} is now going ${this.speed}km/h`);
};

const car1 = new Car('Toyota', 50);
console.log(car1);
car1.accelerate();
car1.brake();
car1.accelerate();

const car2 = new Car('Honda', 50);
console.log(car1);
car2.accelerate();
car2.brake();
car2.accelerate();

//! ES6 Classes
