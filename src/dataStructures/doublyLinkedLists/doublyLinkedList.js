class Node {
  constructor(val) {
    this.val = val
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  get(index) {
    if (index < 0 || index >= this.length) return null

    const startingFromBeginning = index <= Math.floor(this.length/2)
    let currentNode = startingFromBeginning ? this.head : this.tail
    let counter = startingFromBeginning ? 0 : this.length - 1

    while (counter !== index) {
      if (startingFromBeginning) {
        currentNode = currentNode.next
        counter++
      } else {
        currentNode = currentNode.prev
        counter--
      }
    }

    return currentNode
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false

    if (index === 0) {
      this.unshift(val)
      return true
    }

    if (index === this.length) {
      this.push(val)
      return true
    }

    const newNode = new Node(val)
    const beforeNode = this.get(index-1)
    const afterNode = beforeNode.next

    beforeNode.next = newNode
    newNode.prev = beforeNode
    newNode.next = afterNode
    afterNode.prev = newNode

    this.length++
    return true
  }

  pop() {
    if (!this.head) return undefined

    let poppedNode = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }

    this.length--
    return poppedNode
  }

  push(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++
    return this
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === (this.length - 1)) return this.pop()
    if (index === 0) return this.shift()

    const nodeToRemove = this.get(index)
    const beforeNode = nodeToRemove.prev
    const afterNode = nodeToRemove.next

    beforeNode.next = afterNode
    afterNode.prev = beforeNode
    nodeToRemove.next = null
    nodeToRemove.prev = null

    this.length--
    return nodeToRemove
  }

  set(index, val) {
    const foundNode = this.get(index)

    if (foundNode) {
      foundNode.val = val
      return true
    }

    return false
  }

  shift() {
    if (!this.head) return undefined

    let oldHead = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }

    this.length--
    return oldHead
  }

  unshift(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }
}

module.exports = DoublyLinkedList
