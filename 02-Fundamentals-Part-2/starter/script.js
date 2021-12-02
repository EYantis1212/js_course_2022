// START JAVASCRIPT FUNDAMENTALS PART 2
////////////////////////////////////////////////////////////////////////////////////////////////
"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////
//START FUNCTIONS LECTURE

function logger() {
    console.log("My name is Eric");
}

// calling / running / invoking the function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} Apples and ${oranges} Oranges`;
    return juice;
}

//AppleJuice!

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//AppleOrange Juice

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// END FUNCTIONS LECTURE
///////////////////////////////////////////////////////////////////////////////////////////////
//START FUNCTION DECLARATIONS vs EXPRESSIONS LECTURE
