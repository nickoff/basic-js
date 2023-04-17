const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  sortArrWithoutOne = arr.filter((element) => element != -1).sort((a, b) => a - b)
  
  let i = 0;
  let j = 0

  while(i < arr.length){
      if (arr[i] != -1){
          arr[i] = sortArrWithoutOne[j];
          j++
      }
      i++
  }

  return arr
}

module.exports = {
  sortByHeight
};
