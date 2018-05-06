let Block = require('./Block.js');

class Snake {
  constructor(context) {
    this.createSnake = this.createSnake.bind(this);
    this.direction = 'right';
    this.body = [];
    this.head = null;
    }

  createSnake(context) {
    for (let x = 15; x < 80 ; x += 15){
    let block = new Block(x, 15);
    this.body.push(block);
    }
    this.body.forEach((block) => {
    block.drawBlock(context);
    })
  }

  grow(context) {
    let currentTail = this.body[0]
    let x;
    let y;

    switch(this.direction) {
      case 'left': 
      x = currentTail.x - 15;
      y = currentTail.y;
      break;
      case 'up': 
      x = currentTail.x;
      y = currentTail.y - 15;
      break;
      case 'right':
      x = currentTail.x + 15;
      y = currentTail.y;
      break;
      case 'down': 
      x = currentTail.x;
      y = currentTail.y + 15;
      break;
    }

    let nblock = new Block(x, y, 15, 15);
    return this.body.unshift(nblock);
    // console.log(this.body)
    // this.context.clearRect(0, 0, 600, 600);
    // this.body.forEach((block) => {
    // block.drawBlock(context);
    // })
  }    
  


  move(context) {
    let snakeBody = this.body;
    let tail = snakeBody.shift();
    this.head = snakeBody[snakeBody.length -1];
    
    switch(this.direction) {
      case 'left': 
      tail.x = this.head.x - 15;
      tail.y = this.head.y;
      break;

      case 'up': 
      tail.x = this.head.x;
      tail.y = this.head.y - 15;
      break;

      case 'right':
      tail.x = this.head.x + 15;
      tail.y = this.head.y;
      break;

      case 'down': 
      tail.x = this.head.x;
      tail.y = this.head.y + 15;
      break;
    };

    snakeBody.push(tail);
    this.body = snakeBody;
    this.body.forEach((block) => {
    block.drawBlock(context);
    });
  };

};

module.exports = Snake;