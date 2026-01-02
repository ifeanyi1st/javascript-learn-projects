//decode urls 

let d_c = console.log(decodeURIComponent("How's%20it%20going%3F"));

// encode urls
let e_url = encodeURIComponent("How are you bro");
console.log(e_url);

//remove duplicate from this 

let array = ["Laurebce", "James ", "lebron", "ifeanyi", "onyeka", "ifeanyi"]

let refined = array.filter((a, b) => {
  return array.indexOf(a) == b
})

console.log(refined)

// array map 
let array_of_number = [5, 6, 7, 8, 9, 4, 3, 2, , 4, 5];

let up = array_of_number.map(function(a) {
  return a * 2
})
console.log(up);

let arrw_v = array_of_number.map((x) => x * 2);
console.log(arrw_v);


// Transform text tso each wword start wicapital letter
let testString = "tTUT Jbhhh gtUgY ugYh BhHh UhbGu";

function transformText(x) {
  let trans = x.toLowerCase();

  let emptA = [];
  // convert to array by ,
  let toWord = trans.split(" ");

  toWord.forEach(element => {
    let first = element.slice(0, 1).toUpperCase();

    let remaining = element.slice(1);
    let sum = first.concat(remaining);

    emptA.push(sum);

  });
  let word = emptA.join(" ");
  console.log(word);
}

transformText(testString);

// Using replace to replace some text

let textR = "i love javascript";
textR.toLowerCase();
let arrayOfV = ["a", "e", "i", "o", "u"];

arrayOfV.forEach((x, index) => {
  textR = textR.replaceAll(x, index);

});
console.log(textR);

// using maths objrct in js experiment 

console.log(Math.PI); // π
console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.round(5.7));

// output a random value
console.log(Math.random());

console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10) + 1);// random number from 1 to 10
console.log(Math.floor(Math.random() * 100) + 1);//random n from 1 to 100

// working with dates 
//
let dateO = new Date();
console.log(dateO);//log thr date 

let arrayOfMonths = ["Jan", "feb", "marc", "april", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"];

let todayDay = dateO.getDate();
let year = dateO.getFullYear();
let month = dateO.getMonth();

let date;
console.log(month);
date = arrayOfMonths[month];
console.log(date);


/// CHAPTER PROJECTS 
//
//Word Scrambller

let stringOfWords;
function scrambleWord(stringOfWords) {



  let tempStore = "";

  for (let i = 0; i < stringOfWords.length; i++) {

    let selectWord = (Math.floor(Math.random() * stringOfWords.length))
    let chosenWord = stringOfWords[selectWord];
    tempStore += chosenWord;
    console.log(tempStore);

    stringOfWords = stringOfWords.substring(0, selectWord) + stringOfWords.substring(selectWord + 1);

    console.log(stringOfWords);

  }
  console.log(tempStore);
}
scrambleWord("heii");


// countdown to the time of event 


function countdown() {

  let countDownDate = new Date("2025-11-25");


  let normalDate = new Date();

  console.log(countDownDate);

  let totalTimeToEndDate = countDownDate - normalDate;
  console.log(totalTimeToEndDate);

  let seconds = totalTimeToEndDate / 1000;
  let mins = (seconds / 60) % 60;
  let hours = mins / 60
  let days = hours / 24;

  console.log(mins);

}
//setInterval(countdown, 1000);

countdown();
