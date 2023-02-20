// 강사님 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let testCase = Number(input[0]);
let answer = "";

for (let t = 1; t <= testCase; t++) {
  let data = input[t].split(" ");
  let a = Number(data[0]);
  let b = Number(data[1]);
  answer += a + b + "\n";
}

console.log(answer);
