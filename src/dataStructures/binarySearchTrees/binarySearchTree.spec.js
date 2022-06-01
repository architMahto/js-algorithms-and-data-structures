const { expect } = require('chai')

const { BinarySearchTree, Node } = require('./binarySearchTree')

describe('Testing the Binary Search Tree data structure', () => {
  describe('init()', () => {
    let sampleBst = new BinarySearchTree()
    sampleBst.root = new Node(15)

    it('should be defined', () => {
      expect(sampleBst).to.not.be.undefined
    })

    it('should have root node initialized', () => {
      expect(sampleBst.root.left).to.be.null
      expect(sampleBst.root.right).to.be.null
      expect(sampleBst.root.value).to.equal(15)
    })
  })
})
