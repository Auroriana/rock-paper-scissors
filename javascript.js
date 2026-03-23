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

console.log(getComputerChoice())

