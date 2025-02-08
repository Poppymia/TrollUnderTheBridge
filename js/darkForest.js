import { updateHearts } from "./gameUtility.js";

const riddleText = document.getElementById("riddle-text");
const buttons = document.querySelectorAll(".answer");

let lives = sessionStorage.getItem("lives")
  ? parseInt(sessionStorage.getItem("lives"))
  : 2;
updateHearts(lives);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Echo") {
      window.location.href = "drippyCave.html"; //redirects to Drippy Cave
    } else {
      lives--;
      sessionStorage.setItem("lives", lives);
      updateHearts(lives);

      if (lives > 0) {
        alert("Wrong answer! You lost one life.");
        window.location.href = "index.html";
      } else {
        window.location.href = "gameOver.html";
      }
    }
  });
});
