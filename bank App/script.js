'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//lets add some display change to our movment class i.e. where movement is shown

const displayMovements = function (movement) {
  containerMovements.innerHTML = ''; //set previous html containt to empty //similar to textcontent
  movement.forEach(function (mov, i) {
    let type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html); //to insert html containt in webpage exictely same
  });
};
displayMovements(account1.movements);

//to display  total money in account creating function
const displayMomentsMoney = function (money) {
  const totalBalance = money.reduce(function (acc, mon) {
    return acc + mon;
  }, 0);
  console.log(totalBalance);
  labelBalance.textContent = `${totalBalance} 💰`;
};
displayMomentsMoney(account1.movements);

//creaating a function that convet owner full name to user account sign in name
const createUserName = function (accountDetails) {
  accountDetails.forEach(function (accountDetails) {
    accountDetails.UserName = accountDetails.owner
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('')
      .toLowerCase();
  });
};
const user = 'Jonas Schmedtmann';
const userName = user
  .split(' ')
  .map(function (name) {
    return name[0];
  })
  .join('')
  .toLowerCase();
