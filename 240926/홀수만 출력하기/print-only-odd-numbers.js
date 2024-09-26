const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n") // 두 줄로 분리
const N = Number(input[0]);

for (let i = 0; i <= N; i++) {
    if (input[i] % 2 === 1 && input[i] % 3 === 0) {
        console.log(input[i]);
    }
}