
// create array of words

var wordsLibrary  = ['cat', 'dog', 'bird'];

// store total wins, losses, guesses, and guessed

var wins = 0;
var losses = 0;
var guessesLeft = 7;
var correctGuesses;
var answers = [];
var wrongGuesses;

//random computer word picked

var computerWord = [];

var remainingLetters = computerWord.length;

//The game

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    gameUpdate (letterGuessed);
    checkWin ();
}

function startGame () {
    // pick random word, create guesses left, create blank answer bank
    computerWord = wordsLibrary[Math.floor(Math.random() * wordsLibrary.length)];
    guessesLeft = 7;
    wrongGuesses = [];
    correctGuesses = [];

    //fill out blanks for the chosen computer word
    for (i = 0; i < computerWord.length; i++) {
        answers.push("_");
        
    }
}

function gameUpdate (letterGuessed) {
    //for each letter entered, decrease guesses left by 1, udpate page
    guessesLeft--;
    document.getElementById('guessesLeft').innerHTML = guessesLeft;

    //if the letter doesn't match the computer word, push the letter to the wrong guesses
    if (computerWord.indexOf(letterGuessed) === -1) {
        wrongGuesses.push(letterGuessed);
        wrongGuesses.innerHTML = wrongGuesses;
    }
    else  {
        // if letter in computer word matches letter entered, show letter in 
        for (var i = 0; i < computerWord.length; i++) {
            if (computerWord[i] === letterGuessed) {
            computerWord[i] = letterGuessed;
            }
        }
    }

}

function checkWin () {
    //check if no letters left of mystery word
    if (answers.indexOf('_')=== -1) {
        alert('Win!');
        win++;
        document.getElementById('wins').innerHTML = wins;
    }
    // if guesses run out, then lose
    else if (guessesLeft === 0) {
        alert ('You\'ve lost!')
        losses++;
        document.getElementById('losses').innerHTML = losses;
    }
}
    




startGame();



document.getElementById('computerWord').innerHTML = answers;

document.getElementById('guessesLeft').innerHTML = guessesLeft;

document.getElementById('wrongGuesses').innerHTML = wrongGuesses;
