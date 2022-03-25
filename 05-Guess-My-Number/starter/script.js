'use strict';
//textContent property
// console.log(document.querySelector('.message').textContent);

//DOM? DOM Manipulation
//--> Document Object Model
//DOM Manipulation
// document.querySelector('.message').textContent = '🎉 Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

//inout field
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//button click ==> event listener
//event handler

//random number between 1 and 20
let score = 20;
let highscore = 0;
const secret = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '😖 No Number!';
  } else if (guess === secret) {
    document.querySelector('.message').textContent = '👍 Corect Number!';
    if (highscore < score) highscore = score;
  } else {
    if (score > 1) {
      if (guess > secret) {
        document.querySelector('.message').textContent = 'too Big!';
        score--;
        document.querySelector('.score').textContent = score;
      } else if (guess < secret) {
        document.querySelector('.message').textContent = 'too Small! ';
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'You lose the game!';
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Strat guessing...';
  document.querySelector('.guess').textContent = ' ';
});
