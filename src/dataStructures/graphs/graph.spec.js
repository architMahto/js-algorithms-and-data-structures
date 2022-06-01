const { expect } = require('chai')

const Graph = require('./graph')

describe('Testing the Binary Heap data structure', () => {
  let graph, emptyGraph

  beforeEach(() => {
    emptyGraph = new Graph()
    graph = new Graph()
  })

  afterEach(() => {
    emptyGraph = null
    graph = null
  })

  describe('init()', () => {
    let sampleGraph = new Graph()

    it('should be defined', () => {
      expect(sampleGraph).to.not.be.undefined
    })

    it('should have adjacency list initialized', () => {
      expect(sampleGraph.adjacencyList).to.be.empty
    })
  })

  describe('addVertex()', () => {
    it('should be defined', () => {
      expect(graph.addVertex).to.not.be.undefined
    })

    it('should set up a new node in the adjacency list', () => {
      emptyGraph.addVertex('A')

      expect(emptyGraph.adjacencyList).to.have.key('A')
      expect(emptyGraph.adjacencyList['A']).to.deep.equal([])
    })
  })
})
