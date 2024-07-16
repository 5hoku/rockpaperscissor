//  Computers choice

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices.at(Math.floor(Math.random() * choices.length));
    return computerChoice;
}

//  Player choice

function getPlayerChoice() {
    let playerInput = prompt("rock, paper or scissors?");
    let result = playerInput.toLowerCase();
    return result;
}   

//  Round logic

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "IT'S A DRAW";
    } else if ( playerSelection === "paper" && computerSelection === "rock") {
        return "You win! paper beats rock!";
    } else if ( playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! paper loses to scissors";
    } else if ( playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! rock beats scissors!";
    } else if ( playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! rock loses to paper";
    } else if ( playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! scissors beat paper!";
    } else if ( playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! scissors loses to rock";
    } 
}



function playGame() {
    let playerScore = 0,
      computerScore = 0;

    for (i = 0; i < 3; i++) {
        const result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
        if (result.includes("win")) {
            playerScore++;
            console.log(`computer: ${computerScore} | player: ${playerScore}`);
        } else if (result.includes("lose")) {
            computerScore++;
            console.log(`computer: ${computerScore} | player: ${playerScore}`);
        }
    }
        console.log(
            "Final Results: Player: " + playerScore + "Computer: " + computerScore
        );
        if (playerScore > computerScore) {
            console.log("You win the game! Congratulations!");
        } else if (playerScore < computerScore) {
            console.log("You lose the game! Better luck next time!");
        } else {
            console.log("The overall game was a tie");
        }
    }
playGame();   