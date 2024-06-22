/*
Returns a random number between 1 and 6 inclusive
*/
function diceRoll() {
  let fraction = Math.random();
  value = Math.floor(fraction * 6 + 1);
  return value;
}
// dynamically change path
function randomPath() {
  let path = "images/dice";
  const num = diceRoll();
  path = path + num.toString() + ".png";
  return { path: path, value: num };
}

// Prompt user name

const player1 = prompt("Enter Player 1 name");
const player2 = prompt("Enter Player 2 name");

// change names
const names = document.querySelectorAll("div.dice p");
names[0].innerHTML = player1;
names[1].innerHTML = player2;

// dice roll
const dice1 = randomPath();
const dice2 = randomPath();

const leftRoll = dice1.value;
const rightRoll = dice2.value;

const leftPath = dice1.path;
const rightPath = dice2.path;

// change left image according to path
document.querySelector(".img1").setAttribute("src", leftPath);
document.querySelector(".img2").setAttribute("src", rightPath);

// determine winner

if (leftRoll > rightRoll) {
  let message = "« " + player1 + " Wins";
  console.log(message);
  document.querySelector("h1").innerHTML = message;
} else if (rightRoll > leftRoll) {
  let message = player2 + " Wins" + " »";
  document.querySelector("h1").innerHTML = message;
} else {
  document.querySelector("h1").innerHTML = "It's a DRAW!";
}
