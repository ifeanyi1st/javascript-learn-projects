let input = document.querySelector("input[type='file']")

let output = document.querySelector(".output")

input.addEventListener("change", reader)

function reader(event) {

  let element = event.target.files


  for (let i = 0; i < element.length; i++) {

    let file = element[i]
    let newElem = document.createElement("img")
    newElem.classList.add("thumb")
    output.appendChild(newElem)

    let newFileReader = new FileReader()

    newFileReader.addEventListener("load", function(e) {
      ((nfr) => {
        nfr.src = e.target.result

      })(newElem)

    });

    newFileReader.readAsDataURL(file)
  }
}


