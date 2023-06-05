// 강사님 풀이
let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

let n = Number(input[0]); // 원소의 개수(N)
let arr = input[1].split(" ").map(Number); // 전체 원소 입력
let x = input[2]; // X 입력

arr.sort((a, b) => a - b); // 오름차순 정렬

// [현재 구현] start가 고정된 상태에서 end를 최대한 왼쪽으로 이동시키는 구현
let result = 0;
let start = 0; // 시작점(start)
let end = n - 1; // 끝점(end)
while (true) {
  // 현재 합이 x보다 크다면, 합을 줄이기 위해 end를 감소
  while (end > 0 && arr[start] + arr[end] > x) {
    end -= 1;
  }
  if (arr[start] + arr[end] == x) {
    // 현재 합이 x인 경우
    result += 1; // 카운트
    end -= 1; // 모든 정수가 다르다는 조건이 있으므로, end를 감소
  }
  start += 1;
  // [유의] 탈출 조건에 유의
  if (start >= end) break; // 서로 다른 2개의 정수를 고르는 [조합] 이므로
}
console.log(result);
