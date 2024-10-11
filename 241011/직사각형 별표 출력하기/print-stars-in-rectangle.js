const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const n = input[0];
const m = input[1];

let result = "";

for (let i = 1; i <= n; i++) {
    result = ""
    for (let j = 1; j <= m; j++) {
        result += ("*" + " ")
    }
    console.log(result)
}