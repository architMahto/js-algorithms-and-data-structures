const { expect } = require('chai')

const BinarySearchTree = require('./binarySearchTree')

describe.skip('Testing the Binary Search Tree data structure', () => {
  describe('init()', () => {
    let bst = new BinarySearchTree(15)

    it('should be defined', () => {
      expect(bst).to.not.be.undefined
    })

    it('should have root node initialized', () => {
      expect(bst.left).to.be.null
      expect(bst.right).to.be.null
      expect(bst.value).to.equal(15)
    })
  })
})
