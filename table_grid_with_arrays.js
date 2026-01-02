let grid = [];
let cells = 64;
let counter = 0;

let rows = [];
for (let i = 0; i < cells + 1; i++) {
  if (counter % 8 === 0) {

    if (rows.length > 0) {
      grid.push(rows);
      rows = [];
    }
  }

  counter++;

  let temp = counter;
  rows.push(temp);



}
console.log(grid);
