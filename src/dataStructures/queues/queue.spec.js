const { expect } = require('chai')

const Queue = require('./queue')

describe('Testing the Queue data structure', () => {
  let queue, emptyQueue

  beforeEach(() => {
    queue = new Queue()
    emptyQueue = new Queue()
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
})
