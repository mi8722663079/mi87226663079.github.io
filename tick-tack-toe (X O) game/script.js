const App = {
  $: {
    menu: document.querySelector("[data-id='menu1']"),
    item1: document.querySelector(".items"),
    box: document.querySelectorAll(".game-box"),
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
  getStatus(moves) {
    const p1Moves = moves
      .filter((move) => move.playerId === 1)
      .map((move) => +move.squareId);
    const p2Moves = moves
      .filter((move) => move.playerId === 2)
      .map((move) => +move.squareId);
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
    let winner = null;
    winningPatterns.forEach((pattern) => {
      const p1Wins = pattern.every((v) => p1Moves.includes(v));
      const p2Wins = pattern.every((v) => p2Moves.includes(v));
      if (p1Wins) {
        winner = 1;
      } else if (p2Wins) {
        winner = 2;
      }
    });

    return {
      status: moves.length === 9 || winner != null ? "complete" : "in-progress",
      winner,
    };
  },
  init() {
    App.registerEvents();
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
        // checking if there is a move or not
        const hasMove = (squareId) => {
          const existingMove = App.state.moves.find(
            (move) => move.squareId === squareId
          );
          return existingMove !== undefined;
        };
        if (hasMove(+square.id)) {
          return;
        }
        // tracking which player is up
        const lastMove = App.state.moves.at(-1);
        const oppositePlayer = (playerId) => (playerId === 1 ? 2 : 1);
        const currentPlayer =
          App.state.moves.length === 0 ? 1 : oppositePlayer(lastMove.playerId);
        const icon = document.createElement("i");
        if (currentPlayer === 1) {
          icon.classList.add("fa-solid", "fa-x", "turquoise");
          App.$.turns.classList.replace("turquoise", "yellow");
          App.$.PlayerIcon.classList.replace("fa-x", "fa-o");
          App.$.currentPlayer1.textContent = "Player 2, you are up!";
        } else if (currentPlayer === 2) {
          icon.classList.add("fa-solid", "fa-o", "yellow");
          App.$.turns.classList.replace("yellow", "turquoise");
          App.$.PlayerIcon.classList.replace("fa-o", "fa-x");
          App.$.currentPlayer1.textContent = "Player 1, you are up!";
        }

        square.appendChild(icon);
        App.state.moves.push({
          squareId: +square.id,
          playerId: currentPlayer,
        });
        App.state.currentPlayer = currentPlayer === 1 ? 2 : 1;
        const status = App.getStatus(App.state.moves);

        if (status.status === "complete") {
          if (status.winner === 1) {
            App.$.modal.classList.toggle("hidden");
          } else if (status.winner === 2) {
            App.$.win.textContent = "Player 2 wins!";
          } else if (App.state.moves.length === 9) {
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
