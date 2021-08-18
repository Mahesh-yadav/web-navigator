const NodeError = require('../errors/NodeError');
const Node = require('../Node');

describe('Node', () => {
  test('creates an instance with data', () => {
    const node = new Node(1);

    expect(node).not.toBeNull();
    expect(node.data).toBe(1);
    expect(node.next).toBeNull();
  });

  test('sets next node', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.next = node2;

    expect(node1.next).toBe(node2);
  });

  test('throws error if next node is not an instance of NodeError', () => {
    const node = new Node(1);

    expect(() => {
      node.next = 'Not a Node';
    }).toThrow(NodeError);
  });
});
