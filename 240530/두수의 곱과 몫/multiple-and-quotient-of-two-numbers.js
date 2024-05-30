const fs = require("fs");
let input = fs.readFileSync(0).toString().split(/\s+/);

let num1 = Number(input[0]);
let num2 = Number(input[1]);

let multiply = num1 * num2;
let divide = parseInt(num1 / num2);

console.log(`${num1} * ${num2} = ${multiply}`);
console.log(`${num1} / ${num2} = ${divide}`);