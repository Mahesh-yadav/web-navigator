const Stack = require('../lib/Stack');

class WebNavigator {
  #currentPage;
  #backPages;
  #nextPages;

  constructor(currentPage) {
    this.#currentPage = currentPage;
    this.#backPages = new Stack();
    this.#nextPages = new Stack();
  }

  get currentPage() {
    return this.#currentPage;
  }

  get prevPage() {
    try {
      return this.#backPages.peek();
    } catch (error) {
      return null;
    }
  }

  get nextPage() {
    try {
      return this.#nextPages.peek();
    } catch (error) {
      return null;
    }
  }

  showStatus(action) {
    const prevPage = this.#backPages.peek();
    const nextPage = this.#nextPages.peek();
    console.log(`Action: ${action}`);
    console.log(`Current Page: ${this.#currentPage}`);
    console.log(`Previous Page: ${prevPage ? prevPage : ''}`);
    console.log(`Next Page: ${nextPage ? nextPage : ''}`);
    console.log('=======================================\n\n');
  }

  addNewPage(page) {
    this.#backPages.push(this.#currentPage);
    this.#currentPage = page;

    if (!this.#nextPages.isEmpty()) {
      this.#nextPages.clearStack();
    }
  }

  goBack() {
    if (this.#backPages.isEmpty()) {
      return;
    }
    this.#nextPages.push(this.#currentPage);
    this.#currentPage = this.#backPages.pop();
  }

  goForward() {
    if (this.#nextPages.isEmpty()) {
      return;
    }
    this.#backPages.push(this.#currentPage);
    this.#currentPage = this.#nextPages.pop();
  }
}

module.exports = WebNavigator;
