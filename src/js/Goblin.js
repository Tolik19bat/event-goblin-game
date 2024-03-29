// Определение класса Goblin
export default class Goblin {
  // Конструктор класса
  constructor() {
    // Создание элемента изображения (img)
    this.element = document.createElement("img");
    // Добавление класса "img" к элементу
    this.element.classList.add("img");
  }

  // Метод для скрытия элемента гоблина
  hide() {
    this.element.style.display = "none";
  }

  // Метод для показа элемента гоблина
  show() {
    this.element.style.display = "block";
  }
}
