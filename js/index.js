"use strict";

const NumberOfScore = document.querySelector(".score-sum");
const menu = document.querySelector(".menu");
const playArea = document.querySelector(".main");
const gameOver = document.querySelector(".game-over");
const startGameButton = document.querySelector(".play");
const resetGameButton = document.querySelector(".reset");
const ball = document.querySelector(".ball");
const scoreCounter = document.querySelector(".score-counter");
const timeCounter = document.querySelector(".time-counter");

function resetGame() {
  location.reload();
} // using to reload page

function timer() {
  timeCounter.textContent = parseInt(timeCounter.textContent - 1);
  if (timeCounter.textContent === "-1") {
    gameOver.style.display = "flex";
    NumberOfScore.textContent = scoreCounter.textContent;
  }
} // decrease time on 1 sec and return block "game over" when time will be -1 sec

function StartTimer() {
  setInterval(timer, 1000);
} // activate timer

resetGameButton.addEventListener("click", resetGame); // after pressing on "Play again" the game will be restarted

startGameButton.addEventListener("click", () => {
  menu.style.display = "none";
  playArea.style.display = "block";
}); // hide menu after pressing "START GAME"

startGameButton.addEventListener("click", StartTimer); // after pressing on "START GAME" timer will be on and game will be started

ball.addEventListener("click", () => {
  const coords = [1690, 830];
  ball.style.left = Math.random() * coords[0] + "px";
  ball.style.top = Math.random() * coords[1] + "px";
}); //random position of ball when clicked on ball

ball.addEventListener("click", () => {
  scoreCounter.textContent = parseInt(scoreCounter.textContent) + 1;
}); // increase score (+1) after clicking on ball
