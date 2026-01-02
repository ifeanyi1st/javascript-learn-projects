let a = 10; // i set tge value of a to be 10
console.log(a); //prints a 

//let b = prompt("your age"); // Takie inputs 

let my_name = " IfeanyiChuwu"
let my_age = 18;
let condition = true;

console.log("My name is " + my_name + " and my age is " + my_age + "i can code javascript " + condition);

// miles to kilometer conversion
let miles = 130;
let kilometer = miles * 1.60934;
console.log(kilometer);
// bmi converter
let height;
let weight;
let in_cm = height * 2.54;
let in_kilos = weight / 2.2046;
let bmi = in_kilos / ((in_cm * 100) ** 2);
console.log(bmi);

//ARRAYS 
const arr_list = ["Milk", "Okpa", "Bread", "Sugar"];
let arr_length = arr_list.length;
arr_list[0] = "Custard"
console.log(`length of array is ${arr_length} and this is the array ${arr_list}`);

// empty array 
const shop_list = [];
shop_list.push("Milk", "bread", "apples");
console.log(shop_list)
shop_list.splice(1, 1, "banana", "eggs");
console.log(shop_list)
shop_list.pop() // remobes last item 
shop_list.sort() // sorts the array
console.log(shop_list)
console.log(shop_list.findIndex(e => e == "Milk")); // index of milk
shop_list.splice(1, 0, "Carrots", "Lettuce");
const new_list = ["Juice", "pop"]
const comb_list = shop_list.concat(new_list); // joins two list together
console.log(comb_list.lastIndexOf("pop"));// gets last index of a value 

// multi dimensional array 
const array_1 = [1, 2, 3]
const md_array = [array_1, array_1, array_1];
console.log(md_array[1][1]);

//objects 
let my_car = {
  model: "c300",
  make: " mercedes",
  speed: "300 mp/h",
  owner: "princess",
  fast: true
}
console.log(my_car.speed);
let store_value = "color";
my_car[store_value] = "red";

store_value = "for_sale";
my_car[store_value] = true;
console.log(my_car);

// working on objects and array

let people = {
  friends: []
}
let var1 = {
  firstname: "daniel",
  lastname: "okafor",
  id: 15
}
let var2 = {
  firstname: "miracle",
  lastname: "ozioma",
  id: 56
}
let var3 = {
  firstname: "sochi",
  lastname: "miracle",
  id: 45
}
people.friends = [var1, var2, var3]; // you can use the .push() method too
console.log(people.friends);
people.friends[0].firstname = "okwor"
console.log(people.friends)

people.friends.push("come")
console.log(people.friends)
//chapter projects MANIPULATT8NG AN ARRAYS

const theList = ["Laurence", "Svekis", true, null, undefined, { test: "one", score: 55 }, ["one", "two"]]
// REMOVE THE FIRSTT ITEM 
theList.shift();
//REMNOVE TGE LAST ITEM
theList.pop();
theList[3] = "hello World ";
theList[2] = "Middle ";
let last = theList.length - 1;
theList[last] = "Last";
console.log(theList);

// exercise 4.
let b_value = false;

console.log(b_value);
if (!b_value) {
  console.log("hello i am happy for God's love in my life ");
}// This wont work because its false

//Tenary operators
let ID = true;
let acess = ID ? "allow" : "deny";
console.log(acess);


// EXERCISE 
let counter = 0;
let step = 10;
do {

  console.log(counter);
  counter += step;
} while (counter <= 100);


//For loops 
const myArr = [];

let isActive = true;

for (let i = 1; i <= 10; i++) {

  let tempV = i % 2 == 0 ? true : false;

  let tempO = { name: `Lesson ${i}`, status: tempV };

  myArr.push(tempO);
}
console.log(myArr);


let e_array = [];

for (let i = 0; i <= 10; i++) {
  //add a valur to tge arrray
  e_array.push(i);
}
console.log(e_array);
// iterate tgrough the array
for (let i = 0; i < e_array.length; i++) {
  console.log(e_array[i]);
}
for (let a of e_array) {
  console.log(a);
}

//looping through objects
let simple_object = {
  face: "blonde",
  size: 52,
  color: "black"
}
//using for in loop to get key values 
for (let y in simple_object) {
  console.log(y, simple_object[y]);
}
let array_n = [simple_object];

for (let h of array_n) {
  console.log(h)
}


let out = "";
let skip_n = 7;
for (let i = 0; i <= 10; i++) {
  // console.log(i);
  if (i === skip_n) {
    //break; wouod stop the loop
    continue;
  }
  out += i;
}
console.log(out);
