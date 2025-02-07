//helper class

export function updateHearts(lives) {
  console.log("updateHearts called with lives: ", lives);
  
    const heart1 = document.getElementById("heart1");
    const heart2 = document.getElementById("heart2");

    if (!heart1 || !heart2) {
      console.error("hearts not found");
      return; 
    }

    if (lives === 1) {
      heart2.style.display = "none"; 
    }
    else if (lives === 0) {
      heart1.style.display = "none";
  
      //reset the lives in case of starting over
      //sessionStorage.clear();
  
      //redirect user to game over screen
      window.location.href = "gameOver.html";
    }
  }
  