"use strict";

// --------------------- SELECTORS
const results = document.querySelector(".results");
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const replayButton = document.querySelector(".replay-button");
const scissorsButton = document.querySelector(".scissors-button");
const score = document.querySelector(".score");
const computerScore = document.querySelector(".computer-score");
const userScore = document.querySelector(".user-score");
const body = document.querySelector("body");

// Variable to track game state
let gameActive = true;

// --------------------- Generates a random number that represents the computer's move
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock"; // This is rock
  } else if (randomNumber === 1) {
    return "paper"; // This is paper
  } else if (randomNumber === 2) {
    return "scissors"; // This is scissors
  }
}

// ---------------------  BUTTONS FOR ROCK, PAPER, SCISSORS, AND REPLAY
rockButton.addEventListener("click", function () {
  if (gameActive) {
    // Check if the game is still active
    const playerChoice = "rock";
    const computerSelection = getComputerChoice();
    playRound(playerChoice, computerSelection);
  }
});

paperButton.addEventListener("click", function () {
  if (gameActive) {
    // Check if the game is still active
    const playerChoice = "paper";
    const computerSelection = getComputerChoice();
    playRound(playerChoice, computerSelection);
  }
});

scissorsButton.addEventListener("click", function () {
  if (gameActive) {
    // Check if the game is still active
    const playerChoice = "scissors";
    const computerSelection = getComputerChoice();
    playRound(playerChoice, computerSelection);
  }
});

replayButton.addEventListener("click", function () {
  body.style.backgroundColor = "white";
  computerArrayScore.length = 0; // Reset the array
  userArrayScore.length = 0; // Reset the array
  userScore.textContent = "0";
  computerScore.textContent = "0";
  results.textContent = "";

  // Reset game state and allow buttons to work again
  gameActive = true;
});

const computerArrayScore = [];
const userArrayScore = [];

// --------------------- Function to make the game work
function playRound(playerChoice, computerSelection) {
  // Messages when round is done
  const winMessage = "YOU WIN MUDDAFUCKER!!!! 💪";
  const loseMessage = "You lost like a bitch 🖕. ";
  const tieMessage = "You tied, step it up 😡";

  playerChoice = playerChoice.toLowerCase(); // added this line to convert input to lowercase

  if (playerChoice === "rock") {
    if (computerSelection === "rock") {
      // Computer chose rock.
      results.textContent = `You chose ${playerChoice}, computer chose rock too. ${tieMessage}`;
    } else if (computerSelection === "paper") {
      // Computer chose paper
      results.textContent = `You chose ${playerChoice}, computer chose paper. ${loseMessage}`;
      computerArrayScore.unshift("computer-point");
      console.log(computerArrayScore);
      computerScore.textContent = computerArrayScore.length;
    } else if (computerSelection === "scissors") {
      // Computer chose scissors.
      results.textContent = `You chose ${playerChoice}, computer chose scissors. ${winMessage}.`;
      userArrayScore.unshift("user-point");
      console.log(userArrayScore);
      userScore.textContent = userArrayScore.length;
    }
  } else if (playerChoice === "paper") {
    if (computerSelection === "rock") {
      // Computer chose rock.
      results.textContent = `You chose ${playerChoice}, computer chose rock. ${winMessage}.`;
      userArrayScore.unshift("user-point");
      console.log(userArrayScore);
      userScore.textContent = userArrayScore.length;
    } else if (computerSelection === "paper") {
      // Computer chose paper
      results.textContent = `You chose ${playerChoice}, computer chose paper. ${tieMessage}`;
    } else if (computerSelection === "scissors") {
      // Computer chose scissors.
      results.textContent = `You chose ${playerChoice}, computer chose scissors. ${loseMessage}`;
      computerArrayScore.unshift("computer-point");
      console.log(computerArrayScore);
      computerScore.textContent = computerArrayScore.length;
    }
  } else if (playerChoice === "scissors") {
    if (computerSelection === "rock") {
      // Computer chose rock.
      results.textContent = `You chose ${playerChoice}, computer chose rock. ${loseMessage}`;
      computerArrayScore.unshift("computer-point");
      console.log(computerArrayScore);
      computerScore.textContent = computerArrayScore.length;
    } else if (computerSelection === "paper") {
      // Computer chose paper
      results.textContent = `You chose ${playerChoice}, computer chose paper. ${winMessage}.`;
      userArrayScore.unshift("user-point");
      console.log(userArrayScore);
      userScore.textContent = userArrayScore.length;
    } else if (computerSelection === "scissors") {
      // Computer chose scissors.
      results.textContent = `You chose ${playerChoice}, computer chose scissors too. ${tieMessage}`;
    }
  }

  // Call the winning condition check after each round
  checkWinningCondition();
}

// -----------------------Winning feature
function checkWinningCondition() {
  if (computerArrayScore.length === 5) {
    results.textContent = "Computer won the game :(";
    body.style.backgroundColor = "red";
    gameActive = false;
  } else if (userArrayScore.length === 5) {
    results.textContent = "YOU WON THE GAME!!!!";
    body.style.backgroundColor = "greenyellow";
    gameActive = false;
  }
}
