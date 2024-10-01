const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let sum = 1;

for (let i = 1; i <= 10; i++) {
    sum *= i
    if (sum >= n) {
        console.log(i);
        break;
    }
}