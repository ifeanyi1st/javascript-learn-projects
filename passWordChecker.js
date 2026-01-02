let allowedPass = ["hello", "ifeanyi"]

function login(x) {
  return allowedPass.includes(x);

}
function promise(x) {
  return new Promise((resolve, reject) => {
    if (login(x)) {
      resolve({ status: true })
    }
    else {
      reject({ status: false })
    }

  })
}
function passWordCheck(x) {

  promise(x)
    .then(value => {
      console.log(value)
      return true
    })

    .catch(value => {
      console.log(value)
      return false
    })
}
passWordCheck("hello")
