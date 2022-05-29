const { expect } = require('chai')

const insertionSort = require('./insertionSort')

describe('Testing Insertion Sort algorithm', () => {
  it('should sort an empty list', () => {
    expect(insertionSort([])).to.equal([])
  })

  it('should sort a list with a single item', () => {
    expect(insertionSort([1])).to.equal([1])
  })

  it('should sort an unordered list', () => {
    const unorderedList = [1, 5, 2, 8, 10, 7, 90, 45, 36, 42, 24]
    const result = [1, 2, 5, 7, 8, 10, 24, 36, 42, 45, 90]
    expect(insertionSort(unorderedList)).to.equal(result)
  })
})
