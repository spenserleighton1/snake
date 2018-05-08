let Snake = require('./Snake.js');
let Block = require('./Block.js');
let Food = require('./Food.js');

class Game {
  constructor(context) {
    this.gameOver = false;
    this.score = 0;
    this.highScore = 0;
    this.snake = new Snake;
    this.food = new Food;
  }

  createInitialSnake(context, event) {
    this.snake.createSnake(context);
  }

  eat() {
    if (this.snake.head.x === this.food.x && this.snake.head.y === this.food.y) {
        this.score += 10;
        this.snake.grow()
        this.food.x = (Math.round((Math.random() * 600) /15)*15) -15;
        this.food.y = (Math.round((Math.random() * 600) /15)*15);
        console.log(this.food.x, this.food.y)
        return this.score;
    }
  }

  collisionBorder() {
    if (this.snake.head.x >= 601 ||
        this.snake.head.y >= 601) {
        this.gameOver = true;
    } else if (this.snake.head.x <= -1 ||
               this.snake.head.y <= -1) {
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
      this.death(this.context);
    }
  }

  death(context) {
    if (this.gameOver === true) {
    alert('Game Over')
    context.clearRect(0, 0, 600, 600);
    }
  }
}

module.exports = Game;