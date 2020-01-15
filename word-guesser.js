// The Word Guesser

let letters = ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T']; // letters.length is 10
let guesses = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-']; // ['-', 'A', '-', '-', '-', '-', '-', '-', '-', '-']

const guessLetter = (letter) => { // 'A'
    let output = '';
    let isValid = false;

    letter = letter.toLocaleUpperCase();

    for (let i = 0; i < letters.length; i++) { // i = 1; 1 < 10
        if (letters[i] === letter) { // 'A' === 'A'
            isValid = true;
            guesses[i] = letter;
        }
    }

    if (isValid && letters === guesses) {
        output = `You won!`
    } else if (isValid) {
        output = `Well done! The word now is ${guesses}`;
    } else {
        output = `The secret word doesnt have "${letter}". Try another letter!`;
    }
    
    return output;
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
