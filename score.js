const btn1 = document.querySelector('#player1');
const btn2 = document.querySelector('#player2');
const scorePlayer1 = document.querySelector('#scorePlayer1');
const scorePlayer2 = document.querySelector('#scorePlayer2');
let gamesPlayer1 = document.querySelector('#gamesPlayer1');
let gamesPlayer2 = document.querySelector('#gamesPlayer2');

let score1 = [15, 30, 40, 'Adv.'];
let score2 = [15, 30, 40, 'Adv.'];
let counterPlayer1 = 0;
let counterPlayer2 = 0;

let winner = false;
let gamesWon1 = 0;
let gamesWon2 = 0;
let setsWon1 = 0;
let setsWon2 = 0;
let sets = 0;

btn1.addEventListener('click', function () {
    if (gamesWon1 === 2) {
        setsWon1++;
        sets++;
        nextSet();
    }

    if (counterPlayer1 === 3 && !(counterPlayer2 === 3)) {
        gamesWon1++;
        resetGame();
    }
    else if (!winner) {
        scorePlayer1.textContent = score1[counterPlayer1];
        counterPlayer1++;
    }

});

btn2.addEventListener('click', function () {
    if (gamesWon2 === 2) {
        setsWon2++;
        sets++;
        nextSet();
    }

    if (counterPlayer2 === 3 && !(counterPlayer1 === 3)) {
        gamesWon2++;
        resetGame();
    }
    else if (!winner) {
        scorePlayer2.textContent = score2[counterPlayer2];
        counterPlayer2++;
    }
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
    gamesWon1 = 0;
    gamesWon2 = 0;
    counterPlayer1 = 0;
    counterPlayer2 = 0;

    const space1 = document.createElement('span');
    space1.textContent = ' ';
    const space2 = document.createElement('span');
    space2.textContent = ' ';

    gamesPlayer1.insertAdjacentElement('afterend', space1);
    gamesPlayer2.insertAdjacentElement('afterend', space2);

    const newSet1 = document.createElement('span');
    const newSet2 = document.createElement('span');
    newSet1.textContent = 0;
    newSet1.id = `Player1Set${sets}`;
    newSet2.textContent = 0;
    newSet2.id = `Player2Set${sets}`;

    space1.insertAdjacentElement('afterend', newSet1);
    space2.insertAdjacentElement('afterend', newSet2);

    gamesPlayer1 = document.querySelector(`#${newSet1.id}`);
    gamesPlayer2 = document.querySelector(`#${newSet2.id}`);
}