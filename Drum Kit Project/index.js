// obtaining the all drum buttons
let elements = document.querySelectorAll(".drum");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", handleClick);
}
function handleClick() {
  alert("I got clicked!");
}
