// 내 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let arr = [];
count = 0;
for (let i = 0; i < 9; i++) {
  arr.push(Number(input[i]));
}
for (let j = 0; j < 9; j++) {
  if (arr[j] == Math.max(...arr)) count = j + 1;
}
console.log(Math.max(...arr));
console.log(count);

// 강사님 풀이 1
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let maxIndex = 0;
let maxValue = 0;
for (let i = 0; i < 9; i++) {
  // 모든 데이터를 하나씩 확인하며
  let data = Number(input[i]);
  if (maxIndex < data) {
    maxValue = data;
    maxIndex = i;
  }
}

console.log(maxValue);
console.log(maxIndex + 1);

// 강사님 풀이 2
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let data = input.map((x) => Number(x));
let max = Math.max(...data);

console.log(max);
console.log(data.indexOf(max) + 1);
