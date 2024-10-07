const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const n = input[0];
const m = input[1]

let str = "";

function printer (n, m) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            process.stdout.write("1");
            
        }
        process.stdout.write("\n");
    }
    console.log(str)
}

printer(n, m);