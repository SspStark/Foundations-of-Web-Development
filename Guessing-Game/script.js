let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomnumber = Math.ceil(Math.random() * 100);
console.log(randomnumber);

function checkGuess() {
    let guessednumber = parseInt(userInput.value);
    if (guessednumber > randomnumber) {
        gameResult.textContent = 'Too high, Try Again!';
        gameResult.style.backgroundColor = '#1e217c';
    } else if (guessednumber < randomnumber) {
        gameResult.textContent = 'Too low, Try Again!';
        gameResult.style.backgroundColor = '#1e217c';
    } else if (guessednumber === randomnumber) {
        gameResult.textContent = 'Congratulations, You got it right.';
        gameResult.style.backgroundColor = 'green';
    } else {
        gameResult.textContent = 'Please provide a valid input.';
        gameResult.style.backgroundColor = 'red';
    }
}