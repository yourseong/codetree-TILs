const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

let prod = 1;

for (let i = 1; i <= b; i++) {
    prod *= a;
}

console.log(prod);