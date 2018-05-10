const chai = require('chai');
const assert = chai.assert;
let Food = require('../lib/Food.js');

describe('Food', () => {
  it('should be a function', () => {
    assert.isFunction(Food);
  })

  it('should instantiate a block', () => {
    let food = new Food;
    assert.isObject(food);
  })

  it('should have a default color', () => {
    let food = new Food;
    assert.equal(food.color, 'pink');
  })

  it('should have a default color', () => {
    let food = new Food;
    assert.equal(food.color, 'pink');
  })

  it('should have a default width and height of fifteen', () => {
    let food = new Food;
    assert.equal(food.width, 15);
    assert.equal(food.height, 15);
  })

  it('should generate within the borders of the game', () => {
    let food = new Food;
    assert.isAbove(food.x, 0);
    assert.isBelow(food.x, 600);
    assert.isAbove(food.y, 0);
    assert.isBelow(food.y, 600);
  })
})