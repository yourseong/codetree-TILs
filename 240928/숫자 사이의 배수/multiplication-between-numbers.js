const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

let sumVal = 0;
let cnt = 0;
let avg;

for (let i = a; i <= b; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
        sumVal += i;
        cnt++
    }
    avg = sumVal / cnt;
}

console.log(sumVal, avg.toFixed(1));