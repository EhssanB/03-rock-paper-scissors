//Odin Project - Rock, Paper, Scissor

// Ask user to choose rock, paper scissors


// Play a game of rock paper scissors
    // randomly assign computer's "choice": rock, paper scissors
    // compare user and computer's choices:
        // if user beats computer, user wins
            // rock beats scissors
            // paper beats rock
            // scissors beats paper
        // if user chooses the same, draw
        // else user loses

let randomChoice = () => {
    return Math.floor(Math.random()*3);
}

let checkResult = (userChoice,  computerChoice) => {
    
    if ((userChoice + 1) % 3 == computerChoice) {
        console.log("Player Won Round!");
        return 1;
    } else if ((computerChoice + 1) % 3 == userChoice) {
        console.log("Computer Won Round!");
        return -1;
    } else {
        console.log("Round Drawn!")
        return 0;
    }
}

let playRound = (winBalance, gameCounter) => {
    let userChoice = prompt("rock (0), paper (1) or scissors (2)");
    let computerChoice = randomChoice();
        
    let roundResult = checkResult(userChoice, computerChoice);
    
    winBalance += roundResult;
    gameCounter++;

    return [winBalance, gameCounter]
}

let playGame = () => {
    let winBalance = 0;
    let gameCounter = 0;

    while (gameCounter < 5) {
        let roundResult = playRound(winBalance, gameCounter);
        winBalance = roundResult[0];
        gameCounter = roundResult[1];
    }

    if (winBalance > 0) {
        console.log("Player Wins!", winBalance, gameCounter);
    } else {
        console.log("Computer Wins", winBalance, gameCounter);
    }
}
