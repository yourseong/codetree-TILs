const fs = require("fs");

let ft = Number(fs.readFileSync(0).toString());

ft *= 30.48;

ft= ft.toFixed(1);

console.log(ft);