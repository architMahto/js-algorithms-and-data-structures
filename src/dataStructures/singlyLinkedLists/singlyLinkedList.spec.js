const { expect } = require('chai')

const SinglyLinkedList = require('./singlyLinkedList')

describe('Testing the Singly Linked List data structure', () => {
  let list, emptyList, returnedNode

  beforeEach(() => {
    emptyList = new SinglyLinkedList()
    list = new SinglyLinkedList()

    list.push(5)
    list.push(2)
    list.push(8)
    list.push(14)
    list.push(1)
  })

  afterEach(() => {
    emptyList = null
    list = null
    returnedNode = null
  })

  describe('init()', () => {
    let sampleList = new SinglyLinkedList()

    it('should be defined', () => {
      expect(sampleList).to.not.be.undefined
    })

    it('should have head, tail, and length initialized', () => {
      expect(sampleList.head).to.be.null
      expect(sampleList.tail).to.be.null
      expect(sampleList.length).to.equal(0)
    })
  })

  describe('get()', () => {
    it('should be defined', () => {
      expect(list.get).to.not.be.undefined
    })

    it('should return null for a negative index', () => {
      returnedNode = list.get(-1)

      expect(returnedNode).to.be.null
    })

    it('should return null for an index out of range', () => {
      returnedNode = list.get(10)

      expect(returnedNode).to.be.null
    })

    it('should return the correct value for the specified index', () => {
      returnedNode = list.get(2)

      expect(returnedNode.val).to.equal(8)
    })
  })

  describe('insert()', () => {
    it('should be defined', () => {
      expect(list.insert).to.not.be.undefined
    })

    it('should not insert any value at a negative index', () => {
      const result = list.insert(-1, 5)

      expect(result).to.be.false
    })

    it('should not insert any value at an index out of range', () => {
      const result = list.insert(6, 5)

      expect(result).to.be.false
    })

    it('should insert a value at the specified index', () => {
      const result = list.insert(3, 7)

      expect(result).to.be.true
      expect(list.get(3).val).to.equal(7)
      expect(list.length).to.equal(6)
    })
  })

  describe('pop()', () => {
    it('should be defined', () => {
      expect(list.pop).to.not.be.undefined
    })

    it('should not remove and return any value if the list is empty', () => {
      returnedNode = emptyList.pop()

      expect(returnedNode).to.be.undefined
    })

    it('should remove and return the last value from a non-empty list', () => {
      returnedNode = list.pop()

      expect(returnedNode.val).to.equal(1)
      expect(list.tail.val).to.equal(14)
      expect(list.length).to.equal(4)
    })
  })

  describe('push()', () => {
    it('should be defined', () => {
      expect(list.push).to.not.be.undefined
    })

    it('should add a value to an empty list', () => {
      emptyList.push(7)

      expect(emptyList.head.val).to.equal(7)
      expect(emptyList.tail.val).to.equal(7)
      expect(emptyList.length).to.equal(1)
    })

    it('should add a value to the end of a list', () => {
      list.push(4)

      expect(list.tail.val).to.equal(4)
      expect(list.length).to.equal(6)
    })
  })

  describe('remove()', () => {
    it('should be defined', () => {
      expect(list.remove).to.not.be.undefined
    })

    it('should not remove and return a value if the specified index is negative', () => {
      const returnedNode = list.remove(-1)

      expect(returnedNode).to.be.undefined
    })

    it('should not remove and return a value if the specified index is out of range', () => {
      const returnedNode = list.remove(5)

      expect(returnedNode).to.be.undefined
    })

    it('should remove and return a value at the specified index', () => {
      const returnedNode = list.remove(3)

      expect(returnedNode.val).to.equal(14)
      expect(list.length).to.equal(4)
    })
  })

  describe('set()', () => {
    it('should be defined', () => {
      expect(list.set).to.not.be.undefined
    })

    it('should change the value for a specific node', () => {
      const result = list.set(3, 6)

      expect(result).to.be.true
      expect(list.get(3).val).to.equal(6)
    })

    it('should not change any value if the specified node could not be found', () => {
      const result = list.set(10, 6)

      expect(result).to.be.false
    })
  })

  describe('shift()', () => {
    it('should be defined', () => {
      expect(list.shift).to.not.be.undefined
    })

    it('should not remove and return any value if the list is empty', () => {
      returnedNode = emptyList.shift()

      expect(returnedNode).to.be.undefined
    })

    it('should remove and return the first value from a non-empty list', () => {
      returnedNode = list.shift()

      expect(returnedNode.val).to.equal(5)
      expect(list.head.val).to.equal(2)
      expect(list.length).to.equal(4)
    })
  })

  describe('unshift()', () => {
    it('should be defined', () => {
      expect(list.unshift).to.not.be.undefined
    })

    it('should add a value to an empty list', () => {
      emptyList.unshift(7)

      expect(emptyList.head.val).to.equal(7)
      expect(emptyList.tail.val).to.equal(7)
      expect(emptyList.length).to.equal(1)
    })

    it('should add a value to the end of a list', () => {
      list.unshift(4)

      expect(list.head.val).to.equal(4)
      expect(list.length).to.equal(6)
    })
  })
})
