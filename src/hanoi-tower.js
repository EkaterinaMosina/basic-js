const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result={};
  let turns=Math.pow(2, disksNumber)-1;
  result.turns=turns;
  let seconds=Math.floor((turns/turnsSpeed)*60*60);
  result.seconds=seconds;
  return result;

};
