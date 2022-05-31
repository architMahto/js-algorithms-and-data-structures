const { expect } = require('chai')

const DoublyLinkedList = require('./doublyLinkedList')

describe('Testing the Doubly Linked List data structure', () => {
  let list, emptyList, returnedNode

  beforeEach(() => {
    emptyList = new DoublyLinkedList()
    list = new DoublyLinkedList()

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
    let sampleList = new DoublyLinkedList()

    it('should be defined', () => {
      expect(sampleList).to.not.be.undefined
    })

    it('should have head, tail, and length initialized', () => {
      expect(sampleList.head).to.be.null
      expect(sampleList.tail).to.be.null
      expect(sampleList.length).to.equal(0)
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
})
