class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  get(index) {
    if (index < 0 || index >= this.length) return null

    let currentNode = this.head, counter = 0

    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }

    return currentNode
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return this.push(val)
    if (index === 0) return this.unshift(val)

    let newNode = new Node(val)
    let prevNode = this.get(index-1)
    let temp = prevNode.next

    prevNode.next = newNode
    newNode.next = temp

    this.length++

    return true
  }

  pop() {
    if (!this.head) return undefined

    let currentNode = this.head
    let newTail = currentNode

    while (currentNode.next) {
      newTail = currentNode
      currentNode = currentNode.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--

    if (this.length == 0) {
      this.head = null
      this.tail = null
    }

    return currentNode
  }

  push(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
    return this
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === (this.length - 1)) return this.pop()
    if (index === 0) return this.shift()

    let prevNode = this.get(index-1)
    let nodeToRemove = prevNode.next

    prevNode.next = nodeToRemove.next
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

    let currentHead = this.head

    this.head = this.head.next
    this.length--

    if (this.length === 0) {
      this.tail = null
    }

    return currentHead
  }

  unshift(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }
}

module.exports = SinglyLinkedList
