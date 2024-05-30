const fs = require("fs");
let input = fs.readFileSync(0).toString().split(/\s+/);

let a = Number(input[0]);
let b = Number(input[1]);

let calc = (a + b) / (a - b);

let result = calc.toFixed(2);

console.log(result);