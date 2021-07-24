'use strict';

// TODO:
// MORE: Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// TODO: function
const displayMessageFunc = function (message) {
  document.querySelector('.message').textContent = message;
};

// TODO: addEventListener
// MORE: check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // MORE:When there is no input
  if (!guess) {
    displayMessageFunc('⛔️ No number!');

    // MORE: When player wins
  } else if (guess === secretNumber) {
    displayMessageFunc('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // MORE: When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessageFunc(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessageFunc('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// MORE: again button
document.querySelector('.again').addEventListener('click', function () {
  // MORE: re-initialize all variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // MORE: re-initialize all messages and input
  displayMessageFunc('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // MORE: re-initialize the style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
