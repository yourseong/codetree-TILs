const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let state = false;

for (let i = 2; i <= n-1; i++) {
    if (n % i === 0) {
        state = true;
    }
}

if (state == true) {
    console.log("C");
} else {
    console.log("N");
}