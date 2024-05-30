const fs = require("fs");
let char = fs.readFileSync(0).toString().split("-");

let day = char[1];
let month = char[0];
let year = char[2];


console.log(`${year}.${month}.${day}`);