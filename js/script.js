function getComputerChoice() {
    let choice;
    switch(Math.floor(Math.random()*3)) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    console.log("Computer choice: " + choice);
    return choice;
}

function getPlayerChoice() {
    let choice;

    while(choice == undefined) {
        choice = prompt("Rock, Paper, Scissors?").toLowerCase();
        switch(choice) {
            case "rock":
            case "paper":
            case "scissors":
                console.log("Player choice: " + choice);
                break;
            default:
                choice = undefined;
                console.log("Not a valid input!");
                break;
        }
    }
    return choice;
}

function playRound(computerChoice, playerChoice) {

    let result;
    if(computerChoice == playerChoice) {
        result = 0;
    }
    else if(computerChoice == "rock" && playerChoice == "scissors") {
        result = -1;
    }
    else if(computerChoice == "paper" && playerChoice == "rock") {
        result = -1;
    }
    else if(computerChoice == "scissors" && playerChoice == "paper") {
        result = -1;
    }
    else {
        result = 1;
    }

    switch(result) {
        case 0:
            console.log("Tie! Both choices are " + computerChoice);
            break;
        case 1:
            console.log("You win! " + playerChoice + " beats " + computerChoice);
            break;
        case -1:
            console.log("You lose! " + computerChoice + " beats " + playerChoice);
            break;
    }
    return result;
}

function playGame(rounds) {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < rounds; i++) {
        let result = playRound(getComputerChoice(), getPlayerChoice());
        if(result == 1) playerScore++;
        else if(result == -1) computerScore++;
    }

    if(playerScore > computerScore) {
        console.log("You win the game! (" + playerScore + ":" + computerScore + ")");
    }
    else if(playerScore > computerScore) {
        console.log("Computer wins the game! (" + playerScore + ":" + computerScore + ")");
    }
    else {
        console.log("The game is a tie! (" + playerScore + ":" + computerScore + ")");
    }
}
