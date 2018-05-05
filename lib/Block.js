class Block {
  constructor(x, y, width = 15, height = 15) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height; 
    this.color = 'black'
  }
  
  drawBlock(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }
}  

module.exports = Block;