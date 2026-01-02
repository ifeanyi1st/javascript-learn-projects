let canvas = document.querySelector("canvas")

let ctx = canvas.getContext("2d")
canvas.width = 400
canvas.height = 900

let message = "Hello World"
ctx.fillStyle = "blue"
ctx.font = "20px Arial"
ctx.textAlign = "center"

ctx.fillText(message, 50, 50)

ctx.fillStyle = "red"

for (let i = 1; i < 11; i++) {
  ctx.fillText(`Counter : ${i}`, 60, 69 + (`${i}` * 30))
}
