const StackError = require('./errors/StackError');
const LinkedList = require('./LinkedList');

class Stack {
  #stack;
  #size = 0;
  #maxSize;

  constructor(maxSize = Infinity) {
    this.#maxSize = maxSize;
    this.#stack = new LinkedList();
  }

  get size() {
    return this.#size;
  }

  get maxSize() {
    return this.#maxSize;
  }

  isEmpty() {
    return this.#size === 0;
  }

  hasRoom() {
    return this.#size < this.#maxSize;
  }

  push(data) {
    if (this.hasRoom()) {
      this.#stack.addToHead(data);
      this.#size++;
    } else {
      throw new StackError('Stack is full');
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.#stack.head.data;
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new StackError('Stack is empty');
    } else {
      const topNode = this.#stack.removeHead();
      this.#size--;
      return topNode.data;
    }
  }

  toString() {
    return this.#stack.toString();
  }
}

module.exports = Stack;
