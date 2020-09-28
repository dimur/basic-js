const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (isNaN(date)) return 'Unable to determine the time of year!'
  if (!(date instanceof Date)) throw Error
  if ([11, 0, 1].includes(date.getMonth())) return 'winter'
  else if ([2, 3, 4].includes(date.getMonth())) return 'spring'
  else if ([5, 6, 7].includes(date.getMonth())) return 'summer'
  else return 'fall'
};
