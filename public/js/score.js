// Select button elements for player actions and reset
const btn1 = document.querySelector('#player1');
const btn2 = document.querySelector('#player2');
const btnReset = document.querySelector('#reset');

// Select elements to display player scores and number of sets
const scorePlayer1 = document.querySelector('#scorePlayer1');
const scorePlayer2 = document.querySelector('#scorePlayer2');
const noOfSets = document.querySelector('#select');
let gamesPlayer1 = document.querySelector('#gamesPlayer1');
let gamesPlayer2 = document.querySelector('#gamesPlayer2');

// Initialize scoring arrays for traditional tennis scoring
let score1 = [0, 15, 30, 40, 'Adv'];
let score2 = [0, 15, 30, 40, 'Adv'];

// Initialize score counters for both players
let counterPlayer1 = 0;
let counterPlayer2 = 0;

// Initialize variables to track games and sets won by each player
let gamesWon1 = 0;
let gamesWon2 = 0;
let setsWon1 = 0;
let setsWon2 = 0;
let sets = 0;
let deuce = false; // Indicates if the game is in a deuce state
let tieBreak = false; // Indicates if a tiebreak is in progress
let tieBreakScore1 = 0; // Tiebreak score for Player 1
let tieBreakScore2 = 0; // Tiebreak score for Player 2
let noOfSetsValue = 3; // Default number of sets for the match

// Event listener for Player 1's button
btn1.addEventListener('click', function () {
    // Check if tiebreak mode is active
    if (tieBreak) {
        tieBreakScore1++; // Increment tiebreak score for Player 1

        // Check if Player 1 has won the tiebreak
        if (tieBreakScore1 > 6 && tieBreakScore1 - tieBreakScore2 > 1) {
            gamesWon1++;
            setsWon1++;
            resetGame(); // Reset game for next set
            tieBreakPointDisplay(); // Display tiebreak points
            nextSet(); // Proceed to next set
        }
        scorePlayer1.textContent = tieBreakScore1; // Update tiebreak score display

    } else if (!deuce) { // Normal scoring logic
        counterPlayer1++; // Increment score counter for Player 1

        // Check if Player 1 wins the game
        if (counterPlayer1 === 4) {
            gamesWon1++;
            resetGame(); // Reset game
        } else if (counterPlayer1 === 3 && counterPlayer2 === 3) {
            deuce = true; // Enter deuce if both players have 40 points
        }

        // Check if Player 1 wins the set
        if ((gamesWon1 > 5) && gamesWon1 - gamesWon2 > 1) {
            setsWon1++;
            resetGame(); // Reset game
            nextSet(); // Proceed to next set
        } else if (gamesWon2 === 6 && gamesWon1 === 6) {
            tieBreak = true; // Enter tiebreak if both players win 6 games
            return btn1.click(); // Reinvoke Player 1's button to handle tiebreak
        }
        scorePlayer1.textContent = score1[counterPlayer1]; // Update score display

    } else { // Deuce scoring logic
        counterPlayer1++; // Increment score counter for Player 1

        // Check if Player 1 wins the game during deuce
        if (counterPlayer1 - counterPlayer2 === 2) {
            gamesWon1++;
            deuce = false; // Reset deuce flag
            resetGame(); // Reset game

            // Check if Player 1 wins the set
            if (gamesWon1 > 5 && gamesWon1 - gamesWon2 > 1) {
                setsWon1++;
                nextSet(); // Proceed to next set
            }
        } else if (counterPlayer1 === counterPlayer2) {
            // Reset advantage points if both players have equal points in deuce
            counterPlayer2--;
            counterPlayer1--;
            scorePlayer2.textContent = score1[counterPlayer2];
        }
        scorePlayer1.textContent = score2[counterPlayer1]; // Update score display
    }
});

// Event listener for Player 2's button
btn2.addEventListener('click', function () {
    // Similar logic as btn1 for Player 2's actions
    if (tieBreak) {
        tieBreakScore2++;

        if (tieBreakScore2 > 6 && tieBreakScore2 - tieBreakScore1 > 1) {
            gamesWon2++;
            setsWon2++;
            resetGame();
            tieBreakPointDisplay();
            nextSet();
        }
        scorePlayer2.textContent = tieBreakScore2;

    } else if (!deuce) {
        counterPlayer2++;

        if (counterPlayer2 === 4) {
            gamesWon2++;
            resetGame();
        } else if (counterPlayer2 === 3 && counterPlayer1 === 3) {
            deuce = true;
        }

        if ((gamesWon2 > 5) && gamesWon2 - gamesWon1 > 1) {
            setsWon2++;
            resetGame();
            nextSet();
        } else if (gamesWon1 === 6 && gamesWon2 === 6) {
            tieBreak = true;
            return btn2.click();
        }
        scorePlayer2.textContent = score2[counterPlayer2];
    } else {
        counterPlayer2++;

        if (counterPlayer2 - counterPlayer1 === 2) {
            gamesWon2++;
            deuce = false;
            resetGame();

            if (gamesWon2 > 5 && gamesWon2 - gamesWon1 > 1) {
                setsWon2++;
                nextSet();
            }
        } else if (counterPlayer2 === counterPlayer1) {
            counterPlayer1--;
            counterPlayer2--;
            scorePlayer1.textContent = score1[counterPlayer1];
        }
        scorePlayer2.textContent = score2[counterPlayer2];
    }
});

// Event listener for set selection dropdown
noOfSets.addEventListener('change', function () {
    noOfSetsValue = noOfSets.value; // Update number of sets
    resetAll(); // Reset entire game state
});

// Function to check if there is a match winner
function checkWinner() {
    if (setsWon1 === Math.ceil(noOfSetsValue / 2)) {
        alert('Player 1 wins the match');
        resetAll(); // Reset all scores and sets
    } else if (setsWon2 === Math.ceil(noOfSetsValue / 2)) {
        alert('Player 2 wins the match');
        resetAll(); // Reset all scores and sets
    }
}

// Function to display tiebreak scores in superscript
function tieBreakPointDisplay() {
    const superscript1 = document.createElement('sup');
    const superscript2 = document.createElement('sup');
    superscript1.textContent = tieBreakScore1;
    superscript2.textContent = tieBreakScore2;
    gamesPlayer1.append(superscript1);
    gamesPlayer2.append(superscript2);
}

// Function to reset the game scores
function resetGame() {
    counterPlayer1 = 0;
    counterPlayer2 = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    gamesPlayer1.textContent = gamesWon1;
    gamesPlayer2.textContent = gamesWon2;
}

// Function to reset and prepare for the next set
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
    const space2 = document.createElement('span');
    space1.textContent = ' ';
    space2.textContent = ' ';
    space1.classList.add('extra-span');
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

    checkWinner(); // Check if there is a match winner after each set
}

// Event listener to reset all game and match data
btnReset.addEventListener('click', resetAll);

// Function to reset all scores, sets, and game state
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

    // Remove all additional span elements created during the game
    const allAddedSpans = document.querySelectorAll('.extra-span');
    allAddedSpans.forEach(set => {
        set.remove();
    });
}
