function rockPaperScissors(playersTurn) {
  let rock = "Rock";
  let paper = "Paper";
  let scissors = "Scissors";

  if (playersTurn === "r" || playersTurn === "rock") {
    playersTurn = rock;
    console.log("You choose Rock");
  } else if (playersTurn === "p" || playersTurn === "paper") {
    playersTurn = paper;
    console.log("You choose Paper");
  } else if (playersTurn === "s" || playersTurn === "scissors") {
    playersTurn = scissors;
    console.log("You choose Scissors");
  } else {
    console.log("Invalid Input. Try Again...");
  }

  let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

  let computerMove = "";

  switch (computerRandomNumber) {
    case 1:
      computerMove = rock;
      break;
    case 2:
      computerMove = paper;
      break;
    case 3:
      computerMove = scissors;
      break;
  }

  console.log(`The computer chooses ${computerMove}`);

  if (
    (playersTurn === rock && computerMove === scissors) ||
    (playersTurn === paper && computerMove === rock) ||
    (playersTurn === scissors && computerMove === paper)
  ) {
    console.log("You win!");
  } else if (
    (playersTurn === rock && computerMove === rock) ||
    (playersTurn === paper && computerMove === paper) ||
    (playersTurn === scissors && computerMove === scissors)
  ) {
    console.log("This game was a draw!");
  } else if (
    (playersTurn === rock && computerMove === paper) ||
    (playersTurn === paper && computerMove === scissors) ||
    (playersTurn === scissors && computerMove === rock)
  ) {
    console.log("You lose!");
  }
}

rockPaperScissors("p");
