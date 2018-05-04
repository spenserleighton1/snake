const Block = require('./Block.js');

class Snake {
  constructor(context) {
    this.direction = 'left';
    this.body = [];
    this.context = context;
    // this.addToSnake = new Block(10, 10, 15, 15);

  }

  createSnake() {
    console.log('plz wrk')
    for (let x = 10; x < 70; x +=15){
      let block = new Block(x, 10);
      this.body.push(block);
    }
    this.body.forEach((block) => {
      block.drawBlock(this.context)
    })
  }

  // move() {
  //   let tail = this.body.shift()
  //   let head = this.body[this.body.length -1]
    
  //   if(this.direction === 'left') {
  //     this.head =;
  //     this.body = this.x - 10;
  //   } else if (this.direction === 'up') {
  //     this.head = this.y - 10;
  //     this.body = this.x;
  //   } else if (this.direction === 'right') {
  //     this.head = this.y;
  //     this.body = this.x + 10;
  //   } else if (this.direction === 'down') {
  //     this.head = this.y + 10;
  //     this.body = this.x;
  //   }
  // return this;
  // }
}

module.exports = Snake;