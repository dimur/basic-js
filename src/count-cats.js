const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  number = 0
  matrix.forEach(element => {
    element.forEach(innerElement => {
      if (innerElement === '^^') {
        number++
      }
    })
  })
  return number
};
