'use strict';
/*
document.querySelector('.message').textContent = "🎉 Correct Number";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 23;
*/
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');

checkBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '📛 No number';
  }
});
