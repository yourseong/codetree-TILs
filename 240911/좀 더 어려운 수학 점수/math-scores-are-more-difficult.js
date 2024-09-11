const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let A_grade = input[0].split(" ");
let A_Math = Number(A_grade[0]);
let A_English = Number(A_grade[1]);

let B_grade = Number(input[1].split(" "));
let B_Math = Number(B_grade[0]);
let B_English = Number(B_grade[1]);

// 영어 점수와 상관없이 수학 점수가 높다면, 더 높은 학생의 이름 출력
// 수학 점수가 같다면 영어 점수가 더 높은 학생의 이름 출력

if (A_Math > B_Math) {
    console.log("A");
} else if (A_Math === B_Math) { 
    if (A_English > B_English) {
        console.log("A");
    } else {
        console.log("B");
    }
} else {
    console.log("B");
}