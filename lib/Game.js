let Snake = require('./Snake.js');
let Block = require('./Block.js');
let Food = require('./Food.js');

class Game {
  constructor(context) {
    this.gameOver = false;
    this.score = 0;
    this.highScore = 1000000;
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
        this.toStorage(this.score)
        this.snake.grow()
        this.food.x = (Math.round((Math.random() * 600) /15)*15);
        this.food.y = (Math.round((Math.random() * 600) /15) *15);
        return this.score;
        console.log(this.score);
    }
  }

  showScore() {
    score.innerText = this.score;
    high.innerText = this.highScore;
  }


  toStorage(yourScore) {
    localStorage.setItem('score', yourScore);
  }

  fromStorage(score) {
    let high1 = localStorage.getItem('score')
    this.highScore = high1;
    console.log(high1)
    return this.highScore;
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
    // this.snake.body = [];
    }
  }

  gameLoop(context) {
  window.setTimeout(()=> {
  this.context.clearRect(0, 0, 600, 600);
  this.food.drawBlock(this.context);
  this.snake.move(this.context);
  this.eat();
  this.showScore();
  this.collisionBorder();
  this.collisionBody();
  requestAnimationFrame(this.gameLoop);
}, 75)
  }
}

module.exports = Game;