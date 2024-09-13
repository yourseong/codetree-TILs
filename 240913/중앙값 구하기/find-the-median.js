const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

if ((a > b && a < c) || (a > c && a < b)) {
    console.log(a);
} else if ((b > a && b < c) || (b > c && a > b)) {
    console.log(b);
} else if ((c > a && c < b) || (a > c && c > b)){
    console.log(c);
}