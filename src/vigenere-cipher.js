const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine{

  constructor(direction = true) {
    this.direction = direction
  }

  convert(message, key, convertFunc) {
    if (message === undefined || key === undefined) throw Error
    let result = ''
    let messageUp = message.toUpperCase()
    let fullKeyUp = key.padEnd(message.length, key).toUpperCase()
    let charCodeOfResult
    let charCodeFromMessage
    let k = 0 // key index
    for (let i = 0; i < message.length; i++) {
      charCodeFromMessage = messageUp.charCodeAt(i)
      if ((charCodeFromMessage >= 65) && (charCodeFromMessage <= 90)) {

        charCodeOfResult = convertFunc(charCodeFromMessage, fullKeyUp.charCodeAt(k))

        result = `${result}${String.fromCharCode(charCodeOfResult)}`
        k++
      } else {
        result = `${result}${messageUp.charAt(i)}`
      }
    }
    if (this.direction) return result
    else return result.split('').reverse().join('')
  }

  encrypt(message, key) {
    return this.convert(message, key, (a, b) => { return (a + b - 65*2) % 26 + 65 })
  }

  decrypt(message, key) {
    return this.convert(message, key, (a, b) => { return (a - b + 26) % 26 + 65 })
  }
}

module.exports = VigenereCipheringMachine;
