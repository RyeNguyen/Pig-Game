let scores, roundScore, activePlayer, gamePlaying, sixDiceRoll;
let dices = document.querySelectorAll(".dice");

init();

function toggleDices(status) {
    for (let i = 0; i < dices.length; i++) {
        dices[i].style.display = status;
    }
}

document.querySelector(".btn-roll").addEventListener('click', function() {
    if (gamePlaying) {
        toggleDices("block");

        const dice1 = Math.floor(Math.random() * 6) + 1;
        if (dice1 === 6) sixDiceRoll++;
        const diceDOM1 = document.querySelector("#dice-1");
        diceDOM1.src = "./images/dice-" + dice1 + ".png";

        const dice2 = Math.floor(Math.random() * 6)  + 1;
        if (dice2 === 6) sixDiceRoll++;
        const diceDOM2 = document.querySelector("#dice-2");
        diceDOM2.src = "./images/dice-" + dice2 + ".png";
        console.log(dice1 + " " + dice2);

        if (dice1 !== 1 && dice2 !== 1 && sixDiceRoll !== 2) {
            roundScore += (dice1 + dice2);
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector(".btn-hold").addEventListener('click', function() {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector("#current-" + activePlayer).textContent = "0";
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        let input = document.querySelector(".final-score").value;
        let winningScore;
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        if (scores[activePlayer] >= winningScore) {
            gamePlaying = false;
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            toggleDices("none");
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    sixDiceRoll = 0;
    document.querySelector("#current-" + activePlayer).textContent = "0";
    roundScore = 0;

    document.querySelector(".player-" + activePlayer +"-panel").classList.remove("active");
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");

    toggleDices("none");
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    gamePlaying = true;
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    sixDiceRoll = 0;

    toggleDices("none");
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
}