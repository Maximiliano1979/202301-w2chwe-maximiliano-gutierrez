import makeBoard from "./makeBoard";

describe("Given the makeBoard function", () => {
  describe("When it receives '1, 2'", () => {
    test("Then it should return '[ [ 0, 0 ] ]'", () => {
      const valueA = 1;
      const valueB = 2;
      const expectedResult = [[0, 0]];

      const result = makeBoard(valueA, valueB);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("When it receives '1, 3'", () => {
    test("Then it should return '[ [ 0, 0, 0 ] ]'", () => {
      const valueA = 1;
      const valueB = 2;
      const expectedResult = [[0, 0, 0]];

      const result = makeBoard(valueA, valueB);

      expect(result).toEqual(expectedResult);
    });
  });
});
