const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  constructor(){
    this.countObj =0;
  }
  
  calculateDepth(arr) {
    let currentCount = 1;
    let resultCount=1;
    /*if (Array.isArray(arr)){
      currentCount++;}
    if (!(Array.isArray(arr))){
        return;
      }*/
      
    for( let i=0; i<arr.length; i++){
      if(Array.isArray(arr[i])){
       currentCount += this.calculateDepth(arr[i]);
       
      }

      resultCount = currentCount>resultCount? currentCount: resultCount;
      currentCount = 1;
  }
    return resultCount;
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
