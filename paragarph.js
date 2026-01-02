function parG(string s) {

  let s = a;
  let array = s.split(" ");


  let count = {};

  for (int c = 0; c < array.length; c++) {

    let word = array[c];

    if (count[word]) {
      count[word]++;
    }
    else {
      count[word] = 1;
    }
  }
  let maxW = null;
  let maxN = 0;
  for (const i in count) {
    if (count[i] > maxN) {
      maxN = count[i];
      maxW = i;

    }

  }
  console.log(`"Maximum word is " {maxW}`);
}
let a = prompt("Enter the string");
