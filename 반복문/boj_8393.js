// 내 풀이
const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().split(" "));
let num = 0;
for (let i = 1; i <= n; i++) num += i;
console.log(num);

// 등차수열을 이용한 풀이 (참고)
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0]);

// 등차수열의 합 공식
console.log((n * (n + 1)) / 2);
