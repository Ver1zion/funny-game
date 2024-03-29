"use strict";

class Game {
  constructor(gameDuration) {
    this.gameDuration = parseInt(gameDuration);
    timeCounter.innerText = this.gameDuration;
  }

  resetGame() {
    location.reload();
  }

  timer = () => {
    this.gameDuration -= 1;
    timeCounter.innerText = this.gameDuration;
    if (timeCounter.innerText === "-1") {
      gameOver.style.display = "flex";
      totalScore.innerText = scoreCounter.innerText;
      this.stopTimer();
    }
  };

  startTimer() {
    this.time = setInterval(this.timer, 1000);
  }

  stopTimer() {
    clearInterval(this.time);
  }

  updateBall() {
    ball.style.left = Math.random() * (playArea.clientWidth - 50) + "px";
    ball.style.top = Math.random() * (playArea.clientHeight - 50) + "px";
    if (parseFloat(ball.style.left) < 25) {
      ball.style.left = Math.random() * (playArea.clientWidth - 50) + "px";
    }
    scoreCounter.innerText = parseInt(scoreCounter.innerText) + 1;
  }

  hideMainMenu() {
    menu.style.display = "none";
    playArea.style.display = "block";
  }
}

const totalScore = document.querySelector(".score-sum");
const menu = document.querySelector(".menu");
const playArea = document.querySelector(".main");
const gameOver = document.querySelector(".game-over");
const startGameButton = document.querySelector(".play");
const resetGameButton = document.querySelector(".reset");
const ball = document.querySelector(".ball");
const scoreCounter = document.querySelector(".score-counter");
const timeCounter = document.querySelector(".time-counter");

const game = new Game("30");

resetGameButton.addEventListener("click", () => {
  game.resetGame();
});

startGameButton.addEventListener("click", () => {
  game.hideMainMenu();
});

startGameButton.addEventListener("click", () => {
  game.startTimer();
});

ball.addEventListener("click", () => {
  game.updateBall();
});
