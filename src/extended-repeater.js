const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  stringRepeat = (str, separator, times) => {
    if (str === undefined) return ''
    let strString = ''
    if (str === null) strString = 'null'
    else  strString = str.toString()
    if (times === undefined) return strString
    let result = ''
    for (let index = 0; index < times; index++) {
      if (index === 0) result = `${strString}`
      else result = `${result}${separator}${strString}`
    }
    return result
  }

  let separator = '+'
  if (options.separator !== undefined) separator = options.separator
  let additionSeparator = '|'
  if (options.additionSeparator !== undefined) additionSeparator = options.additionSeparator

  let resultAddition = stringRepeat(options.addition,
                                    additionSeparator,
                                    options.additionRepeatTimes)
  return stringRepeat(`${str}${resultAddition}`,
                      separator,
                      options.repeatTimes)
};
