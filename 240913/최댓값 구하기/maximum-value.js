const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

if (a > b && a > c)
 {
    console.log(a);
 } else if (b > a && b> c) {
    console.log(b);
 } else {
    console.log(c);
 }