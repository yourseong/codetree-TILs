const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let cnt = 1;

for (let i = 1; i <= n; i++) {
 
    n /= i;  
    cnt++
    
    if (n <= 1) {
        break;
    }  
}

console.log(cnt);