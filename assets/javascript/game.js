//DOM manipulation
var iUnderScore = document.getElementsByClassName('word-blanks');
var iRightLetter = document.getElementsByClassName('right-guesses');
var iWrongLetter = document.getElementsByClassName('wrong-guesses');
var iGuessesLeft = document.getElementsByClassName('guesses-left');
var iWins = document.getElementsByClassName('win-count');
var iLosses = document.getElementsByClassName('loss-count');
  


// Game Variables

var chars = ["SPIDERMAN", "DOCSTRANGE", "CPTAMERICA", "BLKPANTHER", "THOR", "HULK", "CPTMARVEL", "NICKFURY", "THANOS", "BLKWIDOW"]; 
var wins = 0;
var losses = 14000605;
var wrongLetter = [];
var rightLetter = [];
var guessesLeft = 4;
var underScore = [];
//var userGuesses = [];
var chosenWord; 

//Game
// --------
//picks random hero from array
    var chosenWord = chars[Math.floor(Math.random() * chars.length)];

    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } 
    }
console.log(chosenWord);
//Creates underscores in place of chosen hero (chosenWord)
    for (var i = 0; i < chosenWord.length; i++){
        underScore[i] = "_";
    }
console.log(underScore);
//Created new variable since some letters are used multiple times
    var remainingLetters = chosenWord.length;
//console.log(remainingLetters);

    document.onkeyup = function(event) {
 //Allows user input (only from A-Z)
        if (event.keyCode >=65 && event.keyCode <= 90) {
            var userGuess = event.key;
            var keyWord = String.fromCharCode(event.keyCode);
console.log(keyWord);
        }
//console.log(chosenWord.indexOf(keyWord));
//Takes userGuesses and places them in according array (right/wrong)
        if ((chosenWord.indexOf(keyWord) > -1) ){
//Replacing array elements with inputs
            rightLetter.push(keyWord);
        for (i=0; i <10; i++){
            underScore[chosenWord.indexOf(keyWord)] = keyWord;
           iUnderScore[0].textContent = underScore.join(' ');
        }
           iRightLetter[0].textContent = rightLetter;
        
            remainingLetters--;
//Good endgame and scoring system
            if (remainingLetters == 0){
                alert("Look at you!");
                wins++;
                iWins[0].textContent = wins;
                alert("Try again?")
                location.reload();
//console.log(wins);
            }
//console.log(rightLetter);
//console.log(underScore);
console.log(remainingLetters);
        }
        else {
//Similar logic for the correct answers 
            wrongLetter.push(keyWord);  
            iWrongLetter[0].textContent = wrongLetter;
            guessesLeft--;
            iGuessesLeft[0].textContent = guessesLeft;
           // iLosses[0].textContent = losses;
            losses++;
            
    
console.log(guessesLeft);
            if (guessesLeft == 0){
                alert("You tried...");
                alert("You hear a faint 'snap'...")
                window.close();
            }
        }        
  
}






