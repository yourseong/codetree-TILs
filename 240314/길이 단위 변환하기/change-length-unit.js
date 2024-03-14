let ft = 30.48; //1피트
let mi = 160934; //1마일 

let a = 9.2; //피트 > cm
let b = 1.3; //마일 > cm

let ft_calc = ft * a;
let mi_calc = mi * b;

let result_1 = ft_calc.toFixed(1);
let result_2 = mi_calc.toFixed(1);

//소수 첫재자리까지 반올림

console.log(`9.2ft = ${result_1}cm`);
console.log(`1.3mi = ${result_2}cm`);