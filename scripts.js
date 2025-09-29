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
//console.log(getComputerChoice()); DELETE ME
function getHumanChoice() {
    let n = prompt("Please enter rock, paper, or scissors") 
    return n;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice) {
        console.log(`Draw! You both picked ${computerChoice}`);
    }
    if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {
        console.log("You Lose! paper beats rock")
        computerScore++;
    }
    if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') {
        console.log("You Win! rock beats scissors")
        humanScore++;
    }
    if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'scissors') {
        console.log("You Lose! scissors beat paper")
        computerScore++;
    }
    if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'rock') {
        console.log("You Win! paper beats rock")
        humanScore++;
    }
    if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {
        console.log("You Lose! rock beats scissors")
        computerScore++;
    }
    if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
        console.log("You Win! scissors beat paper")
        humanScore++;
    }
    console.log(`Human: ${humanScore} \nComputer: ${computerScore}`)
}

let humanScore = 0;
let computerScore = 0;

for (i = 0; i < 5; i++) {
    let humanTurn = getHumanChoice();
    let computerTurn = getComputerChoice();
    playRound(humanTurn, computerTurn);
}







