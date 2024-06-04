const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

if (a < b && a < c) {
    process.stdout.write("1 ")
} else {
    process.stdout.write("0 ");
}

if (a == b == c) {
    console.log(1);
} else {
    console.log(0);
}