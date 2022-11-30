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

    return computerChoice;
}

/* Function takes playerSelection and computerSelection and returns string declaring winner of round. */
function playRound(playerSelection, computerSelection) {
    let resultAnnouncement;
    
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        resultAnnouncement = "Computer wins! Paper beats rock!";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        resultAnnouncement = "You win! Rock beats scissors!";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        resultAnnouncement = "Computer wins! Scissors beats paper!";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        resultAnnouncement = "You win! Paper beats rock!";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        resultAnnouncement = "You win! Scissors beats paper!";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        resultAnnouncement = "Computer wins! Rock beats scissors!";
    } else {
        resultAnnouncement = "Tie!";
    }
    
    return resultAnnouncement;
}

/* Function calls playRound five times and keeps score and reports a winner and lose at the end. */
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Round " + (i + 1) + ":  Rock, paper, scissors, GO!");
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));

        if (playRound(playerSelection, computerSelection) === "Computer wins! Paper beats rock!" || playRound(playerSelection, computerSelection) === "Computer wins! Scissors beats paper!" || playRound(playerSelection, computerSelection) === "Computer wins! Rock beats scissors!") {
            computerWins++;
        } else if (playRound(playerSelection, computerSelection) === "You win! Rock beats scissors!" || playRound(playerSelection, computerSelection) === "You win! Paper beats rock!" || playRound(playerSelection, computerSelection) === "You win! Scissors beats paper!") {
            playerWins++;
        } 
    }

    if (computerWins > playerWins) {
        console.log("The winner is the computer!");
    } else if (playerWins > computerWins) {
        console.log("You win!");
    } else {
        console.log("It's a tie!");
    }
}

let computerWins = 0;
let playerWins = 0;
game();