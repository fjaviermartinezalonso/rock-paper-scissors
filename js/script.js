function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function playRound(computerChoice, playerChoice) {
    const choices = {
        0: "rock",
        1: "paper",
        2: "scissors",
    };
    const scoreText = document.querySelector(".score__text");
    const result = (3 + computerChoice - playerChoice) % 3;
    
    switch(result) {
        case 0:
            scoreText.textContent = `Tie! Both choices are ${choices[computerChoice]}`;
            break;
        case 1:
            document.querySelector(".computer-points").textContent++;
            scoreText.textContent = `You lose! ${choices[computerChoice]} beats ${choices[playerChoice]}`;
            break;
        case 2:
            document.querySelector(".player-points").textContent++;
            scoreText.textContent = `You win! ${choices[playerChoice]} beats ${choices[computerChoice]}`;
            break;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        playRound(getComputerChoice(), e.target.value);
    });
});
