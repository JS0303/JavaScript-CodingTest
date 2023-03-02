// 내 풀이 => 틀렸다고 나옴
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0][0]);
let k = Number(input[0][2]) - 1;
let arr = input[1].split(" ").map(Number);

arr.sort(function (a, b) {
  return a - b;
});
console.log(arr[k]);

// 강사님 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

// 오름차순 정렬 수행
arr.sort(function (a, b) {
  return a - b;
});

// 앞에서부터 K 번째 수를 출력
console.log(arr[k - 1]);
