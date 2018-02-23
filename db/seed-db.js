// write a function that reads the imageUrls file 
// and for each line makes a string version and appends it to an object...

const readline = require('readline-async');
const fs = require('fs');

const urlArray = [];

const rlimage = readline.createInterface({
  input: fs.createReadStream('../client/imageUrls'),
  crlfDelay: Infinity,
});

rlimage.on('line', ((line) => {
  //console.log(`Line from file: ${line}`);
  urlArray.push(line);
}));

console.log(urlArray);
