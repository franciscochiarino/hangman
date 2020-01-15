
// DOM variables
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
        if (counter >= 6) { // Six because 6 body parts appear: head, body, leftArm, rightArm, leftLeg and rightLeg.
            outputMessage.innerHTML = `<p>You lost.</p>`
        } else {
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
    
}

// Confeti

window.onload = function () {
    //canvas init
    var canvas = document.getElementById("canvas");
    document.body.style.background = 'url(' + canvas.toDataURL() + ')';

    var ctx = canvas.getContext("2d");

    //canvas dimensions
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    //snowflake particles
    var mp = 200; //max particles
    var particles = [];
    for (var i = 0; i < mp; i++) {
        particles.push({
            x: Math.random() * W, //x-coordinate
            y: Math.random() * H, //y-coordinate
            r: Math.random() * 15 + 1, //radius
            d: Math.random() * mp, //density
            color: "rgba(" + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", 0.8)",
            tilt: Math.floor(Math.random() * 5) - 5
        });
    }

    //Lets draw the flakes
    function draw() {
        ctx.clearRect(0, 0, W, H);



        for (var i = 0; i < mp; i++) {
            var p = particles[i];
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color; // Green path
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + p.tilt + p.r / 2, p.y + p.tilt);
            ctx.stroke(); // Draw it
        }

        update();
    }

    //Function to move the snowflakes
    //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
    var angle = 0;

    function update() {
        angle += 0.01;
        for (var i = 0; i < mp; i++) {
            var p = particles[i];
            //Updating X and Y coordinates
            //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
            //Every particle has its own density which can be used to make the downward movement different for each flake
            //Lets make it more random by adding in the radius
            p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
            p.x += Math.sin(angle) * 2;

            //Sending flakes back from the top when it exits
            //Lets make it a bit more organic and let flakes enter from the left and right also.
            if (p.x > W + 5 || p.x < -5 || p.y > H) {
                if (i % 3 > 0) //66.67% of the flakes
                {
                    particles[i] = {
                        x: Math.random() * W,
                        y: -10,
                        r: p.r,
                        d: p.d,
                        color: p.color,
                        tilt: p.tilt
                    };
                } else {
                    //If the flake is exitting from the right
                    if (Math.sin(angle) > 0) {
                        //Enter from the left
                        particles[i] = {
                            x: -5,
                            y: Math.random() * H,
                            r: p.r,
                            d: p.d,
                            color: p.color,
                            tilt: p.tilt
                        };
                    } else {
                        //Enter from the right
                        particles[i] = {
                            x: W + 5,
                            y: Math.random() * H,
                            r: p.r,
                            d: p.d,
                            color: p.color,
                            tilt: p.tilt
                        };
                    }
                }
            }
        }
    }

    //animation loop
    setInterval(draw, 20);
}
