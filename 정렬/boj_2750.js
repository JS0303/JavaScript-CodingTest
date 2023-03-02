// 내 풀이 => 틀렸다고 나옴
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let num = input.slice(1).map(Number).sort();
for (let i = 0; i < input[0]; i++) console.log(num[i]);

// 강사님 풀이 1
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  // 한 줄씩 입력받아 배열에 넣기
  arr.push(Number(input[i]));
}
arr.sort(function (a, b) {
  // 오름차순 정렬 수행
  return a - b;
});

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}
console.log(answer);

// 강사님 풀이 2
function selectionSort(arr) {
  // 선택 정렬 함수
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++)
      if (arr[minIndex] > arr[j]) minIndex = j;
    let temp = arr[i]; // 스와프(swap)
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
selectionSort(arr);
let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}
console.log(answer);
