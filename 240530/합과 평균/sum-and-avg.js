const fs = require("fs");
let input = fs.readFileSync(0).toString().split(/\s+/);

let a = Number(input[0]);
let b = Number(input[1]);

let sum = a + b;
let average = (a + b) / 2;

console.log(sum, average.toFixed(1));