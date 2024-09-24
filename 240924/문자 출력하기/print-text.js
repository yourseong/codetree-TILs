const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let result = "";

for (let i = 0; i <= 7; i++) {
    result += input;
}

console.log(result);