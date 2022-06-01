const { expect } = require('chai')

const Graph = require('./graph')

describe('Testing the Binary Heap data structure', () => {
  describe('init()', () => {
    let graph = new Graph()

    it('should be defined', () => {
      expect(graph).to.not.be.undefined
    })

    it('should have adjacency list initialized', () => {
      expect(graph.adjacencyList).to.be.empty
    })
  })
})
