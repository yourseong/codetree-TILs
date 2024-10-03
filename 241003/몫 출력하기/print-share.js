const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

while (true) {
    let idx = 0;
    idx++

    let cnt = 0;
    
    if (input[idx] % 2 === 0) {
        cnt++
        console.log(input[idx] / 2);
        
    } 
     if (cnt >= 3) {
            break;
        }
    
}