let buttonColors = ["red", "green", "blue", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
var level = 0;
var activeGame = false;

function onClick() {
  $(".btn").click(function (event) {
    userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    console.log("Length of game seq is " + gamePattern.length);
    console.log("Length of user seq is " + userClickedPattern.length);
    let index = userClickedPattern.length - 1;
    checkAnswer(index);
  });
}

function startOver() {
  level = 0;
  userClickedPattern = [];
  gamePattern = [];
}

function checkAnswer(index) {
  console.log(userClickedPattern);
  console.log(gamePattern);
  if (userClickedPattern[index] == gamePattern[index]) {
    if (userClickedPattern.toString() == gamePattern.toString()) {
      console.log("Correct");
      setTimeout(nextSequence, 500);
    }
  } else {
    console.log("Wrong");
    gameOver();
    startOver();
    activeGame = false;
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
  level += 1;
  $("h1").text("Level " + level);
  var randomIndex = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomIndex];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
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

function nextLevel() {
  $(document).keydown(function (event) {
    nextSequence();
  });
}

function masterGame() {
  nextLevel();
  onClick();
}

masterGame();
