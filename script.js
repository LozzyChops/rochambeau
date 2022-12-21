const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
let playerScore = 0;
let computerScore = 0;

/* Function returns 'Rock', 'Paper', or 'Scissors' */
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

/* Function takes playerSelection and computerSelection, displays string declaring winner of round, and increments playerScore or computerScore. */
function playRound(playerSelection, computerSelection) { 
    if (playerSelection === "rock" && computerSelection === "paper") {
        const p = document.createElement('p')
        p.innerText = "Computer wins! Paper beats rock!";
        outcomeDiv.appendChild(p);
        computerScore++;
        return (playerScore, computerScore);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        const p = document.createElement('p')
        p.innerText = "You win! Rock beats scissors!";
        outcomeDiv.appendChild(p);
        playerScore++;
        return (playerScore, computerScore);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        const p = document.createElement('p')
        p.innerText = "Computer wins! Scissors beats paper!";
        outcomeDiv.appendChild(p);
        computerScore++;
        return (playerScore, computerScore);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        const p = document.createElement('p')
        p.innerText = "You win! Paper beats rock!";
        outcomeDiv.appendChild(p);
        playerScore++;
        return (playerScore, computerScore);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        const p = document.createElement('p')
        p.innerText = "You win! Scissors beats paper!";
        outcomeDiv.appendChild(p);
        playerScore++;
        return (playerScore, computerScore);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        const p = document.createElement('p')
        p.innerText = "Computer wins! Rock beats scissors!";
        outcomeDiv.appendChild(p);
        computerScore++;
        return (playerScore, computerScore);
    } else {
        const p = document.createElement('p')
        p.innerText = "Tie!";
        outcomeDiv.appendChild(p);
        return (playerScore, computerScore);
    }
}

const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = `You won ${playerScore} to ${computerScore}! Great job!`;
        outcomeDiv.appendChild(h2);

    } else if (computerScore === 5) {    
        const h2 = document.createElement('h2');
        h2.innerText = `You lost ${playerScore} to ${computerScore}! Too bad!`;
        outcomeDiv.appendChild(h2);
    }
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
    console.log(playerScore, computerScore);
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
    console.log(playerScore, computerScore);
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
    console.log(playerScore, computerScore);
})