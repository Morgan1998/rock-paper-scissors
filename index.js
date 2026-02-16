const computerChoice = getComputerChoice()

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