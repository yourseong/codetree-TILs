const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = n; j >= n - i; j--) {
        str += "* "
    }
    console.log(str);
}

for (let i = 0; i <= n - 1; i++) {
    str = "";
    for (let j = 0; j <= n - 2 - i; j++) {
        str += "* "
    }
    console.log(str);
}