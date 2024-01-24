/**
 * @jest-environment jsdom
 */

import Board from "../Board";

test("class Board", () => {
  const boardSize = 4;
  const board = new Board(boardSize);
  expect(board.size).toBe(boardSize);
});
