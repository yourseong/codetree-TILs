const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const a = input[0];
const b = input[1];
const c = input[2];

let state = true;

// 18 59 36
// 있으면 NO, 없으면 YES

for (let i = 1; i <= b; i++) {

    if(i % c !== 0) {
        state = true;
    }
}

if (state == true) {
    console.log("YES");
} else {
    console.log("NO");
}