const fs = require("fs");
let input = fs.readFileSync(0).toString().split("");

let a = Number(input[0]);
let b = Number(input[2]);

let plus = a + b;
let minus = a - b;
let quotient = parseInt(a / b);
let remain = a % b;

console.log(`${plus}\n${minus}\n${quotient}\n${remain}`);