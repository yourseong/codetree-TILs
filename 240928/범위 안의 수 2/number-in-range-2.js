const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 합과 평균 출력

let sumVal = 0;
let cnt = 0;

for (let i = 0; i <= 9; i++) {
    if (input[i] >= 0 && input[i] <= 200) {
        sumVal += Number(input[i]);
        cnt++
    } 
}

let avg = sumVal / cnt

console.log(sumVal, avg.toFixed(1))