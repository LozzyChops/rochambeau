/* Function returns 'Rock', 'Paper', or 'Scissors' */
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        computerChoice = "Rock";
    } else if (computerChoice === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    /* Temp */
    console.log(computerChoice);

    return computerChoice;
}

/* Function takes playerSelection and computerSelection and returns string declaring winner of round. */
/* Function's playerSelection parameter needs to be case-insensitive */
function playRound(playerSelection, computerSelection) {
    let resultAnnouncement;
    
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        resultAnnouncement = "You lose! Paper beats rock!";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        resultAnnouncement = "You win! Rock beats scissors!";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        resultAnnouncement = "You lose! Scissors beats paper!";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        resultAnnouncement = "You win! Paper beats rock!";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        resultAnnouncement = "You win! Scissors beats paper!";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        resultAnnouncement = "You lose! Rock beats scissors!";
    } else {
        resultAnnouncement = "Tie! Try again!";
    }
    
    return resultAnnouncement;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));