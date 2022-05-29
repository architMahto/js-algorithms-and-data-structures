const SinglyLinkedList = require('./singlyLinkedList')

const list = new SinglyLinkedList()
list.push('Hello')
list.push('Goodbye')
list.push('!')

list.print()

list.pop()

list.print()

list.shift()

list.print()

list.unshift('Hello')

list.print()

console.log(list.get(0))
console.log(list.get(1))
console.log(list.get(2))
console.log()

list.set(1, 'Bye')

list.print()

list.insert(1, 'Good morning')

list.print()

list.remove(1)

list.print()

list.reverse()
list.print()
