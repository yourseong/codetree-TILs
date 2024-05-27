const fs = require("fs");

let num = fs.readFileSync(0).toString().split((/,| |\n/));

let a = num[0]
let b = num[1]
let c = num[2]

console.log(a, b, c);