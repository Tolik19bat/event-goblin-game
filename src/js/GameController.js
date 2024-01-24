export default class GameController {
  constructor(boardEl, goblinEl) {
    this.boardEl = boardEl;
    this.goblinEl = goblinEl;
    this.setInterval = null;
    this.score = 0;
    this.miss = 0;
  }

  init() {
    this.onClick = this.onClick.bind(this);
    this.boardEl.element.addEventListener("click", this.onClick);
    this.boardEl.init();
    this.start();
    this.showMiss();
  }

  start() {
    this.showScore();
    let cellEl =
      this.boardEl.cells[Math.floor(Math.random() * this.boardEl.cells.length)];
    cellEl.appendChild(this.goblinEl.element);
    this.setInterval = setInterval(() => {
      let newCellEl;
      do {
        newCellEl =
          this.boardEl.cells[
            Math.floor(Math.random() * this.boardEl.cells.length)
          ];
      } while (newCellEl === cellEl);
      newCellEl.appendChild(this.goblinEl.element);
      cellEl = newCellEl;
    }, 1000);
  }

  stop() {
    clearInterval(this.setInterval);
  }

  onClick(e) {
    if (e.target === this.goblinEl.element) {
      this.score += 1;
      this.stop();
      this.start();
    } else {
      this.miss += 1;
      this.showMiss();
      if (this.miss >= 5) {
        this.end();
      }
    }
  }

  showScore() {
    this.boardEl.scoreEl.textContent = `Score: ${this.score}`;
  }

  showMiss() {
    this.boardEl.missEl.textContent = `Miss: ${this.miss}`;
  }

  end() {
    this.stop();
    this.boardEl.element.removeEventListener("click", this.onClick);
    this.boardEl.showFooter();
    this.score = 0;
    this.miss = 0;
    this.init = this.init.bind(this);
    this.boardEl.footer
      .querySelector(".btn")
      .addEventListener("click", this.init);
  }
}
