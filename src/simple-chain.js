const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if(value === undefined) {
      this.chain.push("");
    } else if(value === null) {
      this.chain.push("null");
    } else {
      this.chain.push(value.toString());
    }
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position > this.chain.length || position <= 0) {
      this.chain = [];
      throw new Error( "You can't remove incorrect link!");
    } else {
    this.chain.splice(position - 1, 1);
    return this;
  }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain.map((x) => `( ${x} )`).join("~~");
    this.chain.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
