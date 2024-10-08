const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const n = Number(input[0]);
const m = Number(input[1]);

let result = 0;

function gcd(n, m) {
    for (let i = 1; i <= Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            result = i;
        }
    }
    
    console.log(result);
}

gcd(n, m);