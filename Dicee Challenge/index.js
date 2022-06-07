<<<<<<< HEAD
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".player1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".player2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

var text = document.querySelector("h1");
if (randomNumber1 === randomNumber2) {
  text.textContent = "draw";
} else if (randomNumber1 > randomNumber2) {
  text.textContent = "🚩Player1 Wins"
} else {
  text.textContent = "Player2 Wins🚩"
}

// function playDice() {
//
// }
=======
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".player1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".player2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

var text = document.querySelector("h1");
if (randomNumber1 === randomNumber2) {
  text.textContent = "draw";
} else if (randomNumber1 > randomNumber2) {
  text.textContent = "🚩Player1 Wins"
} else {
  text.textContent = "Player2 Wins🚩"
}

// function playDice() {
//
// }
>>>>>>> 5a055a5e0f2bca436eac7d3c952bdffee6610ab7
