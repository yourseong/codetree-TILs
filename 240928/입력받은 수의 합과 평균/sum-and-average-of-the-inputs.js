const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 첫 번째 줄에 자연수 n
const n = Number(input[0]);

// 두 번째 줄부터 n개의 정수값

let sumVal = 0;
let cnt = 0;

for (let i = 1; i <= n; i++) {
    sumVal += Number(input[i]);
    cnt++;
}

let avg = sumVal / cnt

console.log(sumVal, avg.toFixed(1));