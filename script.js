//On the lines below define four variables secretWord, guesses, misses, and images
// Set secretWord equal to null
// Set correctGuesses equal to an empty array
// Set wrongGuesses equal to an empty array
// Set images to an array contataining all of your images links as strings (in order)

/*global $*/
var secretWord = null;
var correctGuess = [];
var wrongGuess = [];
var images = [
    "images/Hangman-0.png",
    "images/Hangman-1.png",
    "images/Hangman-2.png",
    "images/Hangman-3.png",
    "images/Hangman-4.png",
    "images/Hangman-5.png",
    "images/Hangman-6.png"
]






// in the prepareGame() function below
// set correctGuesses to an empty array
// set wrongGuesses to an empty array
// call the drawWord() function
// call the drawHangman() function
function prepareGame() {
    secretWord = ['S', 'A', 'V', 'I', 'T', 'A', "R", ];
    correctGuess = [];
    wrongGuess = [];
    drawWord();
    drawHangman();

}


// in this onWin() function below 
// 1. alert "You won!"
function onWin() {
    alert("You won!")


}

// in this onLose() function below 
// 1. alert "You lost!"
function onLose() {
    alert("You lost!")

}

// in this checkIfWon() function below
// 1. Declare a variable hasAll and set equal to true
// 2. For each letter in secretWord 
//    a. if correctGuesses does not include the letter (!) set variable hasAll to false
// 3. return hasAll
function checkIfWon() {

    var hasAll = true;
    secretWord.forEach(function(letter, secretWord) {
        var hasletter = $.inArray(letter, correctGuess);

        if (hasletter === -1) {
            hasAll = false;
        }


    });
    return hasAll

}


// in this checkIfLost() function below
// 1. declare a variable misses and set it equal to the length of wrongGuesses array
// 2. if misses is less than 6 return false else return true
function checkIfLost() {
    var misses = wrongGuess.length;
    if (misses < 6) {
        return false;
    }
    else {
        return true;
    }



}

// in the onCorrectGuess() function below
// 1. add the the letter variable to the array correctGuesses
// 2. call the drawWord function
// 3. if the checkIfWon() is returns true call the onWin() function 
function onCorrectGuess(letter) {
    correctGuess.push(letter)
    drawWord();

    if (checkIfWon() === true) {
        onWin();
    }
}





// in the onWrongGuess() function below
// 1. add the the letter variable to the array wrongGuesses
// 2. call the drawHangman function
// 3. if the checkIfLost() function returns true call the onLose() function 
function onWrongGuess(letter) {
    wrongGuess.push(letter)
    drawHangman();
    if (checkIfLost() === true) {
        onLose();

    }
}

// in the judgeGuess function below
// 1. if the letter is included in secretWord, call the onCorrectGuess(letter) function
//    otherwise call onWrongGuess(letter) function
function judgeGuess(letter) {
    if (secretWord.join("").includes(letter)) {
        return onCorrectGuess(letter);

    }
    else {
        return onWrongGuess(letter);
    }


}


// in the drawWord function below
// 1. empty the div tag with the id "word"
// 2. For each letter in secretWord 
//    if correctGuesses includes letter append the letter
//    othewise append and underscore
function drawWord() {
    $("#word").html("");
    secretWord.forEach(function(letter) {
        if (correctGuess.join("").includes(letter)) {
            $("#word").append(letter);
        }
        else {
            $("#word").append("_");
        }

    })
}


// in the drawHangman function below
// 1. define a variable misses equal to the length of wrongGuesses
// 2. change the src of the img tag with the id hangman 
//    to the correct image url based on the number of misses
function drawHangman() {
    var misses = wrongGuess.length;

    $("#hangman").attr("src", images[misses])


}



// in the onKeyDown function below
// 1. define a variable letter an set it equal to the correct letter
// 2. set letter equal to the upperCase of itself
// 3. call the judgeGuess function with letter as an argument

function onKeyDown(event) {

    var letter = String.fromCharCode(event.which);
    console.log(letter);
    var letter = letter.charAt(0).toUpperCase();

    judgeGuess(letter);

}

// Call the prepare game function
// Initialize a jQuery keydown event handler 
//       (Keydown function should take onKeyDown function as an argument)
$(document).ready(function() {
    prepareGame();
    var letter = event.key;
    // alert("You guessed" + letter + "!");
    $("body").keydown(onKeyDown);

});
