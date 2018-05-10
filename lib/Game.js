const Snake = require('./Snake.js');
const Block = require('./Block.js');
const Food = require('./Food.js');

class Game {
  constructor(context) {
    this.gameOver = false;
    this.score = 0;
    this.highScore = 0;
    this.snake = new Snake;
    this.food = new Food;
  }

  createInitialSnake(context, event) {
    this.snake.createSnake().drawSnake(context);
  }

  eat() {
    if (this.snake.head.x === this.food.x && this.snake.head.y === this.food.y) {
        this.score += 10;
        this.snake.grow();
        this.food.x = (Math.floor(Math.random() * 40)*15);
        this.food.y = (Math.floor(Math.random() * 40)*15);
        return this.score;
    }
  }

  collisionBorder(context) {
    if (this.snake.head.x + 15 > 600 ||
        this.snake.head.y + 15 > 600) {
        context.clearRect(0, 0, 600, 600);
        this.gameOver = true;
    } else if (this.snake.head.x < 0 ||
               this.snake.head.y < 0) {
               this.gameOver = true;
               context.clearRect(0, 0, 600, 600);
    }          
    this.death(context);
  }

  collisionBody(context) {
    for(let i = 0; i < this.snake.body.length - 2; i++) {
      if (this.snake.head.x === this.snake.body[i].x &&
      this.snake.head.y === this.snake.body[i].y) {
        this.gameOver = true;
      }
      this.death(context);
    }
  }

  death(context) {
    if (this.gameOver === true) {
    alert('Game Over');    
    snake.body = [];
    context.clearRect(0, 0, 600, 600);
    }
  }
}

module.exports = Game;