const StackError = require('../errors/StackError');
const Stack = require('../Stack');

describe('Stack', () => {
  test('creates an empty stack', () => {
    const stack = new Stack();

    expect(stack).not.toBeNull();
    expect(stack.size).toBe(0);
    expect(stack.toString()).toBe('');
  });

  test('creates an empty stack of given max size', () => {
    const maxSize = 5;
    const stack = new Stack(maxSize);

    expect(stack).not.toBeNull();
    expect(stack.size).toBe(0);
    expect(stack.toString()).toBe('');
    expect(stack.maxSize).toBe(maxSize);
  });

  test('tests if stack is empty', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);

    stack.push(1);

    expect(stack.isEmpty()).toBe(false);
  });

  test('tests if a bounded stack has room for more elements', () => {
    const maxSize = 2;
    const stack = new Stack(maxSize);

    expect(stack.hasRoom()).toBe(true);

    stack.push(1);
    stack.push(2);

    expect(stack.hasRoom()).toBe(false);
  });

  test('pushes data to the top of the stack', () => {
    const stack = new Stack();

    for (let i = 1; i <= 5; i++) {
      stack.push(i);
    }

    expect(stack.toString()).toBe('5, 4, 3, 2, 1');
    expect(stack.size).toBe(5);
  });

  test('throws error if stack is full while pushing data', () => {
    const maxSize = 5;
    const stack = new Stack(maxSize);

    for (let i = 1; i <= maxSize; i++) {
      stack.push(i);
    }

    expect(() => {
      stack.push(6);
    }).toThrow(StackError);
  });

  test('pops data from the top of the stack', () => {
    const stack = new Stack();

    for (let i = 1; i <= 5; i++) {
      stack.push(i);
    }

    expect(stack.toString()).toBe('5, 4, 3, 2, 1');
    expect(stack.size).toBe(5);

    const data = stack.pop();

    expect(stack.toString()).toBe('4, 3, 2, 1');
    expect(stack.size).toBe(4);
    expect(data).toBe(5);
  });

  test('throws error if stack is empty while popping data', () => {
    const stack = new Stack();

    expect(() => {
      stack.pop();
    }).toThrow(StackError);
  });

  test('peeks data from the top of the stack without removing it', () => {
    const stack = new Stack();

    for (let i = 1; i <= 5; i++) {
      stack.push(i);
    }

    expect(stack.toString()).toBe('5, 4, 3, 2, 1');
    expect(stack.size).toBe(5);

    const data = stack.peek();

    expect(stack.toString()).toBe('5, 4, 3, 2, 1');
    expect(stack.size).toBe(5);
    expect(data).toBe(5);
  });

  test('clears stack', () => {
    const stack = new Stack();
    for (let i = 1; i <= 5; i++) {
      stack.push(i);
    }

    expect(stack.toString()).toBe('5, 4, 3, 2, 1');
    expect(stack.size).toBe(5);

    stack.clearStack();

    expect(stack.toString()).toBe('');
    expect(stack.size).toBe(0);

    stack.push(10);

    expect(stack.toString()).toBe('10');
    expect(stack.size).toBe(1);
  });
});
