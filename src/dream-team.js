import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!members || typeof(members) !== 'object' || members.constructor.name !== "Array") {
    return false;
  }
  const onlyStrings = (item) => typeof(item) === 'string';
  const onlyValidLetters = (letter) => letter >= 'A' && letter <= 'Z';
  const toLetters = (item) => item.replaceAll(' ', '').charAt(0).toUpperCase();
  return members.filter(onlyStrings).map(toLetters).filter(onlyValidLetters).sort().join('');
}
