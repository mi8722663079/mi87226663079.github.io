export default class View {
  $ = {};
  $$ = {};
  constructor() {
    // individual nodes (elements)
    this.$.menu = document.querySelector("[data-id='menu1']");
    this.$.item1 = document.querySelector(".items");
    this.$.reset = document.querySelector("[data-id='reset-btn']");
    this.$.newBtn = document.querySelector("[data-id='newround-btn']");
    this.$.currentPlayer1 = document.querySelector(".current");
    this.$.turns = document.querySelector(".player-turn");
    this.$.PlayerIcon = document.querySelector(".Picon");
    this.$.modal = document.querySelector(".winner-sc");
    this.$.win = document.querySelector(".win1");
    this.$.again = document.querySelector(".again-btn");
    this.$.action = document.querySelector("[data-id='Actions']");
    // node lists
    this.$$.box = document.querySelectorAll(".game-box");

    // UI only listeners
    this.$.menu.addEventListener("click", (event) => {
      this.#toggleMenu();
    });
  }
  resetEvent(handler) {
    this.$.reset.addEventListener("click", handler);
  }
  newRoundEvent(handler) {
    this.$.newBtn.addEventListener("click", handler);
  }
  playerMoveEvent(handler) {
    this.$$.box.forEach((square) => {
      square.addEventListener("click", handler);
    });
  }
  // DOM helper methods
  #toggleMenu() {
    this.$.item1.classList.toggle("hidden");
    this.$.menu.classList.toggle("border");
    const arrow = this.$.action.querySelector("i");
    arrow.classList.toggle("fa-chevron-down");
    arrow.classList.toggle("fa-chevron-up");
  }

  playerMoveHandler(squareEl, player) {
    const icon = document.createElement("i");
    icon.classList.add(
      "fa-solid",
      player === 1 ? "fa-x" : "fa-o",
      player === 1 ? "turquoise" : "yellow"
    );
    squareEl.appendChild(icon);
  }

  turnIndicator(player) {
    this.$.turns.classList.add(player === 1 ? "turquoise" : "yellow");
    this.$.turns.classList.remove(player === 1 ? "yellow" : "turquoise");
    this.$.PlayerIcon.classList.add(player == 1 ? "fa-x" : "fa-o");
    this.$.PlayerIcon.classList.remove(player == 1 ? "fa-o" : "fa-x");
    this.$.currentPlayer1.textContent =
      player === 1 ? "Player 1, you are up!" : "Player 2, you are up!";
  }
}
