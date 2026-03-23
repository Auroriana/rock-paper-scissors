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

function getHumanChoice() {
    let human = prompt("Whats your choice? (1)Rock, (2)Paper, or (3)Scissors?")

    if (human == 1) {
        return "Rock"
    } else if (human == 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

console.log(getComputerChoice())
console.log(getHumanChoice())

