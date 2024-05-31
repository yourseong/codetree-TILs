const fs = require("fs");
let input = fs.readFileSync(0).toString().split(/\s+/);

let a = Number(input[0]);
let b = Number(input[1]);

if (a < b) { // <= 사용해서 else if 하나 줄이는것이 좋음.
    console.log(b - a);
} else if (a > b) {
    console.log(a - b);
} else if (a === b) {
    console.log(a - b);
}