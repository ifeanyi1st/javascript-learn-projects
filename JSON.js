// 1. Import the file system module
const fs = require('fs');

// 2. Read the file
// 'utf8' makes sure it reads as text, not raw numbers
fs.readFile('learn/javaScript/list.json', 'utf8', (err, data) => {

  if (err) {
    console.log("Error reading file:", err);
    return;
  }

  try {
    // 3. Convert the text into a real Javascript Object
    const finalData = JSON.parse(data);
    console.log(finalData);
  } catch (err) {
    console.log("Error parsing JSON (Check your JSON file syntax!)", err);
  }
});

