const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let result = "";

//3의 배수이거나 숫자에 3, 6, 9가 하나라도 들어간다면
// 13 19 23 26 ...


for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 ) {
        result += (0 + " ");
    }
    else {
        result += (i + " ");
    }
}

console.log(result);