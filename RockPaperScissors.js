console.log('hi');

// Get user's choice //
const getUsersChoice = () => {
  let userInput = prompt("Choose rock, paper, or scissors:");
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log("Error: Invalid choice");
    return null;
  }
};


console.log(getUsersChoice('Paper')); // should print 'paper'




//get computers' choice


function computersChoice () {
  const compChoice = Math.floor(Math.random() * 3);
  if (compChoice === 0 ){
return 'rock';
} else if (compChoice === 1){
  return 'paper';
} else if (compChoice === 2){
return 'scissors';}
}

console.log(computersChoice());

 



//compare two
function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'The computer won!';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You won!';
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'You won!';
  } else {
    return 'The computer won!';
  }
}

console.log(determineWinner());

//dispaly results


function playGame() {
  const userChoice = getUsersChoice(); // Gets user choice via prompt
  if (!userChoice) {
    console.log("Game cancelled or invalid choice.");
    return; // Exit the game if user choice is invalid
  }
  const computerChoice = computersChoice();
  
  console.log(`User's choice: ${userChoice}`);
  console.log(`Computer's choice: ${computerChoice}`);
  
  // Determining the winner and logging the result
  const result = determineWinner(userChoice, computerChoice);
  console.log(result);
}

playGame();
