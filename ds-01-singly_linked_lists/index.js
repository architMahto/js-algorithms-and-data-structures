const SinglyLinkedList = require('./singlyLinkedList')

const list = new SinglyLinkedList()
list.push('Hello')
list.push('Goodbye')
list.push('!')

list.print()

list.pop()

list.print()
