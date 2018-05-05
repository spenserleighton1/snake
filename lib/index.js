let Game = require('./Game.js');
let Snake = require('./Snake.js');
let Block = require('./Block.js');
let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let game = new Game(context);

game.createInitialSnake(context);

document.addEventListener('keydown', identifyKey);

function identifyKey(event) {
  if (event.keyCode === 37) {
    game.snake.direction = 'left'
    console.log('left');
  } else if (event.keyCode === 38) {
    game.snake.direction = 'up'
    console.log('up');
  } else if (event.keyCode === 39) {
    game.snake.direction = 'right'
    console.log('right');
  } else if (event.keyCode === 40) {
    game.snake.direction = 'down'
    console.log('down');
  }
  game.gameLoop(context);
};

// window.requestAnimationFrame(game.gameLoop(context));