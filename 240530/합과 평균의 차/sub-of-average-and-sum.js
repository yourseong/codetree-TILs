const fs = require("fs");
let input = fs.readFileSync(0).toString().split(/\s+/);

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let sum = a + b + c;
let average = (a + b + c) / 3; //sum / 3 이렇게 작성하는게 더 좋아보임
let substraction = sum - average;

console.log(sum);
console.log(parseInt(average));
console.log(substraction)