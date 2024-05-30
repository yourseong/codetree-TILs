const fs = require("fs");
let input = fs.readFileSync(0).toString().split(/\s+/);

let width = Number(input[0]) + 8;
let height = Number(input[1]) * 3;
let area = width * height;

console.log(`${width}\n${height}\n${area}`);