
let userName = ("Player")
let playerScore = 0
let computerScore = 0

const divLog = document.getElementById("log")
const paraPlayer = document.createElement("p");
const paraComputer = document.createElement("p")

const divScore = document.getElementById("score")
const paraScorePlayer = document.createElement("p")
const paraScoreComputer = document.createElement("p")
const roundResult = document.createElement("p")

const resultLog = document.getElementById("game-result")
const gameResult = document.createElement("p")

const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        round(button.id)
    })
})

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

function round(playerChoice) {

    let computerChoice = getcomputerChoice()
    paraPlayer.textContent = ("Player choses " + playerChoice + ".")
    paraComputer.textContent = ("Computer choses " + computerChoice + ".")
    divLog.appendChild(paraPlayer)
    divLog.appendChild(paraComputer)

    if (computerChoice == playerChoice) {
        paraScorePlayer.textContent = ("player score: " + playerScore)
        paraScoreComputer.textContent = ("computer score: " + computerScore)
        divScore.appendChild(paraScorePlayer)
        divScore.appendChild(paraScoreComputer)
        roundResult.textContent = "Draw for this round"
        divScore.appendChild(roundResult)

    }
    else if (playerChoice == "rock" && computerChoice == "scissors" ||
        playerChoice == "paper" && computerChoice == "rock" ||
        playerChoice == "scissors" && computerChoice == "paper") {
        playerScore++
        paraScorePlayer.textContent = ("player score: " + playerScore)
        paraScoreComputer.textContent = ("computer score: " + computerScore)
        divScore.appendChild(paraScorePlayer)
        divScore.appendChild(paraScoreComputer)
        roundResult.textContent = `${userName} win this round`
        divScore.appendChild(roundResult)
    }
    else {
        computerScore++
        paraScorePlayer.textContent = ("player score: " + playerScore)
        paraScoreComputer.textContent = ("computer score: " + computerScore)
        divScore.appendChild(paraScorePlayer)
        divScore.appendChild(paraScoreComputer)
        roundResult.textContent = `Computer win this round`
        divScore.appendChild(roundResult)
    }

    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            gameResult.textContent = `${userName} wins!`

        }
        else if (playerScore < computerScore) {
            gameResult.textContent = `Computer wins!`
        }
        else {
            gameResult.textContent = `It's a tie`
        }
        resultLog.appendChild(gameResult)
        buttons.forEach(button => button.disabled = true)
    }
}