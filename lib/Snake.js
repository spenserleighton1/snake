let Block = require('./Block.js');

class Snake {
  constructor(context) {
    this.createSnake = this.createSnake.bind(this);
    this.direction = 'right';
    this.body = [];
    // this.head = null;
  }

  createSnake(context) {
    for (let x = 10; x < 70; x += 15){
      var block = new Block(x, 10);
      this.body.push(block);
    }
    this.body.forEach((block) => {
    block.drawBlock(context);
    })
  }

  move(context) {
    let snakeBody = this.body
    let tail = snakeBody.shift();
    let head = snakeBody[snakeBody.length -1];
    
    switch(this.direction) {
      case 'left': 
      tail.x = head.x - 15;
      tail.y = head.y;
      break;
      case 'up': 
      tail.x = head.x;
      tail.y = head.y - 15;
      break;
      case 'right':
      tail.x = head.x + 15;
      tail.y = head.y;
      break;
      case 'down': 
      tail.x = head.x;
      tail.y = head.y + 15;
      break;
    }
    snakeBody.push(tail);
    this.body = snakeBody;
    this.body.forEach((block) => {
    block.drawBlock(context);
    })
  }
}

module.exports = Snake;