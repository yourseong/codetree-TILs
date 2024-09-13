const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const person = input.split("\n");
const p1 = person[0].split(" ");
const p2 = person[1].split(" ");
const p3 = person[2].split(" ");

const p1_cold = p1[0];
const p1_temp = Number(p1[1]);

const p2_cold = p2[0];
const p2_temp = Number(p2[1]);

const p3_cold = p3[0];
const p3_temp = Number(p3[1]);

if (p1_cold === "Y" || p2_cold === "Y" || p3_cold || "Y") // 증상이 있을 때
    { 
        if ((p1_temp >= 37 && p2_temp >= 37) || (p1_temp >= 37 && p3_temp >= 37) || (p2_temp >= 37 && p3_temp >= 37)) //위급상황일때 (A로 가는 사람이 2명 이상인 경우)
        {
            console.log("E");
        } 
        else if (p1_temp < 37 || p2_temp < 37 || p3_temp < 37) 
        {
            console.log("N"); // 증상은 있지만 체온은 정상일 때 (C)
        }     
    } 

    else if (p1_cold === "N" || p2_cold === "N" || p3_cold || "N")// 증상이 없을 때
    {
        if ((p1_temp >= 37 && p2_temp >= 37) || (p1_temp >= 37 && p3_temp >= 37) || (p2_temp >= 37 && p3_temp >= 37)) //증상은 없지만 37도 이상일 때
       { console.log("N");}
       else {
        console.log("N");
       }
    }