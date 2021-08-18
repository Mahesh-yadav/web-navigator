const NodeError = require('./errors/NodeError');

class Node {
  #data;
  #next;

  constructor(data) {
    this.#data = data;
    this.#next = null;
  }

  get data() {
    return this.#data;
  }

  get next() {
    return this.#next;
  }

  set next(node) {
    if (node instanceof Node || node === null) {
      this.#next = node;
    } else {
      throw new NodeError('Next node should be an instance of Node');
    }
  }

  toString() {
    return this.#data.toString();
  }
}

module.exports = Node;
