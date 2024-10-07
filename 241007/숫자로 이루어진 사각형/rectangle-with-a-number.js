let num = 1;

function numRec(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            
            process.stdout.write((num % 10) + " ");
            num++
            
            if (num % 10 == 0) {
                num = 1;
            }
        }
        process.stdout.write("\n")
    }
}


const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

numRec(n)