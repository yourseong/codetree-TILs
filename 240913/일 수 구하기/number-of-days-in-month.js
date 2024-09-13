const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const n = Number(input);

// 1, 3, 5, 7, 8, 10, 12 : 31일까지
// 4, 6, 9, 11 : 30일까지
// 2 : 28일까지

if (n === 2) {
    console.log(28);
} else if ((n % 2 === 1 && n <= 7) || (n % 2 === 0 && n >= 8)) { 
    console.log(31);
} else {
    console.log(30);
}