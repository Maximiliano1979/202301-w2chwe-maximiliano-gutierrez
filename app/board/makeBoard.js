import Cell from "../cell/Cell.js";

const makeBoard = (rows, columns) => {
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i][j] = new Cell(i, j);
    }
  }

  return board;
};

export default makeBoard;
