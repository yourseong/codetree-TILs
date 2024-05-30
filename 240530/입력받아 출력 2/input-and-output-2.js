const fs = require("fs");
let input = fs.readFileSync(0).toString().split("-");

let first = input[0];
let second = input[1];

console.log(first+second);