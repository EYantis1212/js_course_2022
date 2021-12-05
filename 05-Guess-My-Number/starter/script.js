'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
// // Guess my number field
// document.querySelector('.number').textContent = 13;
// // Score field
// document.querySelector('.score').textContent = 10;
// // Guess input
// document.querySelector('.guess').value = 23;
let myNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // IF NO INPUT
  if (!guess) {
    displayMessage(' No Number!');
  }
  // IF WIN
  else if (guess === myNumber) {
    displayMessage(' You Win!!!');
    document.querySelector('.number').textContent = myNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // IF WRONG
  else if (guess !== myNumber) {
    displayMessage(guess > myNumber ? `Too High!` : `Too Low!`);
    score--;
    document.querySelector('.score').textContent = score;
    // IF LOSE
  } else {
    displayMessage('You Lost The Game!');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  myNumber = Math.ceil(Math.random() * 20);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
