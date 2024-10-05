const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 0;

while (true) {
    cnt++

    n /= 2;
    

    if (n === 2) {
        cnt++
        break;
    }
}

console.log(cnt);