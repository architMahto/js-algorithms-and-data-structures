const { expect } = require('chai')

const Graph = require('./graph')

describe('Testing the Graph data structure', () => {
  let graph, emptyGraph

  beforeEach(() => {
    emptyGraph = new Graph()
    graph = new Graph()

    const nodes = ['A', 'B', 'C', 'D', 'E', 'F']
    nodes.forEach(node => graph.addVertex(node))
    const edges = [['A','B'], ['A','C'], ['B','D'], ['C','E'], ['D','E'], ['D','F'], ['E','F']]
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

  describe('dfsRecursive()', () => {
    it('should be defined', () => {
      expect(graph.dfsRecursive).to.not.be.undefined
    })

    it('should return the list of nodes visited in dfs order from the starting node', () => {
      const dfsNodesVisited = graph.dfsRecursive('A')
      const expectedNodesVisited = ['A', 'B', 'D', 'E', 'C', 'F']

      expect(dfsNodesVisited).to.deep.equal(expectedNodesVisited)
    })
  })

  describe('removeEdge()', () => {
    it('should be defined', () => {
      expect(graph.removeEdge).to.not.be.undefined
    })

    it('should remove a connection between two nodes in a graph', () => {
      graph.removeEdge('D', 'E')

      expect(graph.adjacencyList['D']).to.not.include('E')
      expect(graph.adjacencyList['E']).to.not.include('D')
    })
  })

  describe('removeVertex()', () => {
    it('should be defined', () => {
      expect(graph.removeVertex).to.not.be.undefined
    })

    it('should remove a vertex and all its connections from a graph', () => {
      graph.removeVertex('A')

      expect(graph.adjacencyList).to.not.have.key('A')
      expect(graph.adjacencyList['B']).to.not.include('A')
      expect(graph.adjacencyList['C']).to.not.include('A')
    })
  })
})
