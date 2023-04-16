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
  let sumMinMatrix = Array(matrix.length);
  let sum;
  for(let i = 0; i < sumMinMatrix.length; i++) {
    sumMinMatrix[i] = Array(matrix[0].length)
  }

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      sum = 0;
      if(i){
        if (matrix[i - 1][j] === true) {sum++}
          }
      if(j && i){
            if (matrix[i - 1][j - 1] === true) {sum++}
          }
      if(i && j < matrix[i].length) {
            if (matrix [i - 1][j + 1] === true) {sum++}
          }
      
      if(j < matrix[i].length) {
          if (matrix[i][j + 1] === true) {sum++}
        }
      if(j) {
        if(matrix[i][j - 1] === true) {sum++}
        }
      if(i < matrix.length - 1) {
        if (matrix[i + 1][j] === true) {sum++}
      }
      if(i < matrix.length - 1 && j) {
        if (matrix[i + 1][j - 1] === true){sum++}
      }
      if(i < matrix.length - 1 && j < matrix[i].length) {
        if (matrix[i + 1][j + 1] === true){sum++}
      }
      sumMinMatrix[i][j] = sum;
    }

  }
  return sumMinMatrix
}

module.exports = {
  minesweeper
};
