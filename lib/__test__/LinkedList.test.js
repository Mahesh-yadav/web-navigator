const LinkedList = require('../LinkedList');

describe('LinkedList', () => {
  test('creates an empty list', () => {
    const list = new LinkedList();

    expect(list).not.toBeNull();
    expect(list.toString()).toBe('');
  });

  test('adds data at the head', () => {
    const list = new LinkedList();

    for (let i = 1; i <= 5; i++) {
      list.addToHead(i);
    }

    expect(list.toString()).toBe('5, 4, 3, 2, 1');
  });

  test('removes head node in a non-empty list and returns the removed head node', () => {
    const list = new LinkedList();

    for (let i = 1; i <= 5; i++) {
      list.addToHead(i);
    }

    const removedNode = list.removeHead();

    expect(list.toString()).toBe('4, 3, 2, 1');
    expect(removedNode.data).toBe(5);
    expect(removedNode.next).toBeNull();
  });

  test('returns null if head node is removed from an empty list', () => {
    const list = new LinkedList();

    const removedNode = list.removeHead();
    expect(removedNode).toBeNull();
  });
});
