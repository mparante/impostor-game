const words = [

  // FOOD
  "Pizza",
  "Burger",
  "Sushi",
  "Taco",
  "Ramen",
  "Ice Cream",
  "Donut",
  "Fries",
  "Hotdog",
  "Pancake",
  "Steak",
  "Spaghetti",
  "Chicken",
  "Popcorn",
  "Sandwich",

  // PLACES
  "Beach",
  "Airport",
  "School",
  "Hospital",
  "Cinema",
  "Zoo",
  "Mall",
  "Restaurant",
  "Library",
  "Gym",
  "Park",
  "Hotel",
  "Museum",
  "Cafe",
  "Subway",

  // GAMES & POP CULTURE
  "Minecraft",
  "Pokemon",
  "Naruto",
  "TikTok",
  "YouTube",
  "Disney",
  "Marvel",
  "Fortnite",
  "Roblox",
  "Among Us",
  "One Piece",
  "Dragon Ball",
  "Mario",
  "Netflix",
  "Instagram",

  // OBJECTS
  "Laptop",
  "Camera",
  "Mirror",
  "Chair",
  "Toothbrush",
  "Backpack",
  "Phone",
  "Keyboard",
  "TV",
  "Clock",
  "Wallet",
  "Headphones",
  "Microwave",
  "Fan",
  "Umbrella",

  // ACTIVITIES
  "Swimming",
  "Cooking",
  "Shopping",
  "Gaming",
  "Dancing",
  "Singing",
  "Camping",
  "Fishing",
  "Traveling",
  "Drawing",
  "Running",
  "Cycling",
  "Reading",
  "Sleeping",
  "Driving",

  // ANIMALS
  "Dog",
  "Cat",
  "Tiger",
  "Elephant",
  "Penguin",
  "Dolphin",
  "Monkey",
  "Rabbit",
  "Panda",
  "Shark",
  "Lion",
  "Giraffe",
  "Snake",
  "Frog",
  "Horse",

  // SPORTS
  "Basketball",
  "Football",
  "Baseball",
  "Tennis",
  "Volleyball",
  "Boxing",
  "Golf",
  "Badminton",
  "Skateboarding",
  "Surfing",

  // RANDOM FUN
  "Zombie",
  "Alien",
  "Robot",
  "Pirate",
  "Ninja",
  "Ghost",
  "Wizard",
  "Superhero",
  "Treasure",
  "Volcano",
  "Spaceship",
  "Time Machine",
  "Castle",
  "Fireworks",
  "Magic"

];

let playerCount = 3;

let impostorIndex = 0;
let currentWord = "";

let revealIndex = 0;

function showStartScreen() {

  document.getElementById("game").innerHTML = `

    <h1>IMPOSTOR</h1>

    <p class="subtitle">
      Pass-device party game
    </p>

    <select id="playerCount">

      <option value="3" selected>3 Players</option>
      <option value="4">4 Players</option>
      <option value="5">5 Players</option>
      <option value="6">6 Players</option>
      <option value="7">7 Players</option>
      <option value="8">8 Players</option>

    </select>

    <button onclick="startGame()">
      START GAME
    </button>
  `;
}

function startGame() {

  playerCount =
    parseInt(
      document.getElementById("playerCount").value
    );

  impostorIndex =
    Math.floor(Math.random() * playerCount);

  currentWord =
    words[Math.floor(Math.random() * words.length)];

  revealIndex = 0;

  showPassScreen();
}

function showPassScreen() {

  document.getElementById("game").innerHTML = `

    <h2>PASS DEVICE TO</h2>

    <div class="player">
      PLAYER ${revealIndex + 1}
    </div>

    <button onclick="showRole()">
      TAP TO REVEAL
    </button>
  `;
}

function showRole() {

  const isImpostor =
    revealIndex === impostorIndex;

  document.getElementById("game").innerHTML = `

    <h2>
      ${isImpostor
        ? "YOU ARE THE IMPOSTOR"
        : "YOUR WORD"}
    </h2>

    <div class="word">
      ${isImpostor ? "???" : currentWord}
    </div>

    <button onclick="nextPlayer()">
      HIDE & PASS
    </button>
  `;
}

function nextPlayer() {

  revealIndex++;

  if (revealIndex >= playerCount) {

    showDiscussionScreen();

    return;
  }

  showPassScreen();
}

function showDiscussionScreen() {

  document.getElementById("game").innerHTML = `

    <h1>DISCUSS!</h1>

    <p class="subtitle">
      Find the impostor.
    </p>

    <button onclick="showWinner()">
      REVEAL IMPOSTOR
    </button>
  `;
}

function showWinner() {

  document.getElementById("game").innerHTML = `

    <h2>IMPOSTOR</h2>

    <div class="player">
      PLAYER ${impostorIndex + 1}
    </div>

    <div class="word">
      ${currentWord}
    </div>

    <button onclick="showStartScreen()">
      PLAY AGAIN
    </button>
  `;
}

showStartScreen();