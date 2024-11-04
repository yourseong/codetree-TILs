const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const a = input[0];
const b = input[1];

let cnt = 0;


function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
            
    }
    return true
}

for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
        cnt++;
    }
}

console.log(cnt);