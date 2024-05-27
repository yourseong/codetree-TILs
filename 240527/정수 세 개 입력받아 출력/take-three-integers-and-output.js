const fs = require("fs");

let num = fs.readFileSync(0).toString().split("");

let a = num[0];
let b = num[2];
let c = num[4];

console.log(a, b, c);