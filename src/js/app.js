import Board from "./Board";
import GameController from "./GameController";
import Goblin from "./Goblin";

const SIZE_BOARD = 4;

const board = new Board(SIZE_BOARD);

const goblin = new Goblin();

const gameCtrl = new GameController(board, goblin);

gameCtrl.init();
