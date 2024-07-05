//variables
let index = 0;
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
const playerchoices = [];
const compSeq = [];

// the query selectors
const buttons = document.querySelectorAll(".row>div");

//functions

function generateSequence() {
  const random = Math.floor(Math.random() * 9);
  compSeq.push(boxs[random]);
  showSequence();
}
function showSequence() {
  const lastelem = compSeq[compSeq.length - 1];
  const last = document.querySelector(lastelem);

  last.classList.add("shine");
  setInterval(() => {
    last.classList.remove("shine");
  }, 150);
}

function compareSeq(user, comp) {
  if (playerchoices[index] == compSeq[index]) {
    index++;
    if (index >= compSeq.length) {
      generateSequence();
      index = 0;
      playerchoices.length = 0;
    }
  } else {
    alert("wrong");
  }
}
generateSequence();

//ading event listeners to the buttons
buttons.forEach((box) => {
  box.addEventListener("click", (event) => {
    playerchoices.push(`#${event.target.id}`);
    compareSeq();
  });
});
