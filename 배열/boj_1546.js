// 내 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let subject = Number(input[0]);
let scores = input[1].toString().split(" ");
let max = Math.max(...scores);
let newScore = [];
let result = 0;
for (let i = 0; i < subject; i++) {
  newScore.push((scores[i] / max) * 100);
}
for (let j = 0; j < subject; j++) {
  result += newScore[j];
}
console.log(result / subject);

// 강사님 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let scores = input[1].split(" ").map(Number);

let maxValue = scores.reduce((a, b) => Math.max(a, b));
let updated = [];
for (let i = 0; i < n; i++) {
  // 수정된 원소 하나씩 저장
  updated.push((scores[i] / maxValue) * 100);
}

// 배열에 포함된 원소의 평균 출력
console.log(updated.reduce((a, b) => a + b) / n);
