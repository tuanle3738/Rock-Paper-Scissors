function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Paper")||
            (playerSelection == "Paper" && computerSelection == "Scissors")||
            (playerSelection == "Scissors" && computerSelection == "Rock")) {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors")||
    (playerSelection == "Paper" && computerSelection == "Rock")||
    (playerSelection == "Scissors" && computerSelection == "Paper")) {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else {
        console.log("Draw");
    }
}

function formatInput(ans) {
    return ans.charAt().toUpperCase() + ans.slice(1).toLowerCase();
}

function getInput() {
    return formatInput(prompt("Rock, Paper or Scissors?"));
}

function game() {
    for (let i=0; i<5; i++) {
        playRound(getInput(), getComputerChoice());
    }
}

game();