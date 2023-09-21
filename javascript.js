const playerSelection = "Rock";
const computerSelection = getComputerChoice();
const prompt=require("prompt-sync")({sigint:true});

// Return a random output of Rock, Paper, or Scissors
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let output = options[Math.floor((Math.random() * options.length))];
    return output;
}

// Returns the result of one round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    let result = "error";

    playerSelection = prompt("Rock, Paper, or Scissors?");
    let player = playerSelection.toLowerCase();

    computerSelection = getComputerChoice();

    if ((player == "rock" && computerSelection == "Scissors") ||
    (player == "paper" && computerSelection == "Rock") ||
    (player == "scissors" && computerSelection == "Paper")) {
        result = "You Win!"
    } else if ((player == "rock" && computerSelection == "Paper") ||
    (player == "paper" && computerSelection == "Scissors") ||
    (player == "scissors" && computerSelection == "Rock")) {
        result = "You Lose!"
    } else if (player == computerSelection.toLowerCase()) {
        result = "Tie Game!"
    } else {
        return result;
    }
    return result;
}

// Plays a game (5 rounds) of Rock, Paper, Scissors
function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let outcome = "error";

    for (let i = 0; i < 5; i++) {
        outcome = playRound(playerSelection, computerSelection);
        
        if (outcome == "You Win!") {
            playerPoints++;
            console.log("You won this round! The score is " + playerPoints.toString() + " - " + computerPoints.toString());
        } else if (outcome == "You Lose!") {
            computerPoints++;
            console.log("You lost this round! The score is " + playerPoints.toString() + " - " + computerPoints.toString());
        } else if (outcome == "Tie Game!") {
            i--;
            console.log("It's a tie! The score is " + playerPoints.toString() + " - " + computerPoints.toString());
        } else {
            i--;
            console.log("Invalid input! Please enter Rock, Paper, or Scissors.")
        }
    }

    if (playerPoints > computerPoints) {
        outcome = "You Win! The Score is " + playerPoints.toString() + " - " + computerPoints.toString();
    } else {
        outcome = "You Lose! The Score is " + playerPoints.toString() + " - " + computerPoints.toString();
    }
    return outcome;
}

console.log(game());


