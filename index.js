let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber === 1 ? "Rock" : randomNumber === 2 ? "Paper" : "Scissors";
}

function playRound(human, computer) {
    if (human === computer) {
        return "Draw!";
    } else if (
        (human === "Rock" && computer === "Scissors") ||
        (human === "Paper" && computer === "Rock") ||
        (human === "Scissors" && computer === "Paper")
    ) {
        humanScore++;
        return `You won! ${human} beats ${computer}.`;
    } else {
        computerScore++;
        return `You lose! ${computer} beats ${human}.`;
    }
}

function updateScore() {
    document.querySelector("#your-score").textContent = `Score: ${humanScore}`;
    document.querySelector("#comp-score").textContent = `Score: ${computerScore}`;
}

function playGame(choice) {
    const compChoice = getComputerChoice();
    const resultMessage = playRound(choice, compChoice);
    document.querySelector("#result").textContent = resultMessage;
    updateScore();

    if (humanScore >= 5 || computerScore >= 5) {
        const seriesResult = humanScore >= 5 
            ? `You won the series with scores: You ${humanScore} - ${computerScore} Computer` 
            : `You lost the series with scores: You ${humanScore} - ${computerScore} Computer`;
                
        document.querySelector("#result").textContent = seriesResult;
        humanScore = 0;
        computerScore = 0;
        updateScore();
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.id);
    });
});
