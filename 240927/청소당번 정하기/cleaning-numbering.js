const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

// 0일을 기점으로 
// 2일마다 교실 청소
// 3일마다 복도 청소
// 12일마다 화장실 청수

// 날짜가 겹치면 주기가 더 긴 것을 한다.

// 겹치는 경우 : 최소공배수의 x배수
// 교실 & 복도 > 2, 3의 최소공배수 > 6의 배수
// 복도 & 화장실 > 3, 12의 최소공배수 > 12의 배수
// 교실 & 화장실 > 2, 12의 최소공배수 > 12의 배수
// 교실, 복도, 화장실 > 12의 배수

// n일간 진행했을 때 각 장소의 청소 횟수? (0일에는 청소안함)

let classroom = 0;
let hallway = 0;
let toilet = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 6 !== 0 && i % 12 !== 0) { // 교실청소주기 
        classroom++;
    }
    if ((i % 3 === 0 || i % 6 === 0) && i % 12 !== 0) { // 복도청소주기
        hallway++
    }   
    if (i % 12 === 0) { // 화장실 청소 주기
        toilet++;
    }
}

console.log(classroom, hallway, toilet);