//Lets demonstrate how arguments work in function

let lastOne;
function noArg() {
  for (let i = 0; i < arguments.length; i++) {



    lastOne = arguments[i]



  }
  return lastOne
}
let a = noArg("hello", "how are you", "gimme money")

console.log(a)

/* This shows that all functions in javascript has built in arguments array*/
