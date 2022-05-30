const { expect } = require('chai')

const SinglyLinkedList = require('./singlyLinkedList')

describe('Testing the Singly Linked List data structure', () => {
  let list, emptyList

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
  })

  describe('init()', () => {
    let list = new SinglyLinkedList()

    it('should be defined', () => {
      expect(list).to.not.be.undefined
    })

    it('should have head, tail, and length initialized', () => {
      expect(list.head).to.be.null
      expect(list.tail).to.be.null
      expect(list.length).to.equal(0)
    })
  })

  describe('pop()', () => {
    it('should be defined', () => {
      expect(list.pop).to.not.be.undefined
    })

    it('should not remove and return any value if the list is empty', () => {
      const returnedNode = emptyList.pop()

      expect(returnedNode).to.be.undefined
    })

    it('should remove and return the last value from a non-empty list', () => {
      const returnedNode = list.pop()

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

  describe('shift()', () => {
    it('should be defined', () => {
      expect(list.shift).to.not.be.undefined
    })

    it('should not remove and return any value if the list is empty', () => {
      const returnedNode = emptyList.pop()

      expect(returnedNode).to.be.undefined
    })

    it('should remove and return the first value from a non-empty list', () => {
      const returnedNode = list.shift()

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
