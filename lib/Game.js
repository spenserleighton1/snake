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

  eat() {
    if (this.snake.head.x === this.food.x &&
        this.snake.head.y === this.food.y) {
      console.log("yay!")
    }
  }

  gameLoop(context) {
    // console.log(this.snake.head)
  window.setTimeout(()=> {
  this.context.clearRect(0, 0, 600, 600);
  this.food.drawBlock(this.context);
  this.snake.move(this.context);
  this.eat()
  requestAnimationFrame(this.gameLoop);
}, 100)
  }
}


module.exports = Game;