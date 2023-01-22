const findNeighbours = (fullTable) => {
  for (let i = 0; i < fullTable.length; i++) {
    for (let j = 0; j < fullTable[i].length; j++) {
      fullTable[i][j].checkAliveCellsAround(fullTable);
    }
  }
};

export default findNeighbours;
