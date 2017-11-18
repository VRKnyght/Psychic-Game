var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var futureSight = letters[Math.floor(Math.random() * letters.length)];
var wins = 0;
var	losses = 0;
var	guesses = 10;
var prevGuess = [];
var gameDiv = document.getElementById('gamer');
var winning = document.getElementById('wins');
var losing = document.getElementById('losses');
var guessing = document.getElementById('guesses');
var alreadyGuessed = document.getElementById('prevGuesses');
var logo = document.getElementById('logo');



function loseGame() {
		guesses--;

	//if (guesses === 0) {
		if (!guesses) {
			guesses = 10;
			losses++;


		}
		guessing.innerHTML = guesses;
		losing.innerHTML = losses;
	};
function winGame() {
		wins++;
winning.innerHTML = wins;
	};
 




document.onkeyup = function(event) {
	if (event.key === futureSight) {
		winGame();				
	} else {
		loseGame();
	}
	futureSight = letters[Math.floor(Math.random() * letters.length)];
	prevGuess.push(event.key);
	alreadyGuessed.innerHTML = prevGuess;
	console.log(futureSight)

if (wins === 10 && losses < 10) {
	gameDiv.innerHTML = "<p>Congratulations! </p> <img src=./images/download.jpg> <p>You may want to look into being a Drifter</p>";
	logo.innerHTML = '<img style="height: 200px; width: 100%" src=./images/The_Unspoken_Logo_black.png>'

}
};

