// 내 풀이
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let a = parseInt(input[0]);
// let b = parseInt(input[1]);
// let three = (b%10)*a
// let four = parseInt((b%100)/10)*a
// let five = parseInt(b/100)*a
// console.log(three)
// console.log(four)
// console.log(five)
// console.log(three + 10*four + 100*five)

// 강사님 풀이
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = input[0];
let b = input[1];

x_1 = b[2]; // 일의 자리
x_2 = b[1]; // 십의 자리
x_3 = b[0]; // 백의 자리

console.log(Number(a) * Number(x_1));
console.log(Number(a) * Number(x_2));
console.log(Number(a) * Number(x_3));
console.log(Number(a) * Number(b));
