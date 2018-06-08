// Game variables
//Word Bank
var heroes = ["SPIDERMAN", "IRONMAN", "CPTAMERICA", "BLKPANTHER", "THOR", "HULK", "CPTMARVEL", "WOLVERINE", "DEADPOOL", "BLKWIDOW"]; 
//Choose word randomly
var randNumber = Math.floor(Math.random() * heroes.length);
var chosenWord = heroes[randNumber];
console.log(chosenWord);
//Game Scoring
var wins = 0;
var losses = 0;
var guessesLeft = 6;
//Game State
var gamerunning = false;
//Placeholder for chosenWord
var underScore = [];
//Guess Banks
var correctGuess = [];
var wrongGuess = [];
//DOM manipulation
var underScoreDOM = document.getElementsByClassName('underscores');



//Create underscores based on word length
function generateUnderscore() {
        for (var i=0; i < chosenWord.length; i++){
            underScore.push('_');
        }
        return underScore;

    }
//console.log(generateUnderscore());
//    
// Get users guess 
document.onkeyup = function(event) {
    var userGuess = event.key;
    var keyWord = String.fromCharCode(event.keyCode);

//If userGuess is correct
    if (chosenWord.indexOf(keyWord) >   -1) {
    //add to correct bank or wrong bank
        correctGuess.push(keyWord);
        
// replaces underscores with correct letter
        underScore[chosenWord.indexOf(keyWord)] = keyWord;
                underScoreDOM[0].innerHTML = underScore.join(' ');
        if (underScore.join ('') == chosenWord) {
            wins ++;
          
            //console.log(wins);
        }
//
  
    else  {
        wrongGuess.push(keyWord);
        guessesLeft++
        console.log(guessesLeft);
    }
 }
}

//

// Check if guess is correct 

// If right, push to right array

// If wrong, push to wrong array (Infinity Stones?)
