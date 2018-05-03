const Game = require('./Game.js');
const Snake = require('./Snake.js');
// const game = new Game;
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var snake = new Snake(50, 50, 15, 15);


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
  // game.gameOver();
  context.clearRect(0, 0, canvas.width, canvas.height);
  snake.move().drawSnake(context);
  requestAnimationFrame(gameLoop);
};


window.requestAnimationFrame(gameLoop);
