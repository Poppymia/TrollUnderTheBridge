import { updateHearts } from "./gameUtility.js";

//gets the text from the html pages
const riddleText = document.getElementById("riddle-text");
const buttons = document.querySelectorAll(".answer");

//track lives and level with session objects
//start at the default
let lives = sessionStorage.getItem("lives")
  ? parseInt(sessionStorage.getItem("lives"))
  : 2;
updateHearts(lives);

//hardcoded for loop for checking what user clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Egg") {
      window.location.href = "darkForest.html"; //redirects to DarkForest.html
    } else {
      //take a life away
      lives--;
      sessionStorage.setItem("lives", lives);
      updateHearts(lives);

      if (lives > 0) {
        //add a warning that you lost a life
        alert("Wrong answer! You lost one life.");
        window.location.href = "index.html";
      } else {
        window.location.href = "gameOver.html";
      }
    }
  });
});
