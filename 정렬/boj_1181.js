// 강사님 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]); // 단어의 개수 (N)와 전체 문자열 입력
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}
// 중복된 원소를 제거하기 위해 집합(set)으로 변환한 뒤에 배열로 되돌리기
arr = [...new Set(arr)];

arr.sort((a, b) => {
  // 길이가 짧은게 우선
  if (a.length != b.length) return a.length - b.length;
  else {
    // 길이가 같으면 사전 순으로 정렬
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
});

for (let x of arr) {
  // 정렬된 결과를 한 줄에 하나씩 출력
  console.log(x);
}
