const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let str = "";

// 반으로 나눠서 n줄, n-1줄로 출력

// n줄일때 * 개수 (i에 따라)
// i = 0 : 3개
// i = 1 : 1개 
// 일반화 > n - (2 * i)

// 윗부분
for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < 2*n-1; j++) {
        str += "* ";
    }
    console.log(str);
}

// 아랫부분
for (let i = 0; i <= n; i++) {
    str = "";

    for (let k = 0; k < n-i; k++) {
        str += "  "
    }

    for (let j = 0; j < i * 2 - 1; j++) {
        str += "* ";
    }
    console.log(str);
}