const fs = require("fs");

let n = Number(fs.readFileSync(0).toString());

n = n.toFixed(2);

console.log(n);