const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = n; j >= i; j--) {
        str += ("*" + " ")
    }
    console.log(str)
}

// 바깥 for문 : n개의 줄 출력
// 안쪽 for문 : * 출력
// 입력이 5일 때
// line1 : 바깥 for문을 통해 한 줄 출력 후 안쪽 for문을 통해 * 5개 출력 (j = 5부터 j가 1보다 작거나 같을때까지 이므로 * 5개 출력됨)
// line2 : 바깥 for문을 통해 한 줄 출력 후 안쪽 for문을 통해 * 4개 출력 (j = 4부터 j가 2보다 작거나 같을때까지 이므로 * 4개 출력됨)