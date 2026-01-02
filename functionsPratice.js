function addSum(a, b) {
  return a + b;

}
let var1 = 6;
let var2 = 16;

console.log(addSum(var1, var2));
console.log(addSum(5, 5, 6)); // more variables than it has 

let descWords = ["hello", "i", "am", "ifeanyi", "okwor"];

function askPrompt() {
  let input = prompt("enter");
  let randomValue = Math.floor(Math.random() * 5);
  let selected = descWords[randomValue];
  console.log(input);
  console.log(selected);
}

//askPrompt();

// BASIC CALCULATOR 

function basicCalculator(a, b, c,) {

  let result;
  switch (c) {
    case "+":
      // result = a + b;
      return a + b;

    case "-":
      // result = a - b;
      return a - b;

    default:
      result = a + b;
  }
  //console.log(result);
}

basicCalculator(5, 6, "+");

//Another one 

let arrayForStorage = [];
for (let n = 0; n < 10; n++) {

  //create two variables 
  let firstV = n * 5;
  let secondV = n * n;

  function testWork(fV, sV) {


    return fV + sV;
  }
  let final = testWork(firstV, secondV);

  arrayForStorage.push(final);
  // arrayForStorage.push(basicCalculator(6, 7, "+"));
}
console.table(arrayForStorage);

//IIFE  
let stringV = "10000";

(function() {
  let stringV = "5000";
  console.log(stringV);
})();

let newV = (function() {
  let stringV = "12000";
  return stringV;
});
console.log(newV());

// Anonymous function
// assign it to a variable  

let assign = function(a) {
  let stringV = a;
  console.log(stringV);

}
assign("hello");

// calculating the factorial with Recursion
function funCheck(a) {
  if (a === 0) {
    return 1;
  }
  else {

    return a * funCheck(a - 1);
  }
}
console.log(funCheck(8));

/*for (let n = 0; n < 8; n++) {
  if (n % 2 == 0) {
    console.log(" # # # #")
  }
  else {
    console.log("# # # #");
  }
}*/

// Countdown loop
let startV = 10;
function countDown(startV) {

  console.log(startV);

  if (startV < 1) {
    return;
  }
  else {
    startV--;
    countDown(startV);
  }

}
countDown(5);

// Exercise 6.8
let oluomachi = function(a) {
  console.log(a)
}
oluomachi("ebere ");

function eaT() {
  console.log("eating ");
}

// CHAPTER PROJECTS 6
// recursive function that counts to 10

function countToN(start) {

  console.log(start);

  if (start < 10) {

    countToN(start + 1);

  }

}
countToN(1);

//set time out order 
let funcT = () => { console.log("one") }
let secF = () => { console.log("two ") }

let thirdF = () => {
  console.log("three");
  funcT();
  secF();
}

let fourF = () => {
  console.log("fourth");

  setTimeout(funcT, 0);
  thirdF();
}
fourF();

