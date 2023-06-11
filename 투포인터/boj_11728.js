// 강사님 풀이
let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

let result = [];
let i = 0;
let j = 0;

while (i < n && j < m) {
  // 배열 A와 배열 B에서 차례대로 더 작은 원소 넣기
  if (a[i] < b[j]) {
    // 배열 A의 원소가 더 작다면
    result.push(a[i]);
    i += 1;
  } else {
    // 배열 B의 원소가 더 작다면
    result.push(b[j]);
    j += 1;
  }
}

// 각 배열에 남아있는 원소들을 순차적으로 삽입
while (i < n) {
  result.push(a[i]);
  i += 1;
}
while (j < m) {
  result.push(b[j]);
  j += 1;
}

// 결과 배열의 각 원소를 공백 기준으로 출력
console.log(result.join(" "));
