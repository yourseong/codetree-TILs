const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const a = input[0];
const b = input[1];

let state = 0;

for (let i = a; i <= b; i++) {
    if (1920 % i === 0 && 2880 % i === 0) {
        state = 1;
    }
}

if (state === 1) {
    console.log(1);
} else {
    console.log(0);
}