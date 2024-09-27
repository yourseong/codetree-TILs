const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let cnt = 0;

for (let i = 0; i <= 9; i++) {
    if (input[i] % 2 === 1) {
        cnt++;
    } 
}

console.log(cnt);