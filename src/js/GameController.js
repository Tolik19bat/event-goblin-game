// Определение класса GameController
export default class GameController {
  // Конструктор, принимающий элементы доски и гоблина
  constructor(boardEl, goblinEl) {
    // Инициализация переменных
    this.boardEl = boardEl;
    this.goblinEl = goblinEl;
    this.setInterval = null;
    this.score = 0;
    this.miss = 0;
  }

  // Метод инициализации игры
  init() {
    //сброс фона страницы по умолчанию
    document.body.style.background = "";
    // Привязка метода onClick к текущему экземпляру класса
    this.onClick = this.onClick.bind(this);
    // Добавление слушателя события клика к элементу доски
    this.boardEl.element.addEventListener("click", this.onClick);
    // Инициализация элемента доски и запуск игры
    this.boardEl.init();
    this.start();
    // Отображение счетчика промахов
    this.showMiss();
  }

  // Метод запуска игры
  start() {
    // Отображение текущего счета
    this.showScore();
    // Выбор случайной ячейки и размещение в ней гоблина
    let cellEl =
      this.boardEl.cells[Math.floor(Math.random() * this.boardEl.cells.length)];
    cellEl.appendChild(this.goblinEl.element);
    // Установка интервала для перемещения гоблина между ячейками
    this.setInterval = setInterval(() => {
      let newCellEl;
      // Выбор новой ячейки, пока она не совпадет с предыдущей
      do {
        newCellEl =
          this.boardEl.cells[
            Math.floor(Math.random() * this.boardEl.cells.length)
          ];
      } while (newCellEl === cellEl);
      // Перемещение гоблина в новую ячейку
      newCellEl.appendChild(this.goblinEl.element);
      cellEl = newCellEl;
    }, 1500);
  }

  // Метод остановки игры
  stop() {
    clearInterval(this.setInterval);
  }

  // Обработчик события клика
  onClick(e) {
    // Проверка, был ли клик по элементу гоблина
    if (e.target === this.goblinEl.element) {
      // Увеличение счета попаданий
      this.score += 1;
      this.showScore();
      //Проверка условия победы
      if (this.score >= 5) {
        //установка фона при победе
        document.body.style.background = "linear-gradient(green, pink)";
        this.victory();
      }
    } else {
      // Увеличение счетчика промахов и отображение
      this.miss += 1;
      this.showMiss();
      // Проверка условия завершения игры
      if (this.miss >= 5) {
        //установка фона при проигрыше
        document.body.style.background = "linear-gradient(red, pink)";
        this.end();
      }
    }
  }

  // Метод отображения текущего счета
  showScore() {
    this.boardEl.scoreEl.textContent = `Зачёт: ${this.score}`;
  }

  // Метод отображения счетчика промахов
  showMiss() {
    this.boardEl.missEl.textContent = `Промахи: ${this.miss}`;
  }

  // Метод завершения игры
  end() {
    // Остановка игры и удаление слушателя клика
    this.stop();
    this.boardEl.element.removeEventListener("click", this.onClick);
    // Отображение нижнего блока, сброс счета и привязка новой инициализации к кнопке
    this.boardEl.showFooter();
    this.score = 0;
    this.miss = 0;
    this.init = this.init.bind(this);
    this.boardEl.footer
      .querySelector(".btn")
      .addEventListener("click", this.init);
  }

  victory() {
    // Остановка игры и удаление слушателя клика
    this.stop();
    this.boardEl.element.removeEventListener("click", this.onClick);
    // Отображение нижнего блока, сброс счета и привязка новой инициализации к кнопке
    this.boardEl.showFooterVictory();
    this.score = 0;
    this.miss = 0;
    this.init = this.init.bind(this);
    this.boardEl.footer
      .querySelector(".btn")
      .addEventListener("click", this.init);
  }
}