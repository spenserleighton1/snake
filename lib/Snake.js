var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

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

  newSnake() {
    this.x;
    return this;
  }

  moveRight() {
    this.x += 1;
    return this;
  }

  moveLeft() {
    this.x-=1;
    return this;
  }

  moveDown() {
    this.y+=1;
    // this.x-=1;

    return this;
  }

  moveUp() {
    this.y-=1;
    return this;
  }

}
module.exports = Snake;