let Snake = require('./Snake.js');
let Block = require('./Block.js');
let Food = require('./Food.js');


class Game {
  constructor(context) {
    this.gameOver = false;
    this.snake = new Snake;
    this.food = new Food;
    this.context = context;
    this.gameLoop = this.gameLoop.bind(this)
  }

  createInitialSnake(context) {
    this.snake.createSnake(context);
  }

  createTarget(context) {
    this.food.drawBlock(context);
  }

  gameLoop(context) {
    window.setTimeout(()=> {
  this.context.clearRect(0, 0, 600, 600);
  this.snake.move(this.context);
  requestAnimationFrame(this.gameLoop);
}, 100)
  }
}


module.exports = Game;