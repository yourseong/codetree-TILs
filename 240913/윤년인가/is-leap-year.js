const fs = require("fs");
const y = fs.readFileSync(0).toString().trim();

if (y % 4 === 0) {
    console.log("true");
} else if (y % 100 === 0 && y % 400 !== 0) {
    console.log("false")
} else {
    console.log("false");
}