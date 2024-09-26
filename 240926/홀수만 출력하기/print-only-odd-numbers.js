const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n") // 두 줄로 분리
const N = Number(input[0]); //첫 번쨰 줄에 주어지는 정수 N

for (let i = 1; i <= N; i++) { // \n으로 분리한 input 배열을 보면 0번 인덱스는 N에 해당하고, 1번부터 N번까지가 주어지는 정수에 해당한다.
    if (input[i] % 2 === 1 && input[i] % 3 === 0) {
        console.log(input[i]);
     }
}