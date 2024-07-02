let buttonColors = ["red", "green", "blue", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
var level = 0;
var activeGame = false;
var counter = 0;

$(".btn").click(function (event) {
  if (activeGame) {
    userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    console.log("Length of game seq is " + gamePattern.length);
    console.log("Length of user seq is " + userClickedPattern.length);
    let index = userClickedPattern.length - 1;
    checkAnswer(index);
  }
});

function startOver() {
  level = 0;
  userClickedPattern = [];
  gamePattern = [];
  activeGame = false;
  counter = 0;
}

function checkAnswer(index) {
  console.log(userClickedPattern);
  console.log(gamePattern);
  if (userClickedPattern[index] == gamePattern[index]) {
    console.log("Correct");
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(nextSequence, 400);
    }
  } else {
    console.log("Wrong");
    gameOver();
    startOver();
  }
}

function gameOver() {
  $("body").addClass("game-over");
  $("h1").text("Game Over, press any key to restart");
  let audio = new Audio("sounds/wrong.mp3");
  setTimeout(function () {
    $("body").removeClass("game-over");
    audio.play();
  }, 231);
}

function nextSequence() {
  console.log("Entered nextSeq");
  level += 1;
  $("h1").text("Level " + level);
  var randomIndex = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomIndex];
  gamePattern.push(randomChosenColor);
  setTimeout(fade(randomChosenColor), 400);
}

function fade(color) {
  $("#" + color)
    .fadeOut(200)
    .fadeIn(200);
}

function playSound(name) {
  let path = "sounds/" + name + ".mp3";
  let audio = new Audio(path);
  audio.play();
}

function animatePress(currentColor) {
  let selector = "#" + currentColor;
  $(selector).addClass("pressed");
  setTimeout(function () {
    $(selector).removeClass("pressed");
  }, 113);
}

console.log("Start Level");
$(document).keydown(function (event) {
  if (!activeGame) {
    activeGame = true;
    nextSequence();
  }
});
