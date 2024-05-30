const fs = require("fs");
let input = fs.readFileSync(0).toString().split(".");

let month = input[1];
let day = input[2];
let year = input[0];

console.log(`${month}-${day}-${year}`);