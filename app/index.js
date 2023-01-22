import makeBoard from "./board/makeBoard.js";
import findNeighbours from "./findNeighbours/findNeighbours.js";

const fullTable = makeBoard(10, 10);
findNeighbours(fullTable);
