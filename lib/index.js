let Game = require('./Game.js');
let Snake = require('./Snake.js');
let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let game = new Game(context);

let startGame = document.querySelector('#start-btn')
let resetGame = document.querySelector('#reset-btn')
let lives = document.querySelector('#lives')
let score = document.querySelector('#score')
startGame.addEventListener('click', start)
resetGame.addEventListener('click', reset)

function start() {
  console.log('start')
}

function reset() {
  window.location.reload()
}

game.createInitialSnake(context);
document.addEventListener('keydown', game.gameLoop(context));
document.addEventListener('keydown', identifyKey);

function identifyKey(event) {
  if (event.keyCode === 37) {
    game.snake.direction = 'left'
  } else if (event.keyCode === 38) {
    game.snake.direction = 'up'
  } else if (event.keyCode === 39) {
    game.snake.direction = 'right'
  } else if (event.keyCode === 40) {
    game.snake.direction = 'down'
  }
  
};
