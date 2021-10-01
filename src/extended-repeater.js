import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 export default function repeater(str, options) {
  str = "" + str;
  const { repeatTimes=1, separator='+', addition='', additionRepeatTimes=1, additionSeparator= '|'} = options;
  let finalAddittion = "" + addition;
  
  let ar = Array.from({length: repeatTimes}, () => str)
  finalAddittion = finalAddittion.length ? repeater(addition, {repeatTimes: additionRepeatTimes, separator: additionSeparator}) : '';
  ar = ar.map(item => item + finalAddittion)
  
  return ar.join(separator);
}