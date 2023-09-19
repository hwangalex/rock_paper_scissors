function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let output = options[Math.floor((Math.random() * options.length))];
    return output;
}

function playRound(playerSelection, computerSelection) {
    let result = "error";

    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")) {
        result = "You Win!"
    } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")) {
        result = "You Lose!"
    } else if (playerSelection == computerSelection) {
        result = "Tie Game!"
    } else {
        return result;
    }

    return result;

}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log("player = " + playerSelection);
console.log("computer = " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
