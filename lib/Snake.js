const Block = require('./Block.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class Snake {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.direction = 'left';
    // this.speed = 5;
    this.body = [];
  }

  drawSnake(context) {
    for(var i = 0; i < 5; i++){
      this.x +=1;
      this.body.push(context.fillRect(this.x, this.y, this.width, this.height));
      // context.fillRect(this.x, this.y, this.width, this.height)
    }
    console.log(this.body)
    return this;
  }

  move() {
    let tail = this.body.shift()
    let head = this.body[this.body.length -1]
    console.log(tail)
    // if(this.direction === 'left') {
    //   this.head =;
    //   this.body = this.x - 10;
    // } else if (this.direction === 'up') {
    //   this.head = this.y - 10;
    //   this.body = this.x;
    // } else if (this.direction === 'right') {
    //   this.head = this.y;
    //   this.body = this.x + 10;
    // } else if (this.direction === 'down') {
    //   this.head = this.y + 10;
    //   this.body = this.x;
    // }
  return this;
  }
}
module.exports = Snake;