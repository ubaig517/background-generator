var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradientBody");
var button = document.querySelector("#rdm-button");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

  css.textContent = body.style.background + ";";
}

function randomNumber() {
  return Math.floor((Math.random() * 255) + 1);
}

function generateRandomColor() {
  var firstColor = "rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";

  var secondColor = "rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";

  body.style.background =
    "linear-gradient(to right, "
    + firstColor
    + ", "
    + secondColor
    + ")";

  css.textContent = body.style.background + ";";
}

body.addEventListener("load", setGradient());

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", generateRandomColor);
