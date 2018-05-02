class Snake {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  move() {
    this.x;
    return this;
  }

  moveRight() {
    if (this.x <= 590) {
    this.x += 1;
    this.moveRight(); 
    console.log(this.x);
    return this;
    }
  }

  moveLeft() {
    this.x--;
    return this;
  }

  moveDown() {
    this.y++;
    return this;
  }

  moveUp() {
    this.y--;
    return this;
  }
}
module.exports = Snake;