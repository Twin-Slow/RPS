function getComputerChoice() {
    let max = 3;
    let computerChoice = Math.floor(Math.random() * max);
        if (computerChoice === 0) {
            computerChoice = "mage";
        }
        else if (computerChoice === 1) {
            computerChoice = "ranger";
        }
        else if (computerChoice === 2) {
            computerChoice = "warrior";
        }
    return computerChoice;       
 }

function getPlayerChoice () {
    let playerChoice = prompt("Mage, Ranger, or Warrior?");
        if (playerChoice === null) {
            alert ("You exit the arena.");
            return null;
        }

        playerChoice = playerChoice.toLowerCase();

        if (playerChoice === "mage" || playerChoice === "ranger" || playerChoice === "warrior") {
            return playerChoice;
        } else {
            alert ("There are no such combatants.")
        }
}

let playerScore = 0
let computerScore = 0

function playRound (playerChoice, computerChoice) {
    if (playerChoice === "mage" && computerChoice === "mage") {
        alert ("Draw!");
    } else if (playerChoice === "mage" && computerChoice === "ranger") {
        alert ("You lose!");
        computerScore ++;
        alert (`You: ${playerScore} CPU: ${computerScore}`);
        return computerScore;
    } else if (playerChoice === "mage" && computerChoice === "warrior") {
        alert ("You win!");
        playerScore ++;
        alert (`You: ${playerScore} CPU: ${computerScore}`);
        return playerScore;
    } else if (playerChoice === "ranger" && computerChoice === "mage") {
        alert ("You win!");
        playerScore ++;
        alert (`You: ${playerScore} CPU: ${computerScore}`);
        return playerScore;
    } else if (playerChoice === "ranger" && computerChoice === "ranger") {
        alert ("Draw!");
    } else if (playerChoice === "ranger" && computerChoice === "warrior") {
        alert ("You lose!");
        computerScore ++;
        alert (`You: ${playerScore} CPU: ${computerScore}`);
        return computerScore;
    } else if (playerChoice === "warrior" && computerChoice === "mage") {
        alert ("You lose!");
        computerScore ++;
        alert (`You: ${playerScore} CPU: ${computerScore}`);
        return computerScore;
    } else if (playerChoice === "warrior" && computerChoice === "ranger") {
        alert ("You win!");
        playerScore ++;
        alert (`You: ${playerScore} CPU: ${computerScore}`);
        return playerScore;
    } else if (playerChoice === "warrior" && computerChoice === "warrior") {
        alert ("Draw!");
    }
}

function keepScore () {
        while (playerScore < 5 && computerScore < 5) {
        let player = getPlayerChoice();
        if (player === null) {
            break;
        }
        let computer = getComputerChoice();
        playRound(player, computer);
        }

        playAgain();
}

keepScore();

function playAgain () {
        let rematch = prompt("Would you like a rematch?")
        if (rematch === null) {
            alert("You exit the arena.");
            return null;
        }

        rematch = rematch.toLowerCase();

        if (rematch === "yes") {
            playerScore = 0;
            computerScore = 0;
            keepScore();
        } else if (rematch === "no") {
            alert("You exit the arena.");
        } else {
            while ((rematch != "yes") && (rematch != "no") && (rematch !== null)) {
                alert ("Sorry, I didn't catch that.");
                rematch = prompt("Would you like a rematch?");
            }        
        }
}