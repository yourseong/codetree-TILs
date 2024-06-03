const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

if (a % 2 == 0) {
    console.log("even");
} else if (a % 2 == 1) {
    console.log("odd");
}

if (b % 2 == 0) {
    console.log("even");
} else if (b % 2 == 1) {
    console.log("odd");
}