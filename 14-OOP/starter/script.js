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

// const Person = function (firstName, birthYear) {
// 	console.log(this); // Person {}
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
// };

// const eric = new Person('Eric', 1980);
// console.log(eric); //Person {firstName: 'Eric', birthYear: 1980}

// 4 Things happen with the new keyword
// 1. New Object is Created {}
// 2. Function is called, this = {}
// 3. {} is linked to prototype
// 4. functions automatically returns {}

//! Prototypes
// Person.prototype.calcAge = function () {
// 	console.log(2022 - this.birthYear);
// };

// eric.calcAge(); // 42

// console.log(Person.prototype.isPrototypeOf(eric)); // true
// // Person.prototype is the prototype that the object 'eric' is pointing to with its __proto__

// Person.prototype.species = 'Human';

// console.log(eric.hasOwnProperty('firstName')); // true
// console.log(eric.hasOwnProperty('species')); // false

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
// class PersonCl {
// 	constructor(fullName, birthYear) {
// 		this.fullName = fullName;
// 		this.birthYear = birthYear;
// 	}
// 	// Instance Methods added to prototype
// 	calcAge() {
// 		console.log(2022 - this.birthYear);
// 	}
// 	get age() {
// 		return 2022 - this.birthYear;
// 	}
// 	set fullName(name) {
// 		if (name.includes(' ')) {
// 			this._fullName = name;
// 		} else alert(`${name} is not a full name`);
// 	}
// 	get fullName() {
// 		return this._fullName;
// 	}
// 	// Static Method
// 	static hey() {
// 		console.log('Hey!!!');
// 	}
// }

// const rebecca = new PersonCl('Rebecca Yantis', 1983);
// console.log(rebecca);
// rebecca.calcAge();

//1. Classes are not hoisted even if declarations
//2. Classes are also first-class-citizens...can be passes into functions and returned from functions
//3. Classes are always executed in strict mode

//! Setters and Getters
// These are functions that look like normal properties but Get and Set values

// const account = {
// 	owner: 'Eric',
// 	movements: [200, 530, 120, 300],

// 	get latest() {
// 		return this.movements.slice(-1).pop();
// 	},
// 	set latest(mov) {
// 		this.movements.push(mov);
// 	},
// };

// console.log(account.latest);
// account.latest = 500;
// console.log(account);

//! Static Methods

// Array.from
// Number.parseFloat(12)
// Here .from and parseFloat can not be used on their own since they are
// attached to the Number and Array constructors...they are not a part of their
// target objects prototype

// Person.hey = function () {
// 	console.log(`Hello!!!`);
// };
// // Here we set a static method...lets call it
// // rebecca.hey(); // Error not a function
// Person.hey(); // Hello!!!
// PersonCl.hey();

//! Object.crate
// const PersonProto = {
// 	calcAge() {
// 		console.log(2022 - this.birthYear);
// 	},
// 	init(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	},
// };
// const joseph = Object.create(PersonProto);
// joseph.init('Joseph', 2004);
// console.log(joseph);
// joseph.calcAge();

//! Coding Challenge #2
/*
Coding Challenge #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§
Data car 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/
// class CarCl {
// 	constructor(make, speed) {
// 		this.make = make;
// 		this.speed = speed;
// 	}
// 	accelerate() {
// 		this.speed += 10;
// 		console.log(`${this.make} is now going ${this.speed}km/h`);
// 	}
// 	brake() {
// 		this.speed - +10;
// 		console.log(`${this.make} is now going ${this.speed}km/h`);
// 	}
// 	get speedUS() {
// 		return this.speed / 1.6;
// 	}
// 	set speedUS(speed) {
// 		this.speed = speed * 1.6;
// 	}
// }
// const myCar = new CarCl('Nissan', 100);
// console.log(myCar);
// console.log(myCar.speedUS);
// myCar.speedUS = 150;
// console.log(myCar);
// console.log(myCar.speedUS);
// myCar.accelerate();
// myCar.accelerate();
// console.log(myCar.speedUS);

//! Inheritance Between "Classes":ES6 Classes

// const Person = function (firstName, birthYear) {
// 	console.log(this); // Person {}
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
// 	console.log(2022 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
// 	// The bind, call, and apply methods all take the value of 'this' as first argument
// 	Person.call(this, firstName, birthYear);
// 	this.course = course;
// };

// // Linking Prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
// 	console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const edison = new Student('Edison', 2007, 'Computer Science');
// console.log(edison);
// edison.introduce();
// edison.calcAge();
// Student.prototype.constructor = Student;
// console.log(edison);

//! Coding Challenge #3

/*
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definition of polymorphism 😉
Test data:
§
Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/
// const Car = function (make, speed) {
// 	this.make = make;
// 	this.speed = speed;
// };
// Car.prototype.accelerate = function () {
// 	this.speed += 20;
// };
// Car.prototype.brake = function () {
// 	this.speed -= 10;
// };
// const EV = function (make, speed, charge) {
// 	Car.call(this, make, speed);
// 	this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
// 	this.charge = chargeTo;
// 	console.log(`Battery now charged to ${chargeTo}%`);
// };
// EV.prototype.accelerate = function () {
// 	this.speed += 10;
// 	this.charge--;
// 	console.log(
// 		`The ${this.make} is accelerating to ${this.speed}km/h.  Battery has ${this.charge}% charge left`
// 	);
// };
// EV.prototype.brake = function () {
// 	this.speed -= 5;
// 	console.log(
// 		`The ${this.make} is decelerating to ${this.speed}km/h.  Battery has ${this.charge}% charge left`
// 	);
// };
// const tesla = new EV('tesla', 60, 20);
// console.log(tesla);

//! Inheritance Between Classes: ES6 Classes

// class PersonCl {
// 	constructor(fullName, birthYear) {
// 		this.fullName = fullName;
// 		this.birthYear = birthYear;
// 	}
// 	// Instance Methods added to prototype
// 	calcAge() {
// 		console.log(2021 - this.birthYear);
// 	}
// 	get age() {
// 		return 2021 - this.birthYear;
// 	}
// 	set fullName(name) {
// 		if (name.includes(' ')) {
// 			this._fullName = name;
// 		} else alert(`${name} is not a full name`);
// 	}
// 	get fullName() {
// 		return this._fullName;
// 	}
// 	// Static Method
// 	static hey() {
// 		console.log('Hey!!!');
// 	}
// }
// class StudentCl extends PersonCl {
// 	constructor(fullName, birthYear, course) {
// 		// Always needs to happen first to set 'this' keyword
// 		super(fullName, birthYear);
// 		this.course = course;
// 	}
// 	introduce = function () {
// 		console.log(`My name is ${this.fullName} and I study ${this.course}`);
// 	};
// 	calcAge() {
// 		console.log(
// 			`I am ${
// 				2021 - this.birthYear
// 			} years old, but as a student I feel more like I am ${
// 				2021 - this.birthYear + 20
// 			}`
// 		);
// 	}
// }

// const joseph = new StudentCl('Joseph Yantis', 2004, 'Computer Science');
// console.log(joseph);

// joseph.introduce();
// joseph.calcAge();

//! Inheritance Between "Classes: Object.create"
// const PersonProto = {
// 	calcAge() {
// 		console.log(2021 - this.birthYear);
// 	},
// 	init(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	},
// };

// const zachary = Object.create(PersonProto);
// zachary.init('Zachary', 2009);
// console.log(zachary);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
// 	PersonProto.init.call(this, firstName, birthYear);
// 	this.course = course;
// };
// StudentProto.introduce = function () {
// 	console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const edison = Object.create(StudentProto);
// edison.init('Edison', 2007, 'Web Development');
// console.log(edison);
// edison.introduce();
// edison.calcAge();

//! Another Class Example
//! Encapsulation: Protected Properties and Methods
//! Encapsulation: Private Class Fields and Methods

// 1) Public Fields
// 2) Private Fields
// 3) Public Methods
// 4) Private Methods
class Account {
	// 1) Public Fields (instances)
	locale = navigator.language;

	// 2) Private Fields (instances)
	#movements = [];
	#pin;
	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;

		// Protected Properties
		this.#pin = pin;
		// this.#movements = [];
		// this.locale = navigator.language;

		console.log(`Thanks for opening an account, ${owner}`);
	}
	// 3) Public Methods
	// Public Interface
	getMovements() {
		return this.#movements;
	}
	deposit(value) {
		this.#movements.push(value);
		return this;
	}
	withdrawal(value) {
		this.deposit(-value);
		return this;
	}

	requestLoan(value) {
		if (this.#approveLoan(value)) {
			this.deposit(value);
			console.log(`Loan approved in the amount of ${value}`);
			return this;
		}
	}
	// 4) Private Methods
	#approveLoan(value) {
		return true;
	}
}

const acct1 = new Account('Eric', 'USD', 1111);
acct1.deposit(2000);
acct1.withdrawal(90);
console.log(acct1.requestLoan(200));
console.log(acct1);

//! Chaining Methods
acct1
	.deposit(300)
	.deposit(500)
	.withdrawal(35)
	.requestLoan(2500)
	.withdrawal(1000);

console.log(acct1.getMovements());
acct1.getMovements();

//! Coding Challenge #4
/*
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§
Data car 1: 'Rivian' going at 120km/h, with a charge of 23%
*/

class CarCl {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}
	accelerate() {
		this.speed += 20;
		return this;
	}
	decelerate() {
		this.speed -= 10;
		return this;
	}
}

class EVCl extends CarCl {
	#charge;
	constructor(make, speed, charge) {
		super(make, speed);
		this.#charge = charge;
	}
	chargeBattery(chargeTo) {
		this.#charge = chargeTo;
		console.log(`Battery now charged to ${chargeTo}%`);
		return this;
	}
	accelerate() {
		this.speed += 10;
		this.#charge--;
		console.log(
			`The ${this.make} is accelerating to ${
				this.speed
			}km/h.  Battery has ${this.#charge}% charge left`
		);
		return this;
	}
	brake() {
		this.speed -= 5;
		console.log(
			`The ${this.make} is decelerating to ${
				this.speed
			}km/h.  Battery has ${this.#charge}% charge left`
		);
		return this;
	}
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().accelerate().brake().brake().chargeBattery(25);

//! END SECTION 14
