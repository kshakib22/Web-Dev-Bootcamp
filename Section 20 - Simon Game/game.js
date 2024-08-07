let buttonColors = ["red", "green", "blue", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
var level = 0;
var activeGame = false;

$(".btn").click(function (event) {
  if (activeGame) {
    userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    let index = userClickedPattern.length - 1;
    checkAnswer(index);
  }
});

function startOver() {
  level = 0;
  userClickedPattern = [];
  gamePattern = [];
  activeGame = false;
}

function checkAnswer(index) {
  if (userClickedPattern[index] == gamePattern[index]) {
    if (userClickedPattern.length == gamePattern.length) {
      userClickedPattern = [];
      nextSequence();
    }
  } else {
    gameOver();
    startOver();
  }
}

function gameOver() {
  $("body").addClass("game-over");
  $("h1").text("Game Over! Press Any Key (or Tap) to Restart");
  let audio = new Audio("sounds/wrong.mp3");
  setTimeout(function () {
    $("body").removeClass("game-over");
    audio.play();
  }, 313);
}

function nextSequence() {
  level += 1;
  $("h1").text("Level " + level);
  var randomIndex = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomIndex];
  gamePattern.push(randomChosenColor);
  setTimeout(function () {
    fade(randomChosenColor);
  }, 800);
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

// Game starts here
$(document).keypress(function (event) {
  if (!activeGame) {
    activeGame = true;
    nextSequence();
  }
});

// Starts here on touch devices (tap to start)
$(document).on("touchstart", function (event) {
  if (!activeGame) {
    activeGame = true;
    nextSequence();
  }
  console.log("Touch detected!");
});
