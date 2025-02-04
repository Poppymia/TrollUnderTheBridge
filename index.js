const riddleText = document.getElementById("riddle-text");
const buttons = document.querySelectorAll(".answer");

const riddles = [
  ["What has to be broken before you can use it?", "Egg", "Rock", "Glass", "Hammer"], 
  ["I speak without a mouth and hear without ears. I have no body, but I come alive with wind.", "Echo", "Shadow", "Wind", "Silence"], 
  ["I come from a mine and get surrounded by wood always. Everyone uses me. What am I?", "Pencil", "Coal", "Diamond", "Paper"], 
  ["They fly at night; you'd better run. These winged things are not much fun.", "Bats", "Birds", "Witches", "Fish"], 
  ["A little bite will make you itch, make you sneeze, make you twitch.", "Mosquito", "Nick", "Ant", "Snake"], 
  ["Don't be fooled; it isn't thunder. Staying put would be a blunder.", "Stampede", "Horses", "Earthquake", "Arrows"], 
  ["Need a hand? Well, you just wait. We'll lend a hand; we each have eight.", "Spiders", "Octopuses", "Roaches", "Ants"], 
  ["", "", "", "", ""]
  // Add more riddles as needed
];

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "Egg") {
            alert("Correct! Moving to next level...");
            // Code to go to the next riddle
        } else {
            alert("Wrong answer! Try again.");
        }
    });
});

//questions:
//can the front page be a page?
//then when the user clicks play, it takes them to the first level
//in the future we can make it a dynamic thing where it can just create a random page
//until the riddles run out

//ok first iteration of the game: 
//static riddles/pages; not randomized, we can make it dynamic in the future
//maps/pages:
//index.html: troll under the bridge
//forest.html: troll in the forest
//cave.html: troll in the cave
//treasureCave.html: troll in front of gold 
//we'll make the css simple; like the background colours are simple, not a lot of detail

//future plans for the game: 
//we make it dynamic; we have a big list of 
//we have objects, like a map object where different maps have themes and are randomized to come one after another so that it's replayable by our user
//maybe a customizable character?
//different "trolls" in certain themes of the maps
//for this, Ashley and I could possibly create these ourselves!! how could i make pixel art on photoshop or illustrator?

//unit tests:
//1. test if clicking the correct answer brings you to the next page/level
//2. test if clicking an incorrect option prevents progression; expected would be a warning message to pop up 
//^per level??? since it's static, it will have different code :D
//3. possible test: layout test???

//email to the prof: (don't forget to mention name, student num, class name and section)
//so far we only have two unit tests garaunteed, which are testing what happens after the user clicks the correct button and testing what happens if the user clicks the wrong button
//brief description of game: game title: Troll Under the Bridge, the goal of the user is to get to the last map/page which will have gold as a reward! :D
//also, would it be inappropriate if the troll harmed the user character and there was an end-game page, where it also displayed the highscore (this would be for future development as well), i'm mainly asking about the violence aspect of it

//references:
//I used chatGPT for creating the main css portion; Actually did this at work on Codepen.io
//So I got the index.html to work there and a static version 
//used coolors.co for the different colours of the sky and ground
//images:
//bla bla bla
//got them from google, in the future I'd LIKE to maybe figure out how to make them myself?? (Ask Ashley about this) 
//my brother actually gave me the idea of doing a troll under the bridge game, so i got that idea from him, he helped me come up with the other pages as well as the end goal, which is the gold
