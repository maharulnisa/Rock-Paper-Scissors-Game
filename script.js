const choices = document.querySelectorAll(".choice");
const resultText = document.getElementById("result");
const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const playerChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    displayResult(result, playerChoice, computerChoice);
  });
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function getResult(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) return "win";
  return "lose";
}

function displayResult(result, player, computer) {
  if (result === "win") {
    playerScore++;
    resultText.innerHTML = `🎉 You Win! ${player} beats ${computer}`;
  } else if (result === "lose") {
    computerScore++;
    resultText.innerHTML = `😢 You Lose! ${computer} beats ${player}`;
  } else {
    resultText.innerHTML = `🤝 It's a Draw! You both chose ${player}`;
  }

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;

  resultText.classList.remove("fade");
  void resultText.offsetWidth;
  resultText.classList.add("fade");
}
