let Block = require('./Block.js');

class Food extends Block {
  constructor(x, y, width = 15, height = 15) {
    super(width, height)
    this.x = (Math.round((Math.random() * 600) /15)*15);
    this.y = (Math.round((Math.random() * 600) /15) *15);
  }
  createFood(context) {
    this.drawBlock(context);
  }
}

module.exports = Food;



