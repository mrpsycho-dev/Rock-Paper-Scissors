"use strict";
const rockEl = document.querySelector(".rock");
const paperEl = document.querySelector(".paper");
const scissorsEl = document.querySelector(".scissors");
const resultEl = document.querySelector(".result");

let guess, rock, paper, scissors, random;
const init = function () {
  random = Math.trunc(Math.random() * 3) + 1;
};
init();
// console.log(random);

const message = function (x, y, z) {
  if (random === 1) {
    resultEl.textContent = x;
  } else if (random === 2) {
    resultEl.textContent = y;
  } else if (random === 3) {
    resultEl.textContent = z;
  }
};
const r = `Computer chose Rock.`;
const p = `Computer chose Paper.`;
const s = `Computer chose Scissors.`;

rockEl.addEventListener("click", function () {
  message(`It's a draw! ${r}`, `You lose :(( ${p} `, `You win :D ${s}`);
  init();
});
paperEl.addEventListener("click", function () {
  message(`You win! :D ${r}`, `It's a draw! ${p}`, `You lose :(( ${s}`);
  init();
});
scissorsEl.addEventListener("click", function () {
  message(`You lose :(( ${r}`, `You win :D ${p}`, `It's a draw! ${s}`);
  init();
});
