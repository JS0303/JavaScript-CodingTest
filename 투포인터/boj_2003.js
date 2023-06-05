// 강사님 풀이
let input = require("fs").readFileSync("/dev/stdin");
input = input.toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let data = input[1].split(" ").map(Number);

let cnt = 0;
let intervalSum = 0;
let end = 0;

// start를 차례대로 증가시키며 반복
for (let start = 0; start < n; start++) {
  // end를 가능한 만큼 이동시키기
  while (intervalSum < m && end < n) {
    intervalSum += data[end];
    end += 1;
  }
  // 부분합이 m일 때 카운트 증가
  if (intervalSum == m) cnt += 1;
  intervalSum -= data[start];
}
console.log(cnt);
