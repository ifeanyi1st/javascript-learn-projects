let canvas = document.querySelector("canvas")

let ctx = canvas.getContext("2d")
let save = document.querySelector(".save")
let clear = document.querySelector(".clear")

let colorInput = document.querySelector("input[name='color']")

let rangeInput = document.querySelector("input[name='range']")

let output = document.querySelector(".output")
let penLoc = { x: 0, y: 0, lastX: 0, lastY: 0 };
let isDrawing = false
canvas.addEventListener("mousemove", (e) => {
  penLoc.lastX = penLoc.x
  penLoc.lastY = penLoc.y
  penLoc.x = e.offsetX
  penLoc.y = e.offsetY
  draw()
})

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true
  penLoc.lastX = e.offsetX
  penLoc.lastY = e.offsetY
})
canvas.addEventListener("mouseup", () => {
  isDrawing = false
})



function draw() {

  if (!isDrawing) {
    return
  }
  ctx.beginPath()
  ctx.moveTo(penLoc.lastX, penLoc.lastY)
  ctx.lineTo(penLoc.x, penLoc.y)
  ctx.strokeStyle = colorInput.value
  ctx.lineWidth = rangeInput.value
  ctx.stroke()
  ctx.closePath()


}

save.addEventListener("click", () => {

  let dataUrl = canvas.toDataURL()
  console.log(dataUrl)
  let newImg = document.createElement("img")
  newImg.src = dataUrl
  output.appendChild(newImg)

  let a = document.createElement("a")
  a.href = dataUrl
  a.download = "ifeanyi.jpeg"
  a.click()
  a.remove()


})

clear.addEventListener("click", () => {
  if (confirm("Are you sure?")) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

})




