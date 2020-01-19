
// DOM variables
const wordDisplay = document.getElementById('word-display');
const outputMessage = document.getElementById('output-message');
const usedCharacter = document.getElementById('used-character');
const letter = document.getElementById('letter');
const head = document.getElementById('head');
const body = document.getElementById('body');
const leftArm = document.getElementById('arm-left');
const rightArm = document.getElementById('arm-right');
const leftLeg = document.getElementById('leg-left');
const rightLeg = document.getElementById('leg-right');
const happy = document.getElementById('happy');
const sad = document.getElementById('sad');


// Local variables

// Any word we want to be guessed.
const possibleWords = [
    ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T'], 
    ['A','W', 'K', 'W', 'A', 'R', 'D'],
    ['O', 'X', 'Y', 'G', 'E', 'N'],
    ['Z', 'O', 'M', 'B', 'I', 'E'],
    ['Y', 'A', 'C', 'H', 'T']
]; 
const letters = possibleWords[Math.floor(Math.random() * possibleWords.length)]; // Selects one array in possibleWords array.

// Create array with same length as word.
const guesses = [];
for (let i = 0; i < letters.length; i++) {
    guesses.push('_');
}

// Checks how many times the player fails.
let counter = 0; 

// Display's initial state:
wordDisplay.innerHTML = `<p> ${guesses.join(' ')} </p>`;
outputMessage.innerHTML = `<p>Time to play hangman!</p>`;

// Application
const guessLetter = (pickedLetter) => {
    pickedLetter = letter.value;
    let isValid = false; // Needed to check if the player missed.

    // Make sure the letter is one upper-case character for a fair comparison:
    pickedLetter = pickedLetter.toLocaleUpperCase(); 
    if (pickedLetter.length > 1) {
        return outputMessage.innerHTML = `<p>Make sure you introduce one character at a time</p>`
    }

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
        outputMessage.innerHTML = `<p> You won! </p>`;
        sad.style.display = 'none';
        happy.style.display = 'inline';
    }

    // Display guessed letter message:
    else if (isValid) {
        outputMessage.innerHTML = `<p> Well done! </p>`;
    }

    // Display unguessed letter message:
    else {
        counter += 1;
        if (counter >= 6) { // Six because 6 body parts appear: head, body, leftArm, rightArm, leftLeg and rightLeg.
            outputMessage.innerHTML = `<p>You lost.</p>`
        } else {
            // Display the letter in the used-characters container
            usedCharacter.innerHTML += `${pickedLetter} `;
            outputMessage.innerHTML = `<p>The secret word doesn\'t have any ${pickedLetter}</p>`
        }
    }   

    // Draw:
    switch (counter) {
        case 1:
            head.style.display = 'inline';
            break;
        case 2:
            body.style.display = 'inline';
            break;
        case 3:
            leftArm.style.display = 'inline';
            break;
        case 4:
            rightArm.style.display = 'inline';
            break;
        case 5:
            leftLeg.style.display = 'inline';
            break;
        case 6:
            rightLeg.style.display = 'inline';
            break;
    }

    letter.value = '';
    
}