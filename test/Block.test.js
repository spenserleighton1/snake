const chai = require('chai');
const assert = chai.assert;
let Block = require('../lib/Block.js');

describe('block', function() {
  it('should be a function', function() {
      assert.isFunction(Block);
  })

  it('should instantiate a block', function() {
    let block = new Block;
    assert.isObject(block);
  })

  it('should have a default width and height of fifteen', function() {
    let block = new Block;
    assert.equal(block.width, 15);
    assert.equal(block.height, 15);
  })

  it('should have a default color', function() {
    let block = new Block;
    assert.equal(block.color, 'brown');
  })
})