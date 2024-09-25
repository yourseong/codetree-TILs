const fs = require("fs");
const int = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(int[0]);
const b = Number(int[1]);

let result = "";

if (a > b) {
    for (let i = a; i >= b; i--) {
        result += (i + " ");
    }
} else {
    for (let j = b; j >= a; j--) {
        result += (j + " ");
    }
}

console.log(result);