const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let n = input[0].split("");

let a = Number(n[0]);
let b = Number(n[2]);
let c = Number(input[1]);

console.log(a, b, c);