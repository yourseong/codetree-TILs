const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

// 자기 자신을 제외한 약수의 합이 자신이 되는 수
// 약수 구하기
// 1부터 n까지 1씩 증가하며 n을 나눠서 나누어 떨아지면 약수 

let sumVal = 0;

for (let i = 1; i < n; i++) {
    if (n % i === 0) {
        sumVal += i;
    }
}

if (sumVal === n) {
    console.log("P");
} else {
    console.log("N");
}