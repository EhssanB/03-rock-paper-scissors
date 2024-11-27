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

function playGame() {

    let userWins = 0;
    let computerWins = 0;

    let checkResult = (userChoice,  computerChoice) => {
    
        if ((userChoice + 1) % 3 == computerChoice) {
            console.log("Player Won Round!");
            userWins++;
        } else if ((computerChoice + 1) % 3 == userChoice) {
            console.log("Computer Won Round!");
            computerWins++;
        } else {
            console.log("Round Drawn!")
        }
    }
    
    let playRound = () => {
        let userChoice = parseInt(prompt("rock (0), paper (1) or scissors (2)"));
        let computerChoice = Math.floor(Math.random()*3);
            
        checkResult(userChoice, computerChoice);
    
    }

    while (userWins < 3 && computerWins < 3) {
        playRound();
    }

    if (userWins == 3) console.log("Player Wins!");
    if (computerWins == 3) console.log("Computer Wins");
}