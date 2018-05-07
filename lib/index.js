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
  // game.createInitialSnake(context);
  // game.gameLoop(context);
}

function reset() {
  window.location.reload();
}

function showScore() {
  score.innerText = game.score;
  highScore.innerText = game.highScore;
  }

function toStorage(yourScore) {
  localStorage.setItem('score', yourScore);
  } 

function fromStorage(score) {
  let high = localStorage.getItem('score')
  game.highScore = high;
  console.log(high1)
  return game.highScore;
}


game.createInitialSnake(context);
startGame.addEventListener('click', start);
resetGame.addEventListener('click', reset);
document.addEventListener('keydown', gameLoop(context));
document.addEventListener('keydown', identifyKey);

function identifyKey(event) {
  if (event.keyCode === 37) {
    game.snake.direction = 'left'
  } else if (event.keyCode === 38) {
    game.snake.direction = 'up'
  } else if (event.keyCode === 39) {
    game.snake.direction = 'right'
  } else if (event.keyCode === 40) {
    game.snake.direction = 'down'
  }
}


  function gameLoop(context) {
  window.setTimeout(()=> {
  context.clearRect(0, 0, 600, 600);
  game.food.drawBlock(context);
  game.snake.move(context);
  game.eat();
  showScore();
  toStorage(game.score)
  game.collisionBorder();
  game.collisionBody();
  requestAnimationFrame(()=> gameLoop(context));
}, 75)
  }
