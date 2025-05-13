// Rock-Paper-Scissors
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

let computerChoice = getComputerChoice(); 
//
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

let playerChoice = getPlayerChoice();

function playRound (playerChoice, computerChoice) {
    if (playerChoice === "mage" && computerChoice === "mage") {
        alert ("Draw!");
    } else if (playerChoice === "mage" && computerChoice === "ranger") {
        alert ("You lose!");
    } else if (playerChoice === "mage" && computerChoice === "warrior") {
        alert ("You win!");
    } else if (playerChoice === "ranger" && computerChoice === "mage") {
        alert ("You win!");
    } else if (playerChoice === "ranger" && computerChoice === "ranger") {
        alert ("Draw!");
    } else if (playerChoice === "ranger" && computerChoice === "warrior") {
        alert ("You lose!");
    } else if (playerChoice === "warrior" && computerChoice === "mage") {
        alert ("You lose!");
    } else if (playerChoice === "warrior" && computerChoice === "ranger") {
        alert ("You win!");
    } else if (playerChoice === "warrior" && computerChoice === "warrior") {
        alert ("Draw!");
    }
}
    playRound(playerChoice, computerChoice);// Check if player's choice defeats/is greater than CPU's choice
// If greater, player wins
//      Displays victory message
// If lesser, CPU wins
//      Displays defeat message
// Scoring system