//helper functions

export function updateHearts(lives) {
  console.log("updateHearts called with lives: ", lives);

  const heart1 = document.getElementById("heart1");
  const heart2 = document.getElementById("heart2");

  //stop displaying hearts
  if (lives === 1) {
    heart2.style.display = "none";
  } else if (lives === 0) {
    heart1.style.display = "none";

    // Play rock, paper, scissors mini-game
    playMiniGame();
  }
}

function playMiniGame() {
  const userChoice = prompt("Choose rock, paper, or scissors:");
  const choices = ["rock", "paper", "scissors"];
  const trollChoice = choices[Math.floor(Math.random() * choices.length)];

  alert(`Troll chose: ${trollChoice}`);

  if (userChoice === trollChoice) {
    alert("It's a tie! Try again.");
    playMiniGame();
  } else if (
    (userChoice === "rock" && trollChoice === "scissors") ||
    (userChoice === "paper" && trollChoice === "rock") ||
    (userChoice === "scissors" && trollChoice === "paper")
  ) {
    alert("You win! Choose your reward:");
    chooseReward();
  } else {
    alert("You lose! Game over.");
    window.location.href = "gameOver.html";
  }
}

function chooseReward() {
  const reward = prompt(
    "Choose your reward:\n1. Get one life and return to the level you lost at\n2. Get both lives but start from the beginning\n3. 1 in 10 chance of winning the whole game"
  );

  switch (reward) {
    case "1":
      sessionStorage.setItem("lives", 1);
      // Logic to return to the level they lost at
      break;
    case "2":
      sessionStorage.setItem("lives", 2);
      // Logic to start from the beginning
      window.location.href = "index.html";
      break;
    case "3":
      if (Math.random() < 0.1) {
        alert("Congratulations! You won the whole game!");
        window.location.href = "success.html";
      } else {
        alert("Sorry, you didn't win. Game over.");
        window.location.href = "gameOver.html";
      }
      break;
    default: // Invalid choice
      alert("Invalid choice. Game over.");
      window.location.href = "gameOver.html";
      break;
  }
}

//for future use
//maybe make separate lists based off difficulty
const riddles = [
  [
    "What has to be broken before you can use it?",
    "Egg",
    "Rock",
    "Glass",
    "Hammer",
  ],
  [
    "I speak without a mouth and hear without ears. I have no body, but I come alive with wind.",
    "Echo",
    "Shadow",
    "Wind",
    "Silence",
  ],
  [
    "I come from a mine and get surrounded by wood always. Everyone uses me. What am I?",
    "Pencil",
    "Coal",
    "Diamond",
    "Paper",
  ],
  [
    "They fly at night; you'd better run. These winged things are not much fun.",
    "Bats",
    "Birds",
    "Witches",
    "Fish",
  ],
  [
    "A little bite will make you itch, make you sneeze, make you twitch.",
    "Mosquito",
    "Nick",
    "Ant",
    "Snake",
  ],
  [
    "Don't be fooled; it isn't thunder. Staying put would be a blunder.",
    "Stampede",
    "Horses",
    "Earthquake",
    "Arrows",
  ],
  [
    "Need a hand? Well, you just wait. We'll lend a hand; we each have eight.",
    "Spiders",
    "Octopuses",
    "Roaches",
    "Ants",
  ],
  ["", "", "", "", ""],
  // Add more riddles as needed
];
//if implemented in the future with dnamic theme riddles list
//possible logic is to save the used riddle in a session variable
//in case of user being wrong and going back a level, riddle shouldn't be the same
