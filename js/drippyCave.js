import { updateHearts } from "./gameUtility.js";

const riddleText = document.getElementById("riddle-text");
const buttons = document.querySelectorAll(".answer");

let lives = sessionStorage.getItem("lives")
  ? parseInt(sessionStorage.getItem("lives"))
  : 2;
updateHearts(lives);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Mosquito") {
      window.location.href = "success.html";
    } else {
      lives--;
      sessionStorage.setItem("lives", lives);
      updateHearts(lives);

      //go back one if user still has a life
      if (lives > 0) {
        alert("Wrong answer! You lost one life.");
        window.location.href = "darkForest.html";
      } else {
        window.location.href = "gameOver.html";
      }
    }
  });
});
