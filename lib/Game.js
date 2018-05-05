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

  createInitialSnake(context, event) {
    this.snake.createSnake(context);
  }

  eat() {
    if (this.snake.head.x === this.food.x &&
        this.snake.head.y === this.food.y) {
    }
  }

  collisionBorder() {
    if (this.snake.head.x >= 600 ||
        this.snake.head.y >= 600) {
        this.gameOver = true;
        console.log(this.gameOver)
    } else if (this.snake.head.x <= 0 ||
               this.snake.head.y <= 0) {
               this.gameOver = true;
        console.log(this.gameOver)
    }
    this.death();
  }

  collisionBody() {
    for(let i = 0; i < this.snake.body.length - 2; i++) {
      if (this.snake.head.x === this.snake.body[i].x &&
      this.snake.head.y === this.snake.body[i].y) {
        this.gameOver = true;
      }
      this.death();
    }
  }

  death() {
    if (this.gameOver === true) {
    this.context.clearRect(0, 0, 600, 600);
    }
  }

  gameLoop(context) {
    // console.log(this.snake.head)
  window.setTimeout(()=> {
  this.context.clearRect(0, 0, 600, 600);
  this.food.drawBlock(this.context);
  this.snake.move(this.context);
  this.eat();
  this.collisionBorder();
  this.collisionBody();
  requestAnimationFrame(this.gameLoop);
}, 100)
  }
}


module.exports = Game;