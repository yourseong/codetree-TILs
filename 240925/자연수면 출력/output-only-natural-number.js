const fs = require("fs");
const int = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(int[0]);
const b = Number(int[1]);

let result = "";

if (a > 0) {
    for (let i = 1; i <= b; i++) {
        result += a;
    }
    console.log(result);
} else {
    console.log(0);
}