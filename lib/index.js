let Game = require('./Game.js');
let Snake = require('./Snake.js');
let Block = require('./Block.js');
let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let game = new Game(context);

game.createInitialSnake();

document.addEventListener('keydown', identifyKey(event));

function identifyKey(event) {
  if (event.keyCode === 37) {
    snake.direction = 'left'
  } else if (event.keyCode === 38){
    snake.direction = 'up'
  } else if (event.keyCode === 39){
    snake.direction = 'right'
  } else if (event.keyCode === 40){
    snake.direction = 'down'
  }
  game.gameLoop();
};