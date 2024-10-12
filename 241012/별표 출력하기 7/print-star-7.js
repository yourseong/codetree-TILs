const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (i = 1; i <= n; i++) {
    str = "";
    for (j = 1; j <= i; j++) {
        str += "* ";
    }
    console.log(str);
}