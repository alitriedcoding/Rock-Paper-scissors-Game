const Boton = document.querySelectorAll("button");
const Result = document.getElementById("result");
const userscor = document.getElementById("user_scor");
const computerscor = document.getElementById("Computer_scor");
var playerscor = 0;
var computersc = 0;
Boton.forEach((button) => {
  button.addEventListener("click", () => {
    const a = Playrond(button.id, computerchoice());
    Result.innerHTML = a;
  });
});

function computerchoice() {
  const arr = ["Rock", "Scissor", "Paper"];
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
function Playrond(yourslect, computerslect) {
  if (yourslect === computerslect) {
    return "equal";
  } else if (
    (yourslect === "Rock" && computerslect === "Scissor") ||
    (yourslect === "Paper" && computerslect === "Rock") ||
    (yourslect === "Scissor" && computerslect === "Paper")
  ) {
    playerscor++;
    userscor.innerHTML = playerscor;
    return "you win: " + yourslect + "  " + " computer: " + computerslect;
  } else {
    computersc++;
    computerscor.innerHTML = computersc;
    return "you loss: " + yourslect + "  " + "computer: " + computerslect;
  }
}
