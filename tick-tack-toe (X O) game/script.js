const App = {
  $: {
    menu: document.querySelector("[data-id='menu1']"),
    item1: document.querySelector(".items"),
    box: document.querySelectorAll("[data-id='box']"),
    reset: document.querySelector("[data-id='reset-btn']"),
    newBtn: document.querySelector("[data-id='newround-btn']"),
    currentPlayer1: document.querySelector(".current"),
    turns: document.querySelector(".player-turn"),
    PlayerIcon: document.querySelector(".Picon"),
    modal: document.querySelector(".winner-sc"),
    win: document.querySelector(".win1"),
    again: document.querySelector(".again-btn"),
  },

  state: {
    moves: [],
  },
  getState(moves) {
    const winningPatterns = [
      [1, 2, 3],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const p1Moves = moves
      .filter((move) => move.playerID === 1)
      .map((obj) => +obj.squareID);
    const p2Moves = moves
      .filter((move) => move.playerID === 2)
      .map((obj) => +obj.squareID);
    console.log(p1Moves);
    let winner0 = null;
    winningPatterns.forEach((i) => {
      const p1Wins = i.every((v) => p1Moves.includes(v));
      const p2Wins = i.every((v) => p2Moves.includes(v));
      if (p1Wins) {
        winner0 = 1;
      }
      if (p2Wins) {
        winner0 = 2;
      }
    });
    return {
      status:
        moves.length === 9 || winner0 !== null ? "complete" : "in-progress",
      winner0,
    };
  },

  init() {
    App.registerEvents();
  },
  playerToggle() {
    App.$.box.forEach((square) => {
      square.addEventListener("click", (event) => {});
    });
  },
  registerEvents() {
    App.$.menu.addEventListener("click", (event) => {
      App.$.item1.classList.toggle("hidden");
      App.$.menu.classList.toggle("border");
    });
    App.$.reset.addEventListener("click", (event) => {
      A;
    });
    App.$.newBtn.addEventListener("click", (event) => {
      A;
    });
    App.$.box.forEach((square) => {
      square.addEventListener("click", (event) => {
        const lastMove = App.state.moves.at(-1);
        const oppositePlayer = (playerID) => (playerID === 1 ? 2 : 1);
        const currentPlayers =
          App.state.moves.length === 0 ? 1 : oppositePlayer(lastMove.playerID);
        if (square.hasChildNodes()) {
          return;
        }
        App.state.moves.push({
          squareID: +square.id,
          playerID: currentPlayers,
        });

        // changing the icon based on player and the name of which player is playing in the game
        const icon = document.createElement("i");
        if (currentPlayers === 1) {
          icon.classList.add("fa-solid", "fa-x", "turquoise");
          App.$.turns.classList.replace("yellow", "turquoise");
          App.$.PlayerIcon.classList.replace("fa-o", "fa-x");
          App.$.currentPlayer1.textContent = "Player 1, you are up!";
        } else {
          icon.classList.add("fa-solid", "fa-o", "yellow");
          App.$.turns.classList.replace("turquoise", "yellow");
          App.$.PlayerIcon.classList.replace("fa-x", "fa-o");
          App.$.currentPlayer1.textContent = "Player 2, you are up!";
        }
        square.appendChild(icon);
        const gameStatus = App.getState(App.state.moves);
        if (gameStatus.status === "complete") {
          if (gameStatus.winner0) {
            App.$.modal.classList.toggle("hidden");
          }
          if (gameStatus.winner0 === 2) {
            App.$.win.textContent = "Player 2 wins!";
          }
          if (App.state.moves.length === 9) {
            App.$.modal.classList.toggle("hidden");
            App.$.win.textContent = "Thats a tie!";
          }
        }
      });
    });
  },
  againBtn() {
    location.reload();
  },
};
window.addEventListener("load", App.init());
