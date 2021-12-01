// challenge 1
//Test Data Set 1
let markWtKg = 78;
let markHtM = 1.69;
let johnWtKg = 92;
let johnHtM = 1.95;

//Test Data Set 2
let mark2WtKg = 95;
let mark2HtM = 1.88;
let john2WtKg = 85;
let john2HtM = 1.76;

//BMI Data Set 1
let markBMI1 = markWtKg / markHtM ** 2;
let johnBMI1 = johnWtKg / johnHtM ** 2;

console.log(markBMI1, johnBMI1);

let markHigherBMI = markBMI1 > johnBMI1;
console.log(markHigherBMI);

//BMI Data Set 2
let markBMI2 = mark2WtKg / mark2HtM ** 2;
let johnBMI2 = john2WtKg / john2HtM ** 2;

console.log(markBMI2, johnBMI2);

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);
