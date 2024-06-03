const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

if (a >= b) {
    console.log(1);
} else {
    console.log(0);
}

if (a > b) {
    console.log(1);
} else {
    console.log(0);
}

if (b >= a) {
    console.log(1);
} else {
    console.log(0);
}

if (b > a) {
    console.log(1);
} else {
    console.log(0);
}

if (a == b) {
    console.log(1);
} else {
    console.log(0);
}

if (a != b) {
    console.log(1);
} else {
    console.log(0);
}

//이렇게 해도 되지만

//이렇게 하는게 더 좋을수도 있음
// console.log(a >= b ? 1 : 0);
// console.log(a > b ? 1 : 0);
// console.log(a <= b ? 1 : 0);
// console.log(a < b ? 1 : 0);
// console.log(a == b ? 1 : 0);
// console.log(a != b ? 1 : 0);