import { updateHearts } from "./gameUtility.js";

const riddleText = document.getElementById("riddle-text");
const buttons = document.querySelectorAll(".answer");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Mosquito") {
      window.location.href = "success.html"; // Redirects to success page
    } else {
      window.location.href = "gameOver.html";
    }
  });
});
