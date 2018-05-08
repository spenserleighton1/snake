const chai = require('chai');
const assert = chai.assert;
let Snake = require('../lib/Snake.js');
let Game = require('../lib/Game.js');

describe('snake', function() {
  it('should have a tail and a head ', function() {
    var snake = new Snake(context);
    console.log(snake)
    snake.move(context);
    assert.exists(tail);
    assert.exists(snake.head);
  });

  it.only('should start with an empty body', function() {
    let snake = new Snake;
    assert.deepEqual(snake.body.length, 0)
  });

  it('should grow to a length of five blocks when create snake is called', function() {
    let game = new Game;
    var snake = new Snake;
    snake.createSnake(context)
    assert.deeEqual(snake.body.length, 4)
  });
});

describe('game', function() {
  it('should grow when it eats an apple', function() {
    let game = new Game;
    let snake = new Snake;

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

//   it('should disappear when eaten', function() {
//     //setup
//     //execution
//     //assertion
//   });
// };
