const areCellsAlive = (fullTable) => {
  for (let i = 0; i < fullTable.length; i++) {
    for (let j = 0; j < fullTable[i].length; j++) {
      if (fullTable.isAlive === true && fullTable.numberOfNeighbours === 3) {
        return false;
      }
    }
  }
};

export default areCellsAlive;
