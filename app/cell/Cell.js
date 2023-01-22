class Cell {
  isAlive;
  positionX;
  PositionY;

  constructor(isAlive, positionX, positionY) {
    this.isAlive = Math.random() < 0.7;
    this.positionX = positionX;
    this.positionY = positionY;
  }
}

export default Cell;
