let Block = require('./Block.js');

class Snake {
  constructor(context) {
    this.createSnake = this.createSnake.bind(this);
    this.direction = 'right';
    this.body = [];
    this.head = null;
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
    let tail = this.body.shift();
    this.head = this.body[this.body.length -1];
      console.log('hi');
    
    switch(this.direction) {
      case 'left': 
      tail.x = this.x - 15;
      tail.y = this.y;
      break;
      case 'up': 
      tail.x = this.x;
      tail.y = this.y - 15;
      // console.log('up');
      break;
      case 'right':
      tail.x = this.x + 15;
      tail.y = this.y;
      // console.log('right');
      break;
      case 'down': 
      tail.x = this.x;
      tail.y = this.y + 15;
      // console.log('down');
      break;
    }
    this.body.push(tail);
    this.body.forEach((block) => {
    block.drawBlock(context);
    })
  }
}

module.exports = Snake;