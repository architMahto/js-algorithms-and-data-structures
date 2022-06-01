class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  bfs() {
    const queue = [], visited = []
    let visitedNode = this.root

    queue.push(visitedNode)

    while (queue.length) {
      visitedNode = queue.shift()
      visited.push(visitedNode.val)

      if (visitedNode.left) queue.push(visitedNode.left)
      if (visitedNode.right) queue.push(visitedNode.right)
    }

    return visited
  }

  dfsInOrder() {
    let current = this.root, visited = []

    const _traverse = (node) => {
      if (node.left) _traverse(node.left)
      visited.push(node.val)
      if (node.right) _traverse(node.right)
    }

    _traverse(current)

    return visited
  }

  dfsPostOrder() {
    let current = this.root, visited = []

    const _traverse = (node) => {
      if (node.left) _traverse(node.left)
      if (node.right) _traverse(node.right)
      visited.push(node.val)
    }

    _traverse(current)

    return visited
  }

  dfsPreOrder() {
    let current = this.root, visited = []

    const _traverse = (node) => {
      visited.push(node.val)
      if (node.left) _traverse(node.left)
      if (node.right) _traverse(node.right)
    }

    _traverse(current)

    return visited
  }

  find(val) {
    const _find = (val, node) => {
      if (node === null) {
        return undefined
      } else if (node.val === val) {
        return node
      } else if (node.val < val) {
        return _find(val, node.right)
      } else {
        return _find(val, node.left)
      }
    }

    return _find(val, this.root)
  }

  insert(val) {
    const _insert = (val, node) => {
      if (node === null) {
        node = new Node(val)
      } else if (node.val < val) {
        node.right = _insert(val, node.right)
      } else {
        node.left = _insert(val, node.left)
      }

      return node
    }

    this.root = _insert(val, this.root)
  }
}

module.exports = { BinarySearchTree, Node }
