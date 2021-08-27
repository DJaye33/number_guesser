'use strict';
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const gameScore = document.querySelector('.score');
const body = document.querySelector('body');
const number = document.querySelector('.number');
const playAgain = document.querySelector('.again');
const inputGuess = document.querySelector('.guess');
const gameHighScore = document.querySelector(".highscore");

let score = 20;
let highScore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;

checkBtn.addEventListener('click', () => {
  const guess = Number(inputGuess.value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    message.textContent = '📛 No number';

    // When the player wins
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number';
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    // check if score is greater than highscore
    if (score > highScore) {
        highScore = score;
        gameHighScore.textContent = highScore;
    }
    //When gues is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high!';
      score--;
      gameScore.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      gameScore.textContent = 0;
    }
    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too Low!';
      score--;
      gameScore.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      gameScore.textContent = 0;
    }
  }
});

// Play game over (reset)
playAgain.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  gameScore.textContent = score;
  inputGuess.value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
