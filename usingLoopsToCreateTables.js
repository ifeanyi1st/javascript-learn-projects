let myTable = [];
let nOfRow = 5;
let nOColumn = 5;

let counter = 0;

for (let i = 0; i <= nOfRow; i++) {

  let tempTable = [];

  for (let j = 0; j <= nOColumn; j++) {
    counter++;
    tempTable.push(counter);

  }
  myTable.push(tempTable);
}
console.table(myTable);
