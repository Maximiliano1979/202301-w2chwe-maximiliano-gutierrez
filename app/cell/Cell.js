class Cell {
  isAlive;
  positionX;
  positionY;
  willBeAlive;
  numberOfNeighbours;

  constructor(positionX, positionY, willBeAlive) {
    this.isAlive = Math.random() < 0.7;
    this.positionX = positionX;
    this.positionY = positionY;
    this.willBeAlive = willBeAlive;
  }

  checkAliveCellsAround(fullTable) {
    let aliveCount = 0;

    for (let i = this.positionX - 1; i <= this.positionX + 1; i++) {
      for (let j = this.positionY - 1; j <= this.positionY + 1; j++) {
        if (
          i >= 0 &&
          i < fullTable.length &&
          j >= 0 &&
          j < fullTable[0].length
        ) {
          if (
            fullTable[i][j].isAlive &&
            !(i === this.positionX && j === this.positionY)
          ) {
            aliveCount++;
          }
        }
      }
    }

    this.numberOfNeighbours = aliveCount;
  }
}

export default Cell;
