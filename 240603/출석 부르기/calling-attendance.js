const fs = require("fs");
let input = fs.readFileSync(0).toString();

let n = Number(input);

if (n == 1) {
    console.log("John");
} else if (n == 2) {
    console.log("Tom");
} else {
    console.log("Paul");
}