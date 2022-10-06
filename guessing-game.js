/**Write a function called guessingGame which returns a function that allows you to guess a random whole number between 0 and 99. 
Every time you create a new game, it should select a new random number, and keep it secret from the player.
Once the game has started, you can guess the number. The game should tell you whether your guess is too high, too low, or correct.
After a correct guess, the game ends. */

function guessingGame() {
    //produce a random whole number between 0 and 99
    const randomNum = Math.floor(Math.random() * 100);
    let gameOver = false;
    let numOfGuesses = 0;

    return function guess(num) {
        if (gameOver) return `You won, the game is over!`;
        numOfGuesses++;
        if (num === randomNum) {
            gameOver = true;
            const guess = numOfGuesses === 1 ? "guess" : "guesses";
            return `You won! You found ${num} in ${numOfGuesses} ${guess}.`;
        }
        if (num < randomNum) return `${num} is too low!`;
        if (num > randomNum) return `${num} is too high!`;
    }
}

module.exports = { guessingGame };