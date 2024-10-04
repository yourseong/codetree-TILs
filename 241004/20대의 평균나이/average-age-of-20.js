const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let idx = 0;
let result = 0;
let cnt = 0;
let sum = 0;

while (true) {

    let n = Number(input[idx])
    idx++;

    if (n >= 20 && n < 30) {
        sum += n;
        cnt++;
    }

    else {
        result = sum / cnt
        break;
    }

}

console.log(result.toFixed(2))