const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr instanceof Array)) throw Error
  result = []
  for (index = 0; index < arr.length; index++) {
    switch (arr[index]) {
      case '--discard-next':
        index++
        if (['--discard-prev', '--double-prev'].includes(arr[index + 1])) index++
        break;
      case '--discard-prev':
        if (result.length !== 0) result.pop()
        break;
      case '--double-next':
        if (arr[index+1] !== undefined) result.push(arr[index+1])
        break;
      case '--double-prev':
        if (result.length !== 0) result.push(arr[index-1])
        break;
      default:
        result.push(arr[index])
        break;
      }
  }
  return result
};
