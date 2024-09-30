const fs = require('fs');
const a = Number(fs.readFileSync(0).toString().trim());

// 정수 a 를 입력받아 1부터 a까지의 수 중 

// 다음 조건을 모두 만족하지 않는 수들을 모두 출력
// 짝수이면서 4의 배수가 아닌 수

// 8로 나눈 몫이 짝수인 수

// 7로 나눈 나머지가 4보다 작은 수

let result = '';

for (let i = 1; i <= a; i++){

   let quotient = Math.floor(i / 8)
    
   if (i % 2 === 0 && i % 4 !== 0) {
    continue;
   }
   if (quotient %2 === 0){
    continue;
   }
   if (i % 7 < 4) {
    continue;
   }

   result += (i + " ");
}

console.log(result);