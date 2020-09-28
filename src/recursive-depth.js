const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0
    if (!(arr instanceof Array)) return depth
    else {
      depth++
      let depthMax = 0
      arr.forEach(element => {
        let depthCurrent = this.calculateDepth(element)
        if(depthCurrent > depthMax) depthMax = depthCurrent
      });
      return depth + depthMax
    }
  }
};