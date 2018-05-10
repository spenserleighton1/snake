let Game = require('./Game.js');
let Snake = require('./Snake.js');
let Food = require('./Food.js');
let Block = require('./Block.js');
let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let game = new Game(context);
let startGame = document.getElementById('start-btn');
let resetGame = document.getElementById('reset-btn');
let lives = document.getElementById('lives');
let score = document.getElementById('score');
let highScore = document.getElementById('high-score');

function start() {
  game.createInitialSnake(context);
  gameLoop(context);
}

function reset() {
  window.location.reload();
}

function showScore() {
  fromStorage();
  score.innerText = game.score;
}

function toStorage(yourScore) {
  if (game.score > game.highScore) {
  localStorage.setItem('hscore', yourScore);
  }
} 

function fromStorage() {
  game.highScore = localStorage.getItem('hscore')
  highScore.innerText = game.highScore;
}

startGame.addEventListener('click', start);
resetGame.addEventListener('click', reset);
document.addEventListener('keydown', evalInput);

const keyboard = {
  37: () => game.snake.direct('left'), 
  38: () => game.snake.direct('up'),
  39: () => game.snake.direct('right'),
  40: () => game.snake.direct('down'),
};

function evalInput(event) {
  if (keyboard[event.keyCode]) {
      keyboard[event.keyCode]()
  }
}



function gameLoop(context) {
  if (game.gameOver === false){
    window.setTimeout(()=> {
      context.clearRect(0, 0, 600, 600);
      game.food.drawBlock(context);
      game.snake.move().drawSnake(context);
      game.eat();
      showScore();
      toStorage(game.score)
      game.collisionBorder(context);
      game.collisionBody(context);
      requestAnimationFrame(()=> gameLoop(context));
    }, 75)
  } else {
    context.clearRect(0, 0, 600, 600);
  }
} 