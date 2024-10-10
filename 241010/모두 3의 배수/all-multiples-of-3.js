const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let state = 1;

for (let i = 0; i < 5; i++) {
    if (input[i] % 3 !== 0) {
        state = 0;
    }
}

console.log(state);