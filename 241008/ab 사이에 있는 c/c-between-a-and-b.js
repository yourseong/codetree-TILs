const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

let satisfied = false;

for (let i = a; i <= b; i++){
    if (i % c === 0) {
        satisfied = true;
    } 
}

if (satisfied === true) {
    console.log("YES");
} else {
    console.log("NO");
}