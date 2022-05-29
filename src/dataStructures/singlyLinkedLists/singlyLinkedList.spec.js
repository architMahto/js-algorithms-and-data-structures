const { expect } = require('chai')

const SinglyLinkedList = require('./singlyLinkedList')

describe.skip('Testing the Singly Linked List data structure', () => {
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
})
