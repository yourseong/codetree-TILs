const fs = require("fs");

let n = fs.readFileSync(0).toString().split("\n");

let a = n[0];
let b = n[1];

console.log(a*b);