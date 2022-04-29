'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const focus = function(){
  document.querySelector('.guess').focus();    
  };


const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click',guessMyNumber)

function guessMyNumber(){
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!, try again');
    focus();
  
  } else if (guess === secretNumber) {
    displayMessage('🍕 Correct Number!')
    // document.querySelector('.message').textContent = '🍕 Correct Number!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = score;

    if(score > highscore){
      highscore = score;
    }

  }else if (guess !== secretNumber ){
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!, try again': '📉 Too Low!, try again')
          score--;
          document.querySelector('body').style.backgroundColor = 'red';
          document.querySelector('.score').textContent = score;
          document.querySelector('.guess').value = '';
          focus();

        } else {
          displayMessage('You lost the game ')
          document.querySelector('.score').textContent = 0;
        }
      }
  };


document.querySelector('.again').addEventListener('click',resetGame)

function resetGame(){
   focus();
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...')
    // document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.highscore').textContent = highscore;
}

// on load
focus();
