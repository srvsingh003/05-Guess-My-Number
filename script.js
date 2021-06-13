'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = ' correct Number  ';

// // console.log((document.querySelector('.number').textContent = 12));
// // console.log((document.querySelector('.score').textContent = 13));
// console.log((document.querySelector('.number').textContent = 15));

// document.querySelector('.score').textContent = 22;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //   console.log(typeof guess);

  // when theres no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ no number';

    // when players wins
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = '🎉 Correct Answer!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      document.querySelector(' .message').textContent =
        guess > secretnumber ? '📉Too high!' : '📈Too low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' you lost the game ';
      document.querySelector(' .score').textContent = 0;
    }
  }

  // number is high
  // } else if (guess > secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(' .message').textContent = ' 📉Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' you lost the game ';
  //     document.querySelector(' .score').textContent = 0;
  //   }

  //   //number is low
  // } else if (guess < secretnumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' 📈Too low !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' you lost the game ';
  //     document.querySelector('.score').textContent = 0;
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = ' start guessing... ';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector(' body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
});
