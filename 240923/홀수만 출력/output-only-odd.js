const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

let result = "";

for (let i = a; i <= b; i++) {
    if (i % 2 == 1) {
    result += (i + " " );
    }
}

console.log(result);