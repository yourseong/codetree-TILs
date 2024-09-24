const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let b = Number(input[0]);
const a = Number(input[1]);

result = "";

//a이상 b이하의 짝수를 내림차순 출력
//i에 b를 할당 (i = 20)
let i = b;

//i가 10이 될때까지
while (i >= a) {
    result += (i + " ");
    i -= 2; //i를 2씩 감소
}

console.log(result);