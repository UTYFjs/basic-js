const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arr = n.toString().split('');
  let max=0;
  for(let i=0; i<arr.length; i++){
    let arr2 = arr.slice(0);
       arr2.splice(i,1);
      let a = arr2.join('');
    if (+a>max) max= (+a);
  }
return max;
  
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
