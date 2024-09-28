const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 첫 번째 줄에는 정수 n이 주어짐
const n = Number(input[0]);

// 그 다음 줄부터 n 개의 줄에 걸쳐, 한 줄에 정수가 하나씩 주어짐
// 이 중 홀수이면서 동시에 3의 배수인 수들의 총합?

let sumVal = 0;

for (let i = 1; i < n; i++) {
    if (input[i] % 2 === 1 && input[i] % 3 === 0) {
        sumVal += input[i];
    }
}

console.log(sumVal);