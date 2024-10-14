const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let str = "";

// 윗부분 (testcase : n = 5)
// 먼저 5줄 출력
for (let i = 0; i < n; i++) { // 5줄
    str = "";
    for (let j = n; j > i; j--) {
        str += "* ";
    }
    console.log(str);
}

// 나머지 4줄 출력
for (let i = 1; i < n; i++) {
    str = "";
    for (let j = 0; j <= i; j++) {
        str += "* ";
    }
    console.log(str);
}