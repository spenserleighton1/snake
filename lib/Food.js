let Block = require('./Block.js');

class Food extends Block {
  constructor(x, y, width = 15, height = 15) {
    super(width = 15, height = 15)
    this.x = Math.floor((Math.random() * 60) * 10);
    this.y = Math.floor((Math.random() * 60) * 10);
  }


}


module.exports = Food;



