"use strict";
console.log(document.querySelector(".guess").value);

const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let Highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  }

  //correct number
  else if (number === guess) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent = "Correct Number!";
    if (score > Highscore) {
      Highscore = score;
      console.log(
        (document.querySelector(".highscore").textContent = Highscore)
      );
    }
    document.querySelector("body").style.backgroundColor = "#60b347";
    const playagain = (document.querySelector(".again").textContent =
      "Play Again");
  } else if (guess != number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        number > guess ? "Is Too Low" : "Is Too High";
      score--;
      console.log((document.querySelector(".score").textContent = score));
    } else {
      document.querySelector(".message").textContent = "You Lost the Game";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  window.location.reload();
});
