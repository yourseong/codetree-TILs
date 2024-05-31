const fs = require("fs");

let num = fs.readFileSync(0).toString();

let n = Number(num);

console.log(n);
if (n < 0) {
    console.log("minus");    
}