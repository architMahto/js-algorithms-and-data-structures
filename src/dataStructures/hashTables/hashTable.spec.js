const { expect } = require('chai')

const HashTable = require('./hashTable')

describe.skip('Testing the Binary Heap data structure', () => {
  describe('init()', () => {
    let hashTable = new HashTable()

    it('should be defined', () => {
      expect(hashTable).to.not.be.undefined
    })

    it('should have keyMap initialized', () => {
      expect(hashTable.keyMap.length).to.equal(0)
    })
  })
})
