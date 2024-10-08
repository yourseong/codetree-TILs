const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

// toFixed()를 활용하면 오차 발생
// 1. 먼저 정수 부분을 구한다.
// 2. 소숫점 21번째 뒷자리까지는 a / b에 for문으로 10을 계속 곱해서 구한다.
// 3. 정수 부분과 소숫점(. 문자), 21번째 자리까지 더한다.

// 정수부분 + 소숫점 출력
let intPart = (a / b);
process.stdout.write(Math.floor(intPart) + ".");

// 소숫점 부분

// 일단 두 수를 나눈다.
let floatPart = a / b;

// 나눈 결과에 10의 20제곱을 곱해 21번째 자리까지 나오게 한다.
for (let i = 1; i <= 20; i++) {
    floatPart *= 10
}

process.stdout.write(floatPart.toString())