function greet(fullname) {

  console.log(`Hello ${fullname.join(" ")}`)
}
function second(string, callback) {
  let array = string.split("");
  callback(array)

}
second("hello", greet)
