const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const gender = Number(input[0]);
const age = Number(input[1]);

// 남자 0, 여자 1, 19세 이상은 성인
// 성인남자 MAN, 성인여자 WOMAN, 소년 BOY, 소녀 GIRL

if (gender === 0) {
    if (age >= 19) {
        console.log("MAN");
    } else {
        console.log("BOY");
    }
} else {
    if (age >= 19){
        console.log("WOMAN")
    } else {
        console.log("GIRL");
    }
}