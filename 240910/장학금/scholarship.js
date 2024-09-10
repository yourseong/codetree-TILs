const fs = require("fs");
let score = fs.readFileSync(0).toString().trim().split(" ");

let midterm = Number(score[0]);
let final = Number(score[1]);

if (midterm >= 90 && final >= 90) {
    if (final >= 95) {
        console.log(100000)
    } else if (final >= 90) {
        console.log(50000)
    } 
} else {
    console.log(0)
}