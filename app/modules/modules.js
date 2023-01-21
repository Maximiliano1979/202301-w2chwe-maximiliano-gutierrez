const tableBoard = (rows, columns) => {
  const board = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i][j] = 0;
    }
  }

  return board;
};

tableBoard(10, 10);

export default tableBoard;
