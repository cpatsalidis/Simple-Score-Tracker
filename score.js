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

let gamesWon1 = 0;
let gamesWon2 = 0;
let setsWon1 = 0;
let setsWon2 = 0;
let sets = 0;
let deuce = false;
let tieBreak = false;
let tieBreakScore1 = 0;
let tieBreakScore2 = 0;
let noOfSetsValue = 3;

btn1.addEventListener('click', function () {
    if (tieBreak) {
        if (tieBreakScore1 > 6 && tieBreakScore1 - tieBreakScore2 > 1) {
            setsWon1++;
            nextSet();
        } else {
            tieBreakScore1++;
            scorePlayer1.textContent = tieBreakScore1;
        }

    } else if (!deuce) {
        counterPlayer1++;
        if ((gamesWon1 === 6 || 7) && gamesWon1 - gamesWon2 > 1) {
            setsWon1++;
            nextSet();
        } else if (gamesWon2 === 6 && gamesWon1 === 6) {
            tieBreak = true;
        }

        if (counterPlayer1 === 4) {
            gamesWon1++;
            resetGame();
        } else if (counterPlayer1 === 3 && counterPlayer2 === 3) {
            deuce = true;
        }
        scorePlayer1.textContent = score1[counterPlayer1];

    } else {
        counterPlayer1++;
        if (counterPlayer1 - counterPlayer2 === 2) {
            gamesWon1++;
            deuce = false;
            resetGame();
        } else if (counterPlayer1 === counterPlayer2) {
            counterPlayer2--;
            counterPlayer1--;
            scorePlayer2.textContent = score1[counterPlayer2];
        }
        scorePlayer1.textContent = score2[counterPlayer1];
    }
});

btn2.addEventListener('click', function () {
    if (tieBreak) {
        if (tieBreakScore2 > 6 && tieBreakScore2 - tieBreakScore1 > 1) {
            setsWon2++;
            nextSet();
        } else {
            tieBreakScore2++;
            scorePlayer2.textContent = tieBreakScore2;
        }

    } else if (!deuce) {
        counterPlayer2++;
        if ((gamesWon2 === 6 || 7) && gamesWon2 - gamesWon1 > 1) {
            setsWon2++;
            nextSet();
        } else if (gamesWon1 === 6 && gamesWon2 === 6) {
            tieBreak = true;
        }

        if (counterPlayer2 === 4) {
            gamesWon2++;
            resetGame();
        } else if (counterPlayer2 === 3 && counterPlayer1 === 3) {
            deuce = true;
        }
        scorePlayer2.textContent = score2[counterPlayer2];
    } else {
        counterPlayer2++;
        if (counterPlayer2 - counterPlayer1 === 2) {
            gamesWon2++;
            deuce = false;
            resetGame();
        } else if (counterPlayer2 === counterPlayer1) {
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
    counterPlayer1 = 0;
    counterPlayer2 = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    gamesPlayer1.textContent = gamesWon1;
    gamesPlayer2.textContent = gamesWon2;
}

function nextSet() {
    sets++;
    tieBreak = false;
    gamesWon1 = 0;
    gamesWon2 = 0;
    counterPlayer1 = 0;
    counterPlayer2 = 0;
    tieBreakScore1 = 0;
    tieBreakScore2 = 0;

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
    tieBreakScore1 = 0;
    tieBreakScore2 = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    gamesWon1 = 0;
    gamesWon2 = 0;
    setsWon1 = 0;
    setsWon2 = 0;
    sets = 0;
    deuce = false;
    tieBreak = false;

    gamesPlayer1 = document.querySelector('#gamesPlayer1');
    gamesPlayer2 = document.querySelector('#gamesPlayer2');
    gamesPlayer1.textContent = 0;
    gamesPlayer2.textContent = 0;

    const allAddedSpans = document.querySelectorAll('.extra-span');
    allAddedSpans.forEach(set => {
        set.remove();
    });
}