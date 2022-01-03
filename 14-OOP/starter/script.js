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

// const Car = function (make, speed) {
// 	this.speed = speed;
// 	this.make = make;
// };
// Car.prototype.accelerate = function () {
// 	this.speed += 10;
// 	console.log(`${this.make} is now going ${this.speed}km/h`);
// };
// Car.prototype.brake = function () {
// 	this.speed -= 5;
// 	console.log(`${this.make} is now going ${this.speed}km/h`);
// };

// const car1 = new Car('Toyota', 50);
// console.log(car1);
// car1.accelerate();
// car1.brake();
// car1.accelerate();

// const car2 = new Car('Honda', 50);
// console.log(car1);
// car2.accelerate();
// car2.brake();
// car2.accelerate();

//! ES6 Classes
//Class Expression
// const PersonCl = class {}

// // Class Declaration
class PersonCl {
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}
	// Instance Methods added to prototype
	calcAge() {
		console.log(2022 - this.birthYear);
	}
	get age() {
		return 2022 - this.birthYear;
	}
	set fullName(name) {
		if (name.includes(' ')) {
			this._fullName = name;
		} else alert(`${name} is not a full name`);
	}
	get fullName() {
		return this._fullName;
	}
	// Static Method
	static hey() {
		console.log('Hey!!!');
	}
}

const rebecca = new PersonCl('Rebecca Yantis', 1983);
console.log(rebecca);
rebecca.calcAge();

//1. Classes are not hoisted even if declarations
//2. Classes are also first-class-citizens...can be passes into functions and returned from functions
//3. Classes are always executed in strict mode

//! Setters and Getters
// These are functions that look like normal properties but Get and Set values

const account = {
	owner: 'Eric',
	movements: [200, 530, 120, 300],

	get latest() {
		return this.movements.slice(-1).pop();
	},
	set latest(mov) {
		this.movements.push(mov);
	},
};

console.log(account.latest);
account.latest = 500;
console.log(account);

//! Static Methods

// Array.from
// Number.parseFloat(12)
// Here .from and parsefloat can not be used on their own since they are
// attached to the Number and Array constructors...they are not a part of their
// target objects prototype

Person.hey = function () {
	console.log(`Hello!!!`);
};
// Here we set a static method...lets call it
// rebecca.hey(); // Error not a function
Person.hey(); // Hello!!!
PersonCl.hey();

//! Object.crate
const PersonProto = {
	calcAge() {
		console.log(2022 - this.birthYear);
	},
	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	},
};
const joseph = Object.create(PersonProto);
joseph.init('Joseph', 2004);
console.log(joseph);
joseph.calcAge();

//! Coding Challenge #2
