// class in javascript
class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

  }

  fullName() {
    return this.firstName + this.lastName;
  }


}
let ifeanyi = new Person("henry", "okwor");
let chinaza = new Person("emma ", "okwor");

console.log("Hello ", ifeanyi.firstName);
console.log("Hello too ", chinaza.firstName);

let result = ifeanyi.fullName();
console.log(result);

//Animal class

class AnimalProp {

  constructor(type, color, size, habitat) {
    this.type = type;
    this.color = color;
    this.size = size;
    this.habitat = habitat;
  }

}
let lion = new AnimalProp("mamal", "red", 6, "bush");
let fish = new AnimalProp("idk", "white", 2, "water");

// if yoi want to use this use normal function
AnimalProp.prototype.mature = () => {
  console.log("Animals are mature ")
};

console.log(lion);

// Employee traclking app
class Employee {
  constructor(firstName, lastName, yearsWorked) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearsWorked = yearsWorked;
  }

}
let cj = new Employee("emma", "okafor", 67);
let mira = new Employee("mira", "ebube", 12);

let array = [];
array.push(cj, mira);

Employee.prototype.retD = function() {
  return `${this.firstName} ${this.lastName} ${this.yearsWorked}`;

}
for (let i of array) {

  console.log(i.retD());

}

// menu calculator 
class Calculator {

  #price1;
  #price2;

  constructor(pricea, priceb) {
    this.#price1 = pricea;
    this.#price2 = priceb;
  }

  calculateP() {
    return this.#price2 + this.#price1;
  }

  get output() {
    return this.calculateP()
  }
}
let b = new Calculator(6, 7);
console.log(b.output);

// Lets try inheritance 
// by inheriting from this class 

class SecondClass extends Employee {

  // Lets see how inheritance works 

  constructor(firstName, lastName, yearsWorked, time) {
    // we use super to bring it here
    super(firstName, lastName, yearsWorked);
    this.time = time;
  }


}
let secP = new SecondClass("rejoice", "onyebu", 56, "10 am");
console.log(secP.retD());
