const { expect } = require('chai')

const Stack = require('./stack')

describe('Testing the Stack data structure', () => {
  let stack, emptyStack

  beforeEach(() => {
    stack = new Stack()
    emptyStack = new Stack()

    stack.push(5)
    stack.push(2)
    stack.push(8)
    stack.push(14)
    stack.push(1)
  })

  afterEach(() => {
    stack = null
    emptyStack = null
  })

  describe('init()', () => {
    const sampleStack = new Stack()

    it('should be defined', () => {
      expect(sampleStack).to.not.be.undefined
    })

    it('should have first node, last node, and stack size initialized', () => {
      expect(sampleStack.first).to.be.null
      expect(sampleStack.last).to.be.null
      expect(sampleStack.size).to.equal(0)
    })
  })

  describe('pop()', () => {
    it('should be defined', () => {
      expect(stack.pop).to.not.be.undefined
    })

    it('should return null if list is empty', () => {
      const result = emptyStack.pop()

      expect(result).to.be.null
    })

    it('should remove and return the first value from the stack', () => {
      const returnedNode = stack.pop()

      expect(stack.size).to.equal(4)
      expect(returnedNode).to.equal(1)
    })
  })

  describe('push()', () => {
    it('should be defined', () => {
      expect(stack.push).to.not.be.undefined
    })

    it('should add a value to an empty stack', () => {
      const size = emptyStack.push(9)

      expect(size).to.equal(1)
    })

    it('should add a value to the beginning of a non-empty stack', () => {
      const size = stack.push(9)

      expect(size).to.equal(6)
      expect(stack.first.val).to.equal(9)
    })
  })
})
