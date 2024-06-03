const fs = require("fs");
let input = fs.readFileSync(0).toString();

let n = Number(input);

if (n >= 1.0) {
    console.log("High");
} else if (n >= 0.5) {
    console.log("Middle");
} else {
    console.log("Low");
}