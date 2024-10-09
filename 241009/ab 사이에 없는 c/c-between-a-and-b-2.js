const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const a = input[0];
const b = input[1];
const c = input[2];

let state = false;

// 18 59 36
// 있으면 NO, 없으면 YES
// 기댓값 = NO

for (let i = a; i <= b; i++) {

    if(c % i !== 0) {
        state = true;
    }
}

if (state == true) {
    console.log("NO");
} else {
    console.log("YES");
}