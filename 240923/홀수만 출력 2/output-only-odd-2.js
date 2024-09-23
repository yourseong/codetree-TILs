const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const b = Number(input[0]);
const a = Number(input[1]);

let result = "";

for (let i = b; i >= a; i-= 2) {
    result += (i + " ");
}

console.log(result);