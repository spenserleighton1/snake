const Snake = require('./Snake.js');


class Game {
  constructor() {
    this.width = 585;
    this.height = 585;
    this.gameOver = false;
  
  }

    gameOver() {
    console.log('game over')
      
      if(Snake.x > this.width || Snake.x < 0) {
        this.gameOver = true;
        console.log('game over')
      } else if (Snake.y > this.height || Snake.y < 0) {
        this.gameOver = true; 
        console.log('game over')
      };

    };
    
};
    






module.exports = Game;