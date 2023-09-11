"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
// console.log((document.querySelector(".number").textContent = 13));
// console.log((document.querySelector(".score").textContent = 10));
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

const number = Math.trunc(Math.random() * 20) + 1;
//

let score = 20;
let Highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  //   console.log(document.querySelector(".guess").value);
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //document.querySelector(".message").textContent = "Correct Number!";

  //no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  }
  //correct number
  else if (number === guess) {
    console.log((document.querySelector(".number").textContent = number));
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
  }
  //too low
  else if (number > guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Is Too Low";
      score--;
      console.log((document.querySelector(".score").textContent = score));
    } else {
      document.querySelector(".message").textContent = "You Lost the Game";
    }
  }
  //too high
  else if (number < guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Is Too High";
      score--;
      console.log((document.querySelector(".score").textContent = score));
    } else {
      document.querySelector(".message").textContent = "You Lost the Game";
    }
  }
});

// function refresh() {
//   window.location.reload();
// }

// document.querySelector(".again").addEventListener("click", function () {
//   window.location.reload();
//   if (score > Highscore) {
//     Highscore = score;
//     console.log((document.querySelector(".highscore").textContent = Highscore));
//   }
// });
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
