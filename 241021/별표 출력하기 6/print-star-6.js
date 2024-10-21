const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let str = "";

// 윗부분 (큰 피라미드)
for (let i = 0; i < n; i++) {
    str = "";

    // 앞쪽 공백
    for (let j = 0; j < i; j++) {
        str += "  ";  // 공백을 2개씩 추가
    }

    // 별 출력
    for (let k = 0; k < (2 * (n - i) - 1); k++) {
        str += "* ";
    }

    console.log(str.trim());
}

// 아랫부분 (역 피라미드)
for (let i = 1; i < n; i++) {
    str = "";

    // 앞쪽 공백
    for (let j = 0; j < n - i - 1; j++) {
        str += "  ";  // 공백을 2개씩 추가
    }

    // 별 출력
    for (let k = 0; k < (2 * i + 1); k++) {
        str += "* ";
    }

    console.log(str.trim());
}