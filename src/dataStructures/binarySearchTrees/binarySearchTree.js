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
