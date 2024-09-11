const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const p1 = input[0].split(" ");
const p1_age = Number(p1[0]);
const p1_sex = p1[1];

const p2 = input[1].split(" ");
const p2_age = Number(p2[1]);
const p2_sex = p2[1];

if ((p1_age >= 19 || p2_age >= 19) && (p1_sex === "M" || p2_sex === "M")) {
    console.log(1);
} else {
    console.log(0);
}