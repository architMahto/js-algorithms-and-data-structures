class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  pop() {
    if (this.size === 0) return null

    const returnedNode = this.first

    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
    }

    returnedNode.next = null
    this.size--
    return returnedNode.val
  }

  push(val) {
    const newNode = new Node(val)

    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      const oldFirst = this.first
      this.first = newNode
      this.first.next = oldFirst
    }

    return ++this.size
  }
}

module.exports = Stack
