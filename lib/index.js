const Game = require('./Game.js');
const Snake = require('./Snake.js');
const Block = require('./Block.js');
  
// var block = new Block(10, 10, 15, 15);
// const game = new Game;
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var snake = new Snake(context);

console.log(snake)

window.addEventListener('keydown', function(event) {
  event.preventDefault();
         if (event.keyCode === 37) {
    snake.direction = 'left'
  } else if (event.keyCode === 38){
    snake.direction = 'up'
  } else if (event.keyCode === 39){
    snake.direction = 'right'
  } else if (event.keyCode === 40){
    snake.direction = 'down'
  }
});


function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  snake.createSnake()
  requestAnimationFrame(gameLoop);
};


window.requestAnimationFrame(gameLoop);
