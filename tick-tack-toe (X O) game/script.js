const App = {
  $: {
    menu: document.querySelector("[data-id='menu1']"),
    item1: document.querySelector(".items"),
    box: document.querySelector("[data-id='box']"),
    reset: document.querySelector("[data-id='reset-btn']"),
    newBtn: document.querySelector("[data-id='newround-btn']"),
  },
  init() {
    App.$.menu.addEventListener("click", (event) => {
      App.$.item1.classList.toggle("hidden");
    });
    App.$.reset.addEventListener("click", (event) => {
      A;
    });
    App.$.newBtn.addEventListener("click", (event) => {
      A;
    });
  },
};
window.addEventListener("load", App.init());
