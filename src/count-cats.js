const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
   return matrix.flat(1).filter(item=>item=="^^").length;

};
