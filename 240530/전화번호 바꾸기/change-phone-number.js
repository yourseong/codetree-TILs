const fs = require("fs");
let input = fs.readFileSync(0).toString().split("-");

let x = input[1];
let y = input[2];

console.log(`010-${y}-${x}`);