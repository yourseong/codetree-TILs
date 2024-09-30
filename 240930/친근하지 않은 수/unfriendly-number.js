const fs = require("fs")
const n = Number(fs.readFileSync(0).toString().trim());

// 친근한 수 : 2, 3, 5로 나누어 떨어지는 수
// 친근하지 않은 수의 개수를 출력해야 함.

let cnt = 0;

for (let i = 1; i <= n; i++) {

    // 친근한 수가 등장하면 cnt에 숫자를 더하지 않고 스킵
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
        continue;
    }
    cnt++
}

console.log(cnt);