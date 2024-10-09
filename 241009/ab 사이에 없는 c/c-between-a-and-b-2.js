const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const a = input[0];
const b = input[1];
const c = input[2];

let state = false;
let result = 0;

for (let i = a; i <= b; i++) {

    result = i % c

    if(result !== 0) {
        state = true;
    }
}

if (state == true) {
    console.log("YES");
} else {
    console.log("NO");
}