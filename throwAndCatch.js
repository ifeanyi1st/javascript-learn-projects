//Pratice using Throw and catch 

function ad(val) {

  try {
    if ((isNaN(val))) {
      throw "Not a number"//new Error("The fuck?")
    }
    else {
      console.log("Got a number")
    }
  } catch (e) {
    console.log("You are lost", e)
  }
  finally {
    console.log(val)
  }
}

ad("chinaza")
