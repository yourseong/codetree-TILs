const fs = require("fs");
let input = fs.readFileSync(0).toString().split(/\s+/);

let a = Number(input[0]);
let b = Number(input[1]);

let t1 = a += b;
let t2 = b += a;

console.log(t1, t2)