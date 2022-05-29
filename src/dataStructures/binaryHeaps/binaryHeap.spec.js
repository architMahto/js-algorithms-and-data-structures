const { expect } = require('chai')

const BinaryHeap = require('./binaryHeap')

describe.skip('Testing the Binary Heap data structure', () => {
  describe('init()', () => {
    let binaryHeap = new BinaryHeap()

    it('should be defined', () => {
      expect(binaryHeap).to.not.be.undefined
    })

    it('should have values list initialized', () => {
      expect(binaryHeap.values.length).to.equal(0)
    })
  })
})
