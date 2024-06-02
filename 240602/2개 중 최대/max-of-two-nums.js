const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let c = a > b ? a : b; //a가 b보다 크다면 a, 그렇지 않다면 b를 c에 할당

console.log(c);