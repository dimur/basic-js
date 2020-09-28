const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    if (this.chain !== undefined)
      return this.chain.length
  },
  addLink(value) {
    let link = ''
    if (value !== 'undefined'){
      link = value
    }
    if (value === null) link = 'null'
    if (this.chain === undefined) {
      this.chain = [link]
      return this
    } else {
      this.chain.push(link)
      return this
    }
  },
  removeLink(position) {
    if (this.chain === undefined) {
      this.chain = undefined
      throw Error
    } else {
      if (typeof position !== 'number' ||
          !Number.isInteger(position) ||
          position < 1 ||
          position > this.chain.length) {
            this.chain = undefined
            throw Error
          }
      this.chain.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    if (this.chain !== undefined) this.chain.reverse()
    return this
  },
  finishChain() {
    const result = `( ${this.chain.join(' )~~( ')} )`
    this.chain = undefined
    return result
  }
};

module.exports = chainMaker;
