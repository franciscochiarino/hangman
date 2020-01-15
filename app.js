
// Variables from index.html
const display = document.getElementById('display');
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

// Application

// Display's initial state:
display.innerHTML += `<p id="guess-characters"> ${guesses.join(' ')} </p>`

const guessLetter = (pickedLetter) => {
    let outputMessage = '';

    // Make sure the letter is upper-case for a fair comparison:
    pickedLetter = letter.value
    pickedLetter = pickedLetter.toLocaleUpperCase(); 
    console.log(pickedLetter);

    // Iterate through letter array, and check if letter is in letters array:
    // for (let i = 0; i < letters.length; i++) { 
    //     if (letters[i] === letter) { 
    //         // If true, blank space will be replace by letter in the guesses array:
    //         guesses[i] = letter;
    //     }
    // }
}

// How to write in HTML
// let display = document.getElementById('display');
// const array = ['_', '_', '_', '_'];
// display.innerHTML += `<h1> ${array.join(' ')}</h1>`;