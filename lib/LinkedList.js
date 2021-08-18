const Node = require('./Node');

class LinkedList {
  #head;

  constructor() {
    this.#head = null;
  }

  get head() {
    return this.#head;
  }

  addToHead(data) {
    const newHead = new Node(data);

    if (this.#head) {
      newHead.next = this.#head;
    }

    this.#head = newHead;
  }

  removeHead() {
    if (!this.#head) {
      return null;
    }

    const removedHead = this.#head;

    this.#head = removedHead.next;

    removedHead.next = null;
    return removedHead;
  }

  printList() {
    console.log(this.toString());
  }

  toString() {
    let currentNode = this.#head;
    let output = '';

    while (currentNode !== null) {
      output += `${currentNode.toString()}, `;
      currentNode = currentNode.next;
    }

    return output.slice(0, -2);
  }
}

module.exports = LinkedList;
