const fs = require("fs");
let char = fs.readFileSync(0).toString().split("\n");

let c = char[0];
let num1 = Number(char[1]);
let num2 = Number(char[2]);

console.log(c);
console.log(num1.toFixed(2));
console.log(num2.toFixed(2));