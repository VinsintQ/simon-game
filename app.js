//variables

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
  const random = Math.ceil(Math.random() * 9);
  compSeq.push(boxs[random]);
}
function showSequence() {
  const lastelem = compSeq[compSeq.length - 1];
  const last = document.querySelector(lastelem).classList.add("shine");
}
generateSequence(); //
showSequence();

//ading event listeners to the buttons
buttons.forEach((box) => {
  box.addEventListener("click", () => {});
});
