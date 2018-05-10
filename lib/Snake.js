let Block = require('./Block.js');
// require('locus');

class Snake {
  constructor(context) {
    this.createSnake = this.createSnake.bind(this);
    this.direction = 'right';
    this.body = [];
    this.head = null;
  }

  createSnake() {
    for (let x = 15; x < 76 ; x += 15){
    let block = new Block(x, 15);
    this.body.push(block);
    }
    return this;
  }

  drawSnake(context) {
    this.body.forEach((block) => {
      block.drawBlock(context);
    })
  }

  direct(direct) {
    if (direct != this.direction){
    this.direction = direct;
    return this;      
    }
  }
  
  offSetXYgrow(xOffSet, yOffSet, currentTail) {
    currentTail.x += xOffSet;
    currentTail.y += yOffSet;
    return this;
  }

  grow(direction) {
    let currentTail = this.body[0];

    switch(this.direction) {
      case 'left': 
      this.offSetXYgrow(-15, 0, currentTail);
      break;
      case 'up': 
      this.offSetXYgrow(0, -15, currentTail);
      break;
      case 'right':
      this.offSetXYgrow(+15, 0, currentTail);
      break;
      case 'down': 
      this.offSetXYgrow(0, +15, currentTail);
      break;
    }
    let nblock = new Block(currentTail.x, currentTail.y, 15, 15);
    this.body.unshift(nblock);
    return this;
  }    
  

  offSetXYhead(xOffSet, yOffSet, currentTail, head) {
    currentTail.x = head.x += xOffSet;
    currentTail.y = head.y += yOffSet;
    return this;
  }

  move() {
    var tail = this.body.shift();
    this.head = this.body[this.body.length -1];
    console.log(this.head)

    switch(this.direction) {
      case 'left': 
      this.offSetXYhead(-15, 0, tail, this.head);
      break;
      case 'up': 
      this.offSetXYhead(0, -15, tail, this.head);
      break;
      case 'right':
      this.offSetXYhead(+15, 0, tail, this.head);
      break;
      case 'down': 
      this.offSetXYhead(0, +15, tail, this.head);
      break;
    }
    this.body.push(tail);
    return this;
  }
}

module.exports = Snake;