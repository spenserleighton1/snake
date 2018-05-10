const chai = require('chai');
const assert = chai.assert;
let Snake = require('../lib/Snake.js');

describe('snake', () => {
  it('should be a function', () => {
      assert.isFunction(Snake);
  })

  it('when offSetXYgrow is invoked x,y are updated and the snake class is returned', ()=> {
    const snake = new Snake();
    const expectedX = 16;
    const expectedY = 15;

    snake.createSnake();
    const currentTail = snake.body[0];
    snake.offSetXYgrow(1, 0, currentTail);

    const actualX = currentTail.x;
    const actualY = currentTail.y;

    assert.equal(expectedX, actualX)
    assert.equal(expectedY, actualY)
  })

  it('when offSetXY is invoked x,y are updated and the snake class is returned', ()=> {
    const snake = new Snake();
    const expectedX = 76;
    const expectedY = 15;

    snake.createSnake();
    const currentTail = snake.body[0];
    const head = snake.body[snake.body.length - 1];
    snake.offSetXYhead(1, 0, currentTail, head);
    const actualX = currentTail.x;
    const actualY = currentTail.y;

    assert.equal(expectedX, actualX)
    assert.equal(expectedY, actualY)
  })

  it('should instantiate our good friend snake', () => {
    let snake = new Snake();
    assert.isObject(snake);
  })

  it('should start with an empty body', () => {
    let snake = new Snake();
    assert.deepEqual(snake.body.length, 0)
  });

  it('should have an initial direction of right', () => {
    var snake = new Snake(context);
    assert.equal(snake.direction, 'right');
  });

  it('should have a body length of five when instantiated', () => {
    var snake = new Snake(context);
    snake.createSnake(context);
    assert.equal(snake.body.length, 5);
  })

  it('should grow when it eats an apple', () => { 
    var snake = new Snake(context);
    snake.createSnake(context);
    assert.equal(snake.body.length, 5);
    snake.grow(context);
    assert.equal(snake.body.length, 6);
  })
});