const { resetHistory } = require("sinon");
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let flat = 1;
    for (let item of arr) {
      if (Array.isArray(item)) {
        let additionalFlat = this.calculateDepth(item);
        if (additionalFlat >= flat) {
          flat = additionalFlat + 1;
        }
      }
    }
  
    return flat
    } 
    
    }
