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
    return choice;
}

function playRound(computerChoice, playerChoice) {

    const scoreText = document.querySelector(".score__text");

    if(computerChoice == playerChoice) {
        scoreText.textContent = `Tie! Both choices are ${computerChoice}`;
    }
    else if((computerChoice == "rock" && playerChoice == "scissors")
    || (computerChoice == "paper" && playerChoice == "rock")
    || (computerChoice == "scissors" && playerChoice == "paper")) {
        updateScore("computer");
        scoreText.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    }
    else {
        updateScore("player");
        scoreText.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    }
}

function updateScore(winner) {
    if(winner == "computer") document.querySelector(".computer-points").textContent++;
    else if(winner == "player") document.querySelector(".player-points").textContent++;
}

const buttons = document.querySelectorAll("button");
buttons.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        playRound(getComputerChoice(), e.target.className);
    });
});
