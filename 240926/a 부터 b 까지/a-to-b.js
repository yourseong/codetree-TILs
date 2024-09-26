const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
const b = Number(input[1]);

let result = "";


for (let i = a; i <= b;) {
    if (i % 2 === 1) { 
        result += (i + " ");
        i *= 2;  
    } else {
        result += (i + " ");
        i += 3;
    }  
}

console.log(result);