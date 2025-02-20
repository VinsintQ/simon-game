//variables
let position;
let index = 0;
const playerchoices = [];
const compSeq = [];
let GameRuning = false;
let score = 0;
let highScore = 0;
const wrong = new Audio("sounds/wrong.mp3");
const Audios = [
  "sounds/box1.mp3",
  "sounds/box2.mp3",
  "sounds/box3.mp3",
  "sounds/box4.mp3",
  "sounds/box5.mp3",
  "sounds/box6.mp3",
  "sounds/box7.mp3",
  "sounds/box8.mp3",
  "sounds/box9.mp3",
];
const boxs = [
  "#box1",
  "#box2",
  "#box3",
  "#box4",
  "#box5",
  "#box6",
  "#box7",
  "#box8",
  "#box9",
];
// the query selectors
const buttons = document.querySelectorAll(".row>div");
const body = document.querySelector("body");
const msg = document.querySelector("h3");
const lvl = document.querySelector("h4");
const mobilemsg = document.querySelector("#Mobile");
if (localStorage.getItem("highScore")) {
  highScore = localStorage.getItem("highScore");
  updateHighScoreDisplay();
}
//functions
function startGame() {
  if (GameRuning == false) {
    GameRuning = true;
    index = 0;
    score = 0;
    playerchoices.length = 0;
    compSeq.length = 0;

    generateSequence();
  }
}
function generateSequence() {
  const random = Math.floor(Math.random() * 9);
  compSeq.push(boxs[random]);
  var sound = new Audio(Audios[random]);
  sound.play();
  showSequence();
  level();
}
function showSequence() {
  const lastelem = compSeq[compSeq.length - 1];
  const last = document.querySelector(lastelem);
  last.classList.add("shine");
  setTimeout(() => {
    last.classList.remove("shine");
  }, 350);
}
let clicked = false;
function compareSeq() {
  if (playerchoices[index] == compSeq[index]) {
    index++;
    var sound = new Audio("sounds/" + position + ".mp3");
    sound.play();
    if (index >= compSeq.length) {
      score++;
      clicked = true;
      setTimeout(generateSequence, 600);
      setTimeout(() => {
        clicked = false;
      }, 800);
      index = 0;
      playerchoices.length = 0;
      updateHighScore();
    }
  } else {
    wrong.play();
    msg.textContent = "You Lost, press any key to restart";
    mobilemsg.textContent = "You Lost, press start Game to restart";
    GameRuning = false;
  }
}
function level() {
  const level = compSeq.length;
  msg.textContent = `Level: ${level}`;

  mobilemsg.innerText = `Level: ${level}`;
}
function updateHighScore() {
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    updateHighScoreDisplay();
  }
}
function updateHighScoreDisplay() {
  const highScoreDisplay = document.querySelector("h6");

  highScoreDisplay.textContent = `High Score: ${highScore}`;
}
// Adding event listeners
body.addEventListener("keydown", startGame);
buttons.forEach((box) => {
  box.addEventListener("click", (event) => {
    if (GameRuning == true && clicked == false) {
      position = event.target.id;
      playerchoices.push(`#${event.target.id}`);
      event.target.classList.add("shine");
      setTimeout(() => {
        event.target.classList.remove("shine");
      }, 200);
      compareSeq();
    }
  });
});

document.querySelector("#theme").addEventListener("click", (event) => {
  document.querySelector("body").classList.toggle("white");
  document.querySelector("h1").classList.toggle("white");
  document.querySelector("h3").classList.toggle("white");
  document.querySelector(".side").classList.toggle("white");
  document.querySelector("#Mobile").classList.toggle("white");
  document.querySelector(".mobDesc").classList.toggle("white");
});
document.querySelector("button").addEventListener("click", startGame);
document.querySelector("img").addEventListener("click", () => {
  document.querySelector(".side").classList.toggle("show");
});
