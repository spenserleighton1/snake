const Block = require('./Block.js');

class Food extends Block {
  constructor(x, y, width = 15, height = 15) {
    super(width, height);
    this.x = (Math.floor(Math.random() * 40) * 15);
    this.y = (Math.floor(Math.random() * 40) * 15);
    this.color = 'pink';
  }
}

module.exports = Food;