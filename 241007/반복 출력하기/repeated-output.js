const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

function printer(n) {
    for (let i = 0; i < n; i++) {
        console.log("12345^&*()_");
    }
}

printer(n);