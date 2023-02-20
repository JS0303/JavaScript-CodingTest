// 내 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);
let lst = input[1].split(" ");
let sortList = [];
for (let index = 0; index < num; index++) {
  sortList.push(Number(lst[index]));
}
console.log(Math.min(...sortList), Math.max(...sortList));

// 강사님 풀이 1
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);
let arr = input[1].split(" ");

// 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.
let minValue = 1000001; // 일단 큰 수로 초기화
let maxValue = -1000001; // 일단 작은 수로 초기화
for (let i = 0; i < n; i++) {
  if (minValue > arr[i]) {
    minValue = arr[i];
  }
  if (maxValue < arr[i]) {
    maxValue = arr[i];
  }
}
console.log(minValue, maxValue);

// 강사님 풀이 2
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

let n = Number(input[0]);
let data = input[1].split(" ").map((x) => Number(x));

let minValue = data.reduce((a, b) => Math.min(a, b));
let maxValue = data.reduce((a, b) => Math.max(a, b));

console.log(minValue + " " + maxValue);
