let rockBtn = document.getElementById('rock'),
    paperBtn = document.getElementById('paper'),
    scissorsBtn = document.getElementById('scissors'),
    playBtn = document.getElementById('play-game'),
    mainMenuBtn = document.getElementById('main-menu-btn'),
    playAgainBtn = document.getElementById('play-again'),
    rulesBtn = document.getElementById('rules'),
    rulesReturnBtn = document.getElementById('rules-return-btn'),


    playerChoiceImg = document.querySelector('.player-choice-img'),
    computerChoiceImg = document.querySelector('.computer-choice-img'),

    iconEl = document.querySelector('.fas'),
    playerScoreEl = document.querySelector('.player-score'),
    computerScoreEl = document.querySelector('.computer-score'),



    firstWindow = document.querySelector('.first-window'),
    rulesWindow = document.querySelector('.rules-window'),
    winnerWindow = document.querySelector('.winner'),
    overlay = document.querySelector('.overlay'),
    winnerOverlay = document.querySelector('.winner-overlay'),
    h1 = document.querySelector('h1'),
    container = document.querySelector('.container'),
    buttonsContainer = document.querySelector('.buttons');


const randomElement = ['../images/rock.png', '../images/paper.png', '../images/scissors.png'];
let random = Math.floor(Math.random() * randomElement.length);

let playerScore = 0;
let computerScore = 0;



playerChoiceImg.classList.add('hidden');
computerChoiceImg.classList.add('hidden');


playBtn.onclick = function() {
    firstWindow.classList.add('hidden');
    h1.classList.remove('hidden');
    playAgainBtn.classList.remove('hidden');
    container.classList.remove('hidden');
    buttonsContainer.classList.remove('hidden');
}
rulesBtn.onclick = function() {
    rulesWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeRules = function() {
    rulesWindow.classList.add('hidden');
    overlay.classList.add('hidden');
}
rulesReturnBtn.onclick = function() {
    closeRules();
}
overlay.onclick = function() {
    closeRules();
}




mainMenuBtn.onclick = function() {
    firstWindow.classList.remove('hidden');
    h1.classList.add('hidden');
    playAgainBtn.classList.add('hidden');
    container.classList.add('hidden');
    buttonsContainer.classList.add('hidden');
}

const btnClick = function(imgSrc) {
    playerChoiceImg.classList.remove('hidden');
    computerChoiceImg.classList.remove('hidden');
    playerChoiceImg.src = imgSrc;
    computerChoiceImg.src = randomElement[random];
    winner(playerChoiceImg.getAttribute('src'), randomElement[random]);
    random = Math.floor(Math.random() * randomElement.length);
}

rockBtn.onclick = function() {
    btnClick('../images/rock.png');
    roundWinner();
}

paperBtn.onclick = function() {
    btnClick('../images/paper.png');
    roundWinner();
}

scissorsBtn.onclick = function() {
    btnClick('../images/scissors.png');
    roundWinner();
}

playAgainBtn.onclick = function() {
    playerChoiceImg.classList.add('hidden');
    computerChoiceImg.classList.add('hidden');
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    winnerOverlay.classList.add('hidden');
    winnerWindow.classList.add('hidden');

}
const winner = function(playerChoice, computerChoice) {
    if ((playerChoice == '../images/rock.png' && computerChoice == '../images/rock.png') || (playerChoice == '../images/paper.png' && computerChoice == '../images/paper.png') || (playerChoice == '../images/scissors.png' && computerChoice == '../images/scissors.png')) {

    } else if (playerChoice == '../images/rock.png' && randomElement[random] == '../images/scissors.png') {
        playerScore++;
        playerScoreEl.textContent = playerScore;

    } else if (playerChoice == '../images/scissors.png' && randomElement[random] == '../images/rock.png') {
        computerScore++;
        computerScoreEl.textContent = computerScore;
    } else if (playerChoice == '../images/rock.png' && randomElement[random] == '../images/paper.png') {
        computerScore++;
        computerScoreEl.textContent = computerScore;
    } else if (playerChoice == '../images/paper.png' && randomElement[random] == '../images/rock.png') {
        playerScore++;
        playerScoreEl.textContent = playerScore;
    } else if (playerChoice == '../images/paper.png' && randomElement[random] == '../images/scissors.png') {
        computerScore++;
        computerScoreEl.textContent = computerScore;
    } else if (playerChoice == '../images/scissors.png' && randomElement[random] == '../images/paper.png') {
        playerScore++;
        playerScoreEl.textContent = playerScore;
    }

}
const roundWinner = function() {
    if (playerScore == 5) {
        winnerWindow.innerHTML = 'YOU WON THIS ROUND 🎉';
        winnerWindow.classList.remove('hidden');
        winnerOverlay.classList.remove('hidden');
    } else if (computerScore == 5) {
        winnerWindow.innerHTML = 'COMPUTER WON THIS ROUND 🎉';
        winnerWindow.classList.remove('hidden');
        winnerOverlay.classList.remove('hidden');

    }
}
