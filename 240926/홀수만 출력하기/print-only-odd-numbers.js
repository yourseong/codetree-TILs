const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n") //n개의정수



for (let i = 0; i <= 10; i++) {
    if (input[i] % 2 === 1 && input[i] % 3 === 0) {
        console.log(input[i]);
    }
}