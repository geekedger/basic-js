import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  const filterCats = (item) => item == '^^'; 
  const summaryReducer = (previousValue, currentValue) => previousValue + currentValue.filter(filterCats).length;
  return matrix.reduce(summaryReducer, 0);
}
