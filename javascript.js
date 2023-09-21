function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let output = options[Math.floor((Math.random() * options.length))];
    return output;
}

function playRound(playerSelection, computerSelection) {
    let result = "error";
    let player = playerSelection.toLowerCase();

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

const playerSelection = "pApeR";
const computerSelection = getComputerChoice();
console.log("player = " + playerSelection);
console.log("computer = " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
