const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let result = "";

// 3의 배수이거나 숫자에 3, 6, 9가 하나라도 들어간다면
// 3의 배수가 아니면서 3이 들어가는 경우 : 13, 23, 43, 53, 73, 83 ... / 30~40
// 3의 배수가 아니면서 6이 들어가는 경우 : 16, 26, 46, 56, 76, 86 ...
// 3의 배수가 아니면서 9가 들어가는 경우 : 19, 29, 49, 59, 79, 89 ...
// 


for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i == "13"|| i == "16" || i == "19") {
        result += (0 + " ");
    }

    else {
        result += (i + " ");
    }
}

console.log(result);