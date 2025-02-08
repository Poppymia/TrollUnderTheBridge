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

    //reset the lives in case of starting over
    //sessionStorage.clear();

    //redirect user to game over screen
    window.location.href = "gameOver.html";
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
