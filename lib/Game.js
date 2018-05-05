let Snake = require('./Snake.js');
let Block = require('./Block.js');
let Food = require('./Food.js');
let snake = new Snake();
let target = new Food;

console.log(target.x)

class Game {
  constructor(context) {
    this.gameOver = false;
    this.snake = new Snake();
    this.context = context;
  }

  createInitialSnake(context) {
    this.snake.createSnake(this.context);
  }



  gameLoop(context) {
  this.context.clearRect(0, 0, 600, 600);
  this.snake.move(this.context);
  window.requestAnimationFrame(this.gameLoop);
  }
}

module.exports = Game;