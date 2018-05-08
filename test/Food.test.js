const chai = require('chai');
const assert = chai.assert;
let Food = require('../lib/Food.js');

describe('Food', function() {
  it('should be a function', function() {
    assert.isFunction(Food);
  })

  it('should instantiate a block', function() {
    let food = new Food;
    assert.isObject(food);
  })

  it('should have a default color', function() {
    let food = new Food;
    assert.equal(food.color, 'red');
  })

  it('should have a default color', function() {
    let food = new Food;
    assert.equal(food.color, 'red');
  })

  it('should have a default width and height of fifteen', function() {
    let food = new Food;
    assert.equal(food.width, 15);
    assert.equal(food.height, 15);
  })

  it('should generate within the borders of the game', function() {
    let food = new Food;
    assert.isAbove(food.x, 0);
    assert.isBelow(food.x, 600);
    assert.isAbove(food.y, 0);
    assert.isBelow(food.y, 600);
  })
})