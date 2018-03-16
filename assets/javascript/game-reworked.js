
// create array of words

var wordsLibrary  = ['cat', 'dog', 'bird'];

// store total wins, losses, guesses, and guessed

var wins = 0;
var losses = 0;
var guessesLeft = 7;
var guessedLetters = [];
var answers = [];

//random computer word picked

var computerWord = [];

var remainingLetters = computerWord.length;

//The game

function start () {
    // pick random word, create guesses left, create blank answer bank
    computerWord = wordsLibrary[Math.floor(Math.random() * wordsLibrary.length)];
    remainingLetters = computerWord.length;
    guessesLeft = 7;
    for (i = 0; i < computerWord.length; i++) {
        answers[i] = '_';        
    }
    
}




start();


document.getElementById('wins').innerHTML = wins;
document.getElementById('computerWord').innerHTML = answers;
