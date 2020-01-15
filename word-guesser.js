// The Word Guesser

let letters = ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T']; // Any word we want to be guessed.
let guesses = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-']; // Blank letter spaces to be completed if letter is guessed.

const guessLetter = (letter) => { 
    let outputMessage = '';    
    let isValid = false; // TODO: Try to remove this variable and check if still works.

    // Makes sure the letter is upper-case for a fair comparison:
    letter = letter.toLocaleUpperCase(); 

    // Iterates through letter array, and checks if letter is in letters array:
    for (let i = 0; i < letters.length; i++) { 
        if (letters[i] === letter) { 
            isValid = true;
            // If true, blank space will be replace by letter in the guesses array:
            guesses[i] = letter;
        }
    }

    // Displays winning message if the word is guessed:
    if (isValid && letters.toString() === guesses.toString()) {
        outputMessage = `You won!`
    } 
    // Displays guessed letter message:
    else if (isValid) {
        outputMessage = `Well done! The word now is ${guesses}`;
    } 
    // Displays unguessed letter message:
    else {
        outputMessage = `The secret word doesnt have "${letter}". Try another letter!`;
    }

    return outputMessage;
};

console.log(guessLetter('d'));
console.log(guessLetter('f'));
console.log(guessLetter('p'));
console.log(guessLetter('d'));
console.log(guessLetter('o'));
console.log(guessLetter('a'));
console.log(guessLetter('v'));
console.log(guessLetter('j'));
console.log(guessLetter('t'));
console.log(guessLetter('s'));
console.log(guessLetter('r'));
console.log(guessLetter('i'));
console.log(guessLetter('c'));

////////////////////////////////////////////////////////////////////
