let f_table = [];
let value_v = 10;

for (let i = 0; i <= value_v; i++) {

  let temp_array = [];

  for (let j = 0; j <= value_v; j++) {
    temp_array.push(i * j);
  }
  f_table.push(temp_array);
}

console.log(f_table);
