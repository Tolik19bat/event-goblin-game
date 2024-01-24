// Определение класса Board с конструктором, принимающим размер доски
export default class Board {
  constructor(size) {
    // Установка размера доски и поиск элементов DOM по селекторам
    this.size = size;
    this.element = document.querySelector("[data-id=board]");
    this.scoreEl = document.querySelector('[data-id="score"]');
    this.missEl = document.querySelector('[data-id="miss"]');
    this.footer = null; // Инициализация переменной для нижнего блока (footer)
  }

  // Метод инициализации доски
  init() {
    // Проверка наличия нижнего блока и его удаление, если существует
    if (this.footer) {
      this.footer.remove();
    }
    
    // Очистка содержимого элемента доски
    this.element.innerHTML = "";

    // Создание ячеек доски в количестве, равном квадрату размера
    for (let i = 0; i < Math.pow(this.size, 2); i += 1) {
      const cellEl = document.createElement("div");
      cellEl.classList.add("cell");
      this.element.appendChild(cellEl);
    }

    // Преобразование дочерних элементов в массив и сохранение в переменной cells
    this.cells = Array.from(this.element.children);
  }

  // Метод отображения нижнего блока
  showFooter() {
    // Создание элемента div для нижнего блока
    this.footer = document.createElement("div");
    // Добавление класса "footer" к созданному элементу
    this.footer.classList.add("footer");
    // Заполнение HTML-содержимым для нижнего блока
    this.footer.innerHTML = `
      <div class='message'>Вы проиграли!</div>
      <button class='btn'>Новая игра</button>
    `;
    // Вставка нижнего блока после элемента доски
    this.element.insertAdjacentElement("afterend", this.footer);
  }

  showFooterVictory() {
    // Создание элемента div для нижнего блока
    this.footer = document.createElement("div");
    // Добавление класса "footer" к созданному элементу
    this.footer.classList.add("footer");
    // Заполнение HTML-содержимым для нижнего блока
    this.footer.innerHTML = `
      <div class='message'>Вы победили!</div>
      <button class='btn'>Новая игра</button>
    `;
    // Вставка нижнего блока после элемента доски
    this.element.insertAdjacentElement("afterend", this.footer);
  }
}