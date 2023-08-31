"use strict";

// Generates a random number that represents the computer's move
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return 0; // This is rock
  } else if (randomNumber === 1) {
    return 1; // This is paper
  } else if (randomNumber === 2) {
    return 2; // This is scissors
  }
}

function playRound(playerChoice, computerSelection) {
  // Messages when round is done
  const winMessage = "YOU WIN MUDDAFUCKER!!!! 💪";
  const loseMessage = "You lost like a bitch 🖕. ";
  const tieMessage = "You tied, step it up 😡";

  playerChoice = playerChoice.toLowerCase(); // added this line to convert input to lowercase

  if (playerChoice === "rock") {
    if (computerSelection === 0) {
      // Computer chose rock.
      return `You chose ${playerChoice}, computer chose rock too. ${tieMessage}`;
    } else if (computerSelection === 1) {
      // Computer chose paper
      return `You chose ${playerChoice}, computer chose paper. ${loseMessage}`;
    } else if (computerSelection === 2) {
      // Computer chose scissors.
      return `You chose ${playerChoice}, computer chose scissors. ${winMessage}.`;
    }
  } else if (playerChoice === "paper") {
    if (computerSelection === 0) {
      // Computer chose rock.
      return `You chose ${playerChoice}, computer chose rock. ${winMessage}.`;
    } else if (computerSelection === 1) {
      // Computer chose paper
      return `You chose ${playerChoice}, computer chose paper. ${tieMessage}`;
    } else if (computerSelection === 2) {
      // Computer chose scissors.
      return `You chose ${playerChoice}, computer chose scissors. ${loseMessage}`;
    }
  } else if (playerChoice === "scissors") {
    if (computerSelection === 0) {
      // Computer chose rock.
      return `You chose ${playerChoice}, computer chose rock. ${loseMessage}`;
    } else if (computerSelection === 1) {
      // Computer chose paper
      return `You chose ${playerChoice}, computer chose paper. ${winMessage}.`;
    } else if (computerSelection === 2) {
      // Computer chose scissors.
      return `You chose ${playerChoice}, computer chose scissors too. ${tieMessage}`;
    }
  } else {
    console.log("Enter rock-paper or scissors you idiot 🤡");
  }
}

const playerSelection = prompt("Enter either rock, paper or scissors");

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
