'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Eric P Yantis',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  hasLoan: false,
  loanAmount: 0,
};

const account2 = {
  owner: 'Rebecca L Yantis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  hasLoan: false,
  loanAmount: 0,
};

const account3 = {
  owner: 'Joseph A Yantis',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  hasLoan: false,
  loanAmount: 0,
};

const account4 = {
  owner: 'Edison S Yantis',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  hasLoan: false,
  loanAmount: 0,
};

const account5 = {
  owner: 'Zachary A Yantis',
  movements: [430, 1000, 700, -50, 90],
  interestRate: 0.6,
  pin: 5555,
  hasLoan: false,
  loanAmount: 0,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const labelLoanAmount = document.querySelector('.loanAmount');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnPayLoan = document.querySelector('.form__btn--payloan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
let currentAccount;
/////////////////////////////////////////////////

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  //Slice to make copy so original array is unsorted
  const movs = sort
    ? movements.slice().sort((mov1, mov2) => mov1 - mov2)
    : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
		<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
		<div class="movements__value">${mov}</div>
	</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acct) {
  acct.balance = acct.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acct.balance}€`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;
  const withdrawals = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(withdrawals)}€`;
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
  labelLoanAmount.textContent = `${
    currentAccount.hasLoan ? `Current Loan: ${currentAccount.loanAmount}` : ''
  }`;
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

const UpdateUI = function (account) {
  displayMovements(account.movements);
  calcDisplayBalance(account);
  calcDisplaySummary(account);
};

//!EVENT HANDLERS

//LOGIN BUTTON
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // Clear Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    containerApp.style.opacity = 100;
    // Display movement balance and summary
    UpdateUI(currentAccount);
  } else {
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Invalid Information';
  }
});

// TRANSFER BUTTON
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const transferAmount = Number(inputTransferAmount.value);
  transferAcc.find;

  if (
    transferAmount > 0 &&
    transferAmount <= currentAccount.balance &&
    transferAcc?.username !== currentAccount.username
  )
    transferAcc.movements.push(transferAmount);
  currentAccount.movements.push(-transferAmount);
  inputTransferTo.value = inputTransferAmount.value = '';
  UpdateUI(currentAccount);
});
// LOAN BUTTON
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    currentAccount.hasLoan === false &&
    amount > 0 &&
    currentAccount.movements.some(mov => mov >= amount * 0.1)
  ) {
    currentAccount.hasLoan = true;
    currentAccount.movements.push(amount);
    currentAccount.loanAmount = amount;
  }
  UpdateUI(currentAccount);
  inputLoanAmount.value = '';
});
// PAYBACK LOAN BUTTON
btnPayLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    currentAccount.hasLoan === true &&
    amount > 0 &&
    amount < currentAccount.loanAmount
  ) {
    currentAccount.loanAmount = currentAccount.loanAmount - amount;
    currentAccount.movements.push(-amount);
    UpdateUI(currentAccount);
    inputLoanAmount.value = '';
  } else if (
    currentAccount.hasLoan === true &&
    amount > 0 &&
    amount === currentAccount.loanAmount
  ) {
    currentAccount.hasLoan = false;
    currentAccount.loanAmount = currentAccount.loanAmount - amount;
    currentAccount.movements.push(-amount);
    UpdateUI(currentAccount);
    inputLoanAmount.value = '';
  }
});
// CLOSE ACCT BUTTON
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Delete Account
    accounts.splice(index, 1);

    // Reset UI
    containerApp.style.opacity = 0;
    inputCloseUsername.value = inputClosePin.value = '';
  }
});
// SORT BUTTON
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementsUI);
