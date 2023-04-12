const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = matrix.map((x) => x.slice());

  for (let rows = 0; rows < matrix.length; rows++) {
    for (let columns = 0; columns < matrix[rows].length; columns++) {
      let mines = 0;

      for (let i = rows - 1; i <= rows + 1; i++) {
        for (let j = columns - 1; j <= columns + 1; j++) {
          if (i === rows && j === columns) continue;
          if (matrix[i]?.[j]) mines += 1; 
        }
      }
      result[rows][columns] = mines;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
