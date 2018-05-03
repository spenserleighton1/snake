/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = __webpack_require__(/*! ./Snake.js */ "./lib/Snake.js");
var snake = new Snake();

var Game = function Game() {
  _classCallCheck(this, Game);

  this.width = 550;
  this.height = 550;
};

;

module.exports = Game;

/***/ }),

/***/ "./lib/Snake.js":
/*!**********************!*\
  !*** ./lib/Snake.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = __webpack_require__(/*! ./Game.js */ "./lib/Game.js");
var game = new Game();

var Snake = function () {
  function Snake(x, y, width, height) {
    _classCallCheck(this, Snake);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  _createClass(Snake, [{
    key: 'draw',
    value: function draw(context) {
      context.fillRect(this.x, this.y, this.width, this.height);
      return this;
    }
  }, {
    key: 'move',
    value: function move() {
      this.x;
      return this;
    }
  }, {
    key: 'moveRight',
    value: function moveRight() {
      if (this.x <= game.width) {
        this.x += 15;
        // this.moveRight(); 
        console.log(this.x);
        return this;
      }
    }
  }, {
    key: 'moveLeft',
    value: function moveLeft() {
      this.x -= 10;
      return this;
    }
  }, {
    key: 'moveDown',
    value: function moveDown() {
      this.y += 10;
      return this;
    }
  }, {
    key: 'moveUp',
    value: function moveUp() {
      this.y -= 10;
      return this;
    }
  }]);

  return Snake;
}();

module.exports = Snake;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game.js */ "./lib/Game.js");
var Snake = __webpack_require__(/*! ./Snake.js */ "./lib/Snake.js");
var game = new Game();
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var snake = new Snake(50, 50, 15, 15);

window.addEventListener('keydown', function (event) {
  event.preventDefault();
  if (event.which === 37) {
    snake.moveLeft();
    return this;
  } else if (event.which === 38) {
    snake.moveUp();
    return this;
  } else if (event.which === 39) {
    snake.moveRight();
    return this;
  } else if (event.which === 40) {
    snake.moveDown();
    return this;
  }
});

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  snake.move().draw(context);
  requestAnimationFrame(gameLoop);
};

window.requestAnimationFrame(gameLoop);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1NuYWtlLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJTbmFrZSIsInJlcXVpcmUiLCJzbmFrZSIsIkdhbWUiLCJ3aWR0aCIsImhlaWdodCIsIm1vZHVsZSIsImV4cG9ydHMiLCJnYW1lIiwieCIsInkiLCJjb250ZXh0IiwiZmlsbFJlY3QiLCJjb25zb2xlIiwibG9nIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndoaWNoIiwibW92ZUxlZnQiLCJtb3ZlVXAiLCJtb3ZlUmlnaHQiLCJtb3ZlRG93biIsImdhbWVMb29wIiwiY2xlYXJSZWN0IiwibW92ZSIsImRyYXciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQSxJQUFNQSxRQUFRLG1CQUFBQyxDQUFRLGtDQUFSLENBQWQ7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QUFsQjtBQUNBcUIsd0JBQXNCSixRQUF0QjtBQUNEOztBQUVEVCxPQUFPYSxxQkFBUCxDQUE2QkosUUFBN0IsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IFNuYWtlID0gcmVxdWlyZSgnLi9TbmFrZS5qcycpO1xuY29uc3Qgc25ha2UgPSBuZXcgU25ha2U7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLndpZHRoID0gNTUwO1xuICAgIHRoaXMuaGVpZ2h0ID0gNTUwO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUuanMnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZTtcblxuY2xhc3MgU25ha2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGNvbnRleHQuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy54O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCkge1xuICAgIGlmICh0aGlzLnggPD0gZ2FtZS53aWR0aCkge1xuICAgIHRoaXMueCArPSAxNTtcbiAgICAvLyB0aGlzLm1vdmVSaWdodCgpOyBcbiAgICBjb25zb2xlLmxvZyh0aGlzLngpO1xuICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVMZWZ0KCkge1xuICAgIHRoaXMueCAtPSAxMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1vdmVEb3duKCkge1xuICAgIHRoaXMueSArPSAxMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1vdmVVcCgpIHtcbiAgICB0aGlzLnkgLT0xMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBTbmFrZTsiLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJyk7XG5jb25zdCBTbmFrZSA9IHJlcXVpcmUoJy4vU25ha2UuanMnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZTtcbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xudmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbnZhciBzbmFrZSA9IG5ldyBTbmFrZSg1MCwgNTAsIDE1LCAxNSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKGV2ZW50LndoaWNoID09PSAzNykge1xuICAgIHNuYWtlLm1vdmVMZWZ0KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gZWxzZSBpZiAoZXZlbnQud2hpY2ggPT09IDM4KXtcbiAgICBzbmFrZS5tb3ZlVXAoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSBlbHNlIGlmIChldmVudC53aGljaCA9PT0gMzkpe1xuICAgIHNuYWtlLm1vdmVSaWdodCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9IGVsc2UgaWYgKGV2ZW50LndoaWNoID09PSA0MCl7XG4gICAgc25ha2UubW92ZURvd24oKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufSk7XG5cblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIHNuYWtlLm1vdmUoKS5kcmF3KGNvbnRleHQpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufTtcblxud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4iXSwic291cmNlUm9vdCI6IiJ9