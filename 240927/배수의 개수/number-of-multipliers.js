const fs = require("fs");
const number = fs.readFileSync(0).toString().trim().split("\n");

let cnt_3 = 0;
let cnt_5 = 0;

for (let i = 0; i <= 9; i++) {
    if (number[i] % 3 === 0) {
        cnt_3++;
    }
    if (number[i] % 5  === 0 ) {
        cnt_5++;
    }
}

console.log(cnt_3, cnt_5)