const fs = require("fs");

let num = fs.readFileSync(0).toString().split((/,| |\n/));



console.log(num[0], [1], [2]);