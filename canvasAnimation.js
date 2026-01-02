let cv = document.createElement("canvas")
document.body.appendChild(cv)
cv.style.border = "1px solid black"

let ctx = cv.getContext("2d")

cv.width = 500
cv.height = 500

let obj = {
  xpos: (cv.width / 2),
  ypos: (cv.height / 2),
  size: 20,
  xspeed: 1,
  yspeed: 1
}

function drawBall() {

  ctx.beginPath()
  ctx.arc(obj.xpos, obj.ypos, obj.size, 0, 2 * Math.PI)
  ctx.fillStyle = "red"
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

}
setInterval(move, 10)
function move() {
  ctx.clearRect(0, 0, cv.width, cv.height)
  drawBall()
  if (obj.xpos + obj.size > cv.width || obj.xpos - obj.size < 0) {
    obj.xspeed *= -1

  }
  if (obj.ypos + obj.size > cv.height || obj.ypos - obj.size < 0) {
    obj.yspeed *= -1

  }

  obj.xpos = obj.xpos + obj.xspeed
  obj.ypos = obj.ypos + obj.yspeed
}
