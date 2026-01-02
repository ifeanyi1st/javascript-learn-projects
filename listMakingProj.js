let input = document.querySelector("input[type='text']")

let btn = document.querySelector(".button")
let div = document.querySelector(".output")

let list = []
let url = "list.json"
btn.addEventListener("click", addToList)

function addToList() {
  if (input.value.length > 3) {
    let obj = { name: input.value }
    list.push(obj);
    maker(obj)
    input.value = ""
    saveToStorage()
  }
}
function maker(t) {
  let ele = document.createElement("div")
  ele.innerText = t.name
  div.appendChild(ele)
}

function saveToStorage() {
  let tempString = JSON.stringify(list)
  localStorage.setItem("list", tempString)
  console.log("List saved")

}
document.addEventListener("DOMContentLoaded", () => {
  let check = localStorage.getItem("list")

  if (check) {
    list = JSON.parse(check)

    list.forEach(em => {
      maker(em)
    });

  }
  else {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        list = data

        list.forEach(em => {
          maker(em)

        })
        saveToStorage()
      })
  }
})
