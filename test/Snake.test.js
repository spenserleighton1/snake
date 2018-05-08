const chai = require('chai');
const assert = chai.assert;
let Snake = require('../lib/Snake.js');

describe('snake', function() {
  it('should be a function', function() {
      assert.isFunction(Snake);
  })

  it('should instantiate a snake', function() {
    let snake = new Snake;
    assert.isObject(snake);
  })

  it('should start with an empty body', function() {
    let snake = new Snake;
    assert.deepEqual(snake.body.length, 0)
  });

  it('should have an initial direction of right', function() {
    var snake = new Snake(context);
    assert.equal(snake.direction, 'right');
  });

  it('should have a body length of five when instantiated', function() {
    var snake = new Snake(context);
    snake.createSnake(context);
    assert.equal(snake.body.length, 5);
  })

  it('should grow when it eats an apple', function() { 
    var snake = new Snake(context);
    snake.createSnake(context);
    assert.equal(snake.body.length, 5);
    snake.grow(context);
    assert.equal(snake.body.length, 6);
  })
});