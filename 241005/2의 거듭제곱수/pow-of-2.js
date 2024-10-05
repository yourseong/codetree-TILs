const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

while (true) {
    n /= 2

    if(n / 2 === 1) 
        break;
    
}


console.log(n);