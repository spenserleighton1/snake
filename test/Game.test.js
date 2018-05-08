const chai = require('chai');
const assert = chai.assert;
let Game = require('../lib/Game.js');

describe('Game', function() {
  it('should be a function', function() {
    assert.isFunction(Game);
  })

  it('should instantiate a game', function() {
    let game = new Game;
    assert.isObject(game);
  })

  it('should start with a score of zero', function() {
    let game = new Game;
    assert.equal(game.score, 0);
  })

  it('is created, gameOver should be false', function() {
    let game = new Game;
    assert.equal(game.gameOver, false);
  })
})
