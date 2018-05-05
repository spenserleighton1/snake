class Block {
  constructor(x, y, width = 15, height = 15, context) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height; 
  }
  
  drawBlock(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }
}  

module.exports = Block;