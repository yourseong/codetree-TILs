let [a, b, c] = [5, 6, 7];

a = c;
b = c;

//a = b = c; 이렇게 하면 a에 먼저 b 할당 > a = 6, b에 c 할당 > b = 7 > 따라서 a도 7이 되므로 7 7 7 출력. 

console.log(a, b, c);