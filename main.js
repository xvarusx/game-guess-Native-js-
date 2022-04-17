import { guessMyNumber, randomNumber } from "./vendor/guessMyNumber/main.js";
var correctNumber = randomNumber();
var score = 20,
  highScore = 0;

document.querySelector(".check").addEventListener("click", function (e) {
  e.preventDefault();
  const guess = Number(document.querySelector(".guess").value);
  console.log(Number(guess));
  if (!guess) {
    document.querySelector(".message").textContent = " NOT A NUMBER 📛📛";
  } else {
    document.querySelector(".message").textContent = guessMyNumber(
      guess,
      correctNumber
    );
    if (guessMyNumber(guess, correctNumber) != "correct 😍🎈") {
      document.querySelector(".score").textContent = String(--score);
    } else if (
      score === 0 ||
      guessMyNumber(guess, correctNumber) == "correct 😍🎈"
    ) {
      document.querySelector(".check").disabled = true;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = String(highScore);
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = correctNumber;
      }
    }
    // document.querySelector(".highscore").textContent = string(highScore);
  }
});
document.querySelector(".again").addEventListener("click", function (e) {
  document.querySelector(".check").disabled = false;
  correctNumber = randomNumber();
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "0";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
});
