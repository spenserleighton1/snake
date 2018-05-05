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

  death() {
    if (this.snake.head.x >= 600 ||
        this.snake.head.y >= 600) {
        this.gameOver = true;
        console.log(this.gameOver)
    } else if (this.snake.head.x <= 0 ||
               this.snake.head.y <= 0) {
               this.gameOver = true;
        console.log(this.gameOver)
    }
  }

  gameLoop(context) {
    // console.log(this.snake.head)
  window.setTimeout(()=> {
  this.context.clearRect(0, 0, 600, 600);
  this.food.drawBlock(this.context);
  this.snake.move(this.context);
  this.eat()
  this.death()
  requestAnimationFrame(this.gameLoop);
}, 100)
  }
}


module.exports = Game;