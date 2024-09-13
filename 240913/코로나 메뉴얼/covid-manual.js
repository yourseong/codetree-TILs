const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const p1 = input[0].split(" "); //p1[0] == 증상, p1[1] == 체온
const p2 = input[1].split(" ");
const p3 = input[2].split(" ");

const p1_symp = p1[0]; // p1 증상
const p1_temp = Number(p1[1])// p1 체온

const p2_symp = p2[0]; // p2 증상
const p2_temp = Number(p2[1]) //p2 체온 

const p3_symp = p3[0]; // p3 증상
const p3_temp = Number(p3[1])// p3 체온

// console.log(p1_symp, p1_temp, p2_symp, p2_temp, p3_symp, p3_temp)

// 두 명 이상 체온이 37도 이상일 때
if ((p1_temp > 36 && p2_temp > 36) || (p2_temp > 36 && p3_temp > 36) || (p1_temp > 36 && p3_temp > 36)) 
{ 
    // 두 명 이상 증상이 있다면 E
    if ((p1_symp === "Y" && p2_symp === "Y") || (p2_symp === "Y" && p3_symp === "Y") || (p1_symp === "Y" && p3_symp === "Y"))
    {
        console.log("E");
    }
    // 그렇지 않다면 N
    else {
        console.log("N");
    }
} else {
    console.log("N") // 이 외의 모든 경우는 N
}