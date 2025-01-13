# Point Tracker Website

## Overview
This project is a simple web-based point tracker for keeping score in a tennis match. The interface allows users to add or subtract points for each player and displays the current score according to tennis scoring rules.

## Features
- Add points for Players 1 and 2.
- Display the current score based on tennis rules.
- Reset the game to start a new match.

## Tennis Scoring Rules
In tennis, the scoring system is unique and follows these rules:

**Point Values**:
   - **0 points**: "Love"
   - **1 point**: "15"
   - **2 points**: "30"
   - **3 points**: "40"

**Winning a Game**:
   - A player must win by at least two points.
   - If both players have won 3 points ("40-40"), it is called "Deuce".
   - After Deuce, a player must win two consecutive points:
     - First point after Deuce: "Advantage".
     - If the player with Advantage wins the next point, they win the game.
     - If the opposing player wins the next point, the score returns to Deuce.

**Winning a Set**:
   - A set is won by the first player to win 6 games, with at least a 2-game lead.
   - If the score reaches 6-6, a tiebreaker game is played (usually to 7 points, but the player must win by 2 points).

**Winning a Match**:
   - Matches are typically best of 3 or best of 5 sets, depending on the tournament.

## How to Use
- Open the Point Tracker.
- Use the buttons to adjust the score for each player.
- The current score will be displayed according to the tennis scoring rules.
- Use the "Reset" button to start a new match.

## Technologies Used
HTML, CSS, JavaScript

