const fs = require("fs");
let input = fs.readFileSync(0).toString();

let a = Number(input);

if (a >= 113) {
    console.log(1);
} else {
    console.log(0);
}