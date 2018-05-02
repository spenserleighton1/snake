const Game = require('./Game.js');
const Snake = require('./Snake.js');
const game = new Game;
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var snake = new Snake(50, 50, 10, 10);

window.addEventListener('keydown', function(event) {
  event.preventDefault();
  if (event.which === 37) {
    snake.moveLeft();
    return this;
  } else if (event.which === 38){
    snake.moveUp();
    return this;
  } else if (event.which === 39){
    snake.moveRight();
    return this;
  } else if (event.which === 40){
    snake.moveDown();
    return this;
  }
});


function gameLoop() {
  // context.clearRect(0, 0, canvas.width, canvas.height);
  snake.move().draw(context);
  requestAnimationFrame(gameLoop);
};

window.requestAnimationFrame(gameLoop);
