let Snake = require('./Snake.js');
let Block = require('./Block.js');

class Game {
  constructor(context) {
    this.block = new Block(100, 100);
    this.gameOver = false;
    this.snake = new Snake();
    this.context = context;
  }

  createInitialSnake() {
    this.snake.createSnake(this.context);
  }

  gameLoop() {
  this.context.clearRect(0, 0, canvas.width, canvas.height)
  console.log(this.context);
  this.snake.move(this.context);
  window.requestAnimationFrame(this.gameLoop);
  }
}

module.exports = Game;