let buttonColors = ["red", "green", "blue", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

//   $(this).fadeOut(170).fadeIn(170);

function nextSequence() {
  var randomIndex = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomIndex];
  gamePattern.push(randomChosenColor);
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

$(".btn").click(function (event) {
  userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  console.log(userClickedPattern);
});
