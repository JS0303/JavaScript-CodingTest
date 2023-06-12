// 강사님 풀이
let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

let [n, s] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let result = 1e9;
let start = 0; // 시작점(start)
let end = 0; // 끝점(end)
let summary = arr[0]; // 구간 합

// i가 고정된 상태에서 j를 최대한 오른쪽으로 이동시키는 구현 방식
while (true) {
  // 현재 합이 s보다 작다면, 합을 키우기 위해 end를 증가
  while (end < n - 1 && summary < s) {
    end += 1;
    summary += arr[end];
  }
  if (summary >= s) {
    // 현재 합이 s 이상인 경우
    result = Math.min(result, end - start + 1); // 최소 길이 계산
  }
  summary -= arr[start];
  start += 1;
  // [유의] 탈출 조건에 유의
  if (start >= n) break;
}
if (result == 1e9) result = 0;
console.log(result);
