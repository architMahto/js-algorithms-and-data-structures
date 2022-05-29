const { expect } = require('chai')

const DoublyLinkedList = require('./doublyLinkedList')

describe.skip('Testing the Doubly Linked List data structure', () => {
  describe('init()', () => {
    let list = new DoublyLinkedList()

    it('should be defined', () => {
      expect(list).to.not.be.undefined
    })

    it('should have head, tail, and length initialized', () => {
      expect(list.head).to.be.null
      expect(list.tail).to.be.null
      expect(list.length).to.equal(0)
    })
  })
})
