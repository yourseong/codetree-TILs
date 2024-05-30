//두 자릿수를 입력받는 경우도 생각해야함

const fs = require("fs");

// let input = fs.readFileSync(0).toString().split(''); 
//이렇게 작성하면 입력이 7, 1일 때 ['7', '', '1'] 이렇게 스플릿 됨. 
//입력값이 모두 한 자릿수라면 상관 없지만 두 자릿수 이상 입력되는 경우에는 input[2]라 했을 때 가장 높은 자릿수의 숫자만 들어가서 의도와는 다른 결과가 출력됨.


let input = fs.readFileSync(0).toString().split(/\s+/);

let a = Number(input[0]);
let b = Number(input[1]);

let plus = a + b;
let minus = a - b;
let quotient = parseInt(a / b);
let remain = a % b;

console.log(`${plus}\n${minus}\n${quotient}\n${remain}`);