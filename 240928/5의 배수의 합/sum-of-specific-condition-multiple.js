const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

// a와 b를 포함하여 a와 b 사이의 수 중에서 5의 배수인 수를 모두 더한 값 출력

let sumVal = 0;

if (a <= b) {
    for (let i = a; i <= b; i++) {
        if (i % 5 === 0) {
            sumVal += a;
        }
    }
} else {
    for (let i = b; i <= a; i++) {
        if (i % 5 === 0) {
            sumVal += b;
        }
    }
}

console.log(sumVal);