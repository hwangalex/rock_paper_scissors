let playerSelection = "";
let computerSelection = "";
let playerPoints = 0;
let computerPoints = 0;
//const prompt = require("prompt-sync")({sigint:true}); -- Used before UI


// Return a random output of Rock, Paper, or Scissors
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let output = options[Math.floor((Math.random() * options.length))];
    return output;
}

// Returns the result of one round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    let result = "error";
    let outcome = "";

    //playerSelection = prompt("Rock, Paper, or Scissors?"); -- Used before UI
    let player = playerSelection.toLowerCase();

    if ((player == "rock" && computerSelection == "Scissors") ||
    (player == "paper" && computerSelection == "Rock") ||
    (player == "scissors" && computerSelection == "Paper")) {
        result = "You Win!"
        playerPoints++;
        outcome = "You won this round! The score is " + playerPoints.toString() + " - " + computerPoints.toString();
    } else if ((player == "rock" && computerSelection == "Paper") ||
    (player == "paper" && computerSelection == "Scissors") ||
    (player == "scissors" && computerSelection == "Rock")) {
        result = "You Lose!"
        computerPoints++;
        outcome = "You lost this round! The score is " + playerPoints.toString() + " - " + computerPoints.toString();
    } else if (player == computerSelection.toLowerCase()) {
        result = "Tie Game!"
        outcome = "It's a tie! The score is " + playerPoints.toString() + " - " + computerPoints.toString();
    } else {
        return result;
    }
    return outcome;
}


// Plays a game (5 rounds) of Rock, Paper, Scissors -- Used before UI
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


// The DOM
const container = document.querySelector('#container');
const resultDiv = document.querySelector('#result');
const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

// Player chooses rock
rockButton.addEventListener('click', () => {
    playerSelection = 'Rock';
    computerSelection = getComputerChoice();
    const result = playRound('Rock', computerSelection);
    displayPlayerComputerSelection(playerSelection, computerSelection)
    displayResult(result);
    displayVictor();
});

// Player chooses paper
paperButton.addEventListener('click', () => {
    playerSelection = 'Paper';
    computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    displayPlayerComputerSelection(playerSelection, computerSelection)
    displayResult(result);
    displayVictor();
});

// Player chooses scissors
scissorsButton.addEventListener('click', () => {
    playerSelection = 'Scissors';
    computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    displayPlayerComputerSelection(playerSelection, computerSelection)
    displayResult(result);
    displayVictor();
});

// Displays the result of the game on the web browser
function displayResult(result) {
    const outcome = document.createElement('div');
    outcome.classList.add('outcome');
    outcome.textContent = result;
    resultDiv.appendChild(outcome);
}

// Displays the Player's and Computer's selection
function displayPlayerComputerSelection(playerSelection, computerSelection) {
    const playerInput = document.createElement('div');
    playerInput.classList.add('playerInput');
    playerInput.textContent = "Player: " + playerSelection
    resultDiv.appendChild(playerInput);

    const computerInput = document.createElement('div');
    computerInput.classList.add('computerInput');
    computerInput.textContent = "Computer: " + computerSelection
    resultDiv.appendChild(computerInput);
}

function displayVictor() {
    const victor = document.createElement('div');
    victor.classList.add('victor');

    if (playerPoints >= 5) {
        victor.textContent = "Winner! You're the first to reach 5 points!"
    } else if (computerPoints >= 5) {
        victor.textContent = "Loser! The computer reached 5 points first!"
    }

    resultDiv.appendChild(victor);
}
