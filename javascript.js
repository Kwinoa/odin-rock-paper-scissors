function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Type \"rock\", \"paper\", or \"scissors\".");
    return humanChoice
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice) {
        let computerChoiceNorm = computerChoice.toLowerCase();
        let humanChoiceNorm = humanChoice.toLowerCase();
        let message = "";

        if (computerChoiceNorm === "rock" && humanChoiceNorm === "rock" ||
            computerChoiceNorm === "paper" && humanChoiceNorm === "paper" ||
            computerChoiceNorm === "scissors" && humanChoiceNorm === "scissors") {
            message += "It's a tie!";
            document.getElementById("message").innerHTML = message;
            console.log(message);
            return;
        } else if (computerChoiceNorm === "rock" && humanChoiceNorm === "paper" ||
            computerChoiceNorm === "scissors" && humanChoiceNorm === "rock" ||
            computerChoiceNorm === "paper" && humanChoiceNorm === "scissors") {
            ++humanScore;
            message += "You win!"
            if (humanChoiceNorm === "rock") {
                message += " Rock beats Scissors!"
            } else if (humanChoiceNorm === "paper") {
                message += " Paper beats Rock!"
            } else {
                message += " Scissors beats Paper!"
            }
            document.getElementById("message").innerHTML = message;
            console.log(message);
            return;
        } else {
            ++computerScore;
            message += "You lose!"
            if (humanChoiceNorm === "scissors") {
                message += " Rock beats Scissors!"
            } else if (humanChoiceNorm === "rock") {
                message += " Paper beats Rock!"
            } else {
                message += " Scissors beats Paper!"
            }
            document.getElementById("message").innerHTML = message;
            console.log(message);
            return;
        }
    }

    function printScore(){
        document.getElementById("humanScore").innerHTML = "Your score: " + humanScore;
        document.getElementById("computerScore").innerHTML = "Computer score: " + computerScore;
        console.log("Your score: " + humanScore + ", Computer score: " + computerScore)
    }

    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
        printScore();
    }
}

playGame();
