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
  }
}
