const { expect } = require('chai')

const Queue = require('./queue')

describe.skip('Testing the Queue data structure', () => {
  describe('init()', () => {
    let queue = new Queue()

    it('should be defined', () => {
      expect(queue).to.not.be.undefined
    })

    it('should have first node, last node, and queue size initialized', () => {
      expect(queue.first).to.be.null
      expect(queue.last).to.be.null
      expect(queue.size).to.equal(0)
    })
  })
})
