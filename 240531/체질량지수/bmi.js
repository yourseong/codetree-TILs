const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let h = Number(input[0]);
let w = Number(input[1]);

let b = (w/((h/100)**2));

console.log(parseInt(b));

if (b >= 25) { //이상이므로 >=
    console.log("Obesity");
}