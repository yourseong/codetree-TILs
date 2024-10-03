// 가로, 세로, 문자 주어짐
// 문자가 주어지는 줄까지 사각형의 넓이 구하기

const fs = require("fs");

// 줄바꿈 기준으로 split
const input = fs.readFileSync(0).toString().trim().split("\n");


let idx = 0;

while (true) {

    // 줄마다 공백 기준으로 split
    let arr = input[idx].split(" ");
    let x = Number(arr[0]);
    let y = Number(arr[1]);

    idx++

    console.log(x * y);

    if (arr[2] === "C") {
        break;
    }
    
}