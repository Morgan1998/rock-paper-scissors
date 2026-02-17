function getOneTwoOrThree() {
  return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
  const oneTwoOrThree = getOneTwoOrThree()
  if (oneTwoOrThree === 1) {
    return "rock";
  } 
  else if (oneTwoOrThree === 2) {
    return "paper";
  }
  else if (oneTwoOrThree === 3) {
    return "scissors";
  }
}

function getHumanChoice() {
  const input = prompt("Choose your move: ", "rock, paper, scissors");
  if (input.toLowerCase() === "rock" || input.toLowerCase() === "paper" || input.toLowerCase() === "scissors") {
    return input.toLowerCase();
  } else {
    console.log("Invalid choice, please try again.");
    return getHumanChoice();
  }
}

function playGame(rounds, humanChoiceProvider, computerChoiceProvider) {
  let computerScore = 0;
  let humanScore = 0;

  function declareWinner() {
    if (computerScore > humanScore) {
      console.log("The computer wins the game!");
    } else if (humanScore > computerScore) {
      console.log("You are the grand champion of rock paper scissors!");
    } else {
      console.log("The game ends in a draw!");
    }
  }

  function playRound(humanChoiceProvider, computerChoiceProvider) { 
    const computerChoice = computerChoiceProvider();
    const humanChoice = humanChoiceProvider();

    if (humanChoice === "rock") {
      if (computerChoice === "rock") {
        console.log("It's a draw! Go again.");
      }
      else if (computerChoice === "paper") {
        computerScore += 1;
        console.log("The computer wins! Paper beats rock");
      }
      else if (computerChoice === "scissors") {
        humanScore += 1;
        console.log("You win! Rock beats scissors");
      }
    }
    else if (humanChoice === "paper") {
      if (computerChoice === "paper") {
        console.log("It's a draw! Go again.");
      }
      else if (computerChoice === "scissors") {
        computerScore += 1;
        console.log("The computer wins! Scissors beats paper");
      }
      else if (computerChoice === "rock") {
        humanScore += 1;
        console.log("You win! Paper beats rock");
      }
    }
    else if (humanChoice === "scissors") {
      if (computerChoice === "scissors") {
        console.log("It's a draw! Go again.");
      }
      else if (computerChoice === "rock") {
        computerScore += 1;
        console.log("The computer wins! Rock beats scissors");
      }
      else if (computerChoice === "paper") {
        humanScore += 1;
        console.log("You win! Scissors beats paper");
      }
    }
  }

    for (let i = 1; i <= rounds; i++) {
    playRound(humanChoiceProvider, computerChoiceProvider);
    console.log(`PC score is ${computerScore}, your score is ${humanScore}`)
  }

  declareWinner();
}

playGame(5, getHumanChoice, getComputerChoice)








