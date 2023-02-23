// 내 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let numbers = input[1].split("").map(Number);
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += numbers[i];
}
console.log(sum);

// 강사님 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let string = input[1];

let answer = 0;
// 문자열에 포함된 문자를 하나씩 확인하며
for (let x of string) {
  // 모든 숫자를 더하기
  answer += Number(x);
}

console.log(answer);
