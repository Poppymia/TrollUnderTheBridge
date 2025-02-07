const riddleText = document.getElementById("riddle-text");
const buttons = document.querySelectorAll(".answer");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Echo") {
      window.location.href = "drippyCave.html"; // Redirects to Drippy Cave
    } else {
      window.location.href = "gameOver.html";
    }
  });
});
