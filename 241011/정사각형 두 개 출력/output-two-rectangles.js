const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let result = ""

for (let i = 1; i <= n * 2; i++) {
    result = ""
    for (let j = 1; j <= n; j++) {
        result += "*"
    }
    console.log(result);
    if (i === n * 2 / 2) {
        console.log("");
    }
}