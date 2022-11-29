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
    <div class="movements__value">${mov}💰</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html); //to insert html containt in webpage exictely same
  });
};

//displaying in out and total in the bank

const displaydepositAndWithdrawlMoney = function (acc) {
  const deposit = acc.movements
    .filter(money => money > 0)
    .reduce((depst, mov) => mov + depst, 0);
  labelSumIn.textContent = `${deposit}💰`;
  const withdrawal = acc.movements
    .filter(mov => mov < 0)
    .reduce((withdrl, money) => withdrl + money, 0);
  labelSumOut.textContent = `${Math.abs(withdrawal)}⛔`;

  const intrest = acc.movements
    .filter(mov => mov > 0)
    .map(function (deposit) {
      return (deposit * acc.interestRate) / 100;
    })
    .reduce((add, intrst) => add + intrst, 0);
  labelSumInterest.textContent = `${intrest.toFixed(2)}💰`;
};

//to display  total money in account creating function
const displayMomentsMoney = function (acc) {
  acc.totalBalance = acc.movements.reduce(function (acc, mon) {
    return acc + mon;
  }, 0);

  labelBalance.textContent = `${acc.totalBalance}💰`;
};

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
createUserName(accounts);
//defining  ui update function
const uiUpdate = function (acc) {
  //displaying total balance
  displayMomentsMoney(acc);
  //displaying momments
  displayMovements(acc.movements);
  //displaying deposit withdrawl and interest
  displaydepositAndWithdrawlMoney(acc);
};
//creating login page
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //prevent from refreshing page again and again
  //for finding current accout
  currentAccount = accounts.find(
    acc => acc.UserName === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //displaying label welcome
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    labelWelcome.style.color = 'green';
    //clearing text label
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur(); //to inactive text area
    inputLoginUsername.blur(); // to in active text area
    containerApp.style.opacity = 100;
    //ui update
    uiUpdate(currentAccount);
  } else {
    labelWelcome.textContent = 'Wrong Input ⚠️';
    labelWelcome.style.color = 'red';
    containerApp.style.opacity = 0;
  }
});

//define function for ui update for fund transfer.
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); //prevent from defult realoding
  const transferAmount = Number(inputTransferAmount.value);
  const transferAccount = accounts.find(
    acc => acc.UserName == inputTransferTo.value
  );
  if (
    transferAmount > 0 &&
    transferAccount &&
    currentAccount.totalBalance >= transferAmount &&
    transferAccount.UserName !== currentAccount.UserName
  ) {
    //doing transfer
    currentAccount.movements.push(-transferAmount);
    transferAccount.movements.push(transferAmount);
    uiUpdate(currentAccount);
  } else {
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

//adding event listener for close button
btnClose.addEventListener('click', function (e) {
  e.preventDefault(); //prevent from defult realoding
  if (
    inputCloseUsername.value == currentAccount.UserName &&
    currentAccount.pin == Number(inputClosePin.value)
  ) {
    console.log('wright input');
    const findAccount = accounts.findIndex(
      acc => acc.UserName == currentAccount.UserName
    );
    accounts.splice(findAccount, 1);
    inputCloseUsername.value = inputClosePin.value = '';
    containerApp.style.opacity = 0;
  }
});
console.log(accounts);
