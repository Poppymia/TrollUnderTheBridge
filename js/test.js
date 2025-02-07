// Get elements
const riddleText = document.getElementById("riddle-text");
const buttons = document.querySelectorAll(".answer");
const heart1 = document.getElementById("heart1");
const heart2 = document.getElementById("heart2");

// Track lives and level
let lives = sessionStorage.getItem("lives") ? parseInt(sessionStorage.getItem("lives")) : 2;
let currentLevel = sessionStorage.getItem("level") ? parseInt(sessionStorage.getItem("level")) : 1;

// Define level progression
const levels = ["index.html", "darkForest.html", "success.html"]; // Add all levels in order

// Update lives display
function updateHearts() {
  if (lives === 1) {
    heart2.style.display = "none"; // Hide one heart
  } else if (lives === 0) {
    heart1.style.display = "none"; // Hide both hearts
  }
}

// Attach event listeners to answer buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Egg") { // Change answer condition as needed
      currentLevel++; // Move to next level
      if (currentLevel >= levels.length) {
        window.location.href = "success.html"; // Final win screen
      } else {
        sessionStorage.setItem("level", currentLevel); // Save progress
        window.location.href = levels[currentLevel]; // Go to next level
      }
    } else {
      lives--; // Reduce life
      sessionStorage.setItem("lives", lives); // Save updated lives
      updateHearts(); // Update UI

      if (lives <= 0) {
        sessionStorage.clear(); // Reset session on game over
        window.location.href = "gameOver.html";
      } else {
        currentLevel = Math.max(0, currentLevel - 1); // Go back one level
        sessionStorage.setItem("level", currentLevel);
        window.location.href = levels[currentLevel]; // Return to previous level
      }
    }
  });
});

// Ensure hearts reflect current lives on page load
updateHearts();
