let humanScore = 0
let computerScore = 0
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function getHumanChoice() {
    let human = prompt("Whats your choice? Rock, Paper, or Scissors?")
    return human
}

function getComputerChoice() {
    i = Math.floor(Math.random() *3)+1
    if (i == 1) {
        return "Rock"
    } else if (i == 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(human, computer) {
    const h = human.toLowerCase();
    const c = computer.toLowerCase();

    if (h === c) { 
        return "Tie!"
    }

    if (
        (h === "rock" && c === "scissors") ||
        (h === "paper" && c === "rock") ||
        (h ==="scissors" && c === "paper")
    )   {
        return 'Your win!'
    }

    if (h !== "rock" && h !== "paper" && h !== "scissors") {
        console.log("Please enter something valid!")
        let newChoice = getHumanChoice();
        return playRound(newChoice, computer);
    }

    return "You lose:D"
}

console.log(playRound(humanChoice, computerChoice))
console.log(`Player chose: ${humanChoice} | Computer chose: ${computerChoice}`);

