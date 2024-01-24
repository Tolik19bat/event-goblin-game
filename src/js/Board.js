export default class Board {
  constructor(size) {
    this.size = size;
    this.element = document.querySelector("[data-id=board]");
    this.scoreEl = document.querySelector('[data-id="score"]');
    this.missEl = document.querySelector('[data-id="miss"]');
    this.footer = null;
  }

  init() {
    if (this.footer) {
      this.footer.remove();
    }
    this.element.innerHTML = "";
    for (let i = 0; i < Math.pow(this.size, 2); i += 1) {
      const cellEl = document.createElement("div");
      cellEl.classList.add("cell");
      this.element.appendChild(cellEl);
    }
    this.cells = Array.from(this.element.children);
  }

  showFooter() {
    this.footer = document.createElement("div");
    this.footer.classList.add("footer");
    this.footer.innerHTML = `
    <div class='message'>Game over!</div>
    <button class='btn'>New Game</button>
    `;
    this.element.insertAdjacentElement("afterend", this.footer);
  }
}
