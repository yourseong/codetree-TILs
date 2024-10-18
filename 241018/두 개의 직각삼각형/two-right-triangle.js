const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let str = "";

// n = 3일 때 i 값에 따른 *, 공백 의 개수

// i = 0 : * = 6개 | " " = 0
// i = 1 : * = 4개 | " " = 2
// i = 2 : * = 3개 | " " = 4

// 일반화 : 별 개수 > n*2 - 2*i + 1
// 공백 개수 : 2의 배수로 증가

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 1; j < n - i + 1; j++) {
        str += "*";
    }

    for (let k = 0; k < 2*i; k++) {
        str += " ";
    }

    for (let j = 1; j < n - i + 1; j++) {
        str += "*";
    }

    console.log(str);
}