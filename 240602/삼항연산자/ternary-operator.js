const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let grade = Number(input[0]);

let result = grade == 100 ? "pass" : "failure";

console.log(result);