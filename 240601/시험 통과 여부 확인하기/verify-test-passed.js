const fs = require("fs");
let input = fs.readFileSync(0).toString();

let n = Number(input);

if (n >= 80) {
    console.log("pass");
} else {
    let more = 80 - n;
    console.log(`${more} more score`);
}