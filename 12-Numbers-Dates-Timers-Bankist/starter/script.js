'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Eric P Yantis',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  hasLoan: false,
  loanAmount: 0,

  movementsDates: [
    '2020-11-18T21:31:17.178Z',
    '2020-12-23T07:42:02.383Z',
    '2021-01-28T09:15:04.904Z',
    '2021-04-01T10:17:24.185Z',
    '2021-12-25T14:11:59.604Z',
    '2021-12-27T17:01:17.194Z',
    '2021-12-29T23:36:17.929Z',
    '2021-12-30T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US', // de-DE
};

const account2 = {
  owner: 'Rebecca L Yantis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  hasLoan: false,
  loanAmount: 0,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  if (daysPassed === 1) return 'Yesterday';
  else {
    return new Intl.DateTimeFormat(locale).format(date);
  }
};
const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
// Display Movements
const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(account.movementsDates[i]);
    const displayDate = formatMovementDate(date, account.locale);

    //

    const html = `
	  <div class="movements__row">
		<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
		<div class="movements__date">${displayDate}</div>
		<div class="movements__value">${formatCurrency(
      mov,
      account.locale,
      account.currency
    )}</div>
	  </div>
	`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatCurrency(
    incomes,
    acc.locale,
    acc.currency
  )}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formatCurrency(out, acc.locale, acc.currency)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formatCurrency(
    interest,
    acc.locale,
    acc.currency
  )}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(account1);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Create Current Date
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };
    const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Add Transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Add Loan Date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//!START SECTION 12 //////////////////////////////////////////////////////////

//! Converting and Checking Numbers

// console.log(23 === 23.0); //true...all are floating point numbers
// console.log(0.1 + 0.2); //0.30000000000000004
// // This is why you can not do precise scientific or financial calculations in JS
// console.log(0.1 + 0.2 === 0.3); //False

// // Convert to number
// console.log(Number('23'));
// console.log(+'23');

// // Parsing
// console.log(Number.parseInt('94px', 10)); //94  ... the 10 means base 10... use 2 for binary
// console.log(Number.parseInt('2.5rem')); //2
// console.log(Number.parseFloat('2.5rem')); // 2.5

// // is NaN
// console.log(Number.isNaN(20)); //true
// console.log(Number.isNaN('20')); // true
// console.log(Number.isNaN(+'ff')); // true
// console.log(Number.isNaN(23 / 0)); // false

// // Best way to check if number
// console.log(Number.isFinite(20)); //true
// console.log(Number.isFinite('20')); //false
// console.log(Number.isFinite(+'20xf')); // false
// console.log(Number.isFinite(23 / 0)); // false

// //! Math and Rounding

// console.log(Math.sqrt(25)); // 5
// console.log(25 ** (1 / 2)); // 5
// console.log(8 ** (1 / 3)); //2 cuberoot

// console.log(Math.max(5, 23, '67', 84, 24, 23)); //84
// console.log(Math.min(5, 23, '67', 84, 24, 23)); //5

// console.log(Math.PI); //3.141592653589793

// console.log(Math.PI * Number.parseFloat('10px') ** 2); // Area of circle with 10px radius

// // Random

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min + 1)) + min;
// console.log(randomInt(10, 20));

// //Rounding integers

// console.log(Math.trunc(23.6)); // 23 Takes decimal away only

// console.log(Math.round(23.3)); //23
// console.log(Math.round(23.6)); //24

// console.log(Math.ceil(23.3)); //24
// console.log(Math.ceil(23.6)); //24

// console.log(Math.floor(23.6)); //23
// console.log(Math.floor(23.3)); //23

// // Rounding Decimals
// console.log((2.7).toFixed(0)); // String of 3
// console.log((2.2).toFixed(0)); // String of 2

// console.log((2.2).toFixed(1)); // String of 2.2
// console.log((2.7).toFixed(1)); // String of 2.7

// console.log((2.1234556).toFixed(3)); // String of 2.123
// console.log(+(2.734567257).toFixed(3)); // Number of 2.735

// //! The Remainder Operator

// console.log(5 % 2); //1

// const isEven = n => n % 2 === 0;

// //! Numeric Separators

// const diameter = 287_460_000_000;
// console.log(diameter);

// const priceCents = 34_99;

// const transferFee = 15_00;
// const transferFee2 = 1_500;

// //! Working with BigInt

// //JavaScript Numbers are stored in 64bits..53 bits or 1s and 0s for numbers and rest for signs and decimals

// const biggestNum = Number.MAX_SAFE_INTEGER;
// console.log(biggestNum); //9007199254740991
// // Things get weird after this number

// console.log(34053456236234562345623462346234623n); // Now this is a bigInt
// console.log(BigInt(239429354567458458));

// //operations
// console.log(1000000n * 2340234056n);

// // You just can not mix BigInts and other types...because they are stored in seperate places

// // You can compare between though like:
// console.log(20n > 19); //true

// //! Creating Dates

// Create a date

// const now = new Date();
// console.log(now); //Thu Dec 30 2021 06:27:01 GMT-0700 (Mountain Standard Time)

// console.log(new Date('December 24')); //Mon Dec 24 2001 00:00:00 GMT-0700 (Mountain Standard Time)

// console.log(new Date(account1.movementsDates[0])); //Mon Nov 18 2019 14:31:17 GMT-0700 (Mountain Standard Time)

// // pick a date exactly 4 days from jan 01 1970
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sat Jan 03 1970 17:00:00
// const timestamp = 3 * 24 * 60 * 60 * 1000;
// console.log(timestamp); // = 259200000

// Working with date methods

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future); //Thu Nov 19 2037 15:23:00 GMT-0700 (Mountain Standard Time)
// console.log(future.getFullYear()); //2037
// console.log(future.getMonth()); // 10  ---This is November because 0 based
// console.log(future.getDate()); // 19 <---day
// console.log(future.getHours()); // 15
// console.log(future.getMinutes()); // 23
// console.log(future.getTime()); //2142282180000   <--- timestamp
// console.log(future.getTimezoneOffset()); // 420
// console.log(future.toISOString()); //2037-11-19T22:23:00.000Z
// console.log(future.toDateString()); //Thu Nov 19 2037
// console.log(future.getTime()); // 2142282180000 milliseconds since jan 1 1970

// console.log(new Date(2142282180000)); //Thu Nov 19 2037 15:23:00 GMT-0700 (Mountain Standard Time)
// console.log(Date.now()); //1640871640326

// future.setFullYear(2021);
// console.log(future); //Fri Nov 19 2021

//! Adding Dates to Bankist App (see app)

//! Operations With Dates

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future); //2142282180000

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 10, 19), new Date(2037, 11, 19));
// console.log(days1); // 30

//! Internationalizing Dates (Intl)
// New API to Internationalize things in JavaScript

//! Internationalizing Numbers (Intl)

const num = 12387.23;
const options = {
  style: 'unit',
  unit: 'mile-per-hour',
};
console.log('US: ', new Intl.NumberFormat('en-US').format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE').format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);

console.log(new Intl.NumberFormat(navigator.language, options).format(34));

//! Timers: setTimeout and setInterval
