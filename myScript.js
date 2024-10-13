const allButtons = document.querySelectorAll(".btn")
let playerChoice = "";

allButtons.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        let playerChoice = e.target.value  
        playRound(`${playerChoice}`, getComputerChoice())       
        

    })
})  
console.log(playerChoice)
//  Computers choice
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices.at(Math.floor(Math.random() * choices.length));
    return computerChoice;
}

//  Round logic
let playerScore = 0;
let computerScore = 0;
let rounds = 1;

const playerSelection = playerChoice;
const computerSelection = getComputerChoice();

function playRound(playerChoice, computerSelection) {
    if (playerChoice === computerSelection) {
        document.querySelector("#round").innerText = rounds++;
        document.querySelector("#result").innerText = "It's a draw"
        document.querySelector("#cpu").innerText = computerSelection;
        document.querySelector("#pc").innerText = playerChoice;
    } else if ( playerChoice === "Paper" && computerSelection === "Rock" || playerChoice === "Rock" && computerSelection === "Scissors" || playerChoice === "Scissors" && computerSelection === "Paper") {
        document.querySelector("#round").innerText = rounds++;
        ++playerScore;
        document.querySelector("#pcscore").textContent = playerScore;
        document.querySelector("#result").innerText = "You win the round~";
        document.querySelector("#cpu").innerText = computerSelection;
        document.querySelector("#pc").innerText = playerChoice;
    } else if ( playerChoice === "Paper" && computerSelection === "Scissors" || playerChoice === "Rock" && computerSelection === "Paper" || playerChoice === "Scissors" && computerSelection === "Rock") {
        document.querySelector("#round").innerText = rounds++;
        ++computerScore;
        document.querySelector("#cpuscore").innerText = computerScore;
        document.querySelector("#result").innerText = "You lose :(";
        document.querySelector("#cpu").innerText = computerSelection;
        document.querySelector("#pc").innerText = playerChoice;
 
}   if (playerScore === 5 && computerScore < playerScore) {
    document.querySelector("#result").innerText = "YOU DID IT, YOU EFFING DID IT, YOU ARE THE CHAMPION!"
    document.querySelector("#buttons").style.display = "none";
}   else if (computerScore === 5 && playerScore < computerScore) {
    document.querySelector("#result").innerText = "Welp, you lost the game, better luck next time :)"
    document.querySelector("#buttons").style.display = "none";
}
}