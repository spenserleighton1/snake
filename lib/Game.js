let Snake = require('./Snake.js');
let Block = require('./Block.js');
let Food = require('./Food.js');

class Game {
  constructor(context) {
    this.gameOver = false;
    this.lives = 1;
    this.score = 0;
    this.snake = new Snake;
    this.food = new Food;
    this.context = context;
    this.gameLoop = this.gameLoop.bind(this);
  }

  createInitialSnake(context, event) {
    this.snake.createSnake(context);
  }

  eat() {
    if (this.snake.head.x === this.food.x &&
        this.snake.head.y === this.food.y) {
        this.score += 10;
        this.snake.grow()
        this.food.x = (Math.round((Math.random() * 600) /15)*15);
        this.food.y = (Math.round((Math.random() * 600) /15) *15);
        return this.score;
        console.log(this.score);
    }
  }

  showScore() {
    score.innerText = this.score;
    lives.innerText = this.lives;
  }

  collisionBorder() {
    if (this.snake.head.x >= 600 ||
        this.snake.head.y >= 600) {
        this.gameOver = true;
    } else if (this.snake.head.x <= 0 ||
               this.snake.head.y <= 0) {
               this.gameOver = true;
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

  death(context) {
    if (this.gameOver === true) {
    this.context.clearRect(0, 0, 600, 600);
    this.lives--;
    this.snake.body = [];
    }
  }

  gameLoop(context) {
  window.setTimeout(()=> {
  this.context.clearRect(0, 0, 600, 600);
  this.food.drawBlock(this.context);
  this.snake.move(this.context);
  this.eat();
  this.collisionBorder();
  this.collisionBody();
  this.showScore();
  requestAnimationFrame(this.gameLoop);
}, 75)
  }
}

module.exports = Game;