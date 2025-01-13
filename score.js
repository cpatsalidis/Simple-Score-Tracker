const btn1 = document.querySelector('#player1');
const btn2 = document.querySelector('#player2');
const btnReset = document.querySelector('#reset');
const scorePlayer1 = document.querySelector('#scorePlayer1');
const scorePlayer2 = document.querySelector('#scorePlayer2');
const noOfSets = document.querySelector('#select');
let gamesPlayer1 = document.querySelector('#gamesPlayer1');
let gamesPlayer2 = document.querySelector('#gamesPlayer2');

let score1 = [0, 15, 30, 40, 'Adv'];
let score2 = [0, 15, 30, 40, 'Adv'];
let counterPlayer1 = 0;
let counterPlayer2 = 0;

let winner = false;
let gamesWon1 = 0;
let gamesWon2 = 0;
let setsWon1 = 0;
let setsWon2 = 0;
let sets = 0;
let deuce = false;
let noOfSetsValue = 3;

// fix winner
btn1.addEventListener('click', function () {
    counterPlayer1++;
    if (!deuce) {
        if (gamesWon1 === 2 || gamesWon2 === 2) {
            setsWon1++;
            if (sets === noOfSets.value) {
                winner = true;
            }
            nextSet();
        } else if (counterPlayer1 === 4) {
            gamesWon1++;
            resetGame();
        }

        if (counterPlayer1 === 3 && counterPlayer2 === 3) {
            deuce = true;
        }
        scorePlayer1.textContent = score1[counterPlayer1];

    } else {
        if (counterPlayer1 === 5 && counterPlayer2 === 3) {
            gamesWon1++;
            deuce = false;
            resetGame();
        } else if (counterPlayer1 === 4 && counterPlayer2 === 4) {
            counterPlayer2--;
            counterPlayer1--;
            scorePlayer2.textContent = score1[counterPlayer2];
        }
        scorePlayer1.textContent = score2[counterPlayer1];
    }
}
});

btn2.addEventListener('click', function () {
    counterPlayer2++;
    if (!deuce) {
        if (gamesWon2 === 2 || gamesWon1 === 2) {
            setsWon2++;
            console.log(setsWon2);
            nextSet();
        } else if (counterPlayer2 === 4) {
            gamesWon2++;
            resetGame();
        }

        if (counterPlayer1 === 3 && counterPlayer2 === 3) {
            deuce = true;
        }
        scorePlayer2.textContent = score2[counterPlayer2];
    } else {
        if (counterPlayer2 === 5 && counterPlayer1 === 3) {
            gamesWon2++;
            deuce = false;
            resetGame();
        } else if (counterPlayer2 === 4 && counterPlayer1 === 4) {
            counterPlayer1--;
            counterPlayer2--;
            scorePlayer1.textContent = score1[counterPlayer1];
        }
        scorePlayer2.textContent = score2[counterPlayer2];
    }


});

noOfSets.addEventListener('change', function () {
    noOfSetsValue = noOfSets.value;
    resetAll();
});

function resetGame() {
    if (setsWon2 === Math.ceil(noOfSetsValue / 2)) {
        alert('Player 2 wins');
    } else if (setsWon1 === Math.ceil(noOfSetsValue / 2)) {
        alert('Player 1 wins');
    }

    counterPlayer1 = 0;
    counterPlayer2 = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    gamesPlayer1.textContent = gamesWon1;
    gamesPlayer2.textContent = gamesWon2;
}

function nextSet() {
    sets++;
    gamesWon1 = 0;
    gamesWon2 = 0;
    counterPlayer1 = 0;
    counterPlayer2 = 0;

    const space1 = document.createElement('span');
    space1.textContent = ' ';
    space1.classList.add('extra-span');
    const space2 = document.createElement('span');
    space2.textContent = ' ';
    space2.classList.add('extra-span');

    gamesPlayer1.insertAdjacentElement('afterend', space1);
    gamesPlayer2.insertAdjacentElement('afterend', space2);

    const newSet1 = document.createElement('span');
    const newSet2 = document.createElement('span');
    newSet1.textContent = counterPlayer1;
    newSet1.id = `Player1Set${sets}`;
    newSet1.classList.add('extra-span');
    newSet2.textContent = counterPlayer2;
    newSet2.id = `Player2Set${sets}`;
    newSet2.classList.add('extra-span');

    space1.insertAdjacentElement('afterend', newSet1);
    space2.insertAdjacentElement('afterend', newSet2);

    gamesPlayer1 = document.querySelector(`#${newSet1.id}`);
    gamesPlayer2 = document.querySelector(`#${newSet2.id}`);
}

btnReset.addEventListener('click', resetAll);

function resetAll() {
    counterPlayer1 = 0;
    counterPlayer2 = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    gamesWon1 = 0;
    gamesWon2 = 0;
    setsWon1 = 0;
    setsWon2 = 0;
    sets = 0;
    deuce = false;
    winner = false;

    gamesPlayer1 = document.querySelector('#gamesPlayer1');
    gamesPlayer2 = document.querySelector('#gamesPlayer2');
    gamesPlayer1.textContent = 0;
    gamesPlayer2.textContent = 0;

    const allAddedSpans = document.querySelectorAll('.extra-span');
    allAddedSpans.forEach(set => {
        set.remove();
    });
}