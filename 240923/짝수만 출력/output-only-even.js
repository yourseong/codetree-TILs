const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

let i = a;
let result = "";

while (i <= b) {
    result += (i + " ");
    i += 2;
}

console.log(result);