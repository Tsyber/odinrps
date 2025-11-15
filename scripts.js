function getComputerChoice() {
    let n = Math.random();
    if (n <= .333) {
        return "rock";
    }
    else if (n <= .666) {
        return "paper";
    }
    else { 
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice) {
        result.textContent = `Draw! You both picked ${computerChoice}`;
    }
    if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {
        result.textContent = "You Lose! paper beats rock";
        computerScore++;
        comp.children[1].textContent = computerScore;
    }
    if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') {
        result.textContent = "You Win! rock beats scissors";
        humanScore++;
        human.children[1].textContent = humanScore;
    }
    if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'scissors') {
        result.textContent = "You Lose! scissors beat paper";
        computerScore++;
        comp.children[1].textContent = computerScore;
    }
    if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'rock') {
        result.textContent = "You Win! paper beats rock";
        humanScore++;
        human.children[1].textContent = humanScore;
    }
    if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {
        result.textContent = "You Lose! rock beats scissors";
        computerScore++;
        comp.children[1].textContent = computerScore;
    }
    if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
        result.textContent = "You Win! scissors beat paper";
        humanScore++;
        human.children[1].textContent = humanScore;
    }
    if (humanScore == 5) {
    const final = document.createElement("p");
    final.textContent = "Player Wins!";
    game.appendChild(final);
    result.textContent = "Click to start again!";
    humanScore = 0;
    computerScore = 0;
    human.children[1].textContent = 0;
    comp.children[1].textContent = 0;
    }
    if (computerScore == 5) {
    const final = document.createElement("p");
    final.textContent = "Computer Wins!";
    game.appendChild(final);
    result.textContent = "Click to start again!";
    humanScore = 0;
    computerScore = 0;
    human.children[1].textContent = 0;
    comp.children[1].textContent = 0;
    }
} 

let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const human = document.querySelector(".player");
const comp = document.querySelector(".computer");
const result = document.querySelector("#results");
const game = document.querySelector(".results");
if (buttons) {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(button.id, getComputerChoice());
        });
    });
} 











