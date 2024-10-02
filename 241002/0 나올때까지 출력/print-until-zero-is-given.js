const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let index = 0;

while(true) {
    console.log(input[index]);
    index++;
    if (input[index] === 0) {
        break;
    }
}