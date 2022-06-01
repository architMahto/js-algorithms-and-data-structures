const { expect } = require('chai')

const { BinarySearchTree, Node } = require('./binarySearchTree')

describe('Testing the Binary Search Tree data structure', () => {
  let bst, noRootBst, foundNode

  beforeEach(() => {
    noRootBst = new BinarySearchTree()

    bst = new BinarySearchTree()

    bst.insert(15)
    bst.insert(10)
    bst.insert(20)
    bst.insert(5)
    bst.insert(7)
    bst.insert(13)
    bst.insert(18)
    bst.insert(25)
  })

  afterEach(() => {
    noRootBst = null
    bst = null
    foundNode = null
  })

  describe('init()', () => {
    let sampleBst = new BinarySearchTree()
    sampleBst.root = new Node(15)

    it('should be defined', () => {
      expect(sampleBst).to.not.be.undefined
    })

    it('should have root node initialized', () => {
      expect(sampleBst.root.left).to.be.null
      expect(sampleBst.root.right).to.be.null
      expect(sampleBst.root.val).to.equal(15)
    })
  })

  describe('bfs()', () => {
    it('should be defined', () => {
      expect(bst.bfs).to.not.be.undefined
    })

    it('should return the list of values from the tree in breadth first order', () => {
      const result = [15, 10, 20, 5, 13, 18, 25, 7]

      expect(bst.bfs()).to.deep.equal(result)
    })
  })

  describe('find()', () => {
    it('should be defined', () => {
      expect(bst.find).to.not.be.undefined
    })

    it('should return null if value is not found in tree', () => {
      foundNode = bst.find(40)

      expect(foundNode).to.be.undefined
    })

    it('should return node if value is found on the right side of the tree', () => {
      foundNode = bst.find(20)

      expect(foundNode).to.not.be.undefined
      expect(foundNode.val).to.equal(20)
    })

    it('should return node if value is found on the left side of the tree', () => {
      foundNode = bst.find(5)

      expect(foundNode).to.not.be.undefined
      expect(foundNode.val).to.equal(5)
    })
  })

  describe('insert()', () => {
    it('should be defined', () => {
      expect(bst.insert).to.not.be.undefined
    })

    it('set the root for a tree with no root', () => {
      noRootBst.insert(15)

      expect(noRootBst.root.val).to.equal(15)
    })

    it('should enter a value lesser than the root to the left of the root', () => {
      bst.insert(2)
      const expectedNode = bst.root.left.left.left

      expect(expectedNode).to.not.be.undefined
      expect(expectedNode.val).to.equal(2)
    })

    it('should enter a value greater than the root to the right of the root', () => {
      bst.insert(27)
      const expectedNode = bst.root.right.right.right

      expect(expectedNode).to.not.be.undefined
      expect(expectedNode.val).to.equal(27)
    })
  })
})
