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
  console.log(game.highScore)
  highScore.innerText = game.highScore;
}


startGame.addEventListener('click', start);
resetGame.addEventListener('click', reset);
document.addEventListener('keydown', identifyKey);

function identifyKey(event) {
      switch(event.keyCode) {
      case 37: if (game.snake.direction != 'right') {
      game.snake.direction = 'left'        
      }
      break;
      case 38: if (game.snake.direction != 'down') {
      game.snake.direction = 'up'
      }
      break;
      case 39: if (game.snake.direction != 'left') {
      game.snake.direction = 'right'
      }
      break;
      case 40: if (game.snake.direction != 'up') {
      game.snake.direction = 'down'
      }
      break;
    }
}






  function gameLoop(context) {
    if (game.gameOver === false){

  window.setTimeout(()=> {
  context.clearRect(0, 0, 600, 600);
  game.food.drawBlock(context);
  game.snake.move(context);
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
