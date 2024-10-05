const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let x = 0;

while (true) {
    x = n / 2;

    if (x === 2) {
        console.log(x);
        break;
    }
}