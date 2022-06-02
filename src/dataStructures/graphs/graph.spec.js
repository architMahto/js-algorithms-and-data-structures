const { expect } = require('chai')

const Graph = require('./graph')

describe('Testing the Binary Heap data structure', () => {
  let graph, emptyGraph

  beforeEach(() => {
    emptyGraph = new Graph()
    graph = new Graph()

    const nodes = ['A', 'B', 'C', 'D', 'E']
    nodes.forEach(node => graph.addVertex(node))
    const edges = [['A','B'], ['B','C'], ['C','D'], ['D','E'], ['E','A']]
    edges.forEach(([v1,v2]) => graph.addEdge(v1,v2))
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

  describe('addEdge()', () => {
    it('should be defined', () => {
      expect(graph.addEdge).to.not.be.undefined
    })

    it('should add a connection between two nodes in a graph', () => {
      graph.addEdge('D', 'A')

      expect(graph.adjacencyList['D']).to.include('A')
      expect(graph.adjacencyList['A']).to.include('D')
    })
  })

  describe('addVertex()', () => {
    it('should be defined', () => {
      expect(graph.addVertex).to.not.be.undefined
    })

    it('should add a new node to a graph', () => {
      emptyGraph.addVertex('A')

      expect(emptyGraph.adjacencyList).to.have.key('A')
      expect(emptyGraph.adjacencyList['A']).to.deep.equal([])
    })
  })

  describe('removeEdge()', () => {
    it('should be defined', () => {
      expect(graph.removeEdge).to.not.be.undefined
    })

    it('should add a connection between two nodes in a graph', () => {
      graph.removeEdge('D', 'A')

      expect(graph.adjacencyList['D']).to.not.include('A')
      expect(graph.adjacencyList['A']).to.not.include('D')
    })
  })
})
