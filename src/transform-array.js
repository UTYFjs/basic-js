const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
     throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = arr.slice();
  let returnArr = [];
  for( let i=0; i<newArr.length; i++) {
    
    switch(newArr[i]){
      case `--discard-next`:
      if(newArr[i+1]){delete newArr[i+1];; break}
      break;
      case `--discard-prev`:
        if(newArr[i-1]){newArr2.pop(); break}
        break;
        
      case `--double-next`:
        if(newArr[i+1]){returnArr.push(newArr[i+1]); break}
        break;
        
        case `--double-prev`:
      if(newArr[i-1]){ returnArr.push(newArr[i-1]); break}
        break;
      default:
        returnArr.push(newArr[i]);
      break;
    }
  }

  return returnArr;
  // remove line with error and write your code here
}

module.exports = {
  transform
};


/*switch(arr[i]){
  case `--discard-next`:
  if(newArr[i+1]){newArr.splice(i, 1); break}
  newArr.splice(i, 2);
  case `--discard-prev`:
    if(newArr[i-1]){newArr.splice(i-1, 1); break}
    newArr.splice(i-1, 2);
    
  case `--double-next`:
    if(newArr[i+1]){newArr.splice(i, 1); break}
    newArr.splice(i, 1, arr[i+1]);
    
    case `--double-prev`:
  if(newArr[i-1]){ newArr.splice(i,1); break}
    newArr.splice(i,1 , arr[i-1]);
  

}*/