// 내 풀이
const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().split(" "));
let star = "";
for (let i = 1; i <= n; i++) {
  star += "*";
  console.log(star);
}

// 강사님 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0]);

let result = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
