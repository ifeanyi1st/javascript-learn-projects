window.onload = () => {
  let div = document.createElement("canvas")

  div.id = "ifeanyi"
  document.body.appendChild(div)
  let ele = document.getElementById("ifeanyi")

  let ctx = ele.getContext("2d")
  div.width = 500
  div.height = 1000


  ctx.beginPath()
  ctx.arc(110, 100, 60, 0, 2 * Math.PI)
  ctx.fillStyle = "red"
  ctx.fill()
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(110, 10)
  ctx.lineTo(50, 50)
  ctx.lineTo(170, 50)
  ctx.fillStyle = "blue"
  ctx.fill()


  ctx.beginPath()
  ctx.arc(70, 90, 10, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fillStyle = "black"
  ctx.fill()

  ctx.beginPath()
  ctx.arc(150, 90, 10, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fillStyle = "black"
  ctx.fill()

  ctx.beginPath()
  ctx.arc(110, 120, 30, 0, Math.PI)
  ctx.stroke()
  ctx.fillStyle = "black"
  ctx.fill()

  //nose
  ctx.beginPath()
  ctx.moveTo(112, 97)
  ctx.lineTo(112, 110)
  ctx.stroke()
  //body
  ctx.beginPath()
  ctx.moveTo(112, 160)
  ctx.lineTo(112, 400)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(50, 250)
  ctx.lineTo(180, 250)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(112, 400)
  ctx.lineTo(50, 600)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(112, 400)
  ctx.lineTo(180, 600)
  ctx.stroke()
}
