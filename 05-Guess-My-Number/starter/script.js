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
let secret = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //no input
  if (!guess) {
    document.querySelector('.message').textContent = '😖 No Number!';
    //win
  } else if (guess === secret) {
    document.querySelector('.message').textContent = '👍 Correct Number!';
    document.querySelector('body').style.backgroundColor = "#60b347";
    if (highscore < score) highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secret;
  } else {
    if (score > 1) {
      // too high
      if (guess > secret) {
        consequence(0);
      }
      //to low 
      else if (guess < secret) {
        consequence(1);
      }
    } else {
      document.querySelector('.message').textContent = '💥 You lose the game!';
      document.querySelector('body').style.backgroundColor = '#FF2233';

    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Strat guessing...';
  document.querySelector('.guess').textContent = ' ';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secret = Math.trunc(Math.random() * 20) + 1;
});


const consequence = a => {
  //win
  if (a === 0) {
    document.querySelector('.message').textContent = 'too Big!';

  } else { document.querySelector('.message').textContent = 'too Small!'; }
  score--;
  document.querySelector('.score').textContent = score;
}