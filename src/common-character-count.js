const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s2Arr = s2.split('');
  let count = 0;
 for( let i of s1){
   for(let j; j<s2Arr.length; j++){
       //for( let j of s2Arr){
      if (i===s2Arr[j]){
        //s2Arr.splice(s2Arr.indexOf(i));
        s2Arr[j]='';
        count++;
        break;
      }
    }
 }
 return count;
// remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
