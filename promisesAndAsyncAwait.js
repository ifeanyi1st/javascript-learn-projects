const promise = new Promise(
  (resolve, reject) => { reject("Counting..") }
)

function counter(x) {
  console.log(x)
}
promise
  .then(value => {
    counter(value)
    return "one"
  })
  .then(value => {
    counter(value)
    return "two"
  })
  .then(value => {
    counter(value)
    return "three"
  })
  .then(value => {
    counter(value)
  })

  .catch(value => { console.log(value) })

// Using await and async
let num = 0

function oneArgument(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      num++
      resolve({ counter: num, value: x })
    }, 1000)
  })
}
async function output(b) {
  console.log(num, b)
  let capture = await oneArgument(b)
  console.log(capture)
}
for (let i = 0; i < 10; i++) {

  output(i)
}

