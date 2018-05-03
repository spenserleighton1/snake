class Block {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

  }

  drawBlock() {
    context.fillRect(this.x, this.y, this.width, this.height)
  }

}  


module.exports = Block