var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var futureSight = letters[Math.floor(Math.random() * letters.length)];
var wins = 0;
var	losses = 0;
var	guesses = 10;
var prevGuess = [];
var gameDiv = document.getElementById('#gamer');
var winning = document.getElementById('#wins');
var losing = document.getElementById('#losses');
var guessing = document.getElementById('#guesses');
var alreadyGuessed = document.getElementById('#prevGuesses');

function loseGame() {
		guesses--;

	//if (guesses === 0) {
		if (!guesses) {
			guesses = 10;
			losses++;
			return;
		}
	};
function winGame() {
		wins++;
		return;
	};
 


console.log(futureSight);


document.onkeyup = function(event) {
	if (event.key === futureSight) {
		alert('You are Psychic!');
		winGame();				
	} else {
		alert('Not this time!');
		loseGame();
	}
	futureSight = letters[Math.floor(Math.random() * letters.length)];
	prevGuess.push(event.key);
	console.log(futureSight)
};