const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let state = 0;

for (let i = 2; i <= n; i++) {
    if (i != n && n % i === 0) { //i가 n이 아니면서 n을 나누어 떨어지게 만드는 경우
        state = 1; //소수가 아님 (소수가 아닌 경우를 1)
    }
}

if (state === 1) {
    console.log("C");
} else {
    console.log("P");
}