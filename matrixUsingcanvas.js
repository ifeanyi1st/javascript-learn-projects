let canvas = document.createElement("canvas")
let cv = canvas.getContext("2d")
canvas.height = 500
canvas.width = 500
document.body.appendChild(canvas)

let colval = []
for (let i = 0; i < canvas.width / 10; i++) {

  colval.push(0);

}
setInterval(matrix, 50)

function matrix() {
  cv.fillStyle = "rgba(0,0,0,0.5)"
  cv.fontColor = "green"
  cv.fillRect(0, 0, canvas.width, canvas.height)
  cv.font = "15px monospace"


  colval.map((y, index) => {
    let number = Math.random() > 0.5 ? "0" : "1";
    const x = index * 10;
    cv.fillText(number, x, y,)

    if (y > 100 + Math.random() * 300) {
      return 0
    }
    else {
      return y + 10
    }
  })
}
