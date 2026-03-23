let humanScore = 0
let computerScore = 0

function getHumanChoice() {
    let human = prompt("Whats your choice? Rock, Paper, or Scissors?")
    return human
}

function getComputerChoice() {
    let i = Math.floor(Math.random() *3)+1
    if (i == 1) {
        return "Rock"
    } else if (i == 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    const h = humanChoice.toLowerCase();
    const c = computerChoice.toLowerCase();

    if (h === c) { 
        return "Tie! you got lucky!"
    }

    if (
        (h === "rock" && c === "scissors") ||
        (h === "paper" && c === "rock") ||
        (h ==="scissors" && c === "paper")
    )   {
        humanScore++;
        return 'Your win!...smh';
    }

    if (h !== "rock" && h !== "paper" && h !== "scissors") {
        console.log("Please enter something valid!")
        let humanChoice = getHumanChoice();
        return playRound(humanChoice, computerChoice);
    }

    computerScore++;
    return `You lose:D ${c} beats ${h}, try again broski`;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`~~ Round: ${i + 1} ~~`)
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Player Score: ${humanScore} |  Computers Score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        alert(`You won the match! Final Score: ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        alert(`The AI outsmarted you. Final Score: ${computerScore} to ${humanScore}`);
    } else {
        alert("It's a draw! Nobody wins this time.");
    }

    if (confirm("Wanna go again scaredy?")) {
        humanScore = 0
        computerScore = 0
        playGame()
    }

    else {
        alert("Okay~ bye bye!")
    }
}

if (confirm("You ready to go against my super smart, super advanced AI?")) {
    playGame();
} else {

    if (confirm("Are you sure sure?")) {
        alert("Scaredy cat. tsk. Ctrl+R when you grow a spine!")
    } 
    
    else {
        alert("Not bad!")
        playGame()
    }
}





