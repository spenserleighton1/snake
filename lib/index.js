var isGameOver = false;
var Block = require('./Block.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var larry = new Block(50, 50, 10, 10);
var blocks = [larry];

window.addEventListener('keydown', function(event) {
  event.preventDefault();
  if (event.which === 37) {
    block.left().draw(context);

  } else if (event.which === 38){
    

  } else if (event.which === 39){
    block.right().draw(context);
    
  } else if (event.which === 40){
    console.log('down');
  }
});

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);