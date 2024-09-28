const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

let sumVal = 0;

for (let i = a; i <= b; i++) {
    sumVal += i;
}

console.log(sumVal);