const gameBoard = document.querySelector(".game-card");
const canvas = document.createElement("canvas")
canvas.id = "block-1"
gameBoard.appendChild(canvas)
console.log(gameBoard);
console.log(canvas);
const ctx = canvas.getContext("2d")
ctx.fillStyle = "green"
// ctx.fillStyle =
ctx.fillRect(0, 0, 50, 50)
ctx.fillStyle = "green"
ctx.fillRect(50, 0, 50, 50)
ctx.fillStyle = "green"
ctx.fillRect(100, 0, 50, 50)
ctx.fillStyle = "green"
ctx.fillRect(100, 50, 50, 50)
