const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
const b = Number(input[1]);

let result = "";


for (let i = a; i <= b) {
    if (i % 2 === 1) { 
        result += (i + " ");
        i *= 2;  
    } else if (i % 2 === 0) {
        result += (i + " ");
        i += 3;
    }  
}

console.log(result);

//while문으로 하는게 더 좋은것같음
// 변수 선언 및 입력
// const fs = require("fs");
// let input = fs.readFileSync(0).toString().trim().split(" ");
// let a = Number(input[0]);
// let b = Number(input[1]);

// // 출력
// let result = "";
// while (a <= b) {
//     result += a + " ";
//     if (a % 2 === 1) {
//         a *= 2;
//     }
//     else {
//         a += 3;
//     }
// }

// console.log(result);