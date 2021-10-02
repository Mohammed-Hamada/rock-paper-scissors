let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
let playAgainBtn = document.getElementById('play-again');

let playerChoiceImg = document.querySelector('.player-choice-img');
let computerChoiceImg = document.querySelector('.computer-choice-img');

let resultEl = document.querySelector('.winner');
let playerScoreEl = document.querySelector('.player-score');
let computerScoreEl = document.querySelector('.computer-score');

const randomElement = ['js/rock.png', 'js/paper.png', 'js/scissors.png'];
let random = Math.floor(Math.random() * randomElement.length);

let playerScore = 0;
let computerScore = 0;



playerChoiceImg.classList.add('hidden');
computerChoiceImg.classList.add('hidden');


rockBtn.onclick = function() {
    playerChoiceImg.classList.remove('hidden');
    computerChoiceImg.classList.remove('hidden');
    playerChoiceImg.src = 'js/rock.png';
    computerChoiceImg.src = randomElement[random];
    winner(playerChoiceImg.getAttribute('src'), randomElement[random]);

    random = Math.floor(Math.random() * randomElement.length);


}

paperBtn.onclick = function() {
    playerChoiceImg.classList.remove('hidden');
    computerChoiceImg.classList.remove('hidden');
    playerChoiceImg.src = 'js/paper.png';
    computerChoiceImg.src = randomElement[random];
    winner(playerChoiceImg.getAttribute('src'), randomElement[random]);
    random = Math.floor(Math.random() * randomElement.length);

}

scissorsBtn.onclick = function() {
    playerChoiceImg.classList.remove('hidden');
    computerChoiceImg.classList.remove('hidden');
    playerChoiceImg.src = 'js/scissors.png';
    computerChoiceImg.src = randomElement[random];
    winner(playerChoiceImg.getAttribute('src'), randomElement[random]);
    random = Math.floor(Math.random() * randomElement.length);

}

playAgainBtn.onclick = function() {
    playerChoiceImg.classList.add('hidden');
    computerChoiceImg.classList.add('hidden');
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    resultEl.textContent = '';
}


const winner = function(playerChoice, computerChoice) {
    if ((playerChoice == 'js/rock.png' && computerChoice == 'js/rock.png') || (playerChoice == 'js/paper.png' && computerChoice == 'js/paper.png') || (playerChoice == 'js/scissors.png' && computerChoice == 'js/scissors.png')) {
        resultEl.textContent = 'No One Won This Round';
    } else if (playerChoice == 'js/rock.png' && randomElement[random] == 'js/scissors.png') {
        resultEl.textContent = 'You Won This Round';
        playerScore++;
        playerScoreEl.textContent = playerScore;

    } else if (playerChoice == 'js/scissors.png' && randomElement[random] == 'js/rock.png') {
        resultEl.textContent = 'Computer Won This Round';
        computerScore++;
        computerScoreEl.textContent = computerScore;
    } else if (playerChoice == 'js/rock.png' && randomElement[random] == 'js/paper.png') {
        resultEl.textContent = 'Computer Won This Round';
        computerScore++;
        computerScoreEl.textContent = computerScore;
    } else if (playerChoice == 'js/paper.png' && randomElement[random] == 'js/rock.png') {
        resultEl.textContent = 'You Won This Round';
        playerScore++;
        playerScoreEl.textContent = playerScore;
    } else if (playerChoice == 'js/paper.png' && randomElement[random] == 'js/scissors.png') {
        resultEl.textContent = 'Computer Won This Round';
        computerScore++;
        computerScoreEl.textContent = computerScore;
    } else if (playerChoice == 'js/scissors.png' && randomElement[random] == 'js/paper.png') {
        resultEl.textContent = 'You Won This Round';
        playerScore++;
        playerScoreEl.textContent = playerScore;
    }
}
