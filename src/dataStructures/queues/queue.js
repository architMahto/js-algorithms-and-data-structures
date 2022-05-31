class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  dequeue() {
    if (this.size === 0) return null

    const removedNode = this.first

    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
    }

    removedNode.next = null
    this.size--
    return removedNode.val
  }

  enqueue(val) {
    const newNode = new Node(val)

    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    return ++this.size
  }
}

module.exports = Queue
