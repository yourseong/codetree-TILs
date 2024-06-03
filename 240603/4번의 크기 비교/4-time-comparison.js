const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let line2 = input[1];
let bcde = line2.split(" ");

let a = Number(input[0]);
let b = Number(bcde[0]);
let c = Number(bcde[1]);
let d = Number(bcde[2]);
let e = Number(bcde[3]);


console.log(a >= b ? 1 : 0);
console.log(a > c ? 1 : 0);
console.log(a > d ? 1 : 0);
console.log(a > e ? 1 : 0);