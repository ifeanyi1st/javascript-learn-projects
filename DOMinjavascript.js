let selected = document.querySelector(".output");

let mainList = selected.querySelector("ul");

mainList.id = "mainList";

let tagName = document.querySelector("div");
console.log(tagName);

for (let i = 0; i < tagName.length; i++) {
  let individualId = tagName[i];
  // alternatecolor to be red or blue 
  individualId.color = red;
}
