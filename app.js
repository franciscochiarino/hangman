// Variables

// index.html
const display = document.getElementById('display');
const head = document.getElementById('head');
const body = document.getElementById('body');
const leftArm = document.getElementById('arm-left');
const rightArm = document.getElementById('arm-right');
const leftLeg = document.getElementById('leg-left');
const leftArm = document.getElementById('leg-right');
// app.js
const letters = ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T']; // Any word we want to be guessed.
const guesses = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-']; // Blank letter spaces to be completed if letter is guessed.


// How to write in HTML
// let display = document.getElementById('display');
// const array = ['_', '_', '_', '_'];
// display.innerHTML += `<h1> ${array.join(' ')}</h1>`;