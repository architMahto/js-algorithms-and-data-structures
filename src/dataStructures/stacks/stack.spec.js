const { expect } = require('chai')

const Stack = require('./stack')

describe('Testing the Stack data structure', () => {
  describe('init()', () => {
    let stack = new Stack()

    it('should be defined', () => {
      expect(stack).to.not.be.undefined
    })

    it('should have first node, last node, and stack size initialized', () => {
      expect(stack.first).to.be.null
      expect(stack.last).to.be.null
      expect(stack.size).to.equal(0)
    })
  })
})
