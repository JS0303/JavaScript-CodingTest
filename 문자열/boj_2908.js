// 내 풀이.. 테스트케이스는 맞는데 틀리다고 나옴...
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

let num1 = input[0].split("").reverse().map(Number);
let num2 = input[1].split("").reverse().map(Number);

num1 = num1[0] * 100 + num1[1] * 10 + num1[2];
num2 = num2[0] * 100 + num2[1] * 10 + num2[2];

console.log(Math.max(num1, num1));

// 강사님 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = input[0].split(" ")[0];
let b = input[0].split(" ")[1];

let newA = a[2] + a[1] + a[0];
let newB = b[2] + b[1] + b[0];

console.log(Math.max(Number(newA), Number(newB)));
