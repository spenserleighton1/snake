const Game = require('./Game.js');
const Snake = require('./Snake.js');
// const game = new Game;
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var snake = new Snake(50, 50, 15, 15);

window.addEventListener('keydown', function(event) {
  event.preventDefault();
         if (event.keyCode === 37) {
    left();
    snake.direction
  } else if (event.keyCode === 38){
    up();
  } else if (event.keyCode === 39){
    right();
  } else if (event.keyCode === 40){
    down();
  }
});


// function moveSnake(direction) {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   snake[direction]().draw(context);
//   requestAnimationFrame(direction);
// }


function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  snake.newSnake().draw(context);
  // requestAnimationFrame(gameLoop);
};

function down() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  snake.moveDown().draw(context);
  requestAnimationFrame(down);
}

function right() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  snake.moveRight().draw(context);
  requestAnimationFrame(right);
}

function left() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  snake.moveLeft().draw(context);
  requestAnimationFrame(left);
}

function up() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  snake.moveUp().draw(context);
  requestAnimationFrame(up);
}

window.requestAnimationFrame(gameLoop);
