const { expect } = require('chai')

const Queue = require('./queue')

describe('Testing the Queue data structure', () => {
  let queue, emptyQueue

  beforeEach(() => {
    queue = new Queue()
    emptyQueue = new Queue()

    queue.enqueue(5)
    queue.enqueue(2)
    queue.enqueue(8)
    queue.enqueue(14)
    queue.enqueue(1)
  })

  afterEach(() => {
    queue = null
    emptyQueue = null
  })

  describe('init()', () => {
    let sampleQueue = new Queue()

    it('should be defined', () => {
      expect(sampleQueue).to.not.be.undefined
    })

    it('should have first node, last node, and queue size initialized', () => {
      expect(sampleQueue.first).to.be.null
      expect(sampleQueue.last).to.be.null
      expect(sampleQueue.size).to.equal(0)
    })
  })

  describe('dequeue()', () => {
    it('should be defined', () => {
      expect(queue.dequeue).not.to.be.undefined
    })

    it('should not remove and return any value if the list is empty', () => {
      returnedNode = emptyQueue.dequeue()

      expect(returnedNode).to.be.null
    })

    it('should remove and return the first value from a non-empty list', () => {
      returnedNode = queue.dequeue()

      expect(returnedNode).to.equal(5)
      expect(queue.first.val).to.equal(2)
      expect(queue.size).to.equal(4)
    })
  })

  describe('enqueue()', () => {
    it('should be defined', () => {
      expect(queue.enqueue).not.to.be.undefined
    })

    it('should add a value to an empty queue', () => {
      emptyQueue.enqueue(7)

      expect(emptyQueue.first.val).to.equal(7)
      expect(emptyQueue.last.val).to.equal(7)
      expect(emptyQueue.size).to.equal(1)
    })

    it('should add a value to the end of a non-empty queue', () => {
      queue.enqueue(4)

      expect(queue.last.val).to.equal(4)
      expect(queue.size).to.equal(6)
    })
  })
})
