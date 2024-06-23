// obtaining the all drum buttons
let elements = document.querySelectorAll(".drum");

// alert to notify a click
function handleClick() {
  alert("I got clicked!");
}

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    let buttonHtml = this.innerHTML;
    console.log(buttonHtml);

    switch (buttonHtml) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      default:
        console.log(buttonHtml);
    }
  });
}
