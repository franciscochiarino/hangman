
// Variables from index.html
const wordDisplay = document.getElementById('word-display');
const outputMessage = document.getElementById('output-message');
const letter = document.getElementById('letter');
const head = document.getElementById('head');
const body = document.getElementById('body');
const leftArm = document.getElementById('arm-left');
const rightArm = document.getElementById('arm-right');
const leftLeg = document.getElementById('leg-left');
const rightLeg = document.getElementById('leg-right');

// Local variables
const letters = ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T']; // Any word we want to be guessed.
const guesses = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_']; // Blank letter spaces to be completed if letter is guessed.
let counter = 0; // Checks how many times the player fails.

// Application

// Display's initial state:
wordDisplay.innerHTML = `<p> ${guesses.join(' ')} </p>`;
outputMessage.innerHTML = `<p>Time to play hangman!</p>`;

const guessLetter = (pickedLetter) => {
    pickedLetter = letter.value;
    let isValid = false; // Needed to check if the player missed.

    // Make sure the letter is one upper-case character for a fair comparison:
    pickedLetter = pickedLetter.toLocaleUpperCase(); 
    if (pickedLetter.length > 1) {
        return outputMessage.innerHTML = `<p>Make sure you introduce one character at a time</p>`
    }
    console.log(pickedLetter);

    // Iterate through letter array, and check if letter is in letters array:
    for (let i = 0; i < letters.length; i++) { 
        if (letters[i] === pickedLetter) { 
            // If true, blank space will be replace by letter in the guesses array:
            isValid = true;
            guesses[i] = pickedLetter;
            wordDisplay.innerHTML = `<p> ${guesses.join(' ')} </p>`;
        }
    }

    // Display winning message if the word is guessed:
    if (letters.toString() === guesses.toString()) {
        outputMessage.innerHTML = `<p> You fucking won! </p>`;
    }

    // Display guessed letter message:
    else if (isValid) {
        outputMessage.innerHTML = `<p> Well done! </p>`;
    }

    // Display unguessed letter message:
    else {
        counter += 1;
        console.log(counter);
        if (counter >= 7) {
            outputMessage.innerHTML = `<p>You lost.</p>`
        } else {
            outputMessage.innerHTML = `<p>The secret word doen\'t have any ${pickedLetter}</p>`
        }
    }   
}

// How to write in HTML
// let display = document.getElementById('display');
// const array = ['_', '_', '_', '_'];
// display.innerHTML += `<h1> ${array.join(' ')}</h1>`;