let userName = (prompt("Insert your username"))
let roundNumbers = (prompt("Insert round numbers (5 maximum)"))


let playerScore = 0
let computerScore = 0


function fullGame() {

    function gethumanChoice() {
        let userInput = (prompt("rock, paper or scissors"))

        if (userInput == "rock") {
            return "rock"
        }

        else if (userInput == "paper") {
            return "paper"

        }
        else if (userInput == "scissors") {
            return "scissors"
        }

        else {
            return "error"
        }

    }

    let playerChoice = gethumanChoice()


    console.log(userName + " choses " + playerChoice + ".")

    function getcomputerChoice() {
        let ranNum = (Math.random())

        if (ranNum <= 0.3) {
            return "rock"
        }

        else if (ranNum <= 0.6) {
            return "paper"
        }

        else if (ranNum >= 0.6) {
            return "scissors"
        }
    }

    let computerChoice = getcomputerChoice()
    console.log("Computer choses " + computerChoice + ".")

    function round() {
        if (computerChoice == playerChoice) {
            return ("Draw for this round")
            console.log("player score: " + playerScore)
            console.log("computer score: " + computerScore)
        }
        else if (playerChoice == "rock" && computerChoice == "scissors" ||
            playerChoice == "paper" && computerChoice == "rock" ||
            playerChoice == "scissors" && computerChoice == "paper") {
            playerScore++
            console.log("player score: " + playerScore)
            console.log("computer score: " + computerScore)
            return (userName + " wins this round")
        }
        else {
            computerScore++
            console.log("player score: " + playerScore)
            console.log("computer score: " + computerScore)
            return ("Computer wins this round")
        }
    }
    roundResult = round()
    console.log(roundResult)
}

for (let i = 0; i < roundNumbers; i++) {
    fullGame()
}

console.log("player final score: " + playerScore)
console.log("computer final score: " + computerScore)

if (playerScore > computerScore) {
    console.log("player wins!")
    console.log("game over")
}
else if (playerScore < computerScore) {
    console.log("computer wins!")
    console.log("game over")
}
else {
    console.log("It's a draw!")
    console.log("game over")
}

