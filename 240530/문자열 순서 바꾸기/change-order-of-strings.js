const fs = require("fs");

let char = fs.readFileSync(0).toString().split("\n");

let c1 = char[0];
let c2 = char[1];

let [a, b] = [c2, c1]; //swap

console.log(`${a}\n${b}`);