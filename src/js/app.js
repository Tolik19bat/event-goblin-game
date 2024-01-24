import Board from "./Board";
import GameController from "./GameController";
import Goblin from "./Goblin";

// Задание размера доски
const SIZE_BOARD = 4;

// Создание экземпляра класса Board с указанным размером
const board = new Board(SIZE_BOARD);

// Создание экземпляра класса Goblin
const goblin = new Goblin();

// Создание экземпляра класса GameController, передача доски и гоблина
const gameCtrl = new GameController(board, goblin);

// Инициализация игры
gameCtrl.init();