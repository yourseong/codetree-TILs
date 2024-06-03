const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let line1 = input[0].split(" "); //A의 수학과 영어점수
let line2 = input[1].split(" "); //B의 수학과 영어점수

let A_math = Number(line1[0]);
let A_eng = Number(line1[0]);
let B_math = Number(line2[0]);
let B_eng = Number(line2[1]);

if (A_math >= B_math && A_eng >= B_eng) {
    console.log(1); 
} else {
    console.log(0);
}