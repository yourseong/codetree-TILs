const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 0; i < n; i++) { // 행 개수 (n개)
    str = "";

 for (let k = 0; k < i; k++) { // 공백 개수 
        str += "  ";
    }

    for (let j = 0; j < 2*(n-i)- 1; j++) {
        str += "* ";
    }

   
    console.log(str);
}