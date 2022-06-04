class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  dfsRecursive(startingVertex) {
    const visitedNodes = {}

    const _traverseNodes = (vertex) => {
      if (!vertex) return null

      visitedNodes[vertex] = true
      this.adjacencyList[vertex].forEach(neighbour => {
        if (!visitedNodes[neighbour]) _traverseNodes(neighbour)
      })
    }

    _traverseNodes(startingVertex)

    return Object.keys(visitedNodes)
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
  }

  removeVertex(vertex) {
    const vertexConnections = this.adjacencyList[vertex]

    vertexConnections.forEach(vc => this.removeEdge(vertex, vc))
    delete this.adjacencyList[vertex]
  }
}

module.exports = Graph
