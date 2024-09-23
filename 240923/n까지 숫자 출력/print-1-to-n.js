const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let i = 1;
let result = "";

while (i <= n){
    result += (i + " ");
    i++;
}

console.log(result);