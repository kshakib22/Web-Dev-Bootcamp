let buttonColors = ["red", "green", "blue", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
function nextSequence() {
  return Math.floor(Math.random() * 4);
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
let randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);

gamePattern;
let colorID = gamePattern[0];
colorID;

$("#" + colorID).click(function () {
  playSound(colorID);
  animatePress(colorID);

  //   $(this).fadeOut(170).fadeIn(170);
});

$(".btn").click(function (event) {
  userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
});
