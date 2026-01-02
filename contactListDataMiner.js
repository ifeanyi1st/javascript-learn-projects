/*<!doctype html>
<html>
<head>
    <title>Project 2: Data Miner</title>
    <style>
        body { font-family: sans-serif; padding: 20px; }
        textarea { width: 100%; height: 100px; margin-bottom: 10px; }
        .card { 
            border: 1px solid #ccc; 
            padding: 10px; 
            margin-bottom: 5px; 
            background: #f9f9f9; 
            border-left: 5px solid #007bff;
        }
    </style>
</head>
<body>

    <h3>Raw Data Input</h3>
    <textarea id="rawData">
        Team meeting list:
        John needs to be emailed at john.doe@example.com immediately.
        Don't forget sarah@business.org for the files.
        Also mike_test@agency.net is coming.
        Send the invite to admin@website.com as well.
    </textarea>
    
    <button id="btn">Process Contacts</button>
    
    <h3>Contact Cards Found: <span id="count">0</span></h3>
    <div id="output"></div>

    <script>
        // YOUR CODE GOES HERE
    </script>
</body>
</html>
*/

let rawData = document.getElementById("rawData")
let btn = document.getElementById("btn")

let count = document.getElementById("count")
let output = document.getElementById("output")

let obj = {}
let countT = 0

let regex = /([a-z0-9]+@[a-z]+\.[a-z]{3,4})/gi

btn.addEventListener("click", function() {

  let value = rawData.value


  let matchArray = value.match(regex)
  if (matchArray) {
    matchArray.forEach(element => {

      let emailPart = element.split("@");
      let name = emailPart[0]



      let newDiv = document.createElement("div")

      newDiv.classList.add("card")

      newDiv.innerHTML = ` <b>Name:</b>${name}
<b>Email: ${element}</b>`

      output.appendChild(newDiv)
      countT++



    });
  }
  else {
    console.log("Go find email")
  }

  obj.countT = countT

  count.textContent = obj.countT
})
