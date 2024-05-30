//두 자릿수를 입력받는 경우도 생각해야함

const fs = require("fs");
// let input = fs.readFileSync(0).toString().split('');

let input = fs.readFileSync(0).toString().split(/\s+/);

let a = Number(input[0]);
let b = Number(input[1]);

let plus = a + b;
let minus = a - b;
let quotient = parseInt(a / b);
let remain = a % b;

console.log(`${plus}\n${minus}\n${quotient}\n${remain}`);