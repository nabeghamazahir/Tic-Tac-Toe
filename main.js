var main = document.querySelector(".board");
var turn = 1;
var divs = document.querySelectorAll("div");
var h2 = document.querySelector("h2");
var gameActive = true;

var player1 = prompt("Please enter 1st player name");
var player2 = prompt("Please enter 2nd player name");

document.querySelector(".player1").textContent = "Player 1 (X) : " + player1;
document.querySelector(".player2").textContent = "Player 2 (O) : " + player2;

function checkWinner() {
  if (
    divs[0].textContent === "X" &&
    divs[1].textContent === "X" &&
    divs[2].textContent === "X"
  ) {
    h2.textContent = "Player X WON";
    gameActive = false;
  } else if (
    divs[3].textContent === "X" &&
    divs[4].textContent === "X" &&
    divs[5].textContent === "X"
  ) {
    h2.textContent = "Player X WON";
    gameActive = false;
  } else if (
    divs[6].textContent === "X" &&
    divs[7].textContent === "X" &&
    divs[8].textContent === "X"
  ) {
    h2.textContent = "Player X WON";
    gameActive = false;
  } else if (
    divs[0].textContent === "X" &&
    divs[3].textContent === "X" &&
    divs[6].textContent === "X"
  ) {
    h2.textContent = "Player X WON";
    gameActive = false;
  } else if (
    divs[1].textContent === "X" &&
    divs[4].textContent === "X" &&
    divs[7].textContent === "X"
  ) {
    h2.textContent = "Player X WON";
    gameActive = false;
  } else if (
    divs[2].textContent === "X" &&
    divs[5].textContent === "X" &&
    divs[8].textContent === "X"
  ) {
    h2.textContent = "Player X WON";
    gameActive = false;
  } else if (
    divs[0].textContent === "X" &&
    divs[4].textContent === "X" &&
    divs[8].textContent === "X"
  ) {
    h2.textContent = "Player X WON";
    gameActive = false;
  } else if (
    divs[2].textContent === "X" &&
    divs[4].textContent === "X" &&
    divs[6].textContent === "X"
  ) {
    h2.textContent = "Player X WON";
    gameActive = false;
  } else if (
    divs[0].textContent === "O" &&
    divs[1].textContent === "O" &&
    divs[2].textContent === "O"
  ) {
    h2.textContent = "Player O WON";
    gameActive = false;
  } else if (
    divs[3].textContent === "O" &&
    divs[4].textContent === "O" &&
    divs[5].textContent === "O"
  ) {
    h2.textContent = "Player O WON";
    gameActive = false;
  } else if (
    divs[6].textContent === "O" &&
    divs[7].textContent === "O" &&
    divs[8].textContent === "O"
  ) {
    h2.textContent = "Player O WON";
    gameActive = false;
  } else if (
    divs[0].textContent === "O" &&
    divs[3].textContent === "O" &&
    divs[6].textContent === "O"
  ) {
    h2.textContent = "Player O WON";
    gameActive = false;
  } else if (
    divs[1].textContent === "O" &&
    divs[4].textContent === "O" &&
    divs[7].textContent === "O"
  ) {
    h2.textContent = "Player O WON";
    gameActive = false;
  } else if (
    divs[2].textContent === "O" &&
    divs[5].textContent === "O" &&
    divs[8].textContent === "O"
  ) {
    h2.textContent = "Player O WON";
    gameActive = false;
  } else if (
    divs[0].textContent === "O" &&
    divs[4].textContent === "O" &&
    divs[8].textContent === "O"
  ) {
    h2.textContent = "Player O WON";
    gameActive = false;
  } else if (
    divs[2].textContent === "O" &&
    divs[4].textContent === "O" &&
    divs[6].textContent === "O"
  ) {
    h2.textContent = "Player O WON";
    gameActive = false;
  } else if (
    divs[0].textContent !== "" &&
    divs[1].textContent !== "" &&
    divs[2].textContent !== "" &&
    divs[3].textContent !== "" &&
    divs[4].textContent !== "" &&
    divs[5].textContent !== "" &&
    divs[6].textContent !== "" &&
    divs[7].textContent !== "" &&
    divs[8].textContent !== ""
  ) {
    h2.textContent = "It's a DRAW";
    gameActive = false;
  }
}

function mainFunction(event) {
  if (gameActive === false) {
    document.querySelector("p").textContent =
      "Please refresh the app to re-play";
  } else {
    if (event.target.tagName === "DIV") {
      if (event.target.textContent != "") {
        alert("click on another box");
      } else {
        if (turn === 1) {
          event.target.textContent = "X";
          turn = 2;
        } else {
          event.target.textContent = "O";
          turn = 1;
        }
      }
    }
  }

  checkWinner();
}

var player1;
main.addEventListener("click", mainFunction);
