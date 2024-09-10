const fs = require("fs");
let m = fs.readFileSync(0).toString().trim();

if (3 <= m && m <= 5) {
    console.log("Spring");
} else if (6 <= m && m <=8){
    console.log("Summer");
}
else if (9 <= m && m <= 11){
    console.log("Fall");
}
else if (m === 12 || m <= 2) {
    console.log("Winter");
}