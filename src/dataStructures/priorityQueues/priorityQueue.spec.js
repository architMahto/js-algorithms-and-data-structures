const { expect } = require('chai')

const PriorityQueue = require('./priorityQueue')

describe.skip('Testing the Binary Heap data structure', () => {
  describe('init()', () => {
    let priorityQueue = new PriorityQueue()

    it('should be defined', () => {
      expect(priorityQueue).to.not.be.undefined
    })

    it('should have values list initialized', () => {
      expect(priorityQueue.values.length).to.equal(0)
    })
  })
})
