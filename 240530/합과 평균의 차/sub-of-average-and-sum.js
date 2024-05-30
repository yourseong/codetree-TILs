const fs = require("fs");
let input = fs.readFileSync(0).toString().split(/\s+/);

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let sum = a + b + c;
let average = (a + b + c) / 3;
let substraction = sum - average;

console.log(sum);
console.log(parseInt(average));
console.log(substraction)