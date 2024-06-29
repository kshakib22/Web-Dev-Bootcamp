let buttonColors = ["red", "green", "blue", "yellow"];
let gamePattern = [];
function nextSequence() {
  return Math.floor(Math.random() * 4);
}

let randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);

gamePattern;

// not corrected yet
$(".button").click(function () {
  $(this).animate(
    {
      opacity: 0.5,
    },
    500
  );
});
