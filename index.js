const computerChoice = getComputerChoice();
const humanChoice = prompt("Choose your move: ", "rock, paper, scissors");

let computerScore = 0;
let humanScore = 0;

console.log(computerChoice);

playRound(computerChoice, humanChoice);

console.log(computerScore);
console.log(humanScore);

function getOneTwoOrThree() {
  return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
  const OneTwoOrThree = getOneTwoOrThree()
  if (OneTwoOrThree === 1) {
    return "rock";
  } 
  else if (OneTwoOrThree === 2) {
    return "paper";
  }
  else if (OneTwoOrThree === 3) {
    return "scissors";
  }
  else {
    return "Uh oh, something went wrong";
  }
}

function playRound(computerChoice, humanChoice) { 
  lowerHuman = humanChoice.toLowerCase();
  lowerComputer = computerChoice.toLowerCase();
  if (lowerHuman === "rock") {
    if (lowerComputer === "rock") {
      console.log("It's a draw! Go again.");
    }
    else if (lowerComputer === "paper") {
      computerScore += 1;
      console.log("The computer wins! Paper beats rock");
    }
    else if (lowerComputer === "scissors") {
      humanScore += 1;
      console.log("You win! Rock beats paper");
    }
  }
  else if (lowerHuman === "paper") {
    if (lowerComputer === "paper") {
      console.log("It's a draw! Go again.");
    }
    else if (lowerComputer === "scissors") {
      computerScore += 1;
      console.log("The computer wins! Scissors beats paper");
    }
    else if (lowerComputer === "rock") {
      humanScore += 1;
      console.log("You win! Paper beats rock");
    }
  }
  else if (lowerHuman === "scissors") {
    if (lowerComputer === "scissors") {
      console.log("It's a draw! Go again.");
    }
    else if (lowerComputer === "rock") {
      computerScore += 1;
      console.log("The computer wins! Rock beats scissors");
    }
    else if (lowerComputer === "paper") {
      humanScore += 1;
      console.log("You win! Scissors beats paper");
    }
  }
}



