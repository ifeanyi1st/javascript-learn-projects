let arr_for_values = ["rock", "paper", "scissors"];

let rand_4_player = Math.floor(Math.random() * 3)
let rand_4_computer = Math.floor(Math.random() * 3)

let message_4_player = arr_for_values[rand_4_player]
console.log(` player choose ${message_4_player} `);
let message_4_computer = arr_for_values[rand_4_computer]
console.log(`computer choose ${message_4_computer}`)

let result;

if (rand_4_computer == rand_4_player) {
  console.log("omor na tie o ")
  return
}
/*else if (rand_4_computer == 0 && rand_4_player == 2) {
  result = "computer wins"
}
else if (rand_4_computer == 2 && rand_4_player == 1) {
  result = "computer wins"
}
else if (rand_4_computer == 1 && rand_4_player == 0) {
  result = "computer wins"
}
else if (rand_4_player == 0 && rand_4_computer == 2) {
  result = "player wins"
}
else if (rand_4_player == 2 && rand_4_computer == 1) {
  result = "player wins"
}
else if (rand_4_player == 1 && rand_4_computer == 0) {
  result = "player wins"
}*/

// REVISED VERSION
else if (rand_4_computer == 0 && rand_4_player == 2) {
  result = "computer wins "
}
else if (rand_4_player == 0 && rand_4_computer == 2) {
  result = "player wins"
}
else if (rand_4_player > rand_4_computer) {
  result = "player wins"
}
else if (rand_4_computer > rand_4_player) {
  result = "computer wins"
}
console.log(result)
