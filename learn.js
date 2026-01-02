console.log("The prof is funny")

let a = 16;
let u = String(a);// Type conversion

function setT() {

  for (let i = 0; i < 6; i++) {
    // setTimeout sets it to delay before execution
    setTimeout(() => { console.log(i); }, 200 * i);

  }
}


function Sellect() {
  let test = 6;
  switch (test) {
    case 1:
      console.log("hello");
      break;
    default:
      console.log("no match");
  }

}
const rel = {

  name: "ifeanyichukwu",
  make: () => {
    console.log(this.name);
  }

}
//TODO:
function createCounter() {
  let count = 0;
  return {
    increment: () => {
      count++
    },
    getCount: () => {
      return count;
    }
  }
}
let obj = createCounter();

let ab = ["hello", "come ", "here", "eat"];
/*ab.map(function() {
  no space
})*/

//check if an object is iteratable
//console.log(typeof rel?.[Symbol.iterator] === "function");

let checkN = "Make me smile today";
const rep = checkN.replace(/[a-z]/g, 6); //replace mthod to replace some string 

console.log(rep);

// working with string 

let workWith = "i am very happy God is with me ";
console.log("The length of workWith is :", workWith.length); // return the length of tge string

// here i used the .slice method which you can also use .substring();
// to return the ascii number use charCodeAt method ;
let chard = workWith.slice(0, 15);
console.log(chard);



