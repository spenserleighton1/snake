const chai = require('chai');
const expect = chai.expect;
let Snake = require('../lib/Snake.js');

describe('snake', function() {
  it('should have a tail and a head ', function() {
    var snake = new Snake(context);
    snake.move(context);
    assert.exists(tail);
    assert.exists(snake.head);
  });

  it('should start with 5 segments', function() {
    var snake = new Snake();
    assert.equal(snake.body.length, 5)
  });
});

describe('game', function() {
  it('should grow when it eats an apple', function() {
    var snake = new Snake();
    assert.equal(game.score, 0);
    game.eat();
    assert.equal(game.score, 10);
  });

  it('should die when it hits a wall', function() {
    var snake = new Snake();
    game.collisionBorder();
    assert.equal(game.gameOver, true);
  });

  it('should die when it hits itself', function() {
    var snake = new Snake();
    game.collisionBody();
    assert.equal(game.gameover, true);
  });

  it('should not be over initially', function() {
    var snake = new Snake();
    assert.equal(game.gameOver, false);
  });
});

  it('should disappear when eaten', function() {
    //setup
    //execution
    //assertion
  });
});
