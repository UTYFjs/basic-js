const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count= 1;
  let result = '';


  for(let i=0;i<str.length;i++){

    /*if(arr[i]===arr[i+1]){

      
    }*/
  if(str[i]===str[i+1]){count++
    } else{ let a = count>1? count+str[i]: str[i];
      result += a;
      count = 1;
    }
  }
  return result;
  


  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


module.exports = {
  encodeLine
};


/* Ваша задача — реализовать функцию, которая принимает **строку** (`str`) и возвращает ее закодированную версию.

Например:

`encodeLine('aabbbc')` => `'2a3bc'`

Напишите свой код в `src/encode-line.js`.*/ 